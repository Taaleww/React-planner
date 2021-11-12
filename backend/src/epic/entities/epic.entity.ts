import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Epic {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  epicid: number;

  @Column()
  @Field(() => Int)
  taskid: number;

  @Column({type: 'date'})
  @Field()
  startdate: Date;

  @Column({type: 'date'})
  @Field()
  duedate: Date;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}

