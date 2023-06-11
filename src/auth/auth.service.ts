import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { AuthCreateUserDto } from './dto/AuthCreateUserDto';

@Injectable()
export class AuthService {
    constructor(@Inject(UsersService) private usersService: UsersService) {} 

    async create(authCreateUserDto: AuthCreateUserDto) {
        const authUser = await this.usersService.create(authCreateUserDto)
        return authUser
    }

    async findOne(telegram_id: number) {
        if (telegram_id === 0 ) {
            return "enter_in_browser" 
        } else {
            const oneUser = await this.usersService.findOne(telegram_id)
            console.log(oneUser)
            return oneUser == null? "err" : oneUser
        }
    }
}