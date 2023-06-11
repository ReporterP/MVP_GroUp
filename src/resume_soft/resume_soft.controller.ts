import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeSoftService } from './resume_soft.service';
import { CreateResumeSoftDto } from './dto/create-resume_soft.dto';
import { UpdateResumeSoftDto } from './dto/update-resume_soft.dto';

@Controller('api/resume-soft')
export class ResumeSoftController {
  constructor(private readonly resumeSoftService: ResumeSoftService) {}

  @Post('user/:user_id')
  addNewResumeHard(@Param('user_id') user_id: string, @Body() createResumeHardDto: Array<CreateResumeSoftDto>) {
    return this.resumeSoftService.addNewResumeSoft(+user_id, createResumeHardDto);
  }

  @Get('user/:user_id')
  findHardUser(@Param('user_id') user_id: string) {
    return this.resumeSoftService.findSoftUser(+user_id);
  }
}
