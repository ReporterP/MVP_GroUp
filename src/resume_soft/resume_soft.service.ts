import { ResumeSoft } from './models/resume_soft.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeSoftDto } from './dto/create-resume_soft.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ResumeSoftService {

  constructor(@InjectModel(ResumeSoft) private ResumeSoftRepo: typeof ResumeSoft,
    private usersService: UsersService) { };

  async create(createResumeSoftDto: CreateResumeSoftDto) {
    const resumeSoft = await this.ResumeSoftRepo.create(createResumeSoftDto)
    return resumeSoft;
  }

  async findOneByParams(ResumeSoftParams: any) {
    
    const soft = ResumeSoftParams.soft;
    const description = ResumeSoftParams.description;
    const level_edu = ResumeSoftParams.level_edu;

    const resumeSoft = await this.ResumeSoftRepo.findOne({
      where: {
        soft,
        description,
        level_edu,
      }
    })
    return resumeSoft;
  };

  async addNewRSforUser(user: any, newResumeSoft: Array<CreateResumeSoftDto>) {

    // add new resumeSoft for user and create new resumeSoft

    newResumeSoft.map(async e => {
      user.$add('resume_soft_id', await this.findOneByParams(e) ?
        await this.findOneByParams(e)
        : await this.create(e));
    });
  };

  async deleteOldRSforUser(user: any, newResumeSoft: Array<CreateResumeSoftDto>, oldResumeSoft: any) {

    // delete old resumeSoft for user

    oldResumeSoft.map(async e => {
      newResumeSoft
        .map(el => JSON.stringify(el))
        .indexOf(
          JSON.stringify(e)) == -1 ?
        user.$remove('resume_soft_id', await this.findOneByParams(e))
        : 0;
    });
  };


  async addNewResumeSoft(user_id: number, createResumeSoftDto: Array<CreateResumeSoftDto>) {

    let user = await this.usersService.findOneUserForResume(user_id);
    this.deleteOldRSforUser(user, createResumeSoftDto, user.resume_soft_id);
    this.addNewRSforUser(user, createResumeSoftDto);

    return createResumeSoftDto;

  };

  async findSoftUser(user_id: number) {
    const user = await this.usersService.findOneUserForResume(user_id);
    return user.$get('resume_soft_id')
  };


}
