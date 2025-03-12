import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IsDefined, IsArray, ValidIf, IsBoolean, IsString, IsNumber, IsObject,IsOptional, IsEnum } from '../decorator/dto-decorator';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { MessageStatusEnum } from '../enums/message-status.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { UserAvatarTypeEnum } from '../enums/user-avatar-type.enum';
import { BadgeEnum } from '../enums/badge.enum';
import { UserTypeEnum } from '../enums/user-type.enum';
import { PresenceStateEnum } from '../enums/presence-state.enum';
import { ChannelTypeEnum } from '../enums/channel-type.enum';
import { MediaPermissionSettingEnum } from '../enums/media-permission-setting.enum';
import { PretendingTo } from '../enums/pretending-to.enum';
import { ReportCategory } from '../enums/report-category.enum';

// DTO cho LocationData
export class LocationData {
    @IsString()
    @IsDefined()
    latitude!: string;

    @IsString()
    @IsDefined()
    longitude!: string;

    @IsString()
    @IsDefined()
    description!: string;

    @IsString()
    @IsDefined()
    thumbnailUrl!: string;
}

// DTO cho Embed
export class Embed {
    @IsOptional()
    invitationData?: any;

    @ValidateNested()
    @Type(() => LocationData)
    locationData!: LocationData;

    @IsOptional()
    meta?: any;

    @IsNumber()
    @IsDefined()
    type!: number;

    @IsOptional()
    url?: string;

    @IsOptional()
    provider?: string;

    @IsOptional()
    embedData?: any;
}

// DTO cho MediaAttachments
export class MediaAttachments {
    @IsString()
    @IsDefined()
    collectionId!: string;

    @IsString()
    @IsDefined()
    stickerId!: string;

    @IsDefined()
    @IsEnum(AttachmentTypeEnum)
    attachmentType!: AttachmentTypeEnum;

    @IsString()
    @IsDefined()
    stickerUrl!: string;
}

// DTO cho MediaAttachmentItem
export class MediaAttachmentItem {
    @ValidateNested()
    @Type(() => MediaAttachments)
    sticker!: MediaAttachments;
}
export class Reaction {

    @IsBoolean()
    @IsDefined()
    isReacted?: boolean = undefined;

    @IsNumber()
    @IsDefined()
    total?: number = undefined;
}

export class ReportItem {

    @IsEnum(ReportCategory)
    @IsDefined()
    report_category!: ReportCategory;

    @IsEnum(PretendingTo)
    @IsDefined()
    pretending_to?: PretendingTo;

    @IsString()
    @IsDefined()
    report_reason!: string;

    @IsString()
    @IsDefined()
    report_by!: string;

    @IsString()
    @IsDefined()
    report_time!: string;
}


// DTO cho Message
export class Message {
    @IsString()
    @IsDefined()
    workspaceId!: string;

    @IsString()
    @IsDefined()
    channelId!: string;

    @IsString()
    @IsDefined()
    messageId!: string;

    @IsString()
    @IsDefined()
    userId!: string;

    @IsString()
    @IsDefined()
    content!: string;

    @IsDefined()
    @IsEnum(MessageTypeEnum)
    messageType!: MessageTypeEnum;

    @IsDefined()
    @IsEnum(MessageStatusEnum)
    messageStatus!: MessageStatusEnum;

    @IsOptional()
    originalMessage?: any;

    @ValidateNested({ each: true })
    @IsObject()
    @IsDefined()
    @Type(() => Reaction)
    reactions: Reaction

    @IsArray()
    mentions!: string[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Embed)
    embed!: Embed[];

    @IsDefined()
    @IsEnum(AttachmentTypeEnum)
    attachmentType!: AttachmentTypeEnum;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReportItem)
    reports?: ReportItem[];


    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MediaAttachmentItem)
    mediaAttachments!: MediaAttachmentItem[];

    @IsBoolean()
    @IsDefined()
    isThread!: boolean;

    @IsNumber()
    @IsDefined()
    reportCount!: number;

    @IsBoolean()
    @IsDefined()
    isReported!: boolean;

    @IsNumber()
    @IsDefined()
    attachmentCount!: number;

    @IsString()
    @IsDefined()
    contentLocale!: string;

    @IsArray()
    contentArguments!: any[];

    @IsBoolean()
    @IsDefined()
    isPinned!: boolean;

    @IsString()
    @IsDefined()
    createTime!: string;

    @IsString()
    @IsDefined()
    updateTime!: string;

    @IsString()
    ref!: string;
}

// DTO cho Profile
export class Profile {
    @IsString()
    @IsDefined()
    avatar!: string;

    @IsString()
    @IsDefined()
    displayName!: string;

    @IsString()
    @IsDefined()
    originalAvatar!: string;

    @IsDefined()
    @IsEnum(UserAvatarTypeEnum)
    avatarType!: UserAvatarTypeEnum;

    @IsDefined()
    @IsEnum(BadgeEnum)
    userBadgeType!: BadgeEnum;
}

// DTO cho PresenceData
export class PresenceData {
    @IsDefined()
    @IsEnum(PresenceStateEnum)
    presenceState!: PresenceStateEnum;

    @IsNumber()
    @IsDefined()
    lastUpdateInSeconds!: number;

    @IsString()
    @IsDefined()
    lastUpdateTime!: string;
}

// DTO cho Role
export class Role {
    @IsString()
    @IsDefined()
    role!: string;

    @IsNumber()
    @IsDefined()
    weight!: number;
}

// DTO cho ChannelMetadata
export class ChannelMetadata {
    @IsNumber()
    @IsDefined()
    unreadCount!: number;

    @IsString()
    @IsDefined()
    lastMessageId!: string;

    @IsBoolean()
    @IsDefined()
    notificationStatus!: boolean;

    @IsDefined()
    @IsEnum(MediaPermissionSettingEnum)
    mediaPermissionSetting!: MediaPermissionSettingEnum;

    @IsString()
    @IsDefined()
    workspaceId!: string;

    @IsString()
    @IsDefined()
    channelId!: string;
}

// DTO cho ChannelDTO
export class ChannelDTO {
    @IsString()
    @IsDefined()
    workspaceId!: string;

    @IsString()
    @IsDefined()
    channelId!: string;

    @IsString()
    @IsDefined()
    userId!: string;

    @IsString()
    @IsDefined()
    name!: string;

    @IsBoolean()
    @IsDefined()
    isPrivate!: boolean;

    @IsDefined()
    @IsEnum(ChannelTypeEnum)
    type!: ChannelTypeEnum;

    @IsOptional()
    invitationLink?: string;

    @IsArray()
    participantIds!: string[];

    @IsOptional()
    originalAvatar?: string;

    @IsString()
    @IsDefined()
    createTime!: string;

    @IsString()
    @IsDefined()
    updateTime!: string;

    @IsNumber()
    @IsDefined()
    totalMembers!: number;
}

// DTO cho User
export class User {
    @IsString()
    @IsDefined()
    userId!: string;

    @IsString()
    @IsDefined()
    username!: string;

    @IsString()
    @IsDefined()
    createTime!: string;

    @IsString()
    @IsDefined()
    updateTime!: string;

    @ValidateNested()
    @Type(() => Profile)
    profile!: Profile;

    @IsDefined()
    @IsEnum(UserTypeEnum)
    userType!: UserTypeEnum;

    @ValidateNested()
    @Type(() => PresenceData)
    presenceData!: PresenceData;

    @IsOptional()
    statusData?: any;
}

// DTO cho Member
export class Member {
    @IsString()
    @IsDefined()
    workspaceId!: string;

    @IsString()
    @IsDefined()
    channelId!: string;

    @IsString()
    @IsDefined()
    userId!: string;

    @IsString()
    @IsDefined()
    nickname!: string;

    @IsString()
    @IsDefined()
    role!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Role)
    roles!: Role[];

    @IsString()
    @IsDefined()
    createTime!: string;

    @IsString()
    @IsDefined()
    updateTime!: string;
}

// DTO cho IncludesMessage
export class IncludesMessage {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => User)
    users!: User[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChannelDTO)
    channels!: ChannelDTO[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Member)
    members!: Member[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChannelMetadata)
    channelMetadata!: ChannelMetadata[];
}

// DTO cho DataMessage
export class DataMessage {
    @ValidateNested()
    @Type(() => Message)
    message!: Message;
}

// DTO cho SendMessageStickerResponse
export class SendMessageStickerResponse {
    @IsBoolean()
    @IsDefined()
    ok!: boolean;

    @ValidateNested()
    @Type(() => DataMessage)
    data!: DataMessage;

    @ValidateNested()
    @Type(() => IncludesMessage)
    includes!: IncludesMessage;
}