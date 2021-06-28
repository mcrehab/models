import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class ServerPlayerCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public ip: string;

}