import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MyprojectService } from './myproject.service';
import { Myproject } from './entities/myproject.entity';
import { CreateMyprojectInput } from './dto/create-myproject.input';
import { UpdateMyprojectInput } from './dto/update-myproject.input';

@Resolver(() => Myproject)
export class MyprojectResolver {
  constructor(private readonly myprojectService: MyprojectService) {}

  @Mutation(() => Myproject)
  createMyproject(@Args('createMyprojectInput') createMyprojectInput: CreateMyprojectInput) {
    return this.myprojectService.create(createMyprojectInput);
  }

  @Query(() => [Myproject], { name: 'myproject' })
  findAll() {
    return this.myprojectService.findAll();
  }

  @Query(() => Myproject, { name: 'myproject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.myprojectService.findOne(id);
  }

  @Mutation(() => Myproject)
  updateMyproject(@Args('updateMyprojectInput') updateMyprojectInput: UpdateMyprojectInput) {
    return this.myprojectService.update(updateMyprojectInput.id, updateMyprojectInput);
  }

  @Mutation(() => Myproject)
  removeMyproject(@Args('id', { type: () => Int }) id: number) {
    return this.myprojectService.remove(id);
  }
}
