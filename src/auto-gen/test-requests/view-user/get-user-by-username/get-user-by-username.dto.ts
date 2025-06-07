import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    MinLength,
} from '../../../decorator';

export class GetUserByUsernameDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MinLength(1)
    username: string = '';
}
