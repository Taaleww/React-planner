import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUserRole } from './entities/projectUserRole.entity';
import { ProjectUserRoleService } from './projectUserRole.service';


@Module({
  imports: [TypeOrmModule.forFeature([ProjectUserRole])],
  providers: [ProjectUserRoleService, ProjectUserRoleService]
})
export class ProjectUserRoleModule {}
