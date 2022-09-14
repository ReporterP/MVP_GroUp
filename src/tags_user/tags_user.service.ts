import { TagsUser } from './models/tags_user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagsUserDto } from './dto/create-tags_user.dto';
import { UpdateTagsUserDto } from './dto/update-tags_user.dto';
import { CreateUserTagsDto } from './dto/create-user_tags.dto';
import { UsersService } from '../users/users.service';
import { UpdateUserTagsDto } from './dto/update-user_tags.dto';

const getColor = () => {
  const colors:Array<string> = ["#F272DE", "#68B9E6", "#68E68B", "#A484FF", "#E6D268"]
  return colors[Math.floor(Math.random()*colors.length)]
}

@Injectable()
export class TagsUserService {

  constructor(@InjectModel(TagsUser) private tagsUserRepo: typeof TagsUser,
  private usersService: UsersService) {};

  // async create(createTagsUserDto: CreateTagsUserDto) {
  //   const tag = await this.tagsUserRepo.create(createTagsUserDto)
  //   return tag;
  // }

  async findAll() {
    const tags = await this.tagsUserRepo.findAll()
    return tags;
  }

  async findOneByName(tag: string) {
    const tagname = await this.tagsUserRepo.findOne({where: {
      tag,
    }})
    return tagname;
  }

  async addTagUser(user_id: number, createUserTagsDto: CreateUserTagsDto) {

    const user = await this.usersService.findOneUserForTags(user_id);

    createUserTagsDto.tags.map(async (e: string) => {
      const tag = await this.findOneByName(e)?
      await this.findOneByName(e)
      :await this.tagsUserRepo.create({
        "tag": e,
        "color": getColor()
      })

      user.$add('tag_id', tag)
    })
    return user.$get('tag_id')
  }

  async findTagUser(user_id: number) {
    const user = await this.usersService.findOneUserForTags(user_id);
    return user.$get('tag_id')
  }

  async updateTagUser(user_id: number, updateUserTagsDto: UpdateUserTagsDto) {
    var oldTags:Array<string> = []
    const user = await this.usersService.findOneUserForTags(user_id);
    await user.tag_id.map(e=>oldTags.push(e["tag"]))

    // Добавление новых тэгов
    updateUserTagsDto.tags.map(async e => {
      if(oldTags.indexOf(e) == -1){
      const tag = await this.findOneByName(e)?
      await this.findOneByName(e)
      :await this.tagsUserRepo.create({
        "tag": e,
        "color": getColor()
      });
        user.$add('tag_id', tag)
      }
    })

    // Удаление старых тэгов

    oldTags.map(async e=> {
      const tag = await this.findOneByName(e)
      updateUserTagsDto.tags.indexOf(e) == -1?
      await user.$remove('tag_id', tag):0
    })

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
