import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepo: typeof User) {};

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return user;
  }

  async findOne(id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      id,
    }});
    return oneUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
