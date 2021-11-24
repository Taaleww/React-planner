import { InputType, Int, Field } from '@nestjs/graphql';
import { projectStatus} from '../entities/project.entity';

@InputType()
export class CreateProjectInput {
  @Field()
  projectName: string;

  @Field(() => projectStatus)
  status: projectStatus;

  @Field(() => Int)
  ownerid: number;

  @Field()
  description?: string;

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
