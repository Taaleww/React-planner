import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/task/entities/task.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class TaskStatus {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  taskStatusId: number;

  @Column()
  @Field()
  taskStatus: string;

  // @ManyToOne(() => Task, (task) => task.taskStatusId,)
  // @Field(() => Task)
  // task: Task;

  @OneToMany(() => Task, (task) => task.taskStatusId, { eager: true })
  @Field(() => [Task])
  task: Task[];
}
