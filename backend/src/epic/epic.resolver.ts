import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EpicService } from './epic.service';
import { Epic } from './entities/epic.entity';
import { CreateEpicInput } from './dto/create-epic.input';
import { UpdateEpicInput } from './dto/update-epic.input';

@Resolver(() => Epic)
export class EpicResolver {
  constructor(private readonly epicService: EpicService) {}

  @Mutation(() => Epic)
  createEpic(@Args('createEpicInput') createEpicInput: CreateEpicInput) {
    return this.epicService.create(createEpicInput);
  }

  @Query(() => [Epic], { name: 'epic' })
  findAll() {
    return this.epicService.findAll();
  }

  @Query(() => Epic, { name: 'epic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.epicService.findOne(id);
  }

  @Mutation(() => Epic)
  updateEpic(@Args('updateEpicInput') updateEpicInput: UpdateEpicInput) {
    return this.epicService.update(updateEpicInput.id, updateEpicInput);
  }

  @Mutation(() => Epic)
  removeEpic(@Args('id', { type: () => Int }) id: number) {
    return this.epicService.remove(id);
  }
}
