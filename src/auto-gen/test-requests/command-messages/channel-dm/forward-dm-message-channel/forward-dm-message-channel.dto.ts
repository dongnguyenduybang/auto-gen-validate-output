import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsArray,
  MinArray,
  IsNotNull,
} from '../../../../decorator/index';

export class ForwardDmMessageChannelDTO {
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
  userId: string = '';

  @IsArray({
    decorators: [
      { name: 'IsString' },
      {
        name: 'IsULID',
        message: `Code: 404. Message: Data not found. Details: Data not found.`,
      },
      { name: 'IsUnique' },
      { name: 'IsNotNull' },
      { name: 'MinArrayItem', params: 1 },
    ],
  })
  @IsDefined()
  @MinArray(1)
  originalMessageIds: string[] = [];
}
