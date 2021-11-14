import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '../entities/projectUserRole.entity';

@InputType()
export class CreateProjectUserRoleInput {
  @Field(() => Role)
  role: Role;
}
