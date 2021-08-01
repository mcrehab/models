import { Entity, ManyToMany, JoinTable, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../RBAC/User';
import { Server } from '../Servers/Server';

@Entity('teams')
@Unique([ 'owner', 'name' ])
export class Team extends EntityBase {

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column({ nullable: true })
    public description: string;

    @ApiProperty()
    @ManyToOne(type => User)
    public owner: User;

    @ApiProperty({ type: User, isArray: true })
    @ManyToMany(type => User)
    @JoinTable({ name: 'teams_users' })
    public users: Array<User>;

    @ApiProperty({ type: () => Server, isArray: true })
    @ManyToMany(type => Server, server => server.teams)
    @JoinTable({ name: 'teams_servers' })
    public servers: Array<Server>;

}
