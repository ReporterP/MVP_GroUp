import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsPostDto {
    @ApiProperty()
    readonly tag: string;

    @ApiProperty()
    readonly color: string;
}
