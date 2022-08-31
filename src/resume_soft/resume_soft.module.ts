import { ResumeSoft } from './models/resume_soft.model';
import { Module } from '@nestjs/common';
import { ResumeSoftService } from './resume_soft.service';
import { ResumeSoftController } from './resume_soft.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ResumeSoft])],
  controllers: [ResumeSoftController],
  providers: [ResumeSoftService]
})
export class ResumeSoftModule {}
