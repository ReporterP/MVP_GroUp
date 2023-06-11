import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    readonly telegram_id: any;

    @ApiProperty()
    readonly telegram_name: string;

    @ApiProperty()
    readonly name: string;
}
