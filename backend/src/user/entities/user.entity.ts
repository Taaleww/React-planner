import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Assign } from 'src/assign/entities/assign.entity';
import { Project } from 'src/project/entities/project.entity';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import {
  BeforeInsert,
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
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  userId: number;

  @OneToMany(() => ProjectUserRole, (projectUserRole) => projectUserRole.user, { eager: true })
  @Field(() => [ProjectUserRole])
  projectUserRole: ProjectUserRole[];

  @OneToMany(() => Assign, (assign) => assign.user, { eager: true })
  @Field(() => [Assign])
  assign: Assign[];

  @Column() //({unique: true})
  @Field()
  email: string;

  // @BeforeInsert()
  // emailToLowerCase(){
  //   this.email = this.email.toLowerCase();
  // }

  @Column()
  @Field() //({select: false})
  password: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

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
