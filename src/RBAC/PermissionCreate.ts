import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty }  from 'class-validator';
import { RBAC_TYPE }   from './RBACTypes';
import { Role }        from './Role';

export class PermissionCreate {

    @ApiProperty()
    @IsNotEmpty()
    public name: string;

    @ApiProperty()
    public description: string;

    public type?: RBAC_TYPE;
    public roles?: Array<Role>;

}
