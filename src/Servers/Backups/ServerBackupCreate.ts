import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ServerBackupCreate {

    @ApiProperty()
    @IsString()
    public name: string;

    @ApiProperty()
    public description: string;
    
}