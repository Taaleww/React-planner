import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';


@InputType()
export class CreateEpicInput {
  @Field()
  epicid: string;

  @Field()
  epictitle: string;

  @Field()
  taskid: string;

  @IsDate()
  @Field()
  startdate: Date;

  @IsDate()
  @Field()
  duedate: Date;
  
}

