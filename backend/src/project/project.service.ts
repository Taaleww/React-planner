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
  ): Promise<ProjectUserRole[]> {
    const project = await this.projectRepository.findOne({
      where: {
        projectName: createProjectInput.projectName,
      },
    });

    if (!project) {
      throw new ForbiddenError('Not have this project');
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

        user.projectUserRole.push(newProjectUserRole);
        project.projectUserRole.push(newProjectUserRole);

        await this.projectUserRoleRepository.save(newProjectUserRole);
        await this.userRepository.save(user);
        await this.projectRepository.save(project);
      }),
    );
    await this.projectRepository.save(newProject);
    await this.projectStatusRepository.save(status);

    return await this.projectUserRoleRepository.find({
      where: { project: project },
      relations: ['user', 'project'],
    });

    // return newProject;
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: ['projectUserRole', 'projectStatus'],
    });
  }

  async findByUser(id: number): Promise<ProjectUserRole[]> {
    const project = await this.projectUserRoleRepository.find({
      where: { user: id },
      relations: ['project', 'user'],
    });

    return project;
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOneOrFail({
      where: { projectId: id },
      relations: ['task'],
    });
  }

  // async update(
  //   id: number,
  //   updateProjectInput: UpdateProjectInput,
  // ): Promise<Project> {
  //   const { members, ...toUpdate } = updateProjectInput;

  //   const project = await this.projectRepository.findOne(id);
  //   const update = Object.assign(project, toUpdate);

  //   const allUser = await this.projectUserRoleRepository.find({
  //     where:{ project:id},
  //     relations:['project']
  //   })

  //   if (members) {
  //     await Promise.all(
  //       allUser.map(async() => {
  //         const user = await this.projectUserRoleRepository.findOne({
  //           where: {project: project },
  //           relations: ['project'],
  //         });
  //         members.map(async (newMember) => {
  //           const updateUser = await this.projectUserRoleRepository.findOne({
  //             where: { user:newMember, project : project},
  //             relations:['user', 'project']
  //           })

  //           if (user.user != updateUser.user) {
  //             console.log("Kuy");

  //             await this.projectUserRoleRepository.delete(user.projectUserRoleid);
  //           }
  //         })
  //         // const userInProject = await this.projectUserRoleRepository.findOne({
  //         //   where: { project: project },
  //         //   relations: ['project'],
  //         // });

  //       }),
  //     );
  //   }

  //    return await this.projectRepository.save(update);

  // }

  async update(
    id: number,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = await this.projectRepository.findOneOrFail({
      where: { projectId: id },
      relations: ['task'],
    });

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
  }

  async remove(id: number): Promise<number> {
    const task = await this.projectRepository.findOne(id);
    const deleted = await this.projectRepository.delete(id);
    return deleted.affected;
  }
}

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
function updateProject(updateProject: any): Project | PromiseLike<Project> {
  throw new Error('Function not implemented.');
}
