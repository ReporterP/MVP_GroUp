import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { TagsUserModule } from './tags_user/tags_user.module';
import { TagsPostsModule } from './tags_posts/tags_posts.module';
import { ResumeSoftModule } from './resume_soft/resume_soft.module';
import { ResumeHardModule } from './resume_hard/resume_hard.module';
import { ResumeWorkExpModule } from './resume_work_exp/resume_work_exp.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { User } from './users/models/users.model';
import { Post } from './posts/models/posts.model';
import { TagsUser } from './tags_user/models/tags_user.model';
import { TagsPost } from './tags_posts/models/tags_posts.model';
import { Specialties } from './specialties/models/specialties.model';
import { ResumeWorkExp } from './resume_work_exp/models/resume_work_exp.model';
import { ResumeSoft } from './resume_soft/models/resume_soft.model';
import { ResumeHard } from './resume_hard/models/resume_hard.model';
import { AuthorPost } from './posts/models/author_post.model';
import { UserPostLiked } from './posts/models/user_post_liked.model';
import { PostsTags } from './tags_posts/models/posts_tags.model';
import { UserTags } from './tags_user/models/user_tags.model';
import { UserSpecialties } from './specialties/models/user_specialties.model';
import { UserResumeHard } from './resume_hard/models/user_resume_hard.model';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false
      }
      },
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [User, Post, TagsUser, UserTags ,TagsPost, PostsTags, Specialties, UserSpecialties, ResumeWorkExp, ResumeSoft, ResumeHard, UserResumeHard , AuthorPost, UserPostLiked],
      autoLoadModels: true,
      synchronize: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    TagsUserModule,
    TagsPostsModule,
    ResumeSoftModule,
    ResumeHardModule,
    ResumeWorkExpModule,
    SpecialtiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
