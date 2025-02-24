import 'reflect-metadata';
import {
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsString,
  Max,
  Min,
  IsEnum,
  IsDefined,
} from '../../decorator/dto-decorator';
import { BadgeEnum } from '../../enums/badge.enum';

export class MockUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(5)
  prefix?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  quantity?: number = 0;

  @IsNotEmpty()
  @IsEnum(BadgeEnum)
  badge?: BadgeEnum = 0;
}
