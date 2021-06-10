import { Entity, Unique, Column, OneToOne, JoinColumn } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../RBAC/User';

@Entity('billing_methods')
@Unique([ 'user', 'name' ])
export class BillingMethod extends EntityBase {

    @ApiProperty()
    @OneToOne(() => User)
    @JoinColumn()
    public user: User;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @Column()
    public stripeId: string;

    @ApiProperty()
    @Column()
    public expires: Date;

}
