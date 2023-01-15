import { ResumeWorkExp } from './models/resume_work_exp.model';
import { Module } from '@nestjs/common';
import { ResumeWorkExpService } from './resume_work_exp.service';
import { ResumeWorkExpController } from './resume_work_exp.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([ResumeWorkExp]), UsersModule],
  controllers: [ResumeWorkExpController],
  providers: [ResumeWorkExpService]
})
export class ResumeWorkExpModule {}
