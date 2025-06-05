import {
  IsString,
  MaxLength,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsULID,
} from '../../../../decorator/index';

export class UpdateDmMessageDTO {
  @IsString({ message: `Could not resolve permission type` })
  @IsDefined({ message: `Could not resolve permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unauthorized request` })
  userId: string = '';

  @IsString()
  @IsDefined()
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
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
