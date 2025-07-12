import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
} from '../../../../decorator/index';

export class UpdateUserAvatarDTO {

  @IsDefined()
  @IsString()
  @isValidURL()
  @IsNotEmpty()
  @IsNotNull()
  avatarPath: string = '';
}
