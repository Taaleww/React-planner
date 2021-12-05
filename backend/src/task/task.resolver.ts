import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/project/project.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task)
  @UseGuards(GqlAuthGuard)
  createTask(
    @CurrentUser() user : User,
    @Args('createTaskInput') createTaskInput: CreateTaskInput) : Promise<Task> {
    return this.taskService.create(
      user.email,
      createTaskInput);
  }

  @Query(() => [Task], { name: 'tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.taskService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => String)
  removeTask(@Args('id', { type: () => Int }) id: number) {
    return this.taskService.remove(id);
  }
}
