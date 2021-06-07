import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Organization } from './Organization';
import { RBAC_TYPE } from './RBACTypes';
import { Role } from './Role';

@Entity({ name: 'rbac_permissions' })
@Index([ 'organization', 'name' ], { unique: true })
export class Permission extends EntityBase {

    @ApiProperty()
    @IsUUID('4')
    @ManyToOne(type => Organization, organization => organization.permissions, { eager: true })
    public organization?: Organization;

    @ApiProperty()
    @Column()
    public name?: string;

    @ApiProperty()
    @Column()
    public description?: string;

    @ApiProperty()
    @ManyToMany(type => Role, role => role.permissions, { cascade: true })
    @JoinTable({
        name: 'rbac_permissions_roles_links',
        joinColumn: { name: 'permission_id' },
        inverseJoinColumn: { name: 'role_id' }
    })
    public roles?: Array<Role>;

    @ApiProperty()
    @Column()
    public type: RBAC_TYPE;

}
