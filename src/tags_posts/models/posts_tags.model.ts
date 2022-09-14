import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Post } from "src/posts/models/posts.model";
import { TagsPost } from './tags_posts.model';

interface PostsTagsCreationAttr {
    post_id: number,
    tag_id: number
}

@Table({tableName: "posts_tags", createdAt: false, updatedAt: false})
export class PostsTags extends Model<PostsTags, PostsTagsCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    post_id: number;

    @ForeignKey(() => TagsPost)
    @Column({type: DataType.INTEGER})
    tag_id: number;
}