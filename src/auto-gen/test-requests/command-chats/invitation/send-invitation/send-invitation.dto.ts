import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsArray,
  MinArray,
  isValidURL,
  IsNotNull,
} from '../../../../decorator/index';

export class SendInvitationDTO {
  @IsString()
  @IsNotNull()
  @IsNotEmpty()
  @IsDefined()
  @isValidURL()
  invitationLink: string = '';

  @IsArray()
  @IsNotEmpty()
  @IsDefined()
  @MinArray(1)
  @IsNotNull()
  userIds: string[] = [];
}
