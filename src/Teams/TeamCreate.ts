import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class TeamCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    @Length(0, 255)
    public description: string;

}
