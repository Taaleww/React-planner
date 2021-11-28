import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";


@InputType()
class loginInput{
    @IsEmail()
    @Field()
    readonly email?: string;

    @IsNotEmpty()
    @Field()
    readonly password?: string;
}
export default loginInput;