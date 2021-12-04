import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from 'src/projectUserRole/entities/projectUserRole.entity';

@InputType()
export class CreateProjectInput {
  @Field()
  projectName: string;

  @Field(() => Int)
  projectStatusId: number;

  // @Field(() => projectStatus)
  // status: projectStatus;

  @Field(() => Int , {nullable : true})
  ownerId?: number;

  @Field()
  description: string;

  // @IsDate(}
  @Field()
  startDate: Date;

  // @IsDate()
  @Field()
  dueDate: Date;

  // @IsDate()
  @Field({ nullable: true })
  completeDate?: Date;

  @Field(() => [String])
  members: string[];
}
