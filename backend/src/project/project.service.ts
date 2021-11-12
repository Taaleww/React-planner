import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}
  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    const project = await this.projectRepository.findOne({
      projectname: createProjectInput.projectname,
    });
    const newProject = this.projectRepository.create(createProjectInput);
    return await this.projectRepository.save(newProject);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOneOrFail({
      where: { taskid: id },
    });
  }

  async update(id: number, updateProjectInput: UpdateProjectInput): Promise<Project> {
    const project = await this.projectRepository.findOne(id);
    const update = Object.assign(project, updateProjectInput);
    return await this.projectRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.projectRepository.findOne(id);
    await this.projectRepository.delete(id)
    return 'Delete Success';
  }
}
