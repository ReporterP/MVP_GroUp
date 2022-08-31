import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeSoftService } from './resume_soft.service';
import { CreateResumeSoftDto } from './dto/create-resume_soft.dto';
import { UpdateResumeSoftDto } from './dto/update-resume_soft.dto';

@Controller('resume-soft')
export class ResumeSoftController {
  constructor(private readonly resumeSoftService: ResumeSoftService) {}

  @Post()
  create(@Body() createResumeSoftDto: CreateResumeSoftDto) {
    return this.resumeSoftService.create(createResumeSoftDto);
  }

  @Get()
  findAll() {
    return this.resumeSoftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeSoftService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumeSoftDto: UpdateResumeSoftDto) {
    return this.resumeSoftService.update(+id, updateResumeSoftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeSoftService.remove(+id);
  }
}
