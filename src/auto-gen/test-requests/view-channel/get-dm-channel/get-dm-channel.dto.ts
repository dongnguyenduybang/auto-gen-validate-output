import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsInvalid,
    IsNotEmpty,
    IsNotNull,
    IsString,
} from '../../../decorator';

export class GetDmChannelDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';
}
