import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepo: typeof User) {};

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return user;
  }

  async findOne(telegram_id: number) {
    const oneUser = await this.userRepo.findOne({where: {
      telegram_id,
    }});
    return oneUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update({...updateUserDto}, {where: {id}});
    return user;
  }

  // async remove(id: number) {
  //   const user = await this.userRepo.destroy({where: {id}});
  //   return user;
  // }
}
