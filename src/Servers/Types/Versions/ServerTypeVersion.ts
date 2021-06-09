import { Entity, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ServerType } from '../ServerType';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';

@Entity('server_types_versions')
export class ServerTypeVersion extends EntityBase {

    @ManyToOne(() => ServerType)
    public type: ServerType;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @Column()
    public version: string;

    @ApiProperty()
    @Column()
    public jarUrl: string;

    @ApiProperty()
    @Column()
    public siteUrl: string;

}