import {
  IsChecked,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
  IsOptional,
  IsULID,
} from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

export class SendDmMessageDTO {
  @IsString({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Could not resolve permission type`,
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsChecked({
    message: `Unauthorized request`,
  })
  @IsNotNull({ message: `Could not resolve permission type` })
  userId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
