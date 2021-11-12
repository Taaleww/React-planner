import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Epic } from 'src/epic/entities/epic.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectid: number;

  @Column()
  @Field()
  projectname: string;

  // @Column()
  // // @OneToMany(() => ProjectUserRole, (project_user_role) => project_user_role.project, { eager: true })
  // // @Field(() => [ProjectUserRole])
  // // myproject: ProjectUserRole[];
  // @Field()
  // projectUserRole: string;

  @Column()
  // @OneToMany(() => Epic, (epic) => epic.project, { eager: true })
  // @Field(() => [Epic])
  // epic: Epic[];
  @Field()
  epicid: string;

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

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
  
}


