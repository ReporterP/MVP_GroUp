import { PartialType } from '@nestjs/swagger';
import { CreateResumeWorkExpDto } from './create-resume_work_exp.dto';

export class UpdateResumeWorkExpDto extends PartialType(CreateResumeWorkExpDto) {}
