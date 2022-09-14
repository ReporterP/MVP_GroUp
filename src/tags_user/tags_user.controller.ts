import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsUserService } from './tags_user.service';
import { CreateTagsUserDto } from './dto/create-tags_user.dto';
import { UpdateTagsUserDto } from './dto/update-tags_user.dto';
import { CreateUserTagsDto } from './dto/create-user_tags.dto';
import { UpdateUserTagsDto } from './dto/update-user_tags.dto';

@Controller('tags-user')
export class TagsUserController {
  constructor(private readonly tagsUserService: TagsUserService) {}

  // @Post()
  // create(@Body() createTagsUserDto: CreateTagsUserDto) {
  //   return this.tagsUserService.create(createTagsUserDto);
  // }  

  @Post('/user/:userid')
  addTagUser(@Param('userid') userid: string, @Body() createUserTagsDto: CreateUserTagsDto) {
    return this.tagsUserService.addTagUser(+userid, createUserTagsDto);
  }

  @Get('/user/:userid')
  findTagUser(@Param('userid') userid: string){
    return this.tagsUserService.findTagUser(+userid);
  }

  @Patch('/user/:userid')
  updateTagUser(@Param('userid') userid: string, @Body() updateUserTagsDto: UpdateUserTagsDto) {
    return this.tagsUserService.updateTagUser(+userid, updateUserTagsDto)
  }

  @Get()
  findAll() {
    return this.tagsUserService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagsUserService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagsUserDto: UpdateTagsUserDto) {
  //   return this.tagsUserService.update(+id, updateTagsUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tagsUserService.remove(+id);
  // }
}
