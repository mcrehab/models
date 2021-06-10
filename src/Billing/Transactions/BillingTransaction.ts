import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../RBAC/User';
import { BillingPlanEntitlement } from '../Entitlements/BillingPlanEntitlement';

@Entity('billing_transactions')
export class BillingTransaction extends EntityBase {

    @ApiProperty()
    @OneToOne(() => User)
    @JoinColumn()
    public user: User;

    @ApiProperty()
    @ManyToOne(() => BillingPlanEntitlement)
    public entitlement: BillingPlanEntitlement;
    
    @ApiProperty()
    @Column()
    public amount: number;

    @ApiProperty()
    @Column()
    public stripeId: string;

}
