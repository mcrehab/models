import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { ServerProperties } from './Properties/ServerProperties';

@Entity('servers')
export class Server extends EntityBase {

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public address: string;

    @ApiProperty({ type: ServerProperties, isArray: true })
    @OneToMany(type => ServerProperties, properties => properties.server)
    @JoinColumn()
    public properties: Array<ServerProperties>
   
}
