import { ResumeHard } from './models/resume_hard.model';
import { Module } from '@nestjs/common';
import { ResumeHardService } from './resume_hard.service';
import { ResumeHardController } from './resume_hard.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ResumeHard])],
  controllers: [ResumeHardController],
  providers: [ResumeHardService]
})
export class ResumeHardModule {}
