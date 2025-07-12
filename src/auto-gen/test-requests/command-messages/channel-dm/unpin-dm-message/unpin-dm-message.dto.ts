import { ErrorMessage } from '../../../../enums';
import {
  IsString,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
  IsULID,
  IsBoolean,
} from '../../../../decorator/index';

export class UnpinDmMessageDTO {
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

  @IsBoolean()
  @IsDefined()
  @IsNotNull()
  status: boolean = true;
}
