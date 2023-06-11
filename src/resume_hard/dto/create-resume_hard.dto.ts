import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeHardDto {
    @ApiProperty()
    readonly hard: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly level_edu: number;
}
