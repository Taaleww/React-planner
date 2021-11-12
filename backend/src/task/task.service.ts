import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskInput: CreateTaskInput): Promise<Task> {
    const task = await this.taskRepository.findOne({
      taskname: createTaskInput.taskname,
    });
    const newTask = this.taskRepository.create(createTaskInput);
    return await this.taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOneOrFail({
      where: { taskid: id },
    });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    const update = Object.assign(task, updateTaskInput);
    return await this.taskRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.taskRepository.findOne(id);
    await this.taskRepository.delete(id)
    return 'Delete Success';
  }
}
