import { ErrorMessage } from '../../../../enums';
import {
  IsString,
  MaxLength,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsNotNull,
  IsOptional,
} from '../../../../decorator/index';

export class UpdateDmMessageDTO {
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
  @IsNotEmpty()
  @IsULID()
  @IsDefined()
  @MinLength(1)
  messageId: string = '';

  @IsString()
  @IsOptional()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
