import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssignService } from './assign.service';
import { Assign } from './entities/assign.entity';
import { CreateAssignInput } from './dto/create-assign.input';
import { UpdateAssignInput } from './dto/update-assign.input';

@Resolver(() => Assign)
export class AssignResolver {
  constructor(private readonly assignService: AssignService) {}

  @Mutation(() => Assign)
  createAssign(@Args('createAssignInput') createAssignInput: CreateAssignInput) {
    return this.assignService.create(createAssignInput);
  }

  @Query(() => [Assign], { name: 'assign' })
  findAll() {
    return this.assignService.findAll();
  }

  @Query(() => Assign, { name: 'assign' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assignService.findOne(id);
  }

  @Mutation(() => Assign)
  updateAssign(@Args('updateAssignInput') updateAssignInput: UpdateAssignInput) {
    return this.assignService.update(updateAssignInput.id, updateAssignInput);
  }

  @Mutation(() => Assign)
  removeAssign(@Args('id', { type: () => Int }) id: number) {
    return this.assignService.remove(id);
  }
}
