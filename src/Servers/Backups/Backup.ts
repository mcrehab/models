import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';

@Entity('servers_backups')
export class ServerBackup extends EntityBase {

    @ApiProperty({ type: () => Server })
    @ManyToOne(type => Server)
    public server: Server;

    @ApiProperty()
    public name: string;

}
