import { InputType, Int, Field } from '@nestjs/graphql';
import { projectStatus} from '../entities/project.entity';

@InputType()
export class CreateProjectInput {
  @Field()
  projectName: string;

  @Field(() => projectStatus)
  status: projectStatus;

  @Field()
  description?: string;

  // @IsDate(}
  @Field({ nullable: true })
  startDate?: Date;

  // @IsDate()
  @Field({ nullable: true })
  dueDate?: Date;

  // @IsDate()
  @Field({ nullable: true })
  completeDate?: Date;

  @Field(() => [String])
  members: string[];
}
