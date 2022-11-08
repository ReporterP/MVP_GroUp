import { ResumeHard } from './models/resume_hard.model';
import { Module } from '@nestjs/common';
import { ResumeHardService } from './resume_hard.service';
import { ResumeHardController } from './resume_hard.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([ResumeHard]), UsersModule],
  controllers: [ResumeHardController],
  providers: [ResumeHardService]
})
export class ResumeHardModule {}
