import { TagsPost } from './models/tags_posts.model';
import { Module } from '@nestjs/common';
import { TagsPostsService } from './tags_posts.service';
import { TagsPostsController } from './tags_posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([TagsPost])],
  controllers: [TagsPostsController],
  providers: [TagsPostsService],
  exports: [TagsPostsService]
})
export class TagsPostsModule {}
