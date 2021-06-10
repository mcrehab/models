import { ApiProperty } from '@nestjs/swagger';
import { BillingMethodType } from './BillingMethodType';
import { IsEnum, Length } from 'class-validator';

export class BillingMethodCreate {

    @ApiProperty()
    @Length(1, 255)
    public name: string;

    @ApiProperty({ enum: BillingMethodType })
    @IsEnum(BillingMethodType)
    public type: BillingMethodType;

    @ApiProperty()
    public email: string;

    @ApiProperty()
    public cardNumber: number;

    @ApiProperty()
    public cardExpirationDate: Date;

    @ApiProperty()
    public cardVerificationCode: number;

}