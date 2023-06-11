import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeWorkExpDto {
    @ApiProperty()
    readonly profession: string;

    @ApiProperty()
    readonly work_time: string;

    @ApiProperty()
    readonly description: string;
}
