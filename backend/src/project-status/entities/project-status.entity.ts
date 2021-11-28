import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class ProjectStatus {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectStatusId: number;

  @Column()
  @Field()
  projectStatus: string;

  // @ManyToOne(() => Project, (project) => project.projectStatusId,)
  // @Field(() => Project)
  // project: Project;
}




