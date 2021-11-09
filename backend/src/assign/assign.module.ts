import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignResolver } from './assign.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assign } from './entities/assign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assign])],
  providers: [AssignResolver, AssignService]
})
export class AssignModule {}
