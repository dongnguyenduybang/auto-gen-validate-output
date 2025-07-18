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
    @IsInvalid({ message: 'User not exists' })
    username: string = '';
}
