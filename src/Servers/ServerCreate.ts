import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches } from 'class-validator';

export class ServerCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    @Length(0, 255)
    public description: string;

    @ApiProperty()
    @Matches(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
    public type: string;

    @ApiProperty()
    @Matches(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
    public typeVersion: string;

}
