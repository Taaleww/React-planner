import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ProjectStatus } from 'src/project-status/entities/project-status.entity';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum projectStatus {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

registerEnumType(projectStatus, {
  name: 'projectStatus',
});

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectId: number;

  @Column()
  @Field()
  projectName: string;

  @Column()
  @Field(() => Int)
  ownerid:number;

  @OneToMany(() => ProjectStatus, (projectStatus) => projectStatus.project, { eager: true })
  @Field(() => [ProjectStatus])
  projectStatusId: ProjectStatus[];

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

  @Column({ type: 'date'})
  @Field()
  startDate: Date;

  @Column({ type: 'date'})
  @Field()
  dueDate: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  completeDate?: Date;
  
  
}


