import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsEnum } from 'class-validator';
import { BillingTransactionStatus } from './BillingTransactionStatus';
import { BillingPlanEntitlement } from '../Entitlements/BillingPlanEntitlement';
import { User } from '@mc.rehab/models/dist/RBAC/User';

export class BillingTransactionCreate {

    @ApiProperty()
    public user: User;

    @ApiProperty()
    public entitlement: BillingPlanEntitlement;

    @ApiProperty()
    @IsNumber()
    public amount: number;

    @ApiProperty()
    public stripeId: string;

    @ApiProperty()
    @IsEnum(BillingTransactionStatus)
    public status: BillingTransactionStatus;

}
