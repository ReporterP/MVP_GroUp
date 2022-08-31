import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./models/users.model").User>;
    findOne(id: string): Promise<import("./models/users.model").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<[affectedCount: number]>;
}
