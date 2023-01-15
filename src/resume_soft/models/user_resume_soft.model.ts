import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { ResumeSoft } from './resume_soft.model';

interface UserResumeSoftCreationAttr {
    user_id: number,
    resume_soft_id: number
}


@Table({tableName: "user_resume_soft", createdAt: false, updatedAt: false})
export class UserResumeSoft extends Model<UserResumeSoft, UserResumeSoftCreationAttr> {

    @Column({type: DataType.INTEGER ,unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => ResumeSoft)
    @Column({type: DataType.INTEGER})
    resume_soft_id: number;
}