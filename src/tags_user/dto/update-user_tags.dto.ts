import { PartialType } from '@nestjs/swagger';
import { CreateUserTagsDto } from './create-user_tags.dto';

export class UpdateUserTagsDto extends PartialType(CreateUserTagsDto) {}
