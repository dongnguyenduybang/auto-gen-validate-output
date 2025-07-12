import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsULID,
} from '../../../decorator';

export class GetStickerDTO {
    @IsInvalid({ message: 'Message: This sticker has not been exists.' })
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsULID()
    stickerId: string = ''
}
