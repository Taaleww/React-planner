import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { CreateProjectUserRoleInput } from './dto/create-projectUserRolet.input';
import { UpdateProjectUserRole } from './dto/update-projectUserRolet.input';
import { ProjectUserRole } from './entities/projectUserRole.entity';
import { ProjectUserRoleService } from './projectUserRole.service';

@Resolver(() => ProjectUserRole)
export class projectUserRoleResvoler {
  constructor(
    private readonly projectUserRoleService: ProjectUserRoleService,
  ) {}

  @Mutation(() => Project)
  addMember(
    @Args('addMemberInput') input: CreateProjectUserRoleInput,
  ) {
    return this.projectUserRoleService.create(input);
  }

  @Query(() => [ProjectUserRole], { name: 'projectUserRoles' })
  findAll() {
    return this.projectUserRoleService.findAll();
  }

  @Query(() => ProjectUserRole, { name: 'projectUserRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectUserRoleService.findOne(id);
  }

  @Mutation(() => ProjectUserRole)
  updateproject_user_role(
    @Args('updateproject_user_roleInput') input: UpdateProjectUserRole,
  ) {
    return this.projectUserRoleService.update(input.id, input);
  }

  @Mutation(() => ProjectUserRole)
  removeproject_user_role(@Args('id', { type: () => Int }) id: number) {
    return this.projectUserRoleService.remove(id);
  }

  @Query(() => [ProjectUserRole], { name: 'member' })
  findMember(@Args('id', { type: () => Int }) id: number) {
    return this.projectUserRoleService.findMember(id);
  }

  @Query(() => [ProjectUserRole], { name: 'findProjectByUser' })
  findByUser(@Args('id', { type: () => Int }) id: number) {
    return this.projectUserRoleService.findByUser(id);
  }

 


}
