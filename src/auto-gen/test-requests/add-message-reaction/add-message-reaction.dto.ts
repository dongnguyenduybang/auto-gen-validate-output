import { ErrorMessage } from '../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsInvalid,
  IsOptional,
  IsString,
  IsEmoji,
  IsNotNull,
} from '../../decorator';

export class AddMessageReactionDTO {
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

  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @IsULID()
  @IsDefined()
  messageId: string = '';

  @IsEmoji({ value: 1 })
  @IsDefined()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsNotNull()
  emoji: string = '';

}
