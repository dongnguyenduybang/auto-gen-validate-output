import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsULID,
} from '../../../decorator';

export class ListStickerDTO {
    @IsInvalid({ message: 'This collection has not been exists' })
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsULID()
    collectionId: string = ''
}
