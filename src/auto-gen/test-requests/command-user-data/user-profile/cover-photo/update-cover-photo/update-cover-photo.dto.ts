import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNotNull,
  isValidURL,
} from '../../../../../decorator/index';

export class UpdateCoverPhotoDTO {
  @IsDefined()
  @IsString()
  @isValidURL()
  @IsNotEmpty()
  @IsNotNull()
  coverPath: string = '';
}
