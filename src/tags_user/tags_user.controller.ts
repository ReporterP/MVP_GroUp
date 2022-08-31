import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsUserService } from './tags_user.service';
import { CreateTagsUserDto } from './dto/create-tags_user.dto';
import { UpdateTagsUserDto } from './dto/update-tags_user.dto';

@Controller('tags-user')
export class TagsUserController {
  constructor(private readonly tagsUserService: TagsUserService) {}

  @Post()
  create(@Body() createTagsUserDto: CreateTagsUserDto) {
    return this.tagsUserService.create(createTagsUserDto);
  }

  @Get()
  findAll() {
    return this.tagsUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagsUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagsUserDto: UpdateTagsUserDto) {
    return this.tagsUserService.update(+id, updateTagsUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagsUserService.remove(+id);
  }
}
