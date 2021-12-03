import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-express';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProjectUserRoleInput } from './dto/create-projectUserRolet.input';
import { UpdateProjectUserRole } from './dto/update-projectUserRolet.input';
import { ProjectUserRole } from './entities/projectUserRole.entity';

@Injectable()
export class ProjectUserRoleService {
  constructor(
    @InjectRepository(ProjectUserRole)
    private projectUserRoleRepository: Repository<ProjectUserRole>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}
  async create(
    createProjectUserRole: CreateProjectUserRoleInput,
  ): Promise<Project> {
    const { userId, ...toCreate } = createProjectUserRole;

    const project = await this.projectRepository.findOne({
      projectId: toCreate.project,
    });

    if (!project) {
      throw new ForbiddenError('Do not have this project.');
    }

    await Promise.all(
      userId.map(async (user) => {
        const member = await this.userRepository.findOne({
          where: { userId: user },
          relations: ['projectUserRole'],
        });
        if (!member) {
          throw new ForbiddenError('Do not have this user.');
        }

        const currentUser = await this.projectUserRoleRepository.findOne({
          where: { user: user, project: project },
        });

        if (currentUser) {
          throw new ForbiddenError('Already have this user.');
        }

        const newMember = this.projectUserRoleRepository.create({
          user: member,
          project: project,
        });

        await this.projectUserRoleRepository.save(newMember);
      }),
    );

    return project;
  }

  async findAll(): Promise<ProjectUserRole[]> {
    return await this.projectUserRoleRepository.find({
      relations: ['project', 'user'],
    });
  }

  async findOne(id: number): Promise<ProjectUserRole> {
    return await this.projectUserRoleRepository.findOneOrFail({
      where: { projectUserRoleid: id },
    });
  }

  async findMember(id: number): Promise<ProjectUserRole[]> {
    const member = await this.projectUserRoleRepository.find({
      where: { project: id },
      relations: ['user', 'project'],
    });
    return member;
  }

  async update(
    id: number,
    updateProject_user_roleInput: UpdateProjectUserRole,
  ): Promise<ProjectUserRole> {
    const project_user_role = await this.projectUserRoleRepository.findOne(id);
    const update = Object.assign(
      project_user_role,
      updateProject_user_roleInput,
    );
    return await this.projectUserRoleRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const project_user_role = await this.projectUserRoleRepository.findOne(id);
    await this.projectUserRoleRepository.delete(id);
    return 'Delete Success';
  }
}
