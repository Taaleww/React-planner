import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '../entities/project.entity';

@InputType()
export class CreateProjectInput {
  // @Field()
  // projectid: number;

  @Field()
  projectname: string;

  @Field(() => Status)
  status: Status;

  @Field()
  description?: string;

  // @IsDate(}
  @Field({ nullable: true })
  startdate?: Date;

  // @IsDate()
  @Field({ nullable: true })
  duetdate?: Date;

  // @IsDate()
  @Field({ nullable: true })
  completedate?: Date;

  @Field(() => [String])
  members: string[];
}
