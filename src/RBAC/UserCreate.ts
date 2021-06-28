import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UserCreate {

    @ApiProperty()
    @IsEmail()
    public email?: string;

    @ApiProperty()
    public firstName?: string;

    @ApiProperty()
    public lastName?: string;

    @ApiProperty()
    public subscribe?: boolean;

}
