import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsULID,
    IsEmoji,
    IsOptional,
    IsNumber,
    Max,
    Min,
} from '../../../decorator';

export class ListMessageReactionDTO {
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

    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    @IsDefined()
    messageId: string = '';

    @IsEmoji({ value: 1 })
    @IsDefined()
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @IsNotNull()
    emoji: string = '';

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @Min(1)
    @Max(500)
    limit: number = 0
}
