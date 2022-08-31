import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Post } from './posts.model';
import { User } from './../../users/models/users.model';

interface AuthorPostCreationAttr {
    user_id: number,
    post_id: number
}

@Table({tableName: "author_post", createdAt: false, updatedAt: false})
export class AuthorPost extends Model<AuthorPost, AuthorPostCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    post_id: number;
}