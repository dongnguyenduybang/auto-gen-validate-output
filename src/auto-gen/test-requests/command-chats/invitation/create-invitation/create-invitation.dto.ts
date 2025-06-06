import { ErrorMessage } from '../../../../enums/index';
import {
  IsDefined,
  IsInvalid,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsNotNull,
} from '../../../../decorator/index';

export class CreateInvitationDTO {
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

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  @Min(1)
  expiresIn: number = 0;

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  @Min(1)
  maxUses: number = 0;
}
