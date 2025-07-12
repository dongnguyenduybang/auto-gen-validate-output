import {
  IsArray,
  Type,
  ValidateNested,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsNotNull,
  IsInvalid,
  IsEnum,
  MinLength,
  IsObject,
  isValidURL,
} from '../../../../decorator';
import { AttachmentTypeEnum, ErrorMessage } from '../../../../enums';

class FileMetadataDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  mimetype: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  filename: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  extension: string = '';
}

class MediaObjectDto {
  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  attachmentType: AttachmentTypeEnum = 0;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @isValidURL()
  fileUrl: string = '';

  @ValidateNested()
  @Type(() => FileMetadataDto)
  fileMetadata: FileMetadataDto = undefined;
}

export class UpdateDmMediaAttachmentDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  attachmentType: AttachmentTypeEnum = 0;

  @IsString()
  @IsDefined()
  @MinLength(1)
  @IsNotNull()
  ref: string = '';

  @IsArray({
    decorators: [
      { name: 'IsObject' },
      { name: 'IsUnique' },
      { name: 'IsNotNull' },
      { name: 'MinArrayItem', params: 1 },
    ],
  })
  @ValidateNested({ each: true })
  @IsDefined()
  @IsNotEmpty()
  @IsNotNull()
  @Type(() => MediaObjectDto)
  mediaObjects: MediaObjectDto[] = [];
}
