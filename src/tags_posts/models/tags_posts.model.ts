import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Post } from '../../posts/models/posts.model';
import { PostsTags } from './posts_tags.model';

interface TagsPostCreationAttr {
    tag: string,
    color: string
}

@Table({tableName: "tags_posts", createdAt: false, updatedAt: false})
export class TagsPost extends Model<TagsPost, TagsPostCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    tag: string;

    @Column({type: DataType.STRING, allowNull: false})
    color: string;

    @BelongsToMany(() => Post, () => PostsTags)
    post_id: Post[];
}