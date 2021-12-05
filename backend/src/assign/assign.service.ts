import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError } from 'apollo-server-errors';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
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
    // @InjectRepository(ProjectUserRole)
    // private projectUserRoleRepository: Repository<ProjectUserRole>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createAssignInput: CreateAssignInput): Promise<Assign[]> {
    const { userId, ...toCreate } = createAssignInput;

    const task = await this.taskRepository.findOne({
       taskId: toCreate.taskId,
    });

    if (!task) {
      throw new ForbiddenError('Do not have this task.');
    }

    await Promise.all(
      userId.map(async (user) => {
        const member = await this.userRepository.findOne({
          where: { userId: user },
        });

        if (!member) {
          throw new ForbiddenError('Do not have this user.');
        }

        const currentUser = await this.assignRepository.findOne({
          where: { user: member, task: task },
        });

        if (currentUser) {
          throw new ForbiddenError('Already have this user.');
        }

        const newMember = this.assignRepository.create({
          user: member,
          task: task,
        });


        console.log(newMember);
        
        await this.taskRepository.save(task);
        await this.assignRepository.save(newMember);
      }),
    );

    return this.assignRepository.find({
      where:{ task:task},
      relations:['task', 'task.taskStatusId']
    });
  }

  async findAll(): Promise<Assign[]> {
    return await this.assignRepository.find({
      relations: ['user', 'task'],
    });
  }

  async findOne(id: number): Promise<Assign> {
    return await this.assignRepository.findOne({
      where: { id: id },
      relations: ['user', 'task'],
    });
  }

  async findMember(id: Number): Promise<Assign[]> {
    return await this.assignRepository.find({
      where: { task: id },
      relations: ['user', 'task'],
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
