import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../RBAC/User';
import { BillingPlanEntitlement } from '../Entitlements/BillingPlanEntitlement';
import { BillingTransactionStatus } from './BillingTransactionStatus';

@Entity('billing_transactions')
export class BillingTransaction extends EntityBase {

    @ApiProperty()
    @ManyToOne(() => User)
    public user: User;

    @ApiProperty()
    @ManyToOne(() => BillingPlanEntitlement)
    public entitlement: BillingPlanEntitlement;

    @ApiProperty()
    @Column({ type: 'float' })
    public amount: number;

    @ApiProperty()
    @Column()
    public stripeId: string;

    @ApiProperty()
    @Column()
    public status: BillingTransactionStatus;

}
