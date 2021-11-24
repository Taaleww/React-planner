import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskStatusInput {
  @Field()
  taskStatus: string;

}
