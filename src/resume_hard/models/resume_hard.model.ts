import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { UserResumeHard } from './user_resume_hard.model';

interface ResumeHardCreationAttr {
    hard: string,
    description: string,
    level_edu: number,
}

@Table({tableName: "resume_hard", createdAt: false, updatedAt: false})
export class ResumeHard extends Model<ResumeHard, ResumeHardCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    hard: string;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.INTEGER})
    level_edu: number;

    @BelongsToMany(() => User, () => UserResumeHard)
    user_id: User[];
}