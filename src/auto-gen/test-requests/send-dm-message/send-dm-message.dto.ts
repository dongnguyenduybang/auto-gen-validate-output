import {
  IsString,
  MaxLength,
  MinLength,
  IsInvalid,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
} from '../../decorator';

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
  @IsInvalid({
    message: `Unauthorized request`,
  })
  @IsNotNull({ message: `Could not resolve permission type` })
  userId: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
