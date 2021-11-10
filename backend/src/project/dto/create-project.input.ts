import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  projectid: string;

  @Field()
  taskid: string;

  @Field()
  description: string;

}
