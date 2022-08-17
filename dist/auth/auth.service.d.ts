import { UsersService } from '../users/users.service';
import { AuthCreateUserDto } from './dto/AuthCreateUserDto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    create(authCreateUserDto: AuthCreateUserDto): Promise<import("../users/users.model").User>;
    findOne(telegram_id: number): Promise<import("../users/users.model").User | "enter_in_browser" | "err">;
}
