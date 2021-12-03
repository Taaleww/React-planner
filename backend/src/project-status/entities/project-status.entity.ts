import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class ProjectStatus {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectStatusId: number;

  @Column()
  @Field()
  projectStatus: string;

  // @ManyToOne(() => Project, (project) => project.projectStatus,)
  // @Field(() => Project)
  // project: Project;

  @OneToMany(() => Project, (project) => project.projectStatus, { eager: true })
  @Field(() => Project)
  project: Project[];
}
