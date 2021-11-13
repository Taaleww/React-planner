import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssignInput {
    @Field()
    paerson: string;

    @Field(() => Int)
  taskid: number;
  }
