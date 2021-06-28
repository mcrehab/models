import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class UpdateField {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty()
    public value: string;

}