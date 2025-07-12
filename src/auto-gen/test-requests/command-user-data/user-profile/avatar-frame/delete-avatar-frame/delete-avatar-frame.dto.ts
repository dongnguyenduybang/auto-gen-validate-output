import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    IsULID,
} from '../../../../../decorator/index';

export class DeleteAvatarFrameDTO {

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    avatarFrameId: string = '';
}
