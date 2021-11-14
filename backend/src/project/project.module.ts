import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Project } from './entities/project.entity';
import { ProjectUserRole } from 'src/projectUserRole/entities/projectUserRole.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectUserRole, User])],
  providers: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
