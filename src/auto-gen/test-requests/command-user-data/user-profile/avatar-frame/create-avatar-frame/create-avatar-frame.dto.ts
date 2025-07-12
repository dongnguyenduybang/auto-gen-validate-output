import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    isValidURL,
} from '../../../../../decorator/index';

export class CreateAvatarFrameDTO {

    @IsDefined()
    @IsString()
    @isValidURL()
    @IsNotEmpty()
    @IsNotNull()
    avatarFramePath: string = '';
}
