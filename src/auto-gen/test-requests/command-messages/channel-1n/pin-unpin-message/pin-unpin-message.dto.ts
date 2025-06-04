import { ErrorMessage } from '../../../../enums';
import {
  IsString,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
  IsULID,
  IsBoolean,
} from '../../../../decorator';

export class PinUnpinMessageDTO {
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  workspaceId: string = '';

  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  channelId: string = '';

  @IsString()
  @IsULID()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  messageId: string = '';

  @IsBoolean()
  @IsDefined()
  @IsNotNull()
  @IsNotEmpty()
  status: boolean = true;
}
