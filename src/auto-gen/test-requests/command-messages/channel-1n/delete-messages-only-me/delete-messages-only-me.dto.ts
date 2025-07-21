import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsNotNull,
  IsArray,
} from '../../../../decorator/index';

export class DeleteMessagesOnlyMeDTO {
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  workspaceId: string = '';

  @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  channelId: string = '';

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
