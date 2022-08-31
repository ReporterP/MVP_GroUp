import { Model, Table, Column, DataType } from "sequelize-typescript";

interface SpecialtiesCreationAttr {
    name: string
}

@Table({tableName: "specialties", createdAt: false, updatedAt: false})
export class Specialties extends Model<Specialties, SpecialtiesCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;
}