import { Entity, Unique, ManyToOne, OneToOne, Server } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { BillingPlan } from '../BillingPlan';
import { User } from '../../RBAC/User';

@Entity('billing_plans_entitlements')
@Unique([ 'name' ])
export class BillingPlanEntitlement extends EntityBase {

    @ApiProperty()
    @ManyToOne(() => BillingPlan)
    public plan: BillingPlan;

    @ApiProperty()
    @OneToOne(() => Server)
    public server: Server;
    
    @ApiProperty()
    @ManyToOne(() => User)
    public user: User;

}
