import { AttachmentTypeEnum, ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsNumber,
    IsEnum,
    IsOptional,
    IsULID,
    RangeNumber,
} from '../../../decorator';

export class ListDmMediaDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsEnum(AttachmentTypeEnum)
    @IsDefined()
    @IsNotEmpty()
    type: AttachmentTypeEnum = 0;

    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    @RangeNumber(1, 500)
    @IsOptional()
    limit: number = 0

    @IsULID()
    @IsNotNull()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nextPageToken: string = ''
}
