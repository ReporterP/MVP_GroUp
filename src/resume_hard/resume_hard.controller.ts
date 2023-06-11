import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeHardService } from './resume_hard.service';
import { CreateResumeHardDto } from './dto/create-resume_hard.dto';

@Controller('api/resume-hard')
export class ResumeHardController {
  constructor(private readonly resumeHardService: ResumeHardService) {}

  @Post('user/:user_id')
  addNewResumeHard(@Param('user_id') user_id: string, @Body() createResumeHardDto: Array<CreateResumeHardDto>) {
    return this.resumeHardService.addNewResumeHard(+user_id, createResumeHardDto);
  }

  @Get('user/:user_id')
  findHardUser(@Param('user_id') user_id: string) {
    return this.resumeHardService.findHardUser(+user_id);
  }
}
