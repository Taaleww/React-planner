import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { Status } from '../entities/task.entity';

@InputType()
export class CreateTaskInput {
  @Field(() => Int)
  projectId:number;

  @Field(() => [Int])
  userId: number[];

  @Field()
  taskName: string;

  @Field(() => Status)
  status: Status;
  
  // @IsDate(}
  @Field({nullable: true})
  startDate?: Date;

  // @IsDate()
  @Field({nullable: true})
  dueDate?: Date;

  // @IsDate()
  @Field({nullable: true})
  completeDate?: Date;

  @Field({nullable: true})
  description?: string;

  
}



