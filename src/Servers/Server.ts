import { Entity, JoinColumn, OneToMany, ManyToMany, ManyToOne, Unique, Column } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { ServerStatus } from './ServerStatus';
import { ServerProperty } from './Properties/ServerProperty';
import { ServerWhitelist } from './Whitelist/ServerWhitelist';
import { Team } from '../Teams/Team';
import { ServerLog } from './Logs/ServerLog';
import { User } from '../RBAC/User';
import { ServerTypeVersion } from './Types/Versions/ServerTypeVersion';
import { ServerType } from './Types/ServerType';

@Entity('servers')
@Unique([ 'user', 'name' ])
export class Server extends EntityBase {

    @ApiProperty()
    @ManyToOne(type => User)
    public user: User;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @ManyToOne(() => ServerType)
    public type: ServerType;

    @ApiProperty()
    @ManyToOne(() => ServerTypeVersion)
    public typeVersion: ServerTypeVersion;

    @ApiProperty()
    @Column({ nullable: true })
    public address: string;

    @ApiProperty({ type: ServerProperty, isArray: true })
    @OneToMany(type => ServerProperty, properties => properties.server)
    @JoinColumn()
    public properties: Array<ServerProperty>;

    @ApiProperty({ type: ServerWhitelist, isArray: true })
    @OneToMany(type => ServerWhitelist, whitelist => whitelist.server)
    @JoinColumn()
    public whitelist: Array<ServerWhitelist>;

    @ApiProperty({ type: ServerLog, isArray: true })
    @OneToMany(type => ServerLog, logs => logs.server)
    @JoinColumn()
    public logs: Array<ServerLog>;

    @ApiProperty({ type: Team, isArray: true })
    @ManyToMany(type => Team, team => team.servers)
    @JoinColumn()
    public teams: Array<Team>;

    @ApiProperty()
    @Column()
    public status: ServerStatus;

}
