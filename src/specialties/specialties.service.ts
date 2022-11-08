import { Specialties } from './models/specialties.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class SpecialtiesService {

  constructor(@InjectModel(Specialties) private SpecialtiesRepo: typeof Specialties,
  private usersService :UsersService) {};

  async create(createSpecialtyDto: CreateSpecialtyDto) {
    const specialties = await this.SpecialtiesRepo.create(createSpecialtyDto)
    return specialties;
  }

  async findOneByName(name: string) {
    const specialties = await this.SpecialtiesRepo.findOne({where: {
      name,
    }})
    return specialties;
  }

  async addNewSpecialties(user_id: number, createSpecialtyDto: CreateSpecialtyDto) {

    const nameSpec = createSpecialtyDto.name
    const user = await this.usersService.findOneUserForResume(user_id);

    const name = await this.findOneByName(nameSpec)?
    await this.findOneByName(nameSpec)
    :await this.SpecialtiesRepo.create({"name": nameSpec})
    user.$add('specialties_id', name)

    return user.$get('specialties_id')

  }

  async findSpecUser(user_id: number){
    const user = await this.usersService.findOneUserForResume(user_id);
    return user.$get('specialties_id')
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

  async updateSpecUser(user_id: number, updateSpecialtyDto : UpdateSpecialtyDto) {
    const user = await this.usersService.findOneUserForResume(user_id);
    const newSpec: string = updateSpecialtyDto.name
    const oldSpec: string = user.specialties_id[0].name
    
    if (newSpec === '') {
      user.$remove('specialties_id', await this.findOneByName(oldSpec));

    } else if (newSpec !== oldSpec) {
      user.$remove('specialties_id', await this.findOneByName(oldSpec));
      
      user.$add('specialties_id', await this.findOneByName(newSpec)?
      await this.findOneByName(newSpec)
      :await this.SpecialtiesRepo.create({"name": newSpec}));
    }
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
