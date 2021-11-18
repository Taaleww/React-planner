import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { Status } from '../entities/task.entity';

@InputType()
export class CreateTaskInput {
  @Field(() => Int)
  projectid:number;

  @Field(() => [Int])
  userid: number[];

  @Field()
  taskname: string;

  @Field(() => Status)
  status: Status;
  
  // @IsDate(}
  @Field({nullable: true})
  startdate?: Date;

  // @IsDate()
  @Field({nullable: true})
  duetdate?: Date;

  // @IsDate()
  @Field({nullable: true})
  completedate?: Date;

  @Field({nullable: true})
  description?: string;

  
}



