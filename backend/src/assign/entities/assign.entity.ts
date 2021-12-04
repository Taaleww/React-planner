import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class Assign {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => Task, (task) => task.assign ,{ onDelete: 'CASCADE'})
  @Field(() => Task)
  task: Task;

  @ManyToOne(() => User, (user) => user.assign,{ onDelete: 'CASCADE'})
  @Field(() => User)
  user: User;

  // @ManyToOne(() => ProjectUserRole, (projectUserRole) => projectUserRole.assign,{ onDelete: 'CASCADE'})
  // @Field(() => ProjectUserRole)
  // userInProject: ProjectUserRole;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}
