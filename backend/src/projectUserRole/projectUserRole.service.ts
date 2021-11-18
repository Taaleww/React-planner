import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectUserRoleInput } from './dto/create-projectUserRolet.input';
import { UpdateProjectUserRole } from './dto/update-projectUserRolet.input';
import { ProjectUserRole } from './entities/projectUserRole.entity';

@Injectable()
export class ProjectUserRoleService {
  constructor(
    @InjectRepository(ProjectUserRole)
    private projectUserRoleRepository: Repository<ProjectUserRole>,
  ) {}
  async create(
    createProjectUserRole: CreateProjectUserRoleInput,
  ): Promise<ProjectUserRole> {
    const newProject = this.projectUserRoleRepository.create(
      createProjectUserRole,
    );
    return await this.projectUserRoleRepository.save(newProject);
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
