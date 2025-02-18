import 'reflect-metadata';
import {
  IsNotEmpty,
  IsNotNull,
  MinLength,
  IsNumber,
  IsString,
  Max,
  Min,
  IsEnum,
} from '../../decorator/dto-decorator';
import { BadgeEnum } from '../../enums/badge-enum';

export class MockUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @MinLength(5)
  prefix?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(1)
  @Max(100)
  quantity?: number = 0;

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(0)
  @Max(3)
  @IsEnum(BadgeEnum)
  badge?: BadgeEnum = 0;
}
