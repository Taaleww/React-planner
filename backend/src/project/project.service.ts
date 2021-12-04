import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-errors';
import { ProjectStatus } from 'src/project-status/entities/project-status.entity';
import {
  ProjectUserRole,
  Role,
} from 'src/projectUserRole/entities/projectUserRole.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(ProjectUserRole)
    private projectUserRoleRepository: Repository<ProjectUserRole>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ProjectStatus)
    private projectStatusRepository: Repository<ProjectStatus>,
  ) {}

  async create(
    createProjectInput: CreateProjectInput,
  ): Promise<ProjectUserRole> {
    const alreadyProject = await this.projectRepository.findOne({
      where: {
        projectName: createProjectInput.projectName,
      },
    });

    if (alreadyProject) {
      throw new ForbiddenError('Already has this project');
    }

    const newProject = this.projectRepository.create(createProjectInput);

    const status = await this.projectStatusRepository.findOne({
      where: { projectStatusId: createProjectInput.projectStatusId },
      relations: ['project'],
    });

    if (!status) {
      throw new ForbiddenError('Not have this status in project');
    }

    //Relation to status
    status.project.push(newProject);
    await this.projectRepository.save(newProject);

    const project = await this.projectRepository.findOne({
      where: { projectId:newProject.projectId},
      relations: ['projectStatus','projectUserRole']
    })

    await Promise.all(
      createProjectInput.members.map(async (userId) => {
        const user = await this.userRepository.findOne({
          where: { userId: userId },
          relations: ['projectUserRole'],
        });
        if (!userId) {
          throw new ForbiddenError('Not have this user');
        }

        const newProjectUserRole = this.projectUserRoleRepository.create({
          project: project,
          user: user,
          role: Role.EMPLOYEE,
        });

        console.log(newProject);

        user.projectUserRole.push(newProjectUserRole);
        project.projectUserRole.push(newProjectUserRole);

        await this.projectUserRoleRepository.save(newProjectUserRole);
        await this.userRepository.save(user);
        await this.projectRepository.save(project);
      }),
    );
    await this.projectRepository.save(newProject);
    await this.projectStatusRepository.save(status);

    return await this.projectUserRoleRepository.findOne({
      where: { project: project },
      relations: ['user', 'project','project.projectStatus'],
    });

    // return newProject;
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: ['projectUserRole', 'projectStatus'],
    });
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOneOrFail({
      where: { projectId: id },
      relations: ['task','task.taskStatusId','task.assign','projectStatus','projectUserRole'],
    });
  }
  async update(
    id: number,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = await this.projectRepository.findOneOrFail({
      where: { projectId: id },
      relations: ['task', 'projectStatus'],
    });

    if(updateProjectInput.projectStatusId){
    project.projectStatus.projectStatusId = updateProjectInput.projectStatusId;
  }

    
    //ถ้าไม่แก้ member ให้แก้ด้วยวิธีธรรมดา
    if (!updateProjectInput.members) {
      const updateProject = Object.assign(project, updateProjectInput);
      return await this.projectRepository.save(updateProject);
      /**
       * แยก member กับตัวอื่น
       * หาก member เดิมในโปรเจกต์
       * เทียบเอาคนที่ไม่ได้ถูกส่งมาออก
       */
    } else {
      const { members, ...restInput } = updateProjectInput;
      
      const updateProject = Object.assign(project, restInput);

      const allMember = await this.projectUserRoleRepository.find({
        where: {
          project: id,
        },
        relations: ['user', 'project'],
      });
      
      await Promise.all(
        allMember.map(async (member) => {
          if (!members.includes(member.user.userId.toString())) {
            console.log('Delete member ' + member.user.userId);
            await this.projectUserRoleRepository.delete(
              member.projectUserRoleid,
              );
            }
          }),
          );
      return await this.projectRepository.save(updateProject);
    }
    // return this.projectRepository.findOne({
    //   where :{ projectId:project},
    //   relations:['projectUserRole','projectStatsus']
    // });
  }

  async remove(id: number): Promise<string> {
    const task = await this.projectRepository.findOne(id);
    await this.projectRepository.delete(id);
    return 'Delete Success';
  }
}

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
