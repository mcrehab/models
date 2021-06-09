import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches, IsBoolean } from 'class-validator';

export class ServerCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    @Length(0, 255)
    public description: string;

    @ApiProperty()
    @Matches(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
    public type: string;

    @ApiProperty()
    @Matches(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
    public typeVersion: string;

    @ApiProperty()
    @IsBoolean()
    public public: boolean;

}
