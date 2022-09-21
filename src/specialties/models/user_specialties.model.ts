import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from '../../users/models/users.model';
import { Specialties } from './specialties.model';

interface UserSpecCreationAttr {
    user_id: number,
    specialties_id: number
}


@Table({tableName: "user_specialties", createdAt: false, updatedAt: false})
export class UserSpecialties extends Model<UserSpecialties, UserSpecCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => Specialties)
    @Column({type: DataType.INTEGER})
    specialties_id: number;
}