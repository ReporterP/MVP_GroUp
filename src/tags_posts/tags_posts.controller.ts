import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsPostsService } from './tags_posts.service';
import { CreateTagsPostDto } from './dto/create-tags_post.dto';
import { UpdateTagsPostDto } from './dto/update-tags_post.dto';

@Controller('tags-posts')
export class TagsPostsController {
  constructor(private readonly tagsPostsService: TagsPostsService) {}

  // @Post()
  // create(@Body() createTagsPostDto: CreateTagsPostDto) {
  //   return this.tagsPostsService.create(createTagsPostDto);
  // }

  @Get()
  findAll() {
    return this.tagsPostsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagsPostsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagsPostDto: UpdateTagsPostDto) {
  //   return this.tagsPostsService.update(+id, updateTagsPostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tagsPostsService.remove(+id);
  // }
}
