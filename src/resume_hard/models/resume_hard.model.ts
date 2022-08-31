import { Model, Table, Column, DataType } from "sequelize-typescript";

interface ResumeHardCreationAttr {
    soft: string,
    description: string,
    level_edu: number,
}

@Table({tableName: "resume_hard", createdAt: false, updatedAt: false})
export class ResumeHard extends Model<ResumeHard, ResumeHardCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    soft: string;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.INTEGER})
    level_edu: number;
}