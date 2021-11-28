import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectStatusService } from './project-status.service';
import { ProjectStatus } from './entities/project-status.entity';
import { CreateProjectStatusInput } from './dto/create-project-status.input';
import { UpdateProjectStatusInput } from './dto/update-project-status.input';

@Resolver(() => ProjectStatus)
export class ProjectStatusResolver {
  constructor(private readonly projectStatusService: ProjectStatusService) {}

  @Mutation(() => ProjectStatus)
  createProjectStatus(@Args('createProjectStatusInput') createProjectStatusInput: CreateProjectStatusInput) {
    return this.projectStatusService.create(createProjectStatusInput);
  }

  @Query(() => [ProjectStatus], { name: 'projectStatuses' })
  findAll() {
    return this.projectStatusService.findAll();
  }

  @Query(() => ProjectStatus, { name: 'projectStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectStatusService.findOne(id);
  }

  @Mutation(() => ProjectStatus)
  updateProjectStatus(@Args('updateProjectStatusInput') updateProjectStatusInput: UpdateProjectStatusInput) {
    return this.projectStatusService.update(updateProjectStatusInput.id, updateProjectStatusInput);
  }

  @Mutation(() => ProjectStatus)
  removeProjectStatus(@Args('id', { type: () => Int }) id: number) {
    return this.projectStatusService.remove(id);
  }
}
