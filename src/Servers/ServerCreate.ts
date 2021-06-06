import { ApiProperty } from '@nestjs/swagger';

export class ServerCreate {

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public description: string;

}
