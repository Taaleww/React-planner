import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '../entities/projectUserRole.entity';


@InputType()
export class CreateProjectUserRoleInput {
  @Field()
  userid: number;

  @Field()
  projectid: number;

  @Field(() => Role)
  role: Role;

}
