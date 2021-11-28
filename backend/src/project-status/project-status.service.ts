import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-express';
import { Repository } from 'typeorm';
import { CreateProjectStatusInput } from './dto/create-project-status.input';
import { UpdateProjectStatusInput } from './dto/update-project-status.input';
import { ProjectStatus } from './entities/project-status.entity';

@Injectable()
export class ProjectStatusService {
  constructor(
    @InjectRepository(ProjectStatus)
    private projectStatusRepository: Repository<ProjectStatus>,
  ){}
  async create(createProjectStatusInput: CreateProjectStatusInput,
    ): Promise<ProjectStatus> {
      const status = await this.projectStatusRepository.findOne({                                           
        projectStatus: createProjectStatusInput.projectStatus,
      });
      if (status) {
        throw new ForbiddenError('Status already existed.');
      }
      const newProjectStatus = this.projectStatusRepository.create(
        createProjectStatusInput,
      );
      return await this.projectStatusRepository.save(newProjectStatus); 
  }

  async findAll(): Promise<ProjectStatus[]> {
    return await this.projectStatusRepository.find();
  }

  async findOne(id: number): Promise<ProjectStatus> {
    return await this.projectStatusRepository.findOne({
      where: { projectStatusId: id },
    });
  }

  async update(id: number, updateProjetStatusInput: UpdateProjectStatusInput): Promise<ProjectStatus> {
    const project = await this.projectStatusRepository.findOne(id);
    const update = Object.assign(project, updateProjetStatusInput);
    return await this.projectStatusRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.projectStatusRepository.findOne(id);
    await this.projectStatusRepository.delete(id);
    return 'Delete Success';
  }
}
