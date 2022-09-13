import { TagsPostsModule } from './../tags_posts/tags_posts.module';
import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './models/posts.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/users.model';
import { UserPostLiked } from './models/user_post_liked.model';
import { AuthorPost } from './models/author_post.model';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Post, User, UserPostLiked, AuthorPost]), forwardRef(() => UsersModule), TagsPostsModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
