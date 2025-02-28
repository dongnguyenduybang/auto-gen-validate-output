import { IsBoolean, IsDefined, ValidateNested, IsArray, IsString, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class ProfileDTO {
  @IsString()
  avatar: string;

  @IsString()
  displayName: string;

  @IsString()
  originalAvatar: string;

  @IsNumber()
  avatarType: number;

  @IsNumber()
  userBadgeType: number;
}

export class PresenceDataDTO {
  @IsString()
  lastUpdateTime: string;

  @IsNumber()
  lastUpdateInSeconds: number;

  @IsNumber()
  presenceState: number;
}

export class UserDTO {
  @IsString()
  userId: string;

  @IsString()
  username: string;

  @IsString()
  createTime: string;

  @IsString()
  updateTime: string;

  @ValidateNested()
  @Type(() => ProfileDTO)
  profile: ProfileDTO;

  @IsNumber()
  userType: number;

  @ValidateNested()
  @Type(() => PresenceDataDTO)
  presenceData: PresenceDataDTO;
}

export class ChannelDTO {
  @IsString()
  workspaceId: string;

  @IsString()
  channelId: string;

  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsBoolean()
  isPrivate: boolean;

  @IsNumber()
  type: number;

  @IsString()
  invitationLink: string;

  @IsNumber()
  totalMembers: number;

  @IsString()
  createTime: string;

  @IsString()
  updateTime: string;
}

export class RoleDTO {
  @IsString()
  role: string;

  @IsNumber()
  weight: number;
}

export class MemberDTO {
  @IsString()
  workspaceId: string;

  @IsString()
  channelId: string;

  @IsString()
  userId: string;

  @IsString()
  @IsOptional()
  nickname: string;

  @IsString()
  role: string;

  @ValidateNested({ each: true })
  @Type(() => RoleDTO)
  roles: RoleDTO[];

  @IsString()
  createTime: string;

  @IsString()
  updateTime: string;
}

export class ChannelMetadataDTO {
  @IsNumber()
  unreadCount: number;

  @IsString()
  lastMessageId: string;

  @IsBoolean()
  notificationStatus: boolean;

  @IsNumber()
  mediaPermissionSetting: number;

  @IsString()
  workspaceId: string;

  @IsString()
  channelId: string;
}

export class MessageDTO {
  @IsString()
  workspaceId: string;

  @IsString()
  channelId: string;

  @IsString()
  messageId: string;

  @IsString()
  userId: string;

  @IsString()
  content: string;

  @IsNumber()
  messageType: number;

  @IsNumber()
  messageStatus: number;

  @IsNumber()
  attachmentType: number;

  @IsBoolean()
  isThread: boolean;

  @IsNumber()
  reportCount: number;

  @IsBoolean()
  isReported: boolean;

  @IsNumber()
  attachmentCount: number;

  @IsString()
  contentLocale: string;

  @IsBoolean()
  isPinned: boolean;

  @IsString()
  createTime: string;

  @IsString()
  updateTime: string;

  @IsString()
  ref: string;
}

export class IncludesDTO {
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  users: UserDTO[];

  @ValidateNested({ each: true })
  @Type(() => ChannelDTO)
  channels: ChannelDTO[];

  @ValidateNested({ each: true })
  @Type(() => MemberDTO)
  members: MemberDTO[];

  @ValidateNested({ each: true })
  @Type(() => ChannelMetadataDTO)
  channelMetadata: ChannelMetadataDTO[];
}

export class DataDTO {
  @ValidateNested()
  @Type(() => MessageDTO)
  message: MessageDTO;
}

export class SendMessageDTOResponse {
  @IsBoolean()
  ok: boolean;

  @ValidateNested()
  @Type(() => DataDTO)
  data: DataDTO;

  @ValidateNested()
  @Type(() => IncludesDTO)
  includes: IncludesDTO;
}