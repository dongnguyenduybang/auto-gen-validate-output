import { ErrorMessage } from '../../../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsInvalid,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNotNull,
} from '../../../../decorator';

export class UpdateMessageDTO {
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
  @IsULID()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  messageId: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsOptional()
  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
