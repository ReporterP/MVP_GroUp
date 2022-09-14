import { UserPostLiked } from './user_post_liked.model';
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/models/users.model";
import { AuthorPost } from "./author_post.model";
import { TagsPost } from '../../tags_posts/models/tags_posts.model';
import { PostsTags } from '../../tags_posts/models/posts_tags.model';

interface PostCreationAttr {
    type: string,
    title: string,
    text: string,
    picture: string
}

@Table({tableName: "posts", updatedAt: false})
export class Post extends Model<Post, PostCreationAttr> {


    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})
    text: string;
    
    @Column({type: DataType.STRING})
    picture: string;

    @BelongsToMany(() => User, () => AuthorPost)
    user_id: User[];

    @BelongsToMany(() => User, () => UserPostLiked)
    user_like_id: User[];

    @BelongsToMany(() => TagsPost, () => PostsTags)
    tag_id: TagsPost[];
}

