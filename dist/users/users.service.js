"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./models/users.model");
const tags_user_model_1 = require("../tags_user/models/tags_user.model");
const specialties_model_1 = require("../specialties/models/specialties.model");
const resume_hard_model_1 = require("../resume_hard/models/resume_hard.model");
let UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    ;
    async create(createUserDto) {
        const user = await this.userRepo.create(createUserDto);
        return user;
    }
    async findOneByID(id) {
        const oneUser = await this.userRepo.findOne({ where: {
                id,
            } });
        return oneUser.id;
    }
    async findOneUserForTags(id) {
        const oneUser = await this.userRepo.findOne({ where: {
                id,
            },
            include: [tags_user_model_1.TagsUser] });
        return oneUser;
    }
    async findOneUserForResume(id) {
        const oneUser = await this.userRepo.findOne({ where: {
                id,
            },
            include: [specialties_model_1.Specialties, resume_hard_model_1.ResumeHard] });
        return oneUser;
    }
    async findOne(telegram_id) {
        const oneUser = await this.userRepo.findOne({ where: {
                telegram_id,
            } });
        return oneUser;
    }
    async getUserPost(user_id) {
        const user = await this.userRepo.findByPk(user_id);
        const getPost = await user.$get("post_id");
        return getPost;
    }
    async getLikedPost(user_id) {
        const user = await this.userRepo.findByPk(user_id);
        const getPost = await user.$get("post_like_id");
        return getPost;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepo.update(Object.assign({}, updateUserDto), { where: { id } });
        return await this.userRepo.findOne({ where: {
                id,
            } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map