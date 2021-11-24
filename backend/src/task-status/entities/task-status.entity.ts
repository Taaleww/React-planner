import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/task/entities/task.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class TaskStatus {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  taskStatusId: number;

  @Column()
  @Field()
  taskStatus: string;

  @ManyToOne(() => Task, (task) => task.taskStatusId,)
  @Field(() => Task)
  task: Task;
}
