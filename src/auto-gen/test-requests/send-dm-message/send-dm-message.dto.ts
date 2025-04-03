import {
  IsNotEmpty,
  IsString,
  IsDefined,
  MinLength,
  MaxLength,
} from '../../decorator/dto-decorator';

export class SendDmMessageDTO {
  @IsString({
    message: `Unauthorized request`,
    value: '{{userId_1}}',
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Could not resolve permission type`,
  })
  userId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';
}
