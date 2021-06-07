import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';
import { ServerPropertyEntry } from './ServerPropertyEntry';

@Entity('servers_properties')
@Unique([ 'server', 'name' ])
export class ServerProperty extends EntityBase {

    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty({ enum: ServerPropertyEntry })
    @Column()
    public name: ServerPropertyEntry;

    @ApiProperty()
    @Column()
    public value: string;

}
