/* eslint-disable prettier/prettier */
import { ValidateNested } from 'class-validator';
import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsEnum,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
    ValidIf,
} from '../decorator/dto-decorator';
import { ChannelPermissionEnum } from '../enums/channel-permissions.enum';
import { MediaPermissionSettingEnum } from '../enums/media-permission-setting.enum';
import { Type } from 'class-transformer';
import { BaseResponse, IncludesResponse, Message } from './general-response';
import { ChannelTypeEnum } from '../enums/channel-type.enum';

export class Channel {
    @IsString()
    @IsDefined()
    @IsOptional()
    @ValidIf('workspaceId', '===', 'payload.workspaceId')
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf('channelId', '===', 'payload.channelId')
    channelId?: string = undefined;

    @IsString()
    @IsDefined()
    userId?: string = undefined;

    @IsString()
    @IsDefined()
    name?: string = undefined;

    @IsBoolean()
    @IsDefined()
    isPrivate?: boolean = undefined;

    @IsEnum(ChannelTypeEnum)
    @IsDefined()
    type?: ChannelTypeEnum;

    @IsString()
    @IsDefined()
    invitationLink?: string = undefined;

    @IsString()
    @IsDefined()
    avatar?: string = undefined;

    @IsString()
    @IsDefined()
    originalAvatar?: string = undefined;

    @IsNumber()
    @IsDefined()
    totalMembers?: number = undefined;

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => Message)
    pinnedMessage?: Message;

    @IsString()
    @IsDefined()
    @ValidIf('createTime', '<', 'response.updateTime')
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    updateTime?: string = undefined;

    @IsArray()
    @IsOptional()
    participantIds?: string[] = [];
}

export class ChannelMetadata {
    @IsNumber()
    @IsDefined()
    unreadCount?: number = undefined;

    @IsString()
    @IsDefined()
    lastMessageId?: string = undefined;

    @IsBoolean()
    @IsDefined()
    notificationStatus?: boolean = undefined;

    @IsEnum(MediaPermissionSettingEnum)
    @IsDefined()
    mediaPermissionSetting?: MediaPermissionSettingEnum;

    @IsEnum(ChannelPermissionEnum)
    @IsDefined()
    permissions?: ChannelPermissionEnum;

    @IsString()
    @IsDefined()
    @ValidIf('workspaceId', '===', 'payload.workspaceId')
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf('channelId', '===', 'response.channelId')
    channelId?: string = undefined;
}

export class GetChannelDataWrapper {
    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => Channel)
    channel: Channel;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => ChannelMetadata)
    channelMetadata: ChannelMetadata;
}

export class GetChannelResponse extends BaseResponse {
    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => GetChannelDataWrapper)
    data: GetChannelDataWrapper;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => IncludesResponse)
    includes: IncludesResponse;

    constructor() {
        super();

        if (this.includes) {
            const { users, members, messages, channelMetadata } = this.includes;
            this.includes = {
                users,
                members,
                channels: [],
                channelMetadata,
                messages
            } as IncludesResponse;
        }

        if (this.data) {
            const { channel, channelMetadata } = this.data;
            this.data = { channel } as GetChannelDataWrapper;
            this.data = { channelMetadata } as GetChannelDataWrapper;
        }
    }
}