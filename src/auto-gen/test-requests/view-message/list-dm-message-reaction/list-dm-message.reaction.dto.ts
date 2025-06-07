import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsULID,
    MinLength,
    IsEmoji,
} from '../../../decorator';

export class ListDmMessageReactionDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsString()
    @IsNotEmpty()
    @IsULID()
    @IsDefined()
    @MinLength(1)
    messageId: string = '';

    @IsEmoji({ value: 1 })
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    emoji: string = '';
}
