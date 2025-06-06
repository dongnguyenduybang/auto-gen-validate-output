import { ErrorMessage } from '../../../../enums';
import {
  IsString,
  MaxLength,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
} from '../../../../decorator/index';

export class SendDmMessageDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
