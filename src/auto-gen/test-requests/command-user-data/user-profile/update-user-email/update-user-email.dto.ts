import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
} from '../../../../decorator/index';

export class UpdateUserEmailDTO {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  email: string = '';
}
