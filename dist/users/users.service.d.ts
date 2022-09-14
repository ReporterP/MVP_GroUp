import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByID(id: number): Promise<number>;
    findOneUserForTags(id: number): Promise<User>;
    findOne(telegram_id: number): Promise<User>;
    getUserPost(user_id: number): Promise<import("../posts/models/posts.model").Post[]>;
    getLikedPost(user_id: number): Promise<import("../posts/models/posts.model").Post[]>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<[affectedCount: number]>;
}
