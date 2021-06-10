import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';
import { ServerPropertyEntryName } from './ServerPropertyEntry';

@Entity('servers_properties')
@Unique([ 'server', 'name' ])
export class ServerProperty extends EntityBase {

    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty({ enum: ServerPropertyEntryName })
    @Column()
    public name: ServerPropertyEntryName;

    @ApiProperty()
    @Column()
    public value: string;

}
