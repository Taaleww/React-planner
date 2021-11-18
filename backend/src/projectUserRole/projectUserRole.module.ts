import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUserRole } from './entities/projectUserRole.entity';
import { projectUserRoleResvoler } from './projectUserRole.resolver';
import { ProjectUserRoleService } from './projectUserRole.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectUserRole])],
  providers: [projectUserRoleResvoler, ProjectUserRoleService],
  exports: [ProjectUserRoleService],
})
export class ProjectUserRoleModule {}
