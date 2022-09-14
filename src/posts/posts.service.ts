import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './models/posts.model';
import { UsersService } from '../users/users.service';
import { LikePostDto } from './dto/like-post.dto';
import { TagsPostsService } from '../tags_posts/tags_posts.service';
import { TagsPost } from '../tags_posts/models/tags_posts.model';

const getColor = () => {
  const colors:Array<string> = ["#F272DE", "#68B9E6", "#68E68B", "#A484FF", "#E6D268"]
  return colors[Math.floor(Math.random()*colors.length)]
}

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post) private postRepo: typeof Post,
  private usersService: UsersService,
  private tagsPostsService: TagsPostsService) {};

  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepo.create(createPostDto);
    const user = await this.usersService.findOneByID(createPostDto.user_id);
    createPostDto.tags.map(async (e: string)=>{
      await this.tagsPostsService.findOneByName(e)?0
      :await this.tagsPostsService.create({
          "tag":e,
          "color": getColor()
        });
      const tag = await this.tagsPostsService.findOneByName(e);
      await tag.$add('post_id', post);
    })
    await post.$add('user_id', user)
    return post;
  }

  async findAll() {
    const posts = await this.postRepo.findAll({include: [TagsPost]});
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOne({
      include: [TagsPost],
      where: {id}
    });
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

    var oldTags:Array<string> = []
    const postTag = await (await this.findOne(id)).tag_id
    postTag.map(e=>oldTags.push(e["tag"]))
    const post = await this.postRepo.findByPk(id);

    // Добавление новых тэгов
    updatePostDto.tags.map(async e => {
      if(oldTags.indexOf(e) == -1){
        await this.tagsPostsService.findOneByName(e)?0
        :await this.tagsPostsService.create({
            "tag":e,
            "color": getColor()
        });
      const tag = await this.tagsPostsService.findOneByName(e);
      await tag.$add('post_id', post);
      }
    })

    // Удаление старых
    oldTags.map(async e => {
      const tag = await this.tagsPostsService.findOneByName(e);
      updatePostDto.tags.indexOf(e) == -1?
      await tag.$remove('post_id', post):0;
    })

    const postUpdate = await this.postRepo.update({...updatePostDto}, {where: {id}});
    
    return postUpdate;
  }

  async remove(id: number) {
    const post = await this.postRepo.destroy({where: {id}});
    return post;
  }

}
