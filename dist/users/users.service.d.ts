import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(telegram_id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<[affectedCount: number]>;
}
