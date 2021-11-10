import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectid: number;

  @Column()
  @Field(() => Int)
  taskid: number;

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


