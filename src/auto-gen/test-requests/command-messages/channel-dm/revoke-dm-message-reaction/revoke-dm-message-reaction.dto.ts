import { ErrorMessage } from '../../../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsInvalid,
  IsString,
  IsEmoji,
  IsNotNull,
} from '../../../../decorator';

export class RevokeDmMessageReactionDTO {

  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @IsULID()
  @IsDefined()
  messageId: string = '';

  @IsEmoji({ value: 1 })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  emoji: string = '';

}
