import { Module } from '@nestjs/common';
import { MyprojectService } from './myproject.service';
import { MyprojectResolver } from './myproject.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Myproject } from './entities/myproject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Myproject])],
  providers: [MyprojectResolver, MyprojectService]
})
export class MyprojectModule {}
