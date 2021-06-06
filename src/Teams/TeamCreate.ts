import { ApiProperty } from '@nestjs/swagger';

export class TeamCreate {

    @ApiProperty()
    public name: string;
    
}
