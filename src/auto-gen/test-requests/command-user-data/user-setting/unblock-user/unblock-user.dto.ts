import { ErrorMessage } from '../../../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  IsInvalid,
} from '../../../../decorator/index';

export class UnblockUserDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  targetUserId: string = '';
}
