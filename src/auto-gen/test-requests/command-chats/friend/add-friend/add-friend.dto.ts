import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsInvalid,
  IsNotEmpty,
  IsString,
  IsNotNull,
} from '../../../../decorator/index';

export class AddFriendDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

}
