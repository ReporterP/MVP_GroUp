import { PartialType } from '@nestjs/swagger';
import { CreateResumeSoftDto } from './create-resume_soft.dto';

export class UpdateResumeSoftDto extends PartialType(CreateResumeSoftDto) {}
