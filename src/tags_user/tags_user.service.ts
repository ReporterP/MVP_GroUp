import { TagsUser } from './models/tags_user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagsUserDto } from './dto/create-tags_user.dto';
import { UpdateTagsUserDto } from './dto/update-tags_user.dto';

@Injectable()
export class TagsUserService {

  constructor(@InjectModel(TagsUser) private tagsUserRepo: typeof TagsUser) {};

  async create(createTagsUserDto: CreateTagsUserDto) {
    const tag = await this.tagsUserRepo.create(createTagsUserDto)
    return tag;
  }

  async findAll() {
    const tags = await this.tagsUserRepo.findAll()
    return tags;
  }

  async findOne(id: number) {
    const tag = await this.tagsUserRepo.findOne({where: {
      id,
    }})
    return tag;
  }

  async update(id: number, UpdateTagsUserDto: UpdateTagsUserDto) {
    const tag = await this.tagsUserRepo.update({...UpdateTagsUserDto}, {where: {id}});
    return tag;
  }

  async remove(id: number) {
    const tag = await this.tagsUserRepo.destroy({where: {id}});
    return tag;
  }
}
