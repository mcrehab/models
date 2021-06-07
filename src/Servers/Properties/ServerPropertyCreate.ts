import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, Length } from 'class-validator';
import { ServerPropertyEntry } from './ServerPropertyEntry';

export class ServerPropertyCreate {

    @ApiProperty({ enum: ServerPropertyEntry })
    @IsEnum(ServerPropertyEntry)
    public name: ServerPropertyEntry;

    @ApiProperty()
    @Length(1, 255)
    public value: string;

}