import { ChannelTypeEnum, ErrorMessage } from "@enum/";
import { IsDefined, IsEnum, IsInvalid, IsNotEmpty, IsString, MinLength, MaxLength, IsOptional, ValidIf } from "@decorators/";

export class CreateChannelDTO {
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    name: string = ''

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    avatar: string = ''

    @IsEnum(ChannelTypeEnum)
    @ValidIf(
        {
            conditions: [
                { field: 'channelType', operator: '===', value: ChannelTypeEnum.CHANNEL_TYPE_ENUM_DM }
            ],
            result: {
                message: 'channelType is not accept DM Channel'
            }
        }
    )
    @IsOptional()
    @IsDefined()
    @IsNotEmpty()
    channelType: ChannelTypeEnum = 0
}
