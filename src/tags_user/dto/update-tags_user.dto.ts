import { PartialType } from '@nestjs/swagger';
import { CreateTagsUserDto } from './create-tags_user.dto';

export class UpdateTagsUserDto extends PartialType(CreateTagsUserDto) {}
