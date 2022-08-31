import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/models/users.model";
import { Post } from './posts.model';

interface UserPostLikedCreationAttr {
    user_like_id: number,
    post_like_id: number
}

@Table({tableName: "user_post_liked", createdAt: false, updatedAt: false})
export class UserPostLiked extends Model<UserPostLiked, UserPostLikedCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_like_id: number;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    post_like_id: number;
}