import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
} from '../../../../../decorator/index';

export class AddCoverPhotoDTO {
  @IsDefined()
  @IsString()
  @isValidURL()
  @IsNotEmpty()
  @IsNotNull()
  coverPath: string = '';
}
