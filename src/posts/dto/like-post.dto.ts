import { ApiProperty } from '@nestjs/swagger';

export class LikePostDto {
    @ApiProperty()
    readonly user_like_id: number;

    @ApiProperty()
    readonly post_like_id: number;
}