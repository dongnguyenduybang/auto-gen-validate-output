
import { Type } from 'class-transformer';
import { IsBoolean, IsArray, IsString, IsNumber, StartWith, EndWith, IsEnum } from '../decorator/dto-decorator';

import { BadgeEnum } from '../enums/badge.enum';


export class MockUserResponse {
    @IsBoolean()
    ok: boolean;

    @IsArray()
    @Type(() => UserData)
    data: UserData[];
}

export class UserData {
    @IsString()
    userId: string;

    @IsString()
    @StartWith('prefix')
    @EndWith('userId')
    username: string;

    @IsString()
    token: string;

    @IsString()
    securityKey: string;

    @IsString()
    recoverKey: string;

    @IsEnum(BadgeEnum)
    badge: BadgeEnum;
}

