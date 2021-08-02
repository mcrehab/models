import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../RBAC/User';
import { Team } from '../Team';
import { TeamInviteStatus } from './TeamInviteStatus';

@Entity('teams_invites')
@Unique([ 'team', 'email' ])
export class TeamInvite extends EntityBase {

    @ApiProperty()
    @ManyToOne(type => User)
    public owner: User;

    @ApiProperty()
    @ManyToOne(type => Team)
    public team: Team;

    @ApiProperty()
    @Column()
    public email: string;

    @ApiProperty()
    @Column()
    public message: string;

    @ApiProperty({ enum: TeamInviteStatus })
    @Column({ type: 'enum', enum: TeamInviteStatus })
    public status: TeamInviteStatus;

    @Column()
    public token: string;


}
