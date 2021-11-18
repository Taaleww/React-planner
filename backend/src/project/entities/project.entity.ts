import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

registerEnumType(Status, {
  name: 'projectStatus',
});

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectid: number;

  @Column()
  @Field()
  projectname: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  @Field(() => Status)
  role: Status;

  @OneToMany(() => Task, (task) => task.project, { eager: true })
  @Field(() => [Task])
  task: Task[];

  @OneToMany(
    () => ProjectUserRole,
    (projectUserRole) => projectUserRole.project,
    { eager: true },
  )
  @Field(() => [ProjectUserRole])
  projectUserRole: ProjectUserRole[];

  @Column()
  @Field()
  description: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  startdate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  duedate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  completedate?: Date;
  
}
