import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsArray,
  MinArray,
  isValidURL,
  IsNotNull,
} from '../../../../decorator/index';

export class AcceptInvitationDTO {
  @IsString()
  @IsNotNull()
  @IsNotEmpty()
  @IsDefined()
  @isValidURL()
  invitationLink: string = '';

}
