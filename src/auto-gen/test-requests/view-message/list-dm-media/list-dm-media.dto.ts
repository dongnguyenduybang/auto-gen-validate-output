import { AttachmentTypeEnum, ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    Min,
    Max,
    IsNumber,
    IsEnum,
    IsOptional,
    IsULID,
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
    @IsNotNull()
    type: AttachmentTypeEnum = 0;

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @Min(1)
    @Max(500)
    @IsOptional()
    limit: number = 0

    @IsULID()
    @IsNotNull()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nextPageToken: string = ''
}
