import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


export enum Role {
  MANAGER = 'manager',
  EMPLOYEE = 'employee',

}

registerEnumType(Role, {
  name: 'Role',
});

@Entity()
@ObjectType()
export class Myproject {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  myprojectid: number;

  @Column()
  @Field(() => Int)
  userid: number;

  @Column()
  @Field(() => Int)
  projectid: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.EMPLOYEE,
  })
  @Field(() => Role)
  role: Role;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}

