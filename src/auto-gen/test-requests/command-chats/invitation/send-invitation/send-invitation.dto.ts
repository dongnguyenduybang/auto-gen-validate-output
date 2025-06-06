import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsArray,
  MinArray,
  isValidURL,
} from '../../../../decorator/index';

export class SendInvitationDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @isValidURL()
  invitationLink: string = '';

  @IsArray()
  @IsNotEmpty()
  @IsDefined()
  @MinArray(1)
  userIds: string[] = [];
}
