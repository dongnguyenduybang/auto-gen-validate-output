import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsNumber,
    Max,
    Min,
    IsULID,
} from '../../../decorator';

export class JumpToDmMessageDTO {

    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    @IsDefined()
    messageId: string = '';

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @Min(1)
    @Max(500)
    limit: number = 0
}
