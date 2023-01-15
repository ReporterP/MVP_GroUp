import { ResumeSoft } from './models/resume_soft.model';
import { Module } from '@nestjs/common';
import { ResumeSoftService } from './resume_soft.service';
import { ResumeSoftController } from './resume_soft.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([ResumeSoft]), UsersModule],
  controllers: [ResumeSoftController],
  providers: [ResumeSoftService]
})
export class ResumeSoftModule {}
