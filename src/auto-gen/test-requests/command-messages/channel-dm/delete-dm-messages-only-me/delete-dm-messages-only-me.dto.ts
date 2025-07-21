import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsNotNull,
  IsArray,
} from '../../../../decorator/index';

export class DeleteDmMessagesOnlyMeDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsArray({
    decorators: [
      { name: 'IsString' },
      { name: 'IsNotNull' },
      { name: 'IsULID', message: 'Messages not exist' },
    ],
  })
  @IsNotEmpty()
  @IsNotNull()
  @IsDefined()
  messageIds: string[] = [];
}
