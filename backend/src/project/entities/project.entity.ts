import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ProjectStatus } from 'src/project-status/entities/project-status.entity';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { Task } from 'src/task/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// export enum projectStatus {
//   INPROGRESS = 'inprogress',
//   DONE = 'done',
//   LATE = 'late'
// }

// registerEnumType(projectStatus, {
//   name: 'projectStatus',
// });

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

  // @OneToMany(() => ProjectStatus, (projectStatus) => projectStatus.project, { eager: true })
  // @Field(() => [ProjectStatus])
  // projectStatus: ProjectStatus[];

  @ManyToOne(() => ProjectStatus, (projectStatus) => projectStatus.project)
  @Field(() => ProjectStatus)
  projectStatus: ProjectStatus;


  // @Column({
  //   type: 'enum',
  //   enum: projectStatus,
  //   default: projectStatus.INPROGRESS,
  // })
  // @Field(() => projectStatus)
  // role: projectStatus;

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

  @Column()
  @Field()
  startDate: Date;

  @Column()
  @Field()
  dueDate: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  completeDate?: Date;
  
  
}


