import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { userInfo } from 'os';
import { CurrentUser } from 'src/auth/decorators/currentUser.decorator';
import { Project } from 'src/project/entities/project.entity';
import { GqlAuthGuard } from 'src/project/project.service';
import { User } from 'src/user/entities/user.entity';
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
  @UseGuards(GqlAuthGuard)
  addMember(
    @CurrentUser() user: User,
    @Args('addMemberInput') input: CreateProjectUserRoleInput,
  ) {
    console.log("log 1 ", input);
    
    return this.projectUserRoleService.create(user.email,input);
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
