import { TagsUser } from './tags_user.model';
import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from '../../users/models/users.model';

interface UserTagsCreationAttr {
    user_id: number,
    tag_id: number
}

@Table({tableName: "user_tags", createdAt: false, updatedAt: false})
export class UserTags extends Model<UserTags, UserTagsCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => TagsUser)
    @Column({type: DataType.INTEGER})
    tag_id: number;


}