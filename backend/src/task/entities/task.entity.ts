import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Assign } from 'src/assign/entities/assign.entity';
import { Project } from 'src/project/entities/project.entity';
import { TaskStatus } from 'src/task-status/entities/task-status.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum taskStatus {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

registerEnumType(taskStatus, {
  name: 'taskStatus',
});

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  taskId: number;

  // @OneToMany(() => TaskStatus, (taskStatus) => taskStatus.task, { eager: true })
  // @Field(() => [TaskStatus])
  // taskStatusId: TaskStatus[];

  @ManyToOne(() => Project, (project) => project.task)
  @Field(() => Project)
  project: Project;

  @Column({
    type: 'enum',
    enum: taskStatus,
    default: taskStatus.TODO,
  })
  @Field(() => taskStatus)
  status: taskStatus;
  

  @Column()
  @Field()
  taskName: string;

  @OneToMany(() => Assign, (assign) => assign.task, { eager: true })
  @Field(() => [Assign])
  assign: Assign[];

  @Column({ type: 'date'})
  @Field()
  startDate: Date;

  @Column({ type: 'date'})
  @Field()
  dueDate: Date;

  @Column({ type: 'date'})
  @Field()
  completeDate?: Date;

  @Column()
  @Field()
  description?: string;

  @Column()
  @Field()
  reporter: number;

}
