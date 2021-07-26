import { Entity, ManyToOne, Unique, Column } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { BillingPlan } from '../BillingPlan';
import { User } from '../../RBAC/User';
import { Server } from '../../Servers/Server';
import { BillingPlanEntitlementStatus } from './BillingPlanEntitlementStatus';

@Entity('billing_plans_entitlements')
@Unique([ 'user', 'server', 'plan' ])
export class BillingPlanEntitlement extends EntityBase {

    @ApiProperty()
    @ManyToOne(() => User)
    public user: User;

    @ApiProperty()
    @ManyToOne(() => BillingPlan)
    public plan: BillingPlan;

    @ApiProperty()
    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty()
    @Column()
    public status: BillingPlanEntitlementStatus;
    
}
