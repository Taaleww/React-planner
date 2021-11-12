import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MyprojectModule } from './myproject/myproject.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AssignModule } from './assign/assign.module';
import { EpicModule } from './epic/epic.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import graphql_config from './config/graphql.config';
import typeorm_config from './config/orm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot(graphql_config),
    TypeOrmModule.forRoot(typeorm_config),
    ProjectModule,
    MyprojectModule,
    UserModule,
    TaskModule,
    AssignModule,
    EpicModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
