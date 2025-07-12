import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
} from '../../../decorator';

export class SubscribeAllDTO {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsNotNull()
    appId: string = '';

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsNotNull()
    deviceToken: string = '';
}
