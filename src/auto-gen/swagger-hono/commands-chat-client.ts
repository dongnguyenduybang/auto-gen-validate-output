/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum V3InvitationStatusEnum {
  INVITATION_STATUS_ENUM_ACTIVE = 0,
  INVITATION_STATUS_ENUM_EXPIRED = 1,
  INVITATION_STATUS_ENUM_REVOKED = 2,
}

export enum V3ReportCategory {
  REPORT_CATEGORY_UNSPECIFIED = 0,
  REPORT_CATEGORY_HARASSMENT = 1,
  REPORT_CATEGORY_SUICIDE_OR_SELF_INJURY = 2,
  REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE = 3,
  REPORT_CATEGORY_SHARING_INAPPROPRIATE_CONTENT = 4,
  REPORT_CATEGORY_HATE_SPEECH = 5,
  REPORT_CATEGORY_UNAUTHORIZED_SALES = 6,
  REPORT_CATEGORY_SCAMS = 7,
  REPORT_CATEGORY_SPAM = 8,
  REPORT_CATEGORY_COPYRIGHT = 9,
  REPORT_CATEGORY_OTHER = 20,
}

export enum V3PretendingTo {
  PRETENDING_TO_UNSPECIFIED = 0,
  PRETENDING_TO_ME = 1,
  PRETENDING_TO_FRIEND = 2,
  PRETENDING_TO_CELEBRITY = 3,
}

export enum V3UserTypeEnum {
  USER_TYPE_ENUM_DEFAULT = 0,
  USER_TYPE_ENUM_BOT = 1,
  USER_TYPE_ENUM_GHOST = 2,
}

export enum V3UserStatusExpireAfterTimeEnum {
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED = 0,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR = 1,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR = 2,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR = 3,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR = 4,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER = 99,
}

export enum V3UserBadgeTypeEnum {
  USER_BADGE_TYPE_DEFAULT = 0,
  USER_BADGE_TYPE_BLUE = 1,
  USER_BADGE_TYPE_GRAY = 2,
  USER_BADGE_TYPE_YELLOW = 3,
}

export enum V3UserAvatarTypeEnum {
  USER_AVATAR_TYPE_ENUM_UNSPECIFIED = 0,
  USER_AVATAR_TYPE_ENUM_PHOTO = 1,
  USER_AVATAR_TYPE_ENUM_VIDEO = 2,
}

export enum V3PresenceStateEnum {
  PRESENCE_STATUS_UNSPECIFIED = 0,
  PRESENCE_STATUS_ONLINE = 1,
  PRESENCE_STATUS_IDLE = 2,
  PRESENCE_STATUS_DO_NOT_DISTURB = 3,
  PRESENCE_STATUS_OFFLINE = 4,
  PRESENCE_STATUS_OTHER = 5,
}

export enum V3MessageTypeEnum {
  MESSAGE_TYPE_ENUM_DEFAULT = 0,
  MESSAGE_TYPE_ENUM_AUDIT_LOG = 1,
}

export enum V3MessageStatusEnum {
  MESSAGE_STATUS_ENUM_PENDING = 0,
  MESSAGE_STATUS_ENUM_SUCCESS = 1,
  MESSAGE_STATUS_ENUM_FAILURE = 2,
}

export enum V3AttachmentTypeEnum {
  ATTACHMENT_TYPE_ENUM_UNSPECIFIED = 0,
  ATTACHMENT_TYPE_ENUM_PHOTO = 1,
  ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE = 2,
  ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE = 3,
  ATTACHMENT_TYPE_ENUM_AUDIO = 4,
  ATTACHMENT_TYPE_ENUM_VIDEO = 5,
  ATTACHMENT_TYPE_ENUM_LINKS = 6,
  ATTACHMENT_TYPE_ENUM_STICKER = 7,
  ATTACHMENT_TYPE_ENUM_MEDIA = 8,
  ATTACHMENT_TYPE_ENUM_MENTION = 9,
  ATTACHMENT_TYPE_ENUM_LOCATION = 10,
  ATTACHMENT_TYPE_ENUM_FILE = 11,
}

export enum V3EmbedTypeEnum {
  EMBED_TYPE_ENUM_UNSPECIFIED = 0,
  EMBED_TYPE_ENUM_PHOTO = 1,
  EMBED_TYPE_ENUM_VIDEO = 2,
  EMBED_TYPE_ENUM_LINK = 3,
  EMBED_TYPE_ENUM_INVITATION = 4,
  EMBED_TYPE_ENUM_OTHER = 5,
  EMBED_TYPE_ENUM_LOCATION = 6,
}

export enum V3FriendStatusEnum {
  FRIEND_STATUS_ENUM_UNSPECIFIED = 0,
  FRIEND_STATUS_ENUM_NOT_FRIEND = 1,
  FRIEND_STATUS_ENUM_REQUEST_SENT = 2,
  FRIEND_STATUS_ENUM_REQUEST_RECEIVED = 3,
  FRIEND_STATUS_ENUM_REQUEST_DELETED = 4,
  FRIEND_STATUS_ENUM_FRIEND = 5,
}

export enum V3MediaPermissionSettingEnum {
  MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK = 0,
  MEDIA_PERMISSION_SETTING_ENUM_ALLOW = 1,
  MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW = 2,
}

export enum V3DirectMessageStatusEnum {
  DIRECT_MESSAGE_STATUS_ENUM_PENDING = 0,
  DIRECT_MESSAGE_STATUS_ENUM_CONTACTED = 1,
}

export enum V3ChannelPermissionsEnum {
  OWNER = 0,
  CHANNELS__VIEW_CHANNEL = 1,
  CHANNELS__MANAGE = 2,
  CHANNELS__MEMBERS_MANAGE = 3,
  CHANNELS__STICKERS_MANAGE = 4,
  CHANNELS__INVITATIONS_MANAGE = 5,
  CHANNELS__INVITATIONS_CREATE = 6,
  MESSAGES__MANAGE = 7,
  MESSAGES__VIEW = 8,
  MESSAGES__SEND_MESSAGE = 9,
  MESSAGES__SEND_ATTACHMENTS = 10,
  MESSAGES__EMBED_LINKS = 11,
  MESSAGES__MENTION_EVERYONE = 12,
  CHANNELS__VIEW_AUDIT_LOGS = 13,
}

export enum V3ChannelTypeEnum {
  CHANNEL_TYPE_ENUM_DM = 0,
  CHANNEL_TYPE_ENUM_CHANNEL = 1,
  CHANNEL_TYPE_ENUM_BROADCAST = 2,
}

export interface V3CreateChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /** The display name of a channel. */
  name: string;
  /** The list of user IDs invited to join a group. */
  userIds?: any[] | null;
  /**
   * Users can update the avatar of a channel at any time.
   * @format isURL
   */
  avatarPath?: string | null;
  /** Type of channel */
  channelType?: V3ChannelTypeEnum;
}

export interface V3DeleteChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3DeleteChannelAvatarRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3UpdateChannelAvatarRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The new avatar
   * @format isURL
   * @minLength 1
   */
  avatarPath: string;
}

export interface V3UpdateChannelNameRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /** The new name of channel */
  name: string;
}

export interface V3AcceptMessageRequestRequest {
  /**
   * The user identify to accept friend request
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3RejectMessageRequestRequest {
  /**
   * The user identify to reject message request
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UpdateDMMediaPermissionSettingRequest {
  /**
   * The user identify to update DM media permission setting
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** Media sharing permission setting */
  mediaPermissionSetting: V3MediaPermissionSettingEnum;
}

export interface V3AcceptFriendRequestRequest {
  /**
   * The user identify to accept friend
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3AddFriendRequest {
  /**
   * The user identify to add friend
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3CancelFriendRequestRequest {
  /**
   * The user identify to cancel friend request
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3DeleteFriendRequestRequest {
  /**
   * The user identify to delete friend request
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UnfriendRequest {
  /**
   * The user identify to unfriend
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export type V3MarkAllAsReadRequest = object;

export interface V3AcceptInvitationRequest {
  /**
   * The invitation url that needs to be accepted
   * @format isURL
   * @minLength 1
   */
  invitationLink: string;
}

export interface V3CreateInvitationRequest {
  /**
   * Workspace identification
   * @minLength 1
   */
  workspaceId: string;
  /**
   * Channel identification
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * Maximum amount of time to join the channel
   * @min 1
   */
  expiresIn?: number | null;
  /**
   * Highest amount of users subscribe to the channel
   * @min 1
   * @max 5000
   */
  maxUses?: number | null;
}

export interface V3RevokeInvitationRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * Link to the channel acceptance invitation
   * @minLength 1
   */
  code: string;
}

export interface V3SendInvitationRequest {
  /**
   * The invite url to send request
   * @minLength 1
   */
  invitationLink: string;
  /**
   * The user of the list has invited
   * @minItems 1
   */
  userIds: string[];
}

export interface V3AssignAsAdminRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3BanFromChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3DismissAsAdminRequest {
  /** @minLength 1 */
  workspaceId: string;
  /**
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3LeaveChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3RemoveFromChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** @minLength 1 */
  reason?: string | null;
}

export interface V3TransferOwnershipRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UnbanFromChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UpdateNicknameRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** The new nickname of member in channel */
  nickname?: string | null;
}

export interface V3TransferOwnershipAndLeaveRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UserMetadataRequest {
  /**
   * x-user identify
   * @format isULID
   * @minLength 1
   */
  "x-user-id": string;
  /**
   * code of x-country
   * @minLength 1
   */
  "x-country-code": string;
  /**
   * ip of x-client
   * @minLength 1
   */
  "x-client-ip": string;
  /**
   * data of x-geo
   * @format isJSON
   * @minLength 1
   */
  "x-geo-data": string;
  /**
   * x-device identify
   * @minLength 1
   */
  "x-device-id": string;
  [key: string]: any;
}

export interface V3CreateChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for the channel that was created */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3DeleteChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteChannelAvatarResponse {
  /** Status response */
  ok?: boolean | null;
  /** The channel data */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3UpdateChannelAvatarResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for the channel that was updated */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /**  Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3UpdateChannelNameResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for the channel that was updated */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3ErrorResponse {
  /** The error code */
  code: number;
  /** The error message */
  message: string;
  /** Detail about the error */
  details: string[];
}

export interface V3AcceptFriendRequestResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for friend that was created */
  data?: V3FriendData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3AddFriendResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data of friend */
  data?: V3FriendData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3CancelFriendRequestResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteFriendRequestResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UnfriendResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3MarkAllAsReadResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3AcceptInvitationResponse {
  /** Status response */
  ok?: boolean | null;
  /** The channel's data */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for invitation */
  includes?: V3DataInclude;
}

export interface V3CreateInvitationResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for invitation that was created */
  data?: V3Invitation;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for invitation */
  includes?: V3DataInclude;
}

export interface V3RevokeInvitationResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3SendInvitationResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3AssignAsAdminResponse {
  /** Status response */
  ok?: boolean | null;
  /** The member's data */
  data?: V3MemberData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for member */
  includes?: V3DataInclude;
}

export interface V3BanFromChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DismissAsAdminResponse {
  /** Status response */
  ok?: boolean | null;
  /** The member's data */
  data?: V3MemberData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for member */
  includes?: V3DataInclude;
}

export interface V3LeaveChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3RemoveFromChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3TransferOwnershipResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UnbanFromChannelResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateNicknameResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for member that was updated */
  data?: V3MemberData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for member */
  includes?: V3DataInclude;
}

export interface V3TransferOwnershipAndLeaveResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UserMetadataResponse {
  /**
   * x-user identify
   * @format isULID
   * @minLength 1
   */
  "x-user-id": string;
  /**
   * code of x-country
   * @minLength 1
   */
  "x-country-code": string;
  /**
   * ip of x-client
   * @minLength 1
   */
  "x-client-ip": string;
  /**
   * data of x-geo
   * @format isJSON
   * @minLength 1
   */
  "x-geo-data": string;
  /**
   * x-device identify
   * @minLength 1
   */
  "x-device-id": string;
  [key: string]: any;
}

export interface V3AudioMetadata {
  samples?: number[];
}

export interface V3ChannelMetadata {
  workspaceId?: string;
  channelId?: string;
  dmId?: string;
  unreadCount?: number;
  lastMessageId?: string;
  notificationStatus?: boolean;
  mediaPermissionSetting?: V3MediaPermissionSettingEnum;
  permissions?: V3ChannelPermissionsEnum[];
}

export interface V3Channel {
  workspaceId?: string;
  channelId?: string;
  userId?: string;
  name?: string;
  avatar?: string;
  isPrivate?: boolean;
  type?: V3ChannelTypeEnum;
  invitationLink?: string;
  privacySettings?: V3PrivacySettings;
  premiumSettings?: V3PremiumSettings;
  originalAvatar?: string;
  totalMembers?: number;
  dmStatus?: V3DirectMessageStatusEnum;
  pinnedMessage?: V3Message;
  participantIds?: string[];
  rejectTime?: string;
  acceptTime?: string;
  createTime?: string;
  updateTime?: string;
}

export interface V3DataInclude {
  users?: V3User[];
  messages?: V3Message[];
  channels?: V3Channel[];
  members?: V3Member[];
  channelMetadata?: V3ChannelMetadata[];
}

export interface V3Dimensions {
  height?: number;
  width?: number;
}

export interface V3Embed {
  meta?: string;
  provider?: string;
  url?: string;
  type?: V3EmbedTypeEnum;
  embedData?: V3EmbedData;
  invitationData?: V3InvitationData;
  locationData?: V3LocationData;
}

export interface V3EmbedData {
  url?: string;
  version?: string;
  title?: string;
  authorName?: string;
  authorUrl?: string;
  providerName?: string;
  providerUrl?: string;
  cacheAge?: string;
  html?: string;
  width?: number;
  height?: number;
  description?: string;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
}

export interface V3FileMetadata {
  filename?: string;
  filesize?: number;
  extension?: string;
  mimetype?: string;
  dimensions?: V3Dimensions;
  duration?: number;
}

export interface V3InvitationData {
  channel?: V3InvitationDataChannelData;
  code?: string;
  isExpired?: boolean;
  expireTime?: string;
  isJoined?: boolean;
  invitationLink?: string;
  createTime?: string;
  updateTime?: string;
}

export interface V3InvitationDataChannelData {
  workspaceId?: string;
  channelId?: string;
  name?: string;
  avatar?: string;
  totalMembers?: number;
  members?: V3User[];
}

export interface V3LinkObject {
  attachmentType?: V3AttachmentTypeEnum;
  url?: string;
  shortUrl?: string;
}

export interface V3LocationData {
  latitude?: string;
  longitude?: string;
  description?: string;
  thumbnailUrl?: string;
}

export interface V3MediaAttachment {
  link?: V3LinkObject;
  sticker?: V3StickerObject;
  photo?: V3MediaObject;
  audio?: V3MediaObject;
  video?: V3MediaObject;
  voiceMessage?: V3MediaObject;
  videoMessage?: V3MediaObject;
  mediaMessage?: V3MediaObject;
  file?: V3MediaObject;
}

export interface V3MediaObject {
  fileId?: string;
  attachmentType?: V3AttachmentTypeEnum;
  fileUrl?: string;
  fileMetadata?: V3FileMetadata;
  thumbnailUrl?: string;
  audioMetadata?: V3AudioMetadata;
  fileRef?: string;
  attachmentId?: string;
  channelId?: string;
  userId?: string;
  messageId?: string;
  isQrCode?: boolean;
}

export interface V3Member {
  workspaceId?: string;
  channelId?: string;
  userId?: string;
  nickname?: string;
  role?: string;
  roles?: V3MemberRole[];
  createTime?: string;
  updateTime?: string;
}

export interface V3MemberRole {
  role?: string;
  weight?: number;
}

export interface V3Message {
  workspaceId?: string;
  channelId?: string;
  messageId?: string;
  userId?: string;
  content?: string;
  ref?: string;
  messageType?: V3MessageTypeEnum;
  messageStatus?: V3MessageStatusEnum;
  originalMessage?: V3OriginalMessage;
  reactions?: Record<string, V3ReactionData>;
  mentions?: string[];
  embed?: V3Embed[];
  attachmentType?: V3AttachmentTypeEnum;
  reports?: V3Report[];
  isThread?: boolean;
  reportCount?: number;
  isReported?: boolean;
  attachmentCount?: number;
  mediaAttachments?: V3MediaAttachment[];
  contentLocale?: string;
  contentArguments?: string[];
  isPinned?: boolean;
  pinTime?: string;
  editTime?: string;
  createTime?: string;
  updateTime?: string;
}

export interface V3OriginalMessage {
  messageId?: string;
  content?: string;
  attachmentType?: V3AttachmentTypeEnum;
  mediaAttachments?: V3MediaAttachment;
  messageType?: V3MessageTypeEnum;
  contentLocale?: string;
  contentArguments?: string[];
  userId?: string;
  editTime?: string;
  createTime?: string;
  updateTime?: string;
}

export interface V3PremiumSettings {
  boosted?: V3PremiumSettingsBoosted;
}

export interface V3PremiumSettingsBoosted {
  enable?: boolean;
}

export interface V3PresenceData {
  lastUpdateTime?: string;
  lastUpdateInSeconds?: number;
  presenceState?: V3PresenceStateEnum;
  customStatus?: string;
}

export interface V3PrivacySettings {
  restrictSavingContent?: V3RestrictSavingContent;
}

export interface V3Profile {
  avatar?: string;
  displayName?: string;
  cover?: string;
  originalAvatar?: string;
  avatarType?: V3UserAvatarTypeEnum;
  videoAvatar?: string;
  userBadgeType?: V3UserBadgeTypeEnum;
  decoratedAvatar?: string;
  originalDecoratedAvatar?: string;
}

export interface V3ReactionData {
  isReacted?: boolean;
  total?: number;
}

export interface V3Report {
  reportCategory?: V3ReportCategory;
  pretendingTo?: V3PretendingTo;
  reportReason?: string;
  reportBy?: string;
  reportTime?: string;
}

export interface V3RestrictSavingContent {
  enable?: boolean;
}

export interface V3StickerObject {
  collectionId?: string;
  stickerId?: string;
  attachmentType?: V3AttachmentTypeEnum;
  stickerUrl?: string;
  attachmentId?: string;
  fileRef?: string;
}

export interface V3User {
  userId?: string;
  username?: string;
  createTime?: string;
  updateTime?: string;
  profile?: V3Profile;
  userType?: V3UserTypeEnum;
  presenceData?: V3PresenceData;
  statusData?: V3UserStatus;
}

export interface V3UserStatus {
  content?: string;
  status?: string;
  expireAfterTime?: V3UserStatusExpireAfterTimeEnum;
  createTime?: string;
  updateTime?: string;
  endTime?: string;
}

export interface V3ChannelData {
  channel?: V3Channel;
}

export interface V3FriendData {
  friend?: V3Friend;
}

export interface V3Friend {
  requestedFromUserId?: string;
  requestedToUserId?: string;
  status?: V3FriendStatusEnum;
  friendId?: string;
  participantIds?: string[];
  readTime?: string;
  acceptTime?: string;
  createTime?: string;
  updateTime?: string;
  deleteTime?: string;
}

export interface V3MemberData {
  member?: V3Member;
}

export interface V3MessageData {
  message?: V3Message;
}

export interface V3UserView {
  userId?: string;
  username?: string;
  friendData?: V3Friend;
  mediaPermissionSetting?: V3MediaPermissionSettingEnum;
  createTime?: string;
  updateTime?: string;
  profile?: V3Profile;
  userType?: V3UserTypeEnum;
  presenceData?: V3PresenceData;
  statusData?: V3UserStatus;
  blocked?: string;
}

export interface V3Invitation {
  workspaceId?: string;
  channelId?: string;
  code?: string;
  expiresIn?: number;
  maxUses?: number;
  status?: V3InvitationStatusEnum;
  expireTime?: string;
  createTime?: string;
  updateTime?: string;
}

export type V3CalculatorPresenceTime = object;

export type V3ExtractActivatedPermissions = object;

export type V3GetChannelNotificationStatus = object;

export type V3GetDataIncludeChannel = object;

export type V3GetDataIncludeFriend = object;

export type V3GetDataIncludeMember = object;

export type V3GetDataIncludeMessage = object;

export type V3GetDataIncludeUser = object;

export type V3GetInitDataInclude = object;

export type V3GetUserPermissions = object;

export type V3MappingChannelData = object;

export type V3MappingFriendData = object;

export type V3MappingMemberData = object;

export type V3MappingChannelMetadataForDMChannel = object;

export type V3MappingChannelMetadataForChannel = object;

export type V3MappingUserEntityToProto = object;

export type V3WrapMessageEntityToResponse = object;

export interface V3AcceptMessageRequestResponse {
  /** Status response */
  ok?: boolean | null;
  /** The channel's data */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface V3RejectMessageRequestResponse {
  /** Status response */
  ok?: boolean | null;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateDMMediaPermissionSettingResponse {
  /** Status response */
  ok?: boolean | null;
  /** Data for the DM channel that was updated */
  data?: V3ChannelData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface DeleteFriendRequestParams {
  /**
   * The user identify to delete friend request
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface DeleteChannelParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface DeleteChannelAvatarParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface RevokeInvitationParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
  /**
   * Link to the channel acceptance invitation
   * @minLength 1
   */
  code?: string;
}

export interface RemoveFromChannelParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /** @minLength 1 */
  reason?: string | null;
}

export namespace Friend {
  /**
   * No description
   * @name AddFriend
   * @request POST:/Friend/AddFriend
   */
  export namespace AddFriend {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3AddFriendRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3AddFriendResponse;
  }

  /**
   * No description
   * @name AcceptFriendRequest
   * @request POST:/Friend/AcceptFriendRequest
   */
  export namespace AcceptFriendRequest {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3AcceptFriendRequestRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3AcceptFriendRequestResponse;
  }

  /**
   * No description
   * @name CancelFriendRequest
   * @request POST:/Friend/CancelFriendRequest
   */
  export namespace CancelFriendRequest {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3CancelFriendRequestRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3CancelFriendRequestResponse;
  }

  /**
   * No description
   * @name Unfriend
   * @request POST:/Friend/Unfriend
   */
  export namespace Unfriend {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UnfriendRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UnfriendResponse;
  }

  /**
   * No description
   * @name DeleteFriendRequest
   * @request DELETE:/Friend/DeleteFriendRequest
   */
  export namespace DeleteFriendRequest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The user identify to delete friend request
       * @format isULID
       * @minLength 1
       */
      userId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3DeleteFriendRequestResponse;
  }

  /**
   * No description
   * @name MarkAllAsRead
   * @request POST:/Friend/MarkAllAsRead
   */
  export namespace MarkAllAsRead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3MarkAllAsReadRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3MarkAllAsReadResponse;
  }
}

export namespace Channel {
  /**
   * No description
   * @name CreateChannel
   * @request POST:/Channel/CreateChannel
   */
  export namespace CreateChannel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3CreateChannelRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3CreateChannelResponse;
  }

  /**
   * No description
   * @name UpdateChannelName
   * @request PUT:/Channel/UpdateChannelName
   */
  export namespace UpdateChannelName {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UpdateChannelNameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UpdateChannelNameResponse;
  }

  /**
   * No description
   * @name UpdateChannelAvatar
   * @request PUT:/Channel/UpdateChannelAvatar
   */
  export namespace UpdateChannelAvatar {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UpdateChannelAvatarRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UpdateChannelAvatarResponse;
  }

  /**
   * No description
   * @name DeleteChannel
   * @request DELETE:/Channel/DeleteChannel
   */
  export namespace DeleteChannel {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The workspace identify
       * @minLength 1
       */
      workspaceId?: string;
      /**
       * The channel identify
       * @format isULID
       * @minLength 1
       */
      channelId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3DeleteChannelResponse;
  }

  /**
   * No description
   * @name DeleteChannelAvatar
   * @request DELETE:/Channel/DeleteChannelAvatar
   */
  export namespace DeleteChannelAvatar {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The workspace identify
       * @minLength 1
       */
      workspaceId?: string;
      /**
       * The channel identify
       * @format isULID
       * @minLength 1
       */
      channelId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3DeleteChannelAvatarResponse;
  }

  /**
   * No description
   * @name AcceptMessageRequest
   * @request POST:/Channel/AcceptMessageRequest
   */
  export namespace AcceptMessageRequest {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3AcceptMessageRequestRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3AcceptMessageRequestResponse;
  }

  /**
   * No description
   * @name RejectMessageRequest
   * @request POST:/Channel/RejectMessageRequest
   */
  export namespace RejectMessageRequest {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3RejectMessageRequestRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3RejectMessageRequestResponse;
  }

  /**
   * No description
   * @name UpdateDmMediaPermissionSetting
   * @request PUT:/Channel/UpdateDMMediaPermissionSetting
   */
  export namespace UpdateDmMediaPermissionSetting {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UpdateDMMediaPermissionSettingRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UpdateDMMediaPermissionSettingResponse;
  }
}

export namespace Invitation {
  /**
   * No description
   * @name SendInvitation
   * @request POST:/Invitation/SendInvitation
   */
  export namespace SendInvitation {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3SendInvitationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3SendInvitationResponse;
  }

  /**
   * No description
   * @name AcceptInvitation
   * @request POST:/Invitation/AcceptInvitation
   */
  export namespace AcceptInvitation {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3AcceptInvitationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3AcceptInvitationResponse;
  }

  /**
   * No description
   * @name CreateInvitation
   * @request POST:/Invitation/CreateInvitation
   */
  export namespace CreateInvitation {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3CreateInvitationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3CreateInvitationResponse;
  }

  /**
   * No description
   * @name RevokeInvitation
   * @request DELETE:/Invitation/RevokeInvitation
   */
  export namespace RevokeInvitation {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The workspace identify
       * @minLength 1
       */
      workspaceId?: string;
      /**
       * The channel identify
       * @format isULID
       * @minLength 1
       */
      channelId?: string;
      /**
       * Link to the channel acceptance invitation
       * @minLength 1
       */
      code?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3RevokeInvitationResponse;
  }
}

export namespace Member {
  /**
   * No description
   * @name AssignAsAdmin
   * @request POST:/Member/AssignAsAdmin
   */
  export namespace AssignAsAdmin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3AssignAsAdminRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3AssignAsAdminResponse;
  }

  /**
   * No description
   * @name BanFromChannel
   * @request POST:/Member/BanFromChannel
   */
  export namespace BanFromChannel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3BanFromChannelRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3BanFromChannelResponse;
  }

  /**
   * No description
   * @name DismissAsAdmin
   * @request POST:/Member/DismissAsAdmin
   */
  export namespace DismissAsAdmin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3DismissAsAdminRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3DismissAsAdminResponse;
  }

  /**
   * No description
   * @name LeaveChannel
   * @request POST:/Member/LeaveChannel
   */
  export namespace LeaveChannel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3LeaveChannelRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3LeaveChannelResponse;
  }

  /**
   * No description
   * @name RemoveFromChannel
   * @request DELETE:/Member/RemoveFromChannel
   */
  export namespace RemoveFromChannel {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The workspace identify
       * @minLength 1
       */
      workspaceId?: string;
      /**
       * @format isULID
       * @minLength 1
       */
      channelId?: string;
      /**
       * The user identify
       * @format isULID
       * @minLength 1
       */
      userId?: string;
      /** @minLength 1 */
      reason?: string | null;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3RemoveFromChannelResponse;
  }

  /**
   * No description
   * @name UpdateNickname
   * @request PUT:/Member/UpdateNickname
   */
  export namespace UpdateNickname {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UpdateNicknameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UpdateNicknameResponse;
  }

  /**
   * No description
   * @name UnbanFromChannel
   * @request POST:/Member/UnbanFromChannel
   */
  export namespace UnbanFromChannel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3UnbanFromChannelRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3UnbanFromChannelResponse;
  }

  /**
   * No description
   * @name TransferOwnership
   * @request POST:/Member/TransferOwnership
   */
  export namespace TransferOwnership {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3TransferOwnershipRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3TransferOwnershipResponse;
  }

  /**
   * No description
   * @name TransferOwnershipAndLeaveChannel
   * @request POST:/Member/TransferOwnershipAndLeaveChannel
   */
  export namespace TransferOwnershipAndLeaveChannel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V3TransferOwnershipAndLeaveRequest;
    export type RequestHeaders = {};
    export type ResponseBody = V3TransferOwnershipAndLeaveResponse;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Commands Chat
 * @version 1.0.0
 *
 * Commands chat ajv decorator swagger
 */
export class commandsChatHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  friend = {
    /**
     * No description
     *
     * @name AddFriend
     * @request POST:/Friend/AddFriend
     */
    addFriend: (data: V3AddFriendRequest, params: RequestParams = {}) =>
      this.http.request<V3AddFriendResponse, any>({
        path: `/Friend/AddFriend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AcceptFriendRequest
     * @request POST:/Friend/AcceptFriendRequest
     */
    acceptFriendRequest: (
      data: V3AcceptFriendRequestRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AcceptFriendRequestResponse, any>({
        path: `/Friend/AcceptFriendRequest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CancelFriendRequest
     * @request POST:/Friend/CancelFriendRequest
     */
    cancelFriendRequest: (
      data: V3CancelFriendRequestRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CancelFriendRequestResponse, any>({
        path: `/Friend/CancelFriendRequest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name Unfriend
     * @request POST:/Friend/Unfriend
     */
    unfriend: (data: V3UnfriendRequest, params: RequestParams = {}) =>
      this.http.request<V3UnfriendResponse, any>({
        path: `/Friend/Unfriend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteFriendRequest
     * @request DELETE:/Friend/DeleteFriendRequest
     */
    deleteFriendRequest: (
      query: DeleteFriendRequestParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteFriendRequestResponse, any>({
        path: `/Friend/DeleteFriendRequest`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MarkAllAsRead
     * @request POST:/Friend/MarkAllAsRead
     */
    markAllAsRead: (data: V3MarkAllAsReadRequest, params: RequestParams = {}) =>
      this.http.request<V3MarkAllAsReadResponse, any>({
        path: `/Friend/MarkAllAsRead`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  channel = {
    /**
     * No description
     *
     * @name CreateChannel
     * @request POST:/Channel/CreateChannel
     */
    createChannel: (data: V3CreateChannelRequest, params: RequestParams = {}) =>
      this.http.request<V3CreateChannelResponse, any>({
        path: `/Channel/CreateChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateChannelName
     * @request PUT:/Channel/UpdateChannelName
     */
    updateChannelName: (
      data: V3UpdateChannelNameRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateChannelNameResponse, any>({
        path: `/Channel/UpdateChannelName`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateChannelAvatar
     * @request PUT:/Channel/UpdateChannelAvatar
     */
    updateChannelAvatar: (
      data: V3UpdateChannelAvatarRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateChannelAvatarResponse, any>({
        path: `/Channel/UpdateChannelAvatar`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteChannel
     * @request DELETE:/Channel/DeleteChannel
     */
    deleteChannel: (query: DeleteChannelParams, params: RequestParams = {}) =>
      this.http.request<V3DeleteChannelResponse, any>({
        path: `/Channel/DeleteChannel`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteChannelAvatar
     * @request DELETE:/Channel/DeleteChannelAvatar
     */
    deleteChannelAvatar: (
      query: DeleteChannelAvatarParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteChannelAvatarResponse, any>({
        path: `/Channel/DeleteChannelAvatar`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AcceptMessageRequest
     * @request POST:/Channel/AcceptMessageRequest
     */
    acceptMessageRequest: (
      data: V3AcceptMessageRequestRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AcceptMessageRequestResponse, any>({
        path: `/Channel/AcceptMessageRequest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RejectMessageRequest
     * @request POST:/Channel/RejectMessageRequest
     */
    rejectMessageRequest: (
      data: V3RejectMessageRequestRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RejectMessageRequestResponse, any>({
        path: `/Channel/RejectMessageRequest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateDmMediaPermissionSetting
     * @request PUT:/Channel/UpdateDMMediaPermissionSetting
     */
    updateDmMediaPermissionSetting: (
      data: V3UpdateDMMediaPermissionSettingRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateDMMediaPermissionSettingResponse, any>({
        path: `/Channel/UpdateDMMediaPermissionSetting`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invitation = {
    /**
     * No description
     *
     * @name SendInvitation
     * @request POST:/Invitation/SendInvitation
     */
    sendInvitation: (
      data: V3SendInvitationRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendInvitationResponse, any>({
        path: `/Invitation/SendInvitation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AcceptInvitation
     * @request POST:/Invitation/AcceptInvitation
     */
    acceptInvitation: (
      data: V3AcceptInvitationRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AcceptInvitationResponse, any>({
        path: `/Invitation/AcceptInvitation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CreateInvitation
     * @request POST:/Invitation/CreateInvitation
     */
    createInvitation: (
      data: V3CreateInvitationRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CreateInvitationResponse, any>({
        path: `/Invitation/CreateInvitation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RevokeInvitation
     * @request DELETE:/Invitation/RevokeInvitation
     */
    revokeInvitation: (
      query: RevokeInvitationParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RevokeInvitationResponse, any>({
        path: `/Invitation/RevokeInvitation`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  member = {
    /**
     * No description
     *
     * @name AssignAsAdmin
     * @request POST:/Member/AssignAsAdmin
     */
    assignAsAdmin: (data: V3AssignAsAdminRequest, params: RequestParams = {}) =>
      this.http.request<V3AssignAsAdminResponse, any>({
        path: `/Member/AssignAsAdmin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BanFromChannel
     * @request POST:/Member/BanFromChannel
     */
    banFromChannel: (
      data: V3BanFromChannelRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3BanFromChannelResponse, any>({
        path: `/Member/BanFromChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DismissAsAdmin
     * @request POST:/Member/DismissAsAdmin
     */
    dismissAsAdmin: (
      data: V3DismissAsAdminRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DismissAsAdminResponse, any>({
        path: `/Member/DismissAsAdmin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LeaveChannel
     * @request POST:/Member/LeaveChannel
     */
    leaveChannel: (data: V3LeaveChannelRequest, params: RequestParams = {}) =>
      this.http.request<V3LeaveChannelResponse, any>({
        path: `/Member/LeaveChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RemoveFromChannel
     * @request DELETE:/Member/RemoveFromChannel
     */
    removeFromChannel: (
      query: RemoveFromChannelParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RemoveFromChannelResponse, any>({
        path: `/Member/RemoveFromChannel`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateNickname
     * @request PUT:/Member/UpdateNickname
     */
    updateNickname: (
      data: V3UpdateNicknameRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateNicknameResponse, any>({
        path: `/Member/UpdateNickname`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UnbanFromChannel
     * @request POST:/Member/UnbanFromChannel
     */
    unbanFromChannel: (
      data: V3UnbanFromChannelRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UnbanFromChannelResponse, any>({
        path: `/Member/UnbanFromChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TransferOwnership
     * @request POST:/Member/TransferOwnership
     */
    transferOwnership: (
      data: V3TransferOwnershipRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3TransferOwnershipResponse, any>({
        path: `/Member/TransferOwnership`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TransferOwnershipAndLeaveChannel
     * @request POST:/Member/TransferOwnershipAndLeaveChannel
     */
    transferOwnershipAndLeaveChannel: (
      data: V3TransferOwnershipAndLeaveRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3TransferOwnershipAndLeaveResponse, any>({
        path: `/Member/TransferOwnershipAndLeaveChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
