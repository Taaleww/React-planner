import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMyprojectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
