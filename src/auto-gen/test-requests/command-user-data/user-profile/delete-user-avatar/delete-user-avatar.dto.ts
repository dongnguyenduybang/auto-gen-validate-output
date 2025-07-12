import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
} from '../../../../decorator/index';

export class DeleteUserAvatarDTO {

  @IsDefined()
  @IsString()
  @isValidURL()
  @IsNotEmpty()
  @IsNotNull()
  avatarPath: string = '';
}
