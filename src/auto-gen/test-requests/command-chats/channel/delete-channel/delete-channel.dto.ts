import {
    IsDefined,
    IsNotEmpty,
    IsInvalid,
    IsString,
} from '../../../../decorator';

export class DeleteChannelDTO {
    @IsDefined({ message: `Could not resolve permission type` })
    @IsInvalid({ message: `Invalid channel` })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsString({ message: `Could not resolve permission type` })
    workspaceId: string = '';

    @IsDefined({ message: `Unsupported permission type` })
    @IsInvalid({ message: `Invalid channel` })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsString({ message: `Could not resolve permission type` })
    channelId: string = '';
}
