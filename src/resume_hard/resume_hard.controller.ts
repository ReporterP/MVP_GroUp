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

  @Get()
  findAll() {
    return this.resumeHardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeHardService.findOne(+id);
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
