import { Entity } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Server extends EntityBase {

    @ApiProperty()
    public username: string;

    @ApiProperty()
    public description: string;

}
