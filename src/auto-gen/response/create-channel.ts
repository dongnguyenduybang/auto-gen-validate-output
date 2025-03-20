/* eslint-disable prettier/prettier */
import { ValidateNested } from 'class-validator';
import {
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
import { BaseResponse, IncludesResponse } from './general-response';
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

    @IsString()
    @IsDefined()
    avatar?: string = undefined;

    @IsString()
    @IsDefined()
    originalAvatar?: string = undefined;

    @IsEnum(ChannelTypeEnum)
    @IsDefined()
    type?: ChannelTypeEnum;

    @IsString()
    @IsDefined()
    invitationLink?: string = undefined;

    @IsNumber()
    @IsDefined()
    totalMembers?: number = undefined;

    @IsString()
    @IsDefined()
    @ValidIf('createTime', '<', 'response.updateTime')
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    updateTime?: string = undefined;
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

export class CreateChannelDataWrapper {
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

export class CreateChannelResponse extends BaseResponse {
    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => CreateChannelDataWrapper)
    data: CreateChannelDataWrapper;

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
            this.data = { channel } as CreateChannelDataWrapper;
            this.data = { channelMetadata } as CreateChannelDataWrapper;
        }
    }
}