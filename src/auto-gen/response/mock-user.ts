import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IsString } from '../decorator/string-decorator';
import { IsDefined } from '../decorator/general-decorator';
import { IsNumber } from '../decorator/number-decorator';
import { IsBoolean } from '../decorator/boolean-decorator';
import { IsArray } from '../decorator/array-decorator';
export class MockUserData {
  @IsString()
  @IsDefined()
  userId: string;

  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  token: string;

  @IsString()
  @IsDefined()
  securityKey: string;

  @IsString()
  @IsDefined()
  recoverKey: string;

  @IsNumber()
  @IsDefined()
  badge: number;
}

export class MockUserResponse  {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;
  
  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => MockUserData)
  data: MockUserData[];
}