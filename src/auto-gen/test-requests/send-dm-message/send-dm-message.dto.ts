import { IsDefined, IsNotEmpty, IsNotNull, IsOptional, IsULID } from '../../decorator/general-decorator';
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
  @IsULID({
    message: `Unauthorized request`,
  })
  @IsNotNull(
    { message: `Could not resolve permission type`,}
  )
  userId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsNotNull()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';

  @IsOptional()
  @IsString( { message: `TypeError: value.trim is not a function`,})
  @IsNotEmpty()
  ref: string = '';
}
