import { ResumeHard } from './models/resume_hard.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeHardDto } from './dto/create-resume_hard.dto';
import { UpdateResumeHardDto } from './dto/update-resume_hard.dto';

@Injectable()
export class ResumeHardService {

  constructor(@InjectModel(ResumeHard) private ResumeHardRepo: typeof ResumeHard) {};

  async create(createResumeHardDto: CreateResumeHardDto) {
    const resumeHard = await this.ResumeHardRepo.create(createResumeHardDto)
    return resumeHard;
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

  async remove(id: number) {
    const resumeHard = await this.ResumeHardRepo.destroy({where: {id}});
    return resumeHard;
  }
}
