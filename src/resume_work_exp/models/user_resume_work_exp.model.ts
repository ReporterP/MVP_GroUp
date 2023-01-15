import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { ResumeWorkExp } from './resume_work_exp.model';

interface UserResumeWorkExpCreationAttr {
    user_id: number,
    resume_work_exp_id: number
}


@Table({tableName: "user_resume_work_exp", createdAt: false, updatedAt: false})
export class UserResumeWorkExp extends Model<UserResumeWorkExp, UserResumeWorkExpCreationAttr> {

    @Column({type: DataType.INTEGER ,unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => ResumeWorkExp)
    @Column({type: DataType.INTEGER})
    resume_work_exp_id: number;
}