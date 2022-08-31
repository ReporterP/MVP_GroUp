import { PartialType } from '@nestjs/swagger';
import { CreateResumeHardDto } from './create-resume_hard.dto';

export class UpdateResumeHardDto extends PartialType(CreateResumeHardDto) {}
