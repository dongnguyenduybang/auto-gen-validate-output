import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsULID,
} from '../../../../decorator/index';

export class SetRingBackToneDTO {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsULID()
  ringbackToneId: string = '';
}
