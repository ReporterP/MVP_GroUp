import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('resume_user_for_admin/:user_id')
  findOneUserForResume(@Param('id') id: string) {
    return this.usersService.findOneUserForResume(+id);
  }

  @Get('roadmap/:user_id')
  getUserRoadmap(@Param('user_id') id: string) {
    return this.usersService.getUserRoadmap(+id);
  }

  @Get('posts/:id')
  getUserPost(@Param('id') id: string) {
    return this.usersService.getUserPost(+id);
  }

  @Get('likeposts/:id')
  getLikedPost(@Param('id') id: string) {
    return this.usersService.getLikedPost(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
