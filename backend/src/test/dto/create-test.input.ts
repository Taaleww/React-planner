import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateTestInput {

  @Field()
  projectname: string;

  @Field()
  description?: string;

   // @IsDate(}
   @Field({nullable: true})
   startdate?: Date;
 
   // @IsDate()
   @Field({nullable: true})
   duetdate?: Date;
 
   @Field()
   member: string;

}
