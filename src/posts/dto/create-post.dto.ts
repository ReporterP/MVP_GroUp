import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty()
    readonly type: string;

    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly text: string;

    @ApiProperty()
    readonly picture: any;

    @ApiProperty()
    readonly user_id;

    @ApiProperty()
    readonly tags: Array<string>;
}
