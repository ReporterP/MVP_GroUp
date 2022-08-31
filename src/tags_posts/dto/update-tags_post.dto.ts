import { PartialType } from '@nestjs/swagger';
import { CreateTagsPostDto } from './create-tags_post.dto';

export class UpdateTagsPostDto extends PartialType(CreateTagsPostDto) {}
