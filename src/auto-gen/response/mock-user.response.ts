
import { Type } from 'class-transformer';
import { IsBoolean, IsArray, IsString, StartWith, EndWith, IsEnum, IsDefined } from '../decorator/dto-decorator';

import { BadgeEnum } from '../enums/badge.enum';
export class UserData {

    @IsString()
    @IsDefined()
    userId: string;

    @IsString()
    @IsDefined()
    @StartWith('prefix')
    @EndWith('userId')
    username: string;

    @IsString()
    @IsDefined()
    token: string;

    @IsString()
    @IsDefined()
    securityKey: string;

    @IsString()
    @IsDefined()
    recoverKey: string;

    @IsEnum(BadgeEnum)
    @IsDefined()
    badge: BadgeEnum;
}


export class MockUserResponse {
    @IsBoolean()
    @IsDefined()
    ok: boolean;

    @IsArray()
    @IsDefined()
    @Type(() => UserData)
    data: UserData[];
}


