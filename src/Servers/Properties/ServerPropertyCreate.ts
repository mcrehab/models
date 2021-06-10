import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, Length } from 'class-validator';
import { ServerPropertyEntryName } from './ServerPropertyEntry';

export class ServerPropertyCreate {

    @ApiProperty({ enum: ServerPropertyEntryName })
    @IsEnum(ServerPropertyEntryName)
    public name: ServerPropertyEntryName;

    @ApiProperty()
    @Length(1, 255)
    public value: string;

}