import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeSoftDto {
    @ApiProperty()
    readonly soft: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly level_edu: number;
}
