import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Test } from './entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestResolver, TestService]
})
export class TestModule {}
