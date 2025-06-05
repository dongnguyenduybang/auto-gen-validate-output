import {
  IsString,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
  IsULID,
  IsBoolean,
} from '@decorators/';

export class PinUnpinDmMessageDTO {
  @IsString({ message: `Could not resolve permission type` })
  @IsDefined({ message: `Could not resolve permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unauthorized request` })
  @IsNotNull({ message: `Could not resolve permission type` })
  userId: string = '';

  @IsString()
  @IsULID()
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  messageId: string = '';

  @IsBoolean()
  @IsDefined()
  @IsNotNull()
  status: boolean = true;
}
