import { Entity } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Team extends EntityBase {

    @ApiProperty()
    public name: string;

}
