import { Module } from '@nestjs/common';
import { EpicService } from './epic.service';
import { EpicResolver } from './epic.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Epic } from './entities/epic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Epic])],
  providers: [EpicResolver, EpicService]
})
export class EpicModule {}
