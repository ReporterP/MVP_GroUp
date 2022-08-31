"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const tags_user_module_1 = require("./tags_user/tags_user.module");
const tags_posts_module_1 = require("./tags_posts/tags_posts.module");
const resume_soft_module_1 = require("./resume_soft/resume_soft.module");
const resume_hard_module_1 = require("./resume_hard/resume_hard.module");
const resume_work_exp_module_1 = require("./resume_work_exp/resume_work_exp.module");
const specialties_module_1 = require("./specialties/specialties.module");
const users_model_1 = require("./users/models/users.model");
const posts_model_1 = require("./posts/models/posts.model");
const tags_user_model_1 = require("./tags_user/models/tags_user.model");
const tags_posts_model_1 = require("./tags_posts/models/tags_posts.model");
const specialties_model_1 = require("./specialties/models/specialties.model");
const resume_work_exp_model_1 = require("./resume_work_exp/models/resume_work_exp.model");
const resume_soft_model_1 = require("./resume_soft/models/resume_soft.model");
const resume_hard_model_1 = require("./resume_hard/models/resume_hard.model");
const author_post_model_1 = require("./posts/models/author_post.model");
const user_post_liked_model_1 = require("./posts/models/user_post_liked.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env'
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                dialectOptions: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                },
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                models: [users_model_1.User, posts_model_1.Post, tags_user_model_1.TagsUser, tags_posts_model_1.TagsPost, specialties_model_1.Specialties, resume_work_exp_model_1.ResumeWorkExp, resume_soft_model_1.ResumeSoft, resume_hard_model_1.ResumeHard, author_post_model_1.AuthorPost, user_post_liked_model_1.UserPostLiked],
                autoLoadModels: true,
                synchronize: true
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'build'),
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
            tags_user_module_1.TagsUserModule,
            tags_posts_module_1.TagsPostsModule,
            resume_soft_module_1.ResumeSoftModule,
            resume_hard_module_1.ResumeHardModule,
            resume_work_exp_module_1.ResumeWorkExpModule,
            specialties_module_1.SpecialtiesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map