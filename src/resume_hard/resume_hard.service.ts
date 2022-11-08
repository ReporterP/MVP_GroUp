import { ResumeHard } from './models/resume_hard.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeHardDto } from './dto/create-resume_hard.dto';
import { UpdateResumeHardDto } from './dto/update-resume_hard.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ResumeHardService {

  constructor(@InjectModel(ResumeHard) private ResumeHardRepo: typeof ResumeHard,
  private usersService: UsersService) {};

  async create(createResumeHardDto: CreateResumeHardDto) {
    const resumeHard = await this.ResumeHardRepo.create(createResumeHardDto)
    return resumeHard;
  }

  async findOneByName(soft: string) {
    const resumeHard = await this.ResumeHardRepo.findOne({where: {
      soft,
    }})
    return resumeHard;
  }

  async addNewResumeHard(user_id: number, createResumeHardDto: CreateResumeHardDto) {

    const user = await this.usersService.findOneUserForResume(user_id);
    const softHard = createResumeHardDto.soft

    const skill = await this.findOneByName(softHard)?
    await this.findOneByName(softHard)
    :await this.create(createResumeHardDto)
    user.$add('resume_hard_id', skill)

    return user.$get('resume_hard_id')

  }

  async findHardUser(user_id: number){
    const user = await this.usersService.findOneUserForResume(user_id);
    return user.$get('resume_hard_id')
  }

  async findAll() {
    const resumeHard = await this.ResumeHardRepo.findAll()
    return resumeHard;
  }

  async findOne(id: number) {
    const resumeHard = await this.ResumeHardRepo.findOne({where: {
      id,
    }})
    return resumeHard;
  }

  async update(id: number, updateResumeHardDto: UpdateResumeHardDto) {
    const resumeHard = await this.ResumeHardRepo.update({...updateResumeHardDto}, {where: {id}});
    return resumeHard;
  }

  async updateHardUser(user_id: number, updateResumeHardDto: UpdateResumeHardDto) {
    const user = await this.usersService.findOneUserForResume(user_id);

    const newHard: UpdateResumeHardDto = updateResumeHardDto
    const userHard: any = user.resume_hard_id[0]
    const oldHard: UpdateResumeHardDto = {
      "soft": userHard.soft,
      "description": userHard.description,
      "level_edu": userHard.level_edu,
    }
    
    
    if (newHard.soft === '' && newHard.description === '' && newHard.level_edu === 0) {
      user.$remove('resume_hard_id', await this.findOneByName(oldHard.soft));

    } else if (newHard !== oldHard) {
      user.$remove('resume_hard_id', await this.findOneByName(oldHard.soft));
      
      user.$add('resume_hard_id', await this.findOneByName(newHard.soft)?
      await this.findOneByName(newHard.soft)
      :await this.ResumeHardRepo.create({
        "soft": newHard.soft,
        "description": newHard.description,
        "level_edu": newHard.level_edu,
      }));
    }
  }


  async remove(id: number) {
    const resumeHard = await this.ResumeHardRepo.destroy({where: {id}});
    return resumeHard;
  }
}
