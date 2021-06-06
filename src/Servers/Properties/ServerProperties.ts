import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';

@Entity()
export class ServerProperties extends EntityBase {

    @ApiProperty({type: () => Server})
    @ManyToOne(type => Server)
    public server: Server;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public value: string;


}
