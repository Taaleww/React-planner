import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestResolver, TestService]
})
export class TestModule {}
