import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    IsInvalid,
} from '../../../../../decorator/index';
import { ErrorMessage } from '../../../../../enums/index';

export class DeleteUserVisitProfileDTO {

    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';
}
