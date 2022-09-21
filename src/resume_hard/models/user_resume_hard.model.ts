import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { ResumeHard } from './resume_hard.model';

interface UserResumeHardCreationAttr {
    user_id: number,
    resume_hard_id: number
}


@Table({tableName: "user_resume_hard", createdAt: false, updatedAt: false})
export class UserResumeHard extends Model<UserResumeHard, UserResumeHardCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => ResumeHard)
    @Column({type: DataType.INTEGER})
    resume_hard_id: number;
}