import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';

@Entity('servers_players')
@Unique([ 'server', 'name' ])
export class ServerPlayer extends EntityBase {

    @ApiProperty({ type: () => Server })
    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @Column()
    public restrict: boolean;

    @ApiProperty()
    @Column()
    public ips: string;

}
