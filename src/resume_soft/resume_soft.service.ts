import { ResumeSoft } from './models/resume_soft.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResumeSoftDto } from './dto/create-resume_soft.dto';
import { UpdateResumeSoftDto } from './dto/update-resume_soft.dto';

@Injectable()
export class ResumeSoftService {

  constructor(@InjectModel(ResumeSoft) private ResumeSoftRepo: typeof ResumeSoft) {};

  async create(createResumeSoftDto: CreateResumeSoftDto) {
    const resumeSoft = await this.ResumeSoftRepo.create(createResumeSoftDto)
    return resumeSoft;
  }

  async findAll() {
    const resumeSoft = await this.ResumeSoftRepo.findAll()
    return resumeSoft;
  }

  async findOne(id: number) {
    const resumeSoft = await this.ResumeSoftRepo.findOne({where: {
      id,
    }})
    return resumeSoft;
  }

  async update(id: number, updateResumeSoftDto: UpdateResumeSoftDto) {
    const resumeSoft = await this.ResumeSoftRepo.update({...updateResumeSoftDto}, {where: {id}});
    return resumeSoft;
  }

  async remove(id: number) {
    const resumeSoft = await this.ResumeSoftRepo.destroy({where: {id}});
    return resumeSoft;
  }
}
