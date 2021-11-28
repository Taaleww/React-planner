import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignResolver } from './assign.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assign } from './entities/assign.entity';
import { User } from 'src/user/entities/user.entity';
import { Task } from 'src/task/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assign,User,Task])],
  providers: [AssignResolver, AssignService]
})
export class AssignModule {}
