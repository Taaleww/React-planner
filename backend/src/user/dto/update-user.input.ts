import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;

  @Field()
  oldPassword: string;
  
  @Field()
  job: string;

  @Field()
  department: string;

  @Field()
  organization: string;

  @Field()
  address: string;

  @Field()
  image: string;
}
