import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class BillingPlanEntitlementCreate {

    @ApiProperty()
    @IsUUID(4)
    public planId: string;

    @ApiProperty()
    @IsUUID(4)
    public serverId: string;

}
