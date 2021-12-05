import { Resolver, Query, Mutation, Args, Int, GqlExecutionContext, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { createParamDecorator, ExecutionContext, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';
import { User } from 'src/user/entities/user.entity';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => ProjectUserRole)
  @UseGuards(GqlAuthGuard)

  createProject(
    
    @CurrentUser() user: User, 

    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) 
  : Promise<ProjectUserRole>
  {   
    // console.log(user);
    
    return this.projectService.create(user.email,createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  @UseGuards(GqlAuthGuard)

  updateProject(

    @CurrentUser() user: User,

    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ): Promise<Project>{
    return this.projectService.update(

      user.email,
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Int)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }


}
