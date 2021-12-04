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
import { TaskStatus } from 'src/task-status/entities/task-status.entity';

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
    @InjectRepository(TaskStatus)
    private taskStatusRepository: Repository<TaskStatus>,
  ) {}
  // async create(createTaskInput: CreateTaskInput): Promise<Task> {
  //   let task = await this.taskRepository.findOne({
  //     taskName: createTaskInput.taskName,
  //   });
  //   if (task) {
  //     throw new ForbiddenError('Task already existed.');
  //   }

  //   const { userId, ...toCreateTask } = createTaskInput;

  //   const newTask = this.taskRepository.create(toCreateTask);

  //   const savedTask = await this.taskRepository.save(newTask);
  //   task = await this.taskRepository.findOne({
  //     where: { taskId: savedTask.taskId },
  //     relations: ['assign', 'project'],
  //   });
  //   const project = await this.projectRepository.findOne({
  //     where: { projectId: createTaskInput.projectId },
  //     relations: ['task'],
  //   });
  //   // console.log(project);
  //   // console.log(task);

  //   project.task.push(task);
  //   await this.taskRepository.save(task);

  //   await Promise.all(
  //     userId.map(async (user) => {
  //       const userInProject = await this.projectUserRoleRepository.findOne({
  //         where: { project: createTaskInput.projectId, user: user },
  //         relations: ['project', 'user'],
  //       });
  //       if (!userInProject) {
  //         throw new ForbiddenError('Not have this user in project');
  //       }

  //       const newAssign = this.assignRepository.create({
  //         task: savedTask,
  //         user: userInProject,
  //       });

  //       const userInTask = await this.userRepository.findOne(user, {
  //         relations: ['assign'],
  //       });
  //       userInTask.assign.push(newAssign);
  //       task.assign.push(newAssign);

  //       await this.assignRepository.save(newAssign);
  //       await this.userRepository.save(userInTask);
  //     }),
  //   );
  //   return savedTask;
  // }

  async create(createTaskInput: CreateTaskInput): Promise<Task> {
    const alreadyTask = await this.taskRepository.findOne({
      where: { taskName: createTaskInput.taskName },
    });

    if (alreadyTask) {
      throw new ForbiddenError('Task already existed.');
    }

    //create Task
    const newTask = this.taskRepository.create(createTaskInput);

    //Relation to project
    const project = await this.projectRepository.findOne(
      createTaskInput.projectId,
    );

    project.task.push(newTask);

    //Relation to status
    const status = await this.taskStatusRepository.findOne(
      createTaskInput.taskStatus,
    );
    status.task.push(newTask);

    await this.taskRepository.save(newTask);
    await this.projectRepository.save(project);
    await this.taskStatusRepository.save(status);

    const task = await this.taskRepository.findOne(newTask);

    //Relation to user
    await Promise.all(
      createTaskInput.userId.map(async (user) => {
        const member = await this.userRepository.findOne({
          where: { userId: user },
        });

        const newAssign = this.assignRepository.create();

        console.log(task.assign);

        member.assign.push(newAssign);
        task.assign.push(newAssign);

        await this.assignRepository.save(newAssign);
        await this.userRepository.save(member);
        await this.taskRepository.save(task);
      }),
    );

    return newTask;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find({
      relations:['taskStatus']
    });
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOneOrFail({
      where: { taskId: id },
      relations: ['taskStatusId']
    });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    const task = await this.taskRepository.findOneOrFail({
      where: { taskId: id },
      relations: ['project','taskStatusId'],
    });


    if(updateTaskInput.taskStatus){
      task.taskStatusId.taskStatusId = updateTaskInput.taskStatus;
    }
    //ถ้าไม่แก้ member ให้แก้ด้วยวิธีธรรมดา
    if (!updateTaskInput.userId) {
      const updateTask = Object.assign(task, updateTaskInput);
      return await this.taskRepository.save(updateTask);
      /**
       * แยก member กับตัวอื่น
       * หาก member เดิมในโปรเจกต์
       * เทียบเอาคนที่ไม่ได้ถูกส่งมาออก
       */
    } else {
      const { userId, ...restInput } = updateTaskInput;

      const updateTask = Object.assign(task, restInput);

      const allMember = await this.assignRepository.find({
        where: {
          task: id,
        },
        relations: ['task', 'projectUserRole'],
      });

      await Promise.all(
        allMember.map(async (member) => {
          if (!userId) {
            console.log('Delete member ' + member.user.userId);
            await this.assignRepository.delete(member.id);
          }
        }),
      );
      await this.taskRepository.save(updateTask);

      return await this.taskRepository.findOne({
        where: { taskId:updateTask.id},
        relations:['project','assign','taskStatus']
      })

    }
  }

  async remove(id: number): Promise<string> {
    const task = await this.taskRepository.findOne(id);
    await this.taskRepository.delete(id);
    return 'Delete Success';
  }
}
