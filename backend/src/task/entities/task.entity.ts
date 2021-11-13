import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Assign } from 'src/assign/entities/assign.entity';
import { Project } from 'src/project/entities/project.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  TODO = 'todo',
  INPROGRESS = 'INPROGESS',
  DONE = 'DONE',
}

registerEnumType(Status, {
  name: 'Status',
});
@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  taskid: number;

  @ManyToOne(() => Project, (project) => project.task)
  @Field(() => Project)
  project: Project;

  @Column()
  @Field()
  taskname: string;

  @OneToMany(() => Assign, (assign) => assign.task, { eager: true })
  @Field(() => [Assign])
  assign: Assign[];

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  @Field(() => Status)
  role: Status;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  startdate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  duedate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  completedate?: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field()
  reporter: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}
