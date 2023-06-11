import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeWorkExpService } from './resume_work_exp.service';
import { CreateResumeWorkExpDto } from './dto/create-resume_work_exp.dto';

@Controller('api/resume-work-exp')
export class ResumeWorkExpController {
  constructor(private readonly resumeWorkExpService: ResumeWorkExpService) {}
  @Post('user/:user_id')
  addNewResumeWorkExp(@Param('user_id') user_id: string, @Body() createResumeWorkExpDto: Array<CreateResumeWorkExpDto>) {
    return this.resumeWorkExpService.addNewResumeWorkExp(+user_id, createResumeWorkExpDto);
  }

  @Get('user/:user_id')
  findWorkExpUser(@Param('user_id') user_id: string) {
    return this.resumeWorkExpService.findWorkExpUser(+user_id);
  }
}
