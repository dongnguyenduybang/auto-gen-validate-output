import { ErrorMessage } from "../../../../enums/index";
import { IsDefined, IsInvalid, IsNotEmpty, IsString, IsNumber, Min } from "../../../../decorator/index";

export class CreateInvitationDTO {
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined({ message: `Unsupported permission type` })
    @IsInvalid({ message: `Invalid channel` })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsString({ message: `Could not resolve permission type` })
    channelId: string = '';

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @Min(1)
    expiresIn: number = 0

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @Min(1)
    maxUses: number = 0;
}
