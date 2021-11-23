import { Resolver, Query, Mutation, Args, Int, GqlExecutionContext } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { createParamDecorator, ExecutionContext, Get, UseGuards } from '@nestjs/common';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => [ProjectUserRole])
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {    
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  // Created by Taaleww
  @Query(() => [ProjectUserRole], { name: 'findProjectByUser' })
  findByUser(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findByUser(id);
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
