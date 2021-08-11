import { ApiProperty } from '@nestjs/swagger';

export class UserLoginResult {

    @ApiProperty()
    public expiresIn: number;

    @ApiProperty()
    public token: string;

}
