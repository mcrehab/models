import { Entity, OneToMany } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../RBAC/User';
import { Server } from '../Servers/Server';

@Entity('teams')
export class Team extends EntityBase {

    @ApiProperty()
    public name: string;

    @ApiProperty({ type: User, isArray: true })
    @OneToMany(type => User, user => user.teams)
    public users: Array<User>;

    @ApiProperty({ type: () => Server, isArray: true })
    @OneToMany(type => Server, server => server.teams)
    public servers: Array<Server>;

}
