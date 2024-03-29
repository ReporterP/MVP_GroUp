import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./models/users.model").User>;
    findOne(id: string): Promise<import("./models/users.model").User>;
    findOneUserForResume(id: string): Promise<import("./models/users.model").User>;
    getUserPost(id: string): Promise<import("../posts/models/posts.model").Post[]>;
    getLikedPost(id: string): Promise<import("../posts/models/posts.model").Post[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./models/users.model").User>;
}
