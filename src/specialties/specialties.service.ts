import { Specialties } from './models/specialties.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Injectable()
export class SpecialtiesService {

  constructor(@InjectModel(Specialties) private SpecialtiesRepo: typeof Specialties) {};

  async create(createSpecialtyDto: CreateSpecialtyDto) {
    const specialties = await this.SpecialtiesRepo.create(createSpecialtyDto)
    return specialties;
  }

  async findAll() {
    const specialties = await this.SpecialtiesRepo.findAll()
    return specialties;
  }

  async findOne(id: number) {
    const specialties = await this.SpecialtiesRepo.findOne({where: {
      id,
    }})
    return specialties;
  }

  async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    const specialties = await this.SpecialtiesRepo.update({...updateSpecialtyDto}, {where: {id}});
    return specialties;
  }

  async remove(id: number) {
    const specialties = await this.SpecialtiesRepo.destroy({where: {id}});
    return specialties;
  }
}
