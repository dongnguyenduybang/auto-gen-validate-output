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

export class ListMediaDTO {
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    channelId: string = '';

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
<<<<<<< HEAD
}
=======
}
>>>>>>> feat/hono-dto-2
