import { ResumeWorkExp } from './models/resume_work_exp.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeWorkExpDto } from './dto/create-resume_work_exp.dto';
import { UpdateResumeWorkExpDto } from './dto/update-resume_work_exp.dto';

@Injectable()
export class ResumeWorkExpService {

  constructor(@InjectModel(ResumeWorkExp) private ResumeWorkExpRepo: typeof ResumeWorkExp) {};

  async create(createResumeWorkExpDto: CreateResumeWorkExpDto) {
    const resumeWorkExp = await this.ResumeWorkExpRepo.create(createResumeWorkExpDto)
    return resumeWorkExp;
  }

  async findAll() {
    const resumeWorkExp = await this.ResumeWorkExpRepo.findAll()
    return resumeWorkExp;
  }

  async findOne(id: number) {
    const resumeWorkExp = await this.ResumeWorkExpRepo.findOne({where: {
      id,
    }})
    return resumeWorkExp;
  }

  async update(id: number, updateResumeWorkExpDto: UpdateResumeWorkExpDto) {
    const resumeWorkExp = await this.ResumeWorkExpRepo.update({...updateResumeWorkExpDto}, {where: {id}});
    return resumeWorkExp;
  }

  async remove(id: number) {
    const resumeWorkExp = await this.ResumeWorkExpRepo.destroy({where: {id}});
    return resumeWorkExp;
  }
}
