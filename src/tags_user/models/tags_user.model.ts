import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { UserTags } from './user_tags.model';

interface TagsUserCreationAttr {
    tag: string,
    color: string
}

@Table({tableName: "tags_user", createdAt: false, updatedAt: false})
export class TagsUser extends Model<TagsUser, TagsUserCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    tag: string;

    @Column({type: DataType.STRING, allowNull: false})
    color: string;

    @BelongsToMany(()=> User, () => UserTags)
    user_id: User[]
}