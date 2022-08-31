import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './models/posts.model';

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post) private postRepo: typeof Post) {};

  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepo.create(createPostDto);
    return post;
  }

  async findAll() {
    const posts = await this.postRepo.findAll()
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOne({where: {
      id,
    }})
    return post;
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
