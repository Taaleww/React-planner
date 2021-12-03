import { InputType, Int, Field } from '@nestjs/graphql';
import { TaskStatus } from 'src/task-status/entities/task-status.entity';


@InputType()
export class CreateTaskInput {
  @Field(() => Int)
  projectId:number;

  @Field(() => [Int])
  userId: number[];

  @Field(() => Int)
  taskStatus: number;

  @Field()
  taskName: string;

  @Field(() => Int)
  reporter: number;
  
  // @IsDate(}
  @Field()
  startDate: Date;

  // @IsDate()
  @Field()
  dueDate: Date;

  // @IsDate()
  @Field({nullable: true})
  completeDate?: Date;

  @Field()
  description?: string;

  
}



