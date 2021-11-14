import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ) {}

  async create(
    createProjectInput: CreateProjectInput,
  ): Promise<ProjectUserRole[]> {
    const { members, ...toCreateProject } = createProjectInput;

    // let project = await this.projectRepository.findOne({
    //   projectname: toCreateProject.projectname,
    // });

    const newProject = this.projectRepository.create(toCreateProject);

    await this.projectRepository.save(newProject);

    // const member = members.map((email) =>
    //   this.userRepository.findOne({
    //     select: ['userid'],
    //     where: {
    //       email: email,
    //     },
    //   }),
    // );

    const project = await this.projectRepository.findOne({
      where: {
        projectname: toCreateProject.projectname,
      },
      relations: ['projectUserRole'],
    });

    members.map(async (email) => {
      console.log(email);
      const user = await this.userRepository.findOne({
        where: { email: email },
        relations: ['projectUserRole'],
      });
      console.log(user);

      const ProjectUserRoleInput = {
        projectid: project.projectid,
        userid: user.userid,
        role: Role.EMPLOYEE,
      };

      const newProjectUserRole =
        this.projectUserRoleRepository.create(ProjectUserRoleInput);

      user.projectUserRole.push(newProjectUserRole);

      project.projectUserRole.push(newProjectUserRole);

      const temp = await this.projectUserRoleRepository.save(
        newProjectUserRole,
      );
      await this.projectRepository.save(project);
      await this.userRepository.save(user);
      console.log(temp);
    });

    return await this.projectUserRoleRepository.find({
      where: { project: project },
      relations: ['user', 'project'],
    });
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOneOrFail({
      where: { taskid: id },
    });
  }

  async update(
    id: number,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = await this.projectRepository.findOne(id);
    const update = Object.assign(project, updateProjectInput);
    return await this.projectRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.projectRepository.findOne(id);
    await this.projectRepository.delete(id);
    return 'Delete Success';
  }
}
