import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { Server } from '../Server';

@Entity('servers_backups')
@Unique([ 'server', 'name' ])
export class ServerBackup extends EntityBase {

    public static editable = [ 'name', 'description' ];
    @ApiProperty({ type: () => Server })
    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column({ nullable: true })
    public description: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: true })
    public output: string;

    @ApiProperty()
    @Column({ nullable: true })
    public size: number;

}
