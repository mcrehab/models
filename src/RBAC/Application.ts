import { EntityBase }                       from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty }                      from '@nestjs/swagger';
import { Length }                           from 'class-validator';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { Organization }                     from './Organization';

@Entity('rbac_applications')
@Index([ 'organization', 'name' ], { unique: true })
export class Application extends EntityBase {

    @Length(1, 32)
    @ApiProperty()
    @Column()
    public name: string;

    @Length(0, 255)
    @ApiProperty()
    @Column({ nullable: true })
    public description: string;

    @ManyToOne(type => Organization)
    public organization: Organization;

}
