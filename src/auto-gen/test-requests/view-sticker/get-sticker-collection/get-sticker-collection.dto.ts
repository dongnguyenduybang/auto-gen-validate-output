import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsULID,
} from '../../../decorator';

export class GetStickerCollectionDTO {
    @IsInvalid({ message: 'This collection has not been exists' })
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsULID()
    collectionId: string = ''
}
