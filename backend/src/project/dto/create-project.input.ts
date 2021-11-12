import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  // @Field()
  // projectid: number;

  @Field()
  projectname: string;

  @Field({nullable: true})
  startdate?: Date;

  @Field({nullable: true})
  duetdate?: Date;

  @Field()
  description?: string;

}
