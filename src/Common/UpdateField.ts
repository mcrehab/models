import { ApiProperty } from '@nestjs/swagger';

export class UpdateField {

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public value: string;

}