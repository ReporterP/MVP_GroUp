import { Model, Table, Column, DataType } from "sequelize-typescript";

interface ResumeWorkExpCreationAttr {
    profession: string,
    work_time: string
}

@Table({tableName: "resume_work_exp", createdAt: false, updatedAt: false})
export class ResumeWorkExp extends Model<ResumeWorkExp, ResumeWorkExpCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    profession: string;

    @Column({type: DataType.STRING, allowNull: false})
    work_time: string;

    @Column({type: DataType.STRING})
    description: string;
}