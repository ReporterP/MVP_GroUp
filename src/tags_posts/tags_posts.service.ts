import { TagsPost } from './models/tags_posts.model';
import { Injectable } from '@nestjs/common';
import { CreateTagsPostDto } from './dto/create-tags_post.dto';
import { UpdateTagsPostDto } from './dto/update-tags_post.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TagsPostsService {
  
  constructor(@InjectModel(TagsPost) private tagsPostRepo: typeof TagsPost) {};

  async create(createTagsPostDto: CreateTagsPostDto) {
    const tag = await this.tagsPostRepo.create(createTagsPostDto)
    return tag;
  }

  async findAll() {
    const tags = await this.tagsPostRepo.findAll()
    return tags;
  }

  async findOneByName(tag: string) {
    const tagg = await this.tagsPostRepo.findOne({where: {
      tag,
    }})
    return tagg;
  }

  async findOne(id: number) {
    const tag = await this.tagsPostRepo.findOne({where: {
      id,
    }})
    return tag;
  }

  async update(id: number, updateTagsPostDto: UpdateTagsPostDto) {
    const tag = await this.tagsPostRepo.update({...updateTagsPostDto}, {where: {id}});
    return tag;
  }

  async remove(id: number) {
    const tag = await this.tagsPostRepo.destroy({where: {id}});
    return tag;
  }
}
