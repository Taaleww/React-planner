import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';


@InputType()
export class CreateEpicInput {
  @Field()
  epicname: string;

  @Field(() => Int)
  taskid: number;

  // @IsDate(}
  @Field({nullable: true})
  startdate?: Date;

  // @IsDate()
  @Field({nullable: true})
  duetdate?: Date;

  // @IsDate()
  @Field({nullable: true})
  completedate?: Date;
  
}

