import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-errors';
import { Project } from 'src/project/entities/project.entity';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Assign } from 'src/assign/entities/assign.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(ProjectUserRole)
    private projectUserRoleRepository: Repository<ProjectUserRole>,
    @InjectRepository(Assign)
    private assignRepository: Repository<Assign>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,

  ) {}
  async create(createTaskInput: CreateTaskInput): Promise<Task> {
    let task = await this.taskRepository.findOne({
      taskName: createTaskInput.taskName,
    });
    if (task) {
      throw new ForbiddenError('Task already existed.');
    }

    const { userId, ...toCreateTask } = createTaskInput;

    const newTask = this.taskRepository.create(toCreateTask);
    const savedTask = await this.taskRepository.save(newTask);
    task = await this.taskRepository.findOne({
      where: { taskId: savedTask.taskId },
      relations: ['assign','project'],
    });
    const project = await this.projectRepository.findOne(createTaskInput.projectId)
    project.task.push(task);

    await Promise.all(userId.map(async (user) => {
      const userInProject = await this.projectUserRoleRepository.findOne({
        where: { project: createTaskInput.projectId, user: user },
        relations: ['project', 'user'],
      });
      if (!userInProject) {
        throw new ForbiddenError('Not have this user in project');
      }

      const newAssign = this.assignRepository.create({
        task: savedTask,
        user: userInProject,
      });

      const userInTask = await this.userRepository.findOne(user, {
        relations: ['assign'],
      });
      userInTask.assign.push(newAssign);
      task.assign.push(newAssign);

      await this.assignRepository.save(newAssign);
      await this.taskRepository.save(task);
      await this.userRepository.save(userInTask);
    }));
    return savedTask;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOneOrFail({
      where: { taskId: id },
    });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    const update = Object.assign(task, updateTaskInput);
    return await this.taskRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.taskRepository.findOne(id);
    await this.taskRepository.delete(id);
    return 'Delete Success';
  }
}
