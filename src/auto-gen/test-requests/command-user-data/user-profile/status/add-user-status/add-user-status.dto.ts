import {
  IsDefined,
  IsEnum,
  IsOptional,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmoji,
  IsNotNull,
} from '../../../../../decorator/index';
import { ExpireAfterTimeEnum } from '../../../../../enums/index';

export class AddUserStatusDTO {
  @IsOptional()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  @MaxLength(50)
  content: string = '';

  @IsEmoji({ value: 1 })
  @IsDefined()
  @IsString()
  @IsOptional()
  @IsNotNull()
  status: string = '';

  @IsEnum(ExpireAfterTimeEnum)
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  expireAfterTime: ExpireAfterTimeEnum = 0;
}
