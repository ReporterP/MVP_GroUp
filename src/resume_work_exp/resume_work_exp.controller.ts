import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeWorkExpService } from './resume_work_exp.service';
import { CreateResumeWorkExpDto } from './dto/create-resume_work_exp.dto';
import { UpdateResumeWorkExpDto } from './dto/update-resume_work_exp.dto';

@Controller('resume-work-exp')
export class ResumeWorkExpController {
  constructor(private readonly resumeWorkExpService: ResumeWorkExpService) {}

  @Post()
  create(@Body() createResumeWorkExpDto: CreateResumeWorkExpDto) {
    return this.resumeWorkExpService.create(createResumeWorkExpDto);
  }

  @Get()
  findAll() {
    return this.resumeWorkExpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeWorkExpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumeWorkExpDto: UpdateResumeWorkExpDto) {
    return this.resumeWorkExpService.update(+id, updateResumeWorkExpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeWorkExpService.remove(+id);
  }
}
