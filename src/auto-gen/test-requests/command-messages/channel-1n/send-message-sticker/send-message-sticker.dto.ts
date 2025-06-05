import { ErrorMessage } from '@enum/';
import {
  IsString,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
} from '@decorators/';

export class SendMessageStickerDTO {
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  workspaceId: string = '';

  @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  channelId: string = '';

  @IsInvalid({ message: 'Message: This sticker has not been exists.' })
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  stickerId: string = ''

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  ref: string = '';
}
