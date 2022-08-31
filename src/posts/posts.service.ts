import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './models/posts.model';
import { UsersService } from '../users/users.service';
import { LikePostDto } from './dto/like-post.dto';

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post) private postRepo: typeof Post,
  private usersService: UsersService) {};

  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepo.create(createPostDto);
    const user = await this.usersService.findOneByID(createPostDto.user_id)
    await post.$add('user_id', user)
    return post;
  }

  async findAll() {
    const posts = await this.postRepo.findAll()
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOne({where: {
      id,
    }});
    return post;
  }

  async likePost(likePostDto: LikePostDto) {
    const post = await this.postRepo.findByPk(likePostDto.post_like_id);
    const user = await this.usersService.findOneByID(likePostDto.user_like_id);
    await post.$add('user_like_id', user);
  }

  async deleteLikePost(likePostDto: LikePostDto) {
    const post = await this.postRepo.findByPk(likePostDto.post_like_id);
    const user = await this.usersService.findOneByID(likePostDto.user_like_id);
    await post.$remove('user_like_id', user)
  }

  // TODO: Убрать лишние элементы при вызове пользователей лайкнувших пост

  async getUsersLikedPost(id: number) {
    const post = await this.postRepo.findByPk(id);
    const getUsers = await post.$get("user_like_id");
    return getUsers
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepo.update({...updatePostDto}, {where: {id}});
    return post;
  }

  async remove(id: number) {
    const post = await this.postRepo.destroy({where: {id}});
    return post;
  }

}
