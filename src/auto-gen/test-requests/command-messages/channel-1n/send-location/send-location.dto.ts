import { ErrorMessage } from '../../../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  MaxLength,
  MinLength,
  IsNotNull,
  IsOptional,
} from '../../../../decorator';

export class SendLocationDTO {
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
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  @IsNotEmpty()
  @MaxLength(2000)
  content: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  @IsNotEmpty()
  ref: string = '';

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  description: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  @IsNotEmpty()
  latitude: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  @IsNotEmpty()
  longitude: string = '';
}
