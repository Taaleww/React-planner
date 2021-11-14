import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  // TODO change to uuid in future
  // @PrimaryGeneratedColumn('uuid')
  // @Field()
  // id: string;
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  userid: number;

  @OneToMany(() => ProjectUserRole, (projectUserRole) => projectUserRole.user, { eager: true })
  @Field(() => [ProjectUserRole])
  projectUserRole: ProjectUserRole[];

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  job: string;

  @Column()
  @Field()
  department: string;

  @Column()
  @Field()
  organization: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}
