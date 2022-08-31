import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from '../posts/models/posts.model';
import { AuthorPost } from '../posts/models/author_post.model';
import { UserPostLiked } from '../posts/models/user_post_liked.model';
import { PostsModule } from '../posts/posts.module';
import { User } from './models/users.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Post, AuthorPost, UserPostLiked]), forwardRef(() => PostsModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
