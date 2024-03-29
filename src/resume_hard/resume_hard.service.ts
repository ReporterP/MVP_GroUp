import { ResumeHard } from './models/resume_hard.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeHardDto } from './dto/create-resume_hard.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ResumeHardService {

  constructor(@InjectModel(ResumeHard) private ResumeHardRepo: typeof ResumeHard,
    private usersService: UsersService) { };

  async create(createResumeHardDto: CreateResumeHardDto) {
    const resumeHard = await this.ResumeHardRepo.create(createResumeHardDto)
    return resumeHard;
  };
  
  async findOneByParams(ResumeHardParams: any) {
    
    const hard = ResumeHardParams.hard;
    const description = ResumeHardParams.description;
    const level_edu = ResumeHardParams.level_edu;

    const resumeHard = await this.ResumeHardRepo.findOne({
      where: {
        hard,
        description,
        level_edu,
      }
    })
    return resumeHard;
  };

  async addNewRHforUser(user: any, newResumeHard: Array<CreateResumeHardDto>) {

    // add new resumeHard for user and create new resumeHard
    newResumeHard.map !== undefined?
      newResumeHard.map(async e => {
        user.$add('resume_hard_id', await this.findOneByParams(e) ?
          await this.findOneByParams(e)
          : await this.create(e));
      }):
      console.log("ШО ТЫ МНЕ СУЁШЬ");
  };

  async deleteOldRHforUser(user: any, newResumeHard: Array<CreateResumeHardDto>, oldResumeHard: Array<any>) {

    // delete old resumeHard for user
    oldResumeHard.map !== undefined && newResumeHard.map !== undefined?
      oldResumeHard.map(async e => {
        newResumeHard.map(el => JSON.stringify(el))
          .indexOf(
            JSON.stringify(e)) == -1 ?
          user.$remove('resume_hard_id', await this.findOneByParams(e))
          : 0;
      }):
      console.log("ШО ТЫ МНЕ СУЁШЬ");
  };


  async addNewResumeHard(user_id: number, createResumeHardDto: Array<CreateResumeHardDto>) {

    let user = await this.usersService.findOneUserForResume(user_id);
    user.resume_hard_id === undefined ? user.resume_hard_id = []:false
      this.deleteOldRHforUser(user, createResumeHardDto, user.resume_hard_id);
      this.addNewRHforUser(user, createResumeHardDto);
      return createResumeHardDto.map !== undefined ? createResumeHardDto:  "ШО ТЫ МНЕ СУЁШЬ";
  };

  async findHardUser(user_id: number) {
    const user = await this.usersService.findOneUserForResume(user_id);
    return user.$get('resume_hard_id', {order: [['level_edu', 'DESC']]})
  };

};
