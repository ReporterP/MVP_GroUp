import { ResumeWorkExp } from './models/resume_work_exp.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeWorkExpDto } from './dto/create-resume_work_exp.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ResumeWorkExpService {

  constructor(@InjectModel(ResumeWorkExp) private ResumeWorkExpRepo: typeof ResumeWorkExp,
    private usersService: UsersService) { };

  async create(createResumeWorkExpDto: CreateResumeWorkExpDto) {
    const resumeWorkExp = await this.ResumeWorkExpRepo.create(createResumeWorkExpDto)
    return resumeWorkExp;
  }

  async findOneByParams(ResumeWorkExpParams: any) {

    const profession = ResumeWorkExpParams.profession;
    const work_time = ResumeWorkExpParams.work_time;
    const description = ResumeWorkExpParams.description;

    const resumeWorkExp = await this.ResumeWorkExpRepo.findOne({
      where: {
        profession,
        work_time,
        description,
      }
    })
    return resumeWorkExp;
  };

  async addNewRHforUser(user: any, newResumeWorkExp: Array<CreateResumeWorkExpDto>) {

    // add new resumeWorkExp for user and create new resumeWorkExp
    newResumeWorkExp.map !== undefined?
      newResumeWorkExp.map(async e => {
        user.$add('resume_work_exp_id', await this.findOneByParams(e) ?
          await this.findOneByParams(e)
          : await this.create(e));
      }):
    console.log("ШО ТЫ МНЕ СУЁШЬ");
  };

  async deleteOldRHforUser(user: any, newResumeWorkExp: Array<CreateResumeWorkExpDto>, oldResumeWorkExp: Array<any>) {

    // delete old resumeWorkExp for user
    oldResumeWorkExp.map !== undefined && newResumeWorkExp.map !== undefined?
      oldResumeWorkExp.map(async e => {
        newResumeWorkExp
          .map(el => JSON.stringify(el))
          .indexOf(
            JSON.stringify(e)) == -1 ?
          user.$remove('resume_work_exp_id', await this.findOneByParams(e))
          : 0;
      }):
    console.log("ШО ТЫ МНЕ СУЁШЬ");
  };


  async addNewResumeWorkExp(user_id: number, createResumeWorkExpDto: Array<CreateResumeWorkExpDto>) {

    let user = await this.usersService.findOneUserForResume(user_id);
    user.resume_work_exp_id === undefined ? user.resume_work_exp_id = []:false
    this.deleteOldRHforUser(user, createResumeWorkExpDto, user.resume_work_exp_id);
    this.addNewRHforUser(user, createResumeWorkExpDto);

    return createResumeWorkExpDto.map !== undefined ? createResumeWorkExpDto:  "ШО ТЫ МНЕ СУЁШЬ";

  };

  async findWorkExpUser(user_id: number) {
    const user = await this.usersService.findOneUserForResume(user_id);
    return user.$get('resume_work_exp_id')
  };
}
