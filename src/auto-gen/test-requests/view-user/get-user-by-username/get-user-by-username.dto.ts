import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    MinLength,
    IsInvalid,
} from '../../../decorator';

export class GetUserByUsernameDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MinLength(1)
    @IsInvalid({ message: 'User not exists' })
    username: string = '';
}
