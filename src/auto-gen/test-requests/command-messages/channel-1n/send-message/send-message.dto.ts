// import { ErrorMessage } from '../../../../enums';
// import {
//   IsDefined,
//   IsNotEmpty,
//   IsInvalid,
//   IsString,
//   MaxLength,
//   MinLength,
//   IsNotNull,
// } from '../../../../decorator/index';

// export class SendMessageDTO {
//   @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
//   @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   workspaceId: string = '';

//   @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
//   @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
//   @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
//   channelId: string = '';

//   @IsString()
//   @IsDefined()
//   @IsNotEmpty()
//   @IsNotNull()
//   @MinLength(1)
//   @MaxLength(2000)
//   content: string = '';

//   @IsString()
//   @IsDefined()
//   @MinLength(1)
//   ref: string = '';
// }
