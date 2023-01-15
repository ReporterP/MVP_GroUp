import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { AuthorPost } from "src/posts/models/author_post.model";
import { UserPostLiked } from "src/posts/models/user_post_liked.model";
import { Post } from '../../posts/models/posts.model';
import { TagsUser } from '../../tags_user/models/tags_user.model';
import { UserTags } from '../../tags_user/models/user_tags.model';
import { Specialties } from '../../specialties/models/specialties.model';
import { UserSpecialties } from '../../specialties/models/user_specialties.model';
import { ResumeHard } from '../../resume_hard/models/resume_hard.model';
import { UserResumeHard } from '../../resume_hard/models/user_resume_hard.model';
import { ResumeSoft } from '../../resume_soft/models/resume_soft.model';
import { UserResumeSoft } from '../../resume_soft/models/user_resume_soft.model';
import { ResumeWorkExp } from '../../resume_work_exp/models/resume_work_exp.model';
import { UserResumeWorkExp } from '../../resume_work_exp/models/user_resume_work_exp.model';

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

    @BelongsToMany(() => Post, () => AuthorPost)
    post_id: Post[];

    @BelongsToMany(() => Post, () => UserPostLiked)
    post_like_id: Post[];

    @BelongsToMany(() => TagsUser, () => UserTags)
    tag_id: TagsUser[];

    @BelongsToMany(() => Specialties, () => UserSpecialties)
    specialties_id: Specialties[];

    @BelongsToMany(() => ResumeHard, () => UserResumeHard)
    resume_hard_id: ResumeHard[];

    @BelongsToMany(() => ResumeSoft, () => UserResumeSoft)
    resume_soft_id: ResumeSoft[];

    @BelongsToMany(() => ResumeWorkExp, () => UserResumeWorkExp)
    resume_work_exp_id: ResumeWorkExp[];
}