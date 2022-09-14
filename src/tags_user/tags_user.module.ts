import { TagsUser } from './models/tags_user.model';
import { Module } from '@nestjs/common';
import { TagsUserService } from './tags_user.service';
import { TagsUserController } from './tags_user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([TagsUser]), UsersModule],
  controllers: [TagsUserController],
  providers: [TagsUserService]
})
export class TagsUserModule {}
