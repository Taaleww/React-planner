import { CreateMyprojectInput } from './create-myproject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMyprojectInput extends PartialType(CreateMyprojectInput) {
  @Field(() => Int)
  id: number;
}
