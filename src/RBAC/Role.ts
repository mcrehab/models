import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Column, Entity, Index, ManyToMany, ManyToOne } from 'typeorm';
import { Organization } from './Organization';
import { Permission } from './Permission';
import { RBAC_TYPE } from './RBACTypes';
import { User } from './User';

@Entity({ name: 'rbac_roles' })
@Index([ 'organization', 'name' ], { unique: true })
export class Role extends EntityBase {

    @ApiProperty()
    @IsUUID('4')
    @ManyToOne(type => Organization, organization => organization.roles, { eager: true })
    public organization?: Organization;

    @ApiProperty()
    @Column()
    public name?: string;

    @ApiProperty()
    @Column()
    public description?: string;

    @ApiProperty()
    @ManyToMany(type => Permission, permission => permission.roles, { eager: true, onDelete: 'CASCADE' })
    public permissions?: Array<Permission>;

    @ApiProperty()
    @ManyToMany(type => User, user => user.roles, { onDelete: 'CASCADE' })
    public users?: Array<User>;

    @ApiProperty()
    @Column()
    public type: RBAC_TYPE;

}
