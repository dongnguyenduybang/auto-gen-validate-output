import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, ValidateNested } from 'class-validator';

export class UserDTO {

    @IsString()
    userId: string;

    @IsString()
    username?: string;

    @IsString()
    token: string;

    @IsString()
    securityKey: string;

    @IsString()
    recoverKey?: string;

    @IsNumber()
    badge: number;
}

export class MockUserDTOResponse {
    @IsBoolean()
    ok: boolean;

    @ValidateNested({ each: true })
    @Type(() => UserDTO)
    data: UserDTO[];
}
