import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-errors';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import { Repository } from 'typeorm';
import { CreateAssignInput } from './dto/create-assign.input';
import { UpdateAssignInput } from './dto/update-assign.input';
import { Assign } from './entities/assign.entity';

@Injectable()
export class AssignService {
  constructor(
    @InjectRepository(Assign)
    private assignRepository: Repository<Assign>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(ProjectUserRole)
    private projectUserRoleRepository: Repository<ProjectUserRole>
  ) {}
  async create(createAssignInput: CreateAssignInput,
    ): Promise<Task> {
      const { userId, ...toCreate } = createAssignInput;

      const task = await this.taskRepository.findOne({
        taskId: toCreate.taskId,
      });
  
      if (!task) {
        throw new ForbiddenError('Do not have this project.');
      }
  
      await Promise.all(
        userId.map(async (user) => {
          const member = await this.projectUserRoleRepository.findOne({
            where: { userId: user },
            relations: ['projectUserRole' , 'task'],
          });
          if (!member) {
            throw new ForbiddenError('Do not have this user.');
          }
  
          const currentUser = await this.assignRepository.findOne({
            where: { user: userId, task: task },
          });
  
          if (currentUser) {
            throw new ForbiddenError('Already have this user.');
          }
  
          const newMember = this.assignRepository.create({
            user: member,
            task: task,
          });
  
          await this.assignRepository.save(newMember);
        }),
      );
  
      return task;
  }

  async findAll(): Promise<Assign[]> {
    return await this.assignRepository.find({
      relations: ['user', 'task'],
    });
  }

  async findOne(id: number): Promise<Assign> {
    return await this.assignRepository.findOne({
      where: { id: id },
    });
  }

  async update(
    id: number,
    updateAssignInput: UpdateAssignInput,
  ): Promise<Assign> {
    const project = await this.assignRepository.findOne(id);
    const update = Object.assign(project, updateAssignInput);
    return await this.assignRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.assignRepository.findOne(id);
    await this.assignRepository.delete(id);
    return 'Delete Success';
  }
}
