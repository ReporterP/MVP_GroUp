import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Controller('api/specialties')
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Post('user/:user_id')
  updateSpecUser(@Param('user_id') user_id: string, @Body() createSpecialtyDto: CreateSpecialtyDto){
    return this.specialtiesService.updateSpecUser(+user_id ,createSpecialtyDto)
  }

  @Get('user/:user_id')
  findSpecUser(@Param('user_id') user_id: string){
    return this.specialtiesService.findSpecUser(+user_id)
  }
}
