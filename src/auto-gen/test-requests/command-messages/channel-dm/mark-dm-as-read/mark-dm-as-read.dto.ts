import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsULID,
  IsNotNull,
} from '../../../../decorator/index';

export class MarkDmAsReadDTO {
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
}
