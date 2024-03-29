import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
import { TagsUser } from '../tags_user/models/tags_user.model';
import { Specialties } from '../specialties/models/specialties.model';
import { ResumeHard } from '../resume_hard/models/resume_hard.model';
import { ResumeSoft } from 'src/resume_soft/models/resume_soft.model';
import { TagsPost } from 'src/tags_posts/models/tags_posts.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepo: typeof User) {};

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return user;
  }

  async findOneByID(id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      id,
    }});
    return oneUser.id;
  }

  async findOneUserForTags(id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      id,
    }, 
    include: [TagsUser]});
    return oneUser;
  }

  async findOneUserForResume(id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      id,
    }, 
    include: [Specialties, ResumeHard, ResumeSoft]});
    return oneUser;
  }

  async getUserRoadmap(id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      id,
    }});
    return oneUser.roadmap;
  }

  async findOne(telegram_id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      telegram_id,
    }});
    return oneUser;
  }

  
  async getUserPost(id: number) {
    const user = await this.userRepo.findByPk(id)
    const getPost = await user.$get("post_id", {include: [TagsPost], order: [['createdAt', 'DESC']]})
    return getPost
  }

  async getLikedPost(user_id: number) {
    const user = await this.userRepo.findByPk(user_id)
    const getPost = await user.$get("post_like_id")
    return getPost
  }

  

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update({...updateUserDto}, {where: {id}});
    return await this.userRepo.findOne({where: {
      id,
    }});
  }

}
