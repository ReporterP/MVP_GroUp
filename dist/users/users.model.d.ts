import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    telegram_id: string;
    telegram_name: string;
    name: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    role: boolean;
    picture: string;
    portfolio: string;
    telephone: string;
    telegram_name: string;
    email: string;
    telegram_id: number;
    roadmap: JSON;
}
export {};
