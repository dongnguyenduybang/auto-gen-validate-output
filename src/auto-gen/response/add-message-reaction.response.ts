import { ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidIf, IsBoolean, IsString, IsNumber, IsObject, Min } from '../decorator/dto-decorator';

export class Reaction {

    @IsBoolean()
    @IsDefined()
    isReacted?: boolean = undefined;

    @IsNumber()
    @IsDefined()
    total?: number = undefined;
}

export class Message {
    @IsString()
    @IsDefined()
    @ValidIf("workspaceId", "workspaceId")
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("channelId", "channelId")
    channelId?: string = undefined;

    @IsString()
    @IsDefined()
    messageId?: string = undefined;

    @IsString()
    @IsDefined()
    userId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("content", "content")
    content?: string = undefined;

    @IsNumber()
    @IsDefined()
    messageType?: number = undefined;

    @IsNumber()
    @IsDefined()
    messageStatus?: number = undefined;

    @IsNumber()
    @IsDefined()
    attachmentType?: number = undefined;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => Reaction)
    reactions: Reaction

    @IsBoolean()
    @IsDefined()
    isThread?: boolean = undefined;

    @IsNumber()
    @IsDefined()
    reportCount?: number = undefined;

    @IsBoolean()
    @IsDefined()
    isReported?: boolean = undefined;

    @IsNumber()
    @IsDefined()
    attachmentCount?: number = undefined;

    @IsString()
    @IsDefined()
    contentLocale?: string = undefined;

    @IsBoolean()
    @IsDefined()
    isPinned?: boolean = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("createTime", "updateTime")
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("updateTime", new Date().toISOString())
    updateTime?: string = undefined;

    @IsString()
    @ValidIf("ref", "ref")
    ref?: string = undefined;
}

export class Profile {
    @IsString()
    @IsDefined()
    avatar?: string = undefined;

    @IsString()
    @IsDefined()
    displayName?: string = undefined;

    @IsString()
    @IsDefined()
    originalAvatar?: string = undefined;

    @IsNumber()
    @IsDefined()
    avatarType?: number = undefined;

    @IsNumber()
    @IsDefined()
    userBadgeType?: number = undefined;
}

export class PresenceData {
    @IsString()
    @IsDefined()
    @ValidIf("updateTime", new Date().toISOString())
    lastUpdateTime?: string = undefined;

    @IsNumber()
    @IsDefined()
    @Min(1)
    lastUpdateInSeconds?: number = undefined;

    @IsNumber()
    @IsDefined()
    presenceState?: number = undefined;
}

export class Role {
    @IsString()
    @IsDefined()
    role?: string = undefined;

    @IsNumber()
    @IsDefined()
    weight?: number = undefined;
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

    @IsNumber()
    @IsDefined()
    mediaPermissionSetting?: number = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("workspaceId", "workspaceId")
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("channelId", "channelId")
    channelId?: string = undefined;
}

export class ChannelDTO {
    @IsString()
    @IsDefined()
    @ValidIf("workspaceId", "workspaceId")
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("channelId", "channelId")
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

    @IsNumber()
    @IsDefined()
    type?: number = undefined;

    @IsString()
    @IsDefined()
    invitationLink?: string = undefined;

    @IsNumber()
    @IsDefined()
    totalMembers?: number = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("createTime", "updateTime")
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("updateTime", new Date().toISOString())
    updateTime?: string = undefined;
}

export class User {
    @IsString()
    @IsDefined()
    userId?: string = undefined;

    @IsString()
    @IsDefined()
    username?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("createTime", "updateTime")
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("updateTime", new Date().toISOString())
    updateTime?: string = undefined;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => Profile)
    profile: Profile;

    @IsNumber()
    @IsDefined()
    userType?: number = undefined;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => PresenceData)
    presenceData: PresenceData;
}

export class Member {

    @IsString()
    @IsDefined()
    @ValidIf("workspaceId", "workspaceId")
    workspaceId?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("channelId", "channelId")
    channelId?: string = undefined;

    @IsString()
    @IsDefined()
    userId?: string = undefined;

    @IsString()
    @IsDefined()
    nickname?: string = undefined;

    @IsString()
    @IsDefined()
    role?: string = undefined;

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => Role)
    roles: Role[];

    @IsString()
    @IsDefined()
    @ValidIf("createTime", "updateTime")
    createTime?: string = undefined;

    @IsString()
    @IsDefined()
    @ValidIf("updateTime", new Date().toISOString())
    updateTime?: string = undefined;
}

export class IncludesMessage {

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => User)
    users: User[];

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => ChannelDTO)
    channels: ChannelDTO[];

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => Member)
    members: Member[];

    @ValidateNested({ each: true })
    @IsArray()
    @IsDefined()
    @Type(() => ChannelMetadata)
    channelMetadata: ChannelMetadata[];
}

export class DataMessage {

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => Message)
    message: Message;
}

export class AddMessageReactionResponse {
    @IsBoolean()
    @IsDefined()
    ok?: boolean = undefined;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => DataMessage)
    data: DataMessage;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => IncludesMessage)
    includes: IncludesMessage;
}