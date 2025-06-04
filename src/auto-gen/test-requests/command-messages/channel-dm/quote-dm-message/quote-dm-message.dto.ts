import { ErrorMessage } from '../../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    MaxLength,
    MinLength,
    IsULID,
    IsNotNull,
} from '../../../../decorator';

export class QuoteDmMessageDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsString()
    @IsULID()
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    messageId: string = '';

    @IsString()
    @IsDefined()
    @MinLength(1)
    @IsNotNull()
    @IsNotEmpty()
    @MaxLength(2000)
    content: string = '';

    @IsString()
    @IsDefined()
    @MinLength(1)
    @IsNotNull()
    @IsNotEmpty()
    ref: string = '';
}
