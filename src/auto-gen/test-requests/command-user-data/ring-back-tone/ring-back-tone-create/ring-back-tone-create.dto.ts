import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
  MaxLength,
  MinLength,
} from '../../../../decorator/index';

export class RingBackToneCreateDTO {
  @IsString()
  @IsDefined()
  @IsNotNull()
  @MinLength(1)
  @MaxLength(255)
  name: string = '';

  @IsDefined()
  @IsString()
  @isValidURL()
  @IsNotNull()
  @MinLength(1)
  ringbackTonePath: string = '';
}
