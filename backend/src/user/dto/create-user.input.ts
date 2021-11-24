import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsEmpty} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field()
  email: string;

  @IsEmpty()
  @Field()
  password: string;

  @IsAlpha()
  @Field()
  firstName: string;

  @IsAlpha()
  @Field()
  lastName: string;

  @IsEmpty()
  @Field()
  job: string;

  @IsEmpty()
  @Field()
  departmant: string;

  @IsEmpty()
  @Field()
  organization: string;


}
