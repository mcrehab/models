import { Entity, Unique, Column } from 'typeorm';
import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { ApiProperty } from '@nestjs/swagger';
import { BillingPlanFrequency } from './BillingPlanFrequency';

@Entity('billing_plans')
@Unique([ 'name' ])
export class BillingPlan extends EntityBase {

    @ApiProperty()
    @Column()
    public active: boolean;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty({ enum: BillingPlanFrequency })
    @Column()
    public frequency: BillingPlanFrequency;

    @ApiProperty()
    @Column()
    public description: string;

    @ApiProperty()
    @Column()
    public cpu: number;

    @ApiProperty()
    @Column()
    public memory: number;

    @ApiProperty()
    @Column()
    public disk: number;

    @ApiProperty()
    @Column({ type: 'float' })
    public amount: number;

    @ApiProperty()
    @Column()
    public stampStart: Date;

    @ApiProperty()
    @Column()
    public stampEnd: Date;

}
