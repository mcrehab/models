import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ServerTypeVersion } from './Versions/ServerTypeVersion';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';

@Entity('server_types')
export class ServerType extends EntityBase {

    @OneToMany(() => ServerTypeVersion, version => version.type, { cascade: true })
    public versions: Array<ServerTypeVersion>;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @Column()
    public logo: string;

}