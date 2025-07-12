import {
  IsDefined,
  IsEnum,
  IsOptional,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmoji,
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
