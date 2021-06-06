import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';
import { ServerLogType } from './ServerLogType';

@Entity('servers_logs')
export class ServerLog extends EntityBase {

    @ApiProperty({ type: () => Server })
    @ManyToOne(type => Server)
    public server: Server;

    @ApiProperty()
    public message: string;

    @ApiProperty()
    public type: ServerLogType;

}
