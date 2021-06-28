import { ApiProperty } from '@nestjs/swagger';

export class UpdateField {

    @ApiProperty()
    public fieldName: string;

    @ApiProperty()
    public fieldValue: string;

}