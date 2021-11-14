import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/task/entities/task.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
@ObjectType()
export class Assign {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => Task, (task) => task.assign)
  @Field(() => Task)
  task: Task;

  @Column()
  @Field()
  person: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}
