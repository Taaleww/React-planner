import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Test {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  projectid: number;

  @Column()
  @Field()
  projectname: string;

  @Column()
  @Field()
  description: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  startdate?: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  duedate?: Date;

  @Column()
  @Field()
  member: string;

  
}


