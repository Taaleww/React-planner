import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;

  @IsAlpha()
  @Field()
  firstname: string;

  @IsAlpha()
  @Field()
  lastname: string;

  @Field()
  job: string;

  @Field()
  departmant: string;

  @Field()
  organization: string;


}
