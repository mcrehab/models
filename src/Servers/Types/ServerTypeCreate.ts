import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class ServerTypeCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    @Length(0, 255)
    public description: string;

    @ApiProperty()
    @Length(0, 255)
    public logo: string;

}
