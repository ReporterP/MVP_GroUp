import { ApiProperty } from '@nestjs/swagger';

export class CreateUserTagsDto {
    @ApiProperty()
    readonly tags: Array<any>;
}
