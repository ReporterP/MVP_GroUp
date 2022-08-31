import { Model, Table, Column, DataType } from "sequelize-typescript";

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
}