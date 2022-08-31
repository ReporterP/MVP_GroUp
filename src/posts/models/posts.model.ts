import { Model, Table, Column, DataType } from "sequelize-typescript";

interface PostCreationAttr {
    type: string,
    title: string,
    text: string,
    picture: string
}

@Table({tableName: "posts", updatedAt: false})
export class Post extends Model<Post, PostCreationAttr> {


    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})
    text: string;
    
    @Column({type: DataType.STRING})
    picture: string;
}

//       C чем свзязываем   Таблица связи
// @BeLongsToMany(()=>User, ()=>Author_post)
// users: User[]

