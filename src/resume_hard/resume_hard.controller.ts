import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeHardService } from './resume_hard.service';
import { CreateResumeHardDto } from './dto/create-resume_hard.dto';
import { UpdateResumeHardDto } from './dto/update-resume_hard.dto';

@Controller('resume-hard')
export class ResumeHardController {
  constructor(private readonly resumeHardService: ResumeHardService) {}

  @Post()
  create(@Body() createResumeHardDto: CreateResumeHardDto) {
    return this.resumeHardService.create(createResumeHardDto);
  }

  @Post(':user_id')
  addNewResumeHard(@Param('user_id') user_id: string, @Body() createResumeHardDto: CreateResumeHardDto) {
    return this.resumeHardService.addNewResumeHard(+user_id, createResumeHardDto);
  }

  @Get(':user_id')
  findHardUser(@Param('user_id') user_id: string) {
    return this.resumeHardService.findHardUser(+user_id);
  }

  @Get()
  findAll() {
    return this.resumeHardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeHardService.findOne(+id);
  }

  @Patch('user/:user_id')
  updateHardUser(@Param('user_id') user_id: string, @Body() updateResumeHardDto: UpdateResumeHardDto) {
    return this.resumeHardService.updateHardUser(+user_id, updateResumeHardDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumeHardDto: UpdateResumeHardDto) {
    return this.resumeHardService.update(+id, updateResumeHardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeHardService.remove(+id);
  }
}
