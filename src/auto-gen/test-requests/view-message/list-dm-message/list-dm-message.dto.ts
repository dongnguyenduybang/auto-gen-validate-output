import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
    IsNotNull,
    IsNumber,
    IsOptional,
    RangeNumber,
} from '../../../decorator';

export class ListDmMessageDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @RangeNumber(1, 500)
    limit: number = 0
}
