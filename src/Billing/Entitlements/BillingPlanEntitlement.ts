import { Entity, Unique, ManyToOne } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { BillingPlan } from '../BillingPlan';
import { User } from '../../RBAC/User';
import { Server } from '../../Servers/Server';

@Entity('billing_plans_entitlements')
@Unique([ 'name' ])
export class BillingPlanEntitlement extends EntityBase {

    @ApiProperty()
    @ManyToOne(() => BillingPlan)
    public plan: BillingPlan;

    @ApiProperty()
    @ManyToOne(() => Server)
    public server: Server;

    @ApiProperty()
    @ManyToOne(() => User)
    public user: User;

}
