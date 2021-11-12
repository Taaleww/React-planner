import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  projectid: number;

  @Column()
  @Field()
  projectname: string;

  @Column()
  @Field(() => Int)
  taskid: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  startdate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  duedate?: Date;

  @Column()
  @Field()
  description: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}


