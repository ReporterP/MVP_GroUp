import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { UserSpecialties } from './user_specialties.model';
import { User } from '../../users/models/users.model';

interface SpecialtiesCreationAttr {
    name: string
}

@Table({tableName: "specialties", createdAt: false, updatedAt: false})
export class Specialties extends Model<Specialties, SpecialtiesCreationAttr> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @BelongsToMany(() => User, () => UserSpecialties)
    user_id: User[];
}