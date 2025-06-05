import { ErrorMessage } from '../../../../enums/index';
import {
    IsString,
    MinLength,
    IsInvalid,
    IsDefined,
    IsNotEmpty,
    IsNotNull,
} from '../../../../decorator/index';

export class SendPokeMessageDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsString()
    @IsDefined()
    @MinLength(1)
    @IsNotNull()
    @IsNotEmpty()
    ref: string = '';
}
