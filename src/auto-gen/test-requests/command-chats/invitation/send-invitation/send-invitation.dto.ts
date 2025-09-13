import { IsDefined, IsNotEmpty, IsString, IsArray, MinArray, isValidURL } from "@decorators/";

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
