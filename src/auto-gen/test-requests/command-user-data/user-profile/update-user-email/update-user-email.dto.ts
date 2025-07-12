import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
} from '../../../../decorator/index';

export class UpdateUserEmailDTO {

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  email: string = '';
}
