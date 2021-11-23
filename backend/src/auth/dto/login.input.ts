import { Field, InputType } from "@nestjs/graphql";


@InputType()
class loginInput{
    @Field()
    readonly email?: string;

    @Field()
    readonly password?: string;
}
export default loginInput;