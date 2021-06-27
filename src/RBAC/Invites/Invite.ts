import { Entity, ManyToOne, Column, Unique } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../User';

@Entity({ name: 'invites' })
@Unique([ 'email' ])
export class Invite extends EntityBase {

    @ApiProperty()
    @ManyToOne(() => User)
    public user: User;

    @ApiProperty()
    @Column()
    public email: string;

}