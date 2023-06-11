import { ApiProperty } from '@nestjs/swagger';

export class AuthCreateUserDto {
    @ApiProperty()
    readonly telegram_id: number;

    @ApiProperty()
    readonly telegram_name: string;

    @ApiProperty()
    readonly name: string;
}
