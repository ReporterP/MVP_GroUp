import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesController } from './specialties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Specialties } from './models/specialties.model';

@Module({
  imports: [SequelizeModule.forFeature([Specialties])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService]
})
export class SpecialtiesModule {}
