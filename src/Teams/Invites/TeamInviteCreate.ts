import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class TeamInviteCreate {

    @ApiProperty()
    @IsEmail()
    public email: string;
    @ApiProperty()

    @Length(0, 255)
    public message: string;

}
