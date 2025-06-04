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

export class SendDmLocationDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

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
