import { ApiProperty } from '@nestjs/swagger';

export class CreateSpecialtyDto {
    @ApiProperty()
    readonly name: string;
}
