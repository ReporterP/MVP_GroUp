import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/models/users.model";
import { UserResumeSoft } from "./user_resume_soft.model";

interface ResumeSoftCreationAttr {
    soft: string,
    description: string,
    level_edu: number,
}

@Table({tableName: "resume_soft", createdAt: false, updatedAt: false})
export class ResumeSoft extends Model<ResumeSoft, ResumeSoftCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    soft: string;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.INTEGER})
    level_edu: number;

    @BelongsToMany(() => User, () => UserResumeSoft)
    user_id: User[];
}