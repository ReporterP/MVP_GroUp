import { Model, Table, Column, DataType } from "sequelize-typescript";

interface UserCreationAttrs {
    telegram_id: string;
    telegram_name: string;
    name: string;
}


@Table({tableName: "users", createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
    role: boolean;

    @Column({type: DataType.STRING})
    picture: string;

    @Column({type: DataType.STRING})
    portfolio: string;

    @Column({type: DataType.STRING, unique: true})
    telephone: string;

    @Column({type: DataType.STRING, unique: true})
    telegram_name: string;

    @Column({type: DataType.STRING, unique: true})
    email: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false })
    telegram_id: number;

    @Column({type: DataType.JSON})
    roadmap: JSON;

    //       C чем свзязываем   Таблица связи
    // @BeLongsToMany(()=>Posts, ()=>Author_post)
    // posts: Posts[]
    // необхадимо добваить сущности в импорты и Author_post тоже 
    // Создать Author_post.model.ts в любой папке из тех которые связываем
}