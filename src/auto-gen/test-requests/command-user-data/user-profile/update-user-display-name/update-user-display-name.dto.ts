import {
  IsDefined,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNotNull,
} from '../../../../decorator/index';

export class UpdateUserDisplayNameDTO {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  @MaxLength(50)
  displayName: string = '';
}
