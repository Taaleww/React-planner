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

  @Column()
  @Field()
  epicname: string;

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

