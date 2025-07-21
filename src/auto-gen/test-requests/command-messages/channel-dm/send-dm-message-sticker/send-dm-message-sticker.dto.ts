import { ErrorMessage } from '../../../../enums/index';
import {
  IsString,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
} from '../../../../decorator/index';

export class SendDmMessageStickerDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsInvalid({ message: 'Message: This sticker has not been exists.' })
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  stickerId: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  ref: string = '';
}
