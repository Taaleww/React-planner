import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateProjectUserRoleInput } from './dto/create-projectUserRolet.input';
import { UpdateProjectUserRole } from './dto/update-projectUserRolet.input';
import { ProjectUserRole } from './entities/projectUserRole.entity';
import { ProjectUserRoleService } from './projectUserRole.service';


@Resolver(() => ProjectUserRole)
export class project_user_roleResolver {
  constructor(private readonly project_user_roleService: ProjectUserRoleService) {}

  @Mutation(() => ProjectUserRole)
  createproject_user_role(@Args('createproject_user_roleInput') input: CreateProjectUserRoleInput) {
    return this.project_user_roleService.create(input);
  }

  @Query(() => [ProjectUserRole], { name: 'Project_user_roles' })
  findAll() {
    return this.project_user_roleService.findAll();
  }

  @Query(() => ProjectUserRole, { name: 'Project_user_role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.project_user_roleService.findOne(id);
  }

  @Mutation(() => ProjectUserRole)
  updateproject_user_role(@Args('updateproject_user_roleInput') input: UpdateProjectUserRole) {
    return this.project_user_roleService.update(input.id, input);
  }

  @Mutation(() => ProjectUserRole)
  removeproject_user_role(@Args('id', { type: () => Int }) id: number) {
    return this.project_user_roleService.remove(id);
  }
}
