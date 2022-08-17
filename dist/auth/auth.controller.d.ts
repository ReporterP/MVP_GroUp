import { AuthService } from './auth.service';
import { AuthCreateUserDto } from './dto/AuthCreateUserDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(authCreateUserDto: AuthCreateUserDto): Promise<import("../users/users.model").User>;
    findOne(telegram_id: number): Promise<import("../users/users.model").User | "enter_in_browser" | "err">;
}
