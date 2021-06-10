import { ApiProperty } from '@nestjs/swagger';
import { BillingPlanFrequency } from './BillingPlanFrequency';
import { IsBoolean, Length, IsEnum, IsNumber, IsDateString } from 'class-validator';

export class BillingPlanCreate {

    @ApiProperty()
    @IsBoolean()
    public active: boolean;

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty({ enum: BillingPlanFrequency })
    @IsEnum(BillingPlanFrequency)
    public frequency: BillingPlanFrequency;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    @IsNumber()
    public cpu: number;

    @ApiProperty()
    @IsNumber()
    public memory: number;

    @ApiProperty()
    @IsNumber()
    public disk: number;

    @ApiProperty()
    @IsNumber()
    public amount: number;

    @ApiProperty()
    @IsDateString()
    public stampStart: Date;

    @ApiProperty()
    public stampEnd: Date;

}
