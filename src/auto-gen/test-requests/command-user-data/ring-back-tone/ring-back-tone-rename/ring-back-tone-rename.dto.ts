import {
  IsDefined,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsULID,
  MinLength,
} from '../../../../decorator/index';

export class RingBackToneRenameDTO {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(1)
  name: string = '';

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsULID()
  ringbackToneId: string = '';
}
