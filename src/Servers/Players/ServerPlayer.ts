import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';

@Entity('servers_players')
export class ServerPlayer extends EntityBase {

    @ApiProperty({ type: () => Server })
    @ManyToOne(type => Server)
    public server: Server;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public ip: string;

}
