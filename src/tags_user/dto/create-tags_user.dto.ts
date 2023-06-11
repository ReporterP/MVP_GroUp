import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsUserDto {
    @ApiProperty()
    readonly tag: string;

    @ApiProperty()
    readonly color: string;
}
