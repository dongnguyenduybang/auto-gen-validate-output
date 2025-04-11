import { IsDefined, IsNotEmpty, IsOptional } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

export class SendDmMessageDTO {
  @IsOptional()
  ref: string = '';

  @IsString({
    message: `Invalid channelId`,
    value: '{{userId}}',
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Unsupported permission type`,
  })
  userId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';
}
