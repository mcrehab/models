import { ApiProperty } from '@nestjs/swagger';
import { BillingPlanFrequency } from './BillingPlanFrequency';

export class BillingPlanCreate {

    @ApiProperty()
    public active: boolean;

    @ApiProperty()
    public name: string;

    @ApiProperty({ enum: BillingPlanFrequency })
    public frequency: BillingPlanFrequency;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public cpu: number;

    @ApiProperty()
    public memory: number;

    @ApiProperty()
    public disk: number;

    @ApiProperty()
    public amount: number;

    @ApiProperty()
    public stampStart: Date;

    @ApiProperty()
    public stampEnd: Date;

}
