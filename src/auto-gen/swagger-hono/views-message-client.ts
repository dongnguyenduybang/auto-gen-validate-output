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

export enum V3OrientationEnum {
  ORIENTATION_DEFAULT = 0,
  ORIENTATION_PORTRAIT = 1,
  ORIENTATION_LANDSCAPE = 2,
}

export enum V3PlatformEnum {
  PLATFORM_UNSPECIFIED = 0,
  PLATFORM_WEB = 1,
  PLATFORM_ANDROID = 2,
  PLATFORM_IOS = 3,
  PLATFORM_DESKTOP = 4,
}

export enum V3InvitationStatusEnum {
  INVITATION_STATUS_ENUM_ACTIVE = 0,
  INVITATION_STATUS_ENUM_EXPIRED = 1,
  INVITATION_STATUS_ENUM_REVOKED = 2,
}

export enum V3AttachmentFileStatusEnum {
  ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED = 0,
  ATTACHMENT_FILE_STATUS_ENUM_UPLOADING = 1,
  ATTACHMENT_FILE_STATUS_ENUM_SUCCESS = 2,
  ATTACHMENT_FILE_STATUS_ENUM_FAILURE = 3,
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

export enum V3ChannelTypeEnum {
  CHANNEL_TYPE_ENUM_DM = 0,
  CHANNEL_TYPE_ENUM_CHANNEL = 1,
  CHANNEL_TYPE_ENUM_BROADCAST = 2,
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

export interface V3GetDMMessageRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId: string;
}

export interface V3GetMessageRequest {
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId: string;
}

export interface V3GetPinnedDMMessageRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3GetPinnedMessageRequest {
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

export interface V3JumpToDMMessageRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The message identify jump to
   * @format isULID
   * @minLength 1
   */
  messageId: string;
}

export interface V3JumpToMessageRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId: string;
}

export interface V3ListChannelAuditLogsRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel Identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3ListDMMessageFragmentsRequest {
  /**
   * messageId
   * @format isULID
   * @minLength 1
   */
  offsetId?: string | null;
  /**
   * Can be used to only return results with ID strictly smaller than max_id
   * @format isULID
   * @minLength 1
   */
  maxId?: string | null;
  /**
   * Can be used to only return results with ID strictly greater than min_id
   * @format isULID
   * @minLength 1
   */
  minId?: string | null;
  /** default: 500, maximum 5k */
  limit?: string | null;
  /** based pagination */
  addOffset?: string | null;
  /**
   * Can be used to only return results that are older than max_date
   * @format isDateTime
   * @minLength 1
   */
  maxDate?: string | null;
  /**
   * Can be used to only return results with are newer than min_date
   * @format isDateTime
   * @minLength 1
   */
  minDate?: string | null;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ListDMMessageReactionsRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * Status response
   * @format isULID
   * @minLength 1
   */
  messageId: string;
  /**
   * The emoji's data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3ListDMMessagesRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ListMessageReactionsRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId: string;
  /**
   * The emoji's data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3ListMessagesRequest {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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

export interface V3OffsetPaginationRequest {
  /**
   * messageId
   * @format isULID
   * @minLength 1
   */
  offsetId?: string | null;
  /**
   * Can be used to only return results with ID strictly smaller than max_id
   * @format isULID
   * @minLength 1
   */
  maxId?: string | null;
  /**
   * Can be used to only return results with ID strictly greater than min_id
   * @format isULID
   * @minLength 1
   */
  minId?: string | null;
  /** default: 500, maximum 5k */
  limit?: string | null;
  /** based pagination */
  addOffset?: string | null;
  /**
   * Can be used to only return results that are older than max_date
   * @format isDateTime
   * @minLength 1
   */
  maxDate?: string | null;
  /**
   * Can be used to only return results with are newer than min_date
   * @format isDateTime
   * @minLength 1
   */
  minDate?: string | null;
}

export type V3PaginationRequest = any & {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
};

export interface V3SyncDMMessagesRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * Datetime ISO String
   * @format isDateTime
   * @minLength 1
   */
  updateTimeAfter: string;
}

export interface V3SyncMessagesRequest {
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
   * Datetime ISO String
   * @format isDateTime
   * @minLength 1
   */
  updateTimeAfter: string;
}

export interface V3UserMetadataRequest {
  /**
   * @format isULID
   * @minLength 1
   */
  'x-user-id': string;
  [key: string]: any;
}

export interface V3ListMessageFragmentsRequest {
  /**
   * messageId
   * @format isULID
   * @minLength 1
   */
  offsetId?: string | null;
  /**
   * Can be used to only return results with ID strictly smaller than max_id
   * @format isULID
   * @minLength 1
   */
  maxId?: string | null;
  /**
   * Can be used to only return results with ID strictly greater than min_id
   * @format isULID
   * @minLength 1
   */
  minId?: string | null;
  /** default: 500, maximum 5k */
  limit?: string | null;
  /** based pagination */
  addOffset?: string | null;
  /**
   * Can be used to only return results that are older than max_date
   * @format isDateTime
   * @minLength 1
   */
  maxDate?: string | null;
  /**
   * Can be used to only return results with are newer than min_date
   * @format isDateTime
   * @minLength 1
   */
  minDate?: string | null;
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

export interface V3GetDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** The DM message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3GetMessageResponse {
  /** Status response */
  ok: boolean;
  /** The message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3GetPinnedDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** The list message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3GetPinnedMessageResponse {
  /** Status response */
  ok: boolean;
  /** The list message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3JumpToDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** List of values for the Message interface. */
  data?: V3MessageData[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3JumpToMessageResponse {
  /** Status response */
  ok: boolean;
  /** List of values for the Message interface. */
  data?: V3MessageData[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ListChannelAuditLogsResponse {
  /** Status response */
  ok?: boolean;
  /** List of values for the AuditLog interface. */
  data?: V3AuditLogData[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data AuditLog pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for channel audit log */
  includes?: V3DataIncludeResponse;
}

export interface V3ListDMMessageFragmentsResponse {
  /** Status response */
  ok: boolean;
  /** The list message identify */
  data?: string[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ListDMMessageReactionsResponse {
  /** Status response */
  ok: boolean;
  /** The list DM message reaction's data */
  data?: V3ListMessageReactionsData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ListDMMessagesResponse {
  /** Status response */
  ok: boolean;
  /** List of values for the Message interface. */
  data?: V3MessageData[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ListMessageReactionsResponse {
  /** Status response */
  ok: boolean;
  /** The list message reaction's data */
  data?: V3ListMessageReactionsData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ListMessagesResponse {
  /** Status response */
  ok: boolean;
  /** The list message's data */
  data?: V3MessageData[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Data pagination information */
  paging?: V3PagingResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SyncDMMessagesResponse {
  /** The list message's data */
  data?: V3MessageData[];
  /** The list DMMessage identify deleted */
  messagesDeleted?: string[];
  /** The last message deleted in channel of user */
  lastMessageDeleted?: string;
  /** Time sync data */
  syncTime?: string;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SyncMessagesResponse {
  /** The list message's data response */
  data?: V3MessageData[];
  /** The list messages identify deleted */
  messagesDeleted?: string[];
  /** The last message identify deleted in channel of user */
  lastMessageDeleted?: string;
  /** Time sync data */
  syncTime?: string;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ErrorResponse {
  /** The error code */
  code: number;
  /** The error message */
  message: string;
  /** Detail about the error */
  details: string[];
}

export interface V3DataIncludeResponse {
  /** The list user information used for populate */
  users?: V3User;
  /** The list message information used for populate */
  messages?: V3Message;
  /** The list channel information used for populate */
  channels?: V3Channel;
  /**  The list member information used for populate */
  members?: V3Member;
  /** The channel metadata data */
  channelMetadata?: V3ChannelMetadata;
}

export interface V3PagingResponse {
  /** Returns true if there is information on the next page. */
  hasNext?: boolean;
  /** Returns true if there is information on the prev page. */
  hasPrev?: boolean;
  /** is the token to send a request to get the next page's data. */
  nextPageToken?: string;
  /** is the token to send a request to get previous page data. */
  prevPageToken?: string;
}

export interface V3ListMessageFragmentsResponse {
  /** Status response */
  ok: boolean;
  /** The list message identify */
  data?: string[];
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
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

export interface V3LayoutMetadata {
  layoutId?: string;
  matrix?: V3Matrix | null;
  dimensions?: V3Dimensions | null;
  orientation?: V3OrientationEnum;
  isRowSpan?: boolean;
  fileRef?: string;
}

export interface V3StorageClassObjectEmbed {
  bucket?: string;
  etag?: string;
  key?: string;
  location?: string;
}

export interface V3ListMessageReactionsData {
  emoji?: string;
  users?: V3User[];
  isReacted?: boolean;
  total?: number;
  members?: V3MemberData[];
}

export interface V3Device {
  deviceId?: string;
  appId?: string;
  token?: string;
  voipToken?: string;
  platform?: V3PlatformEnum;
  geocode?: string;
  updateTime?: number | string;
}

export interface V3Matrix {
  row?: number;
  column?: number;
}

export interface V3AuditLog {
  workspaceId?: string;
  channelId?: string;
  logId?: string;
  content?: string;
  contentArguments?: string[];
  userId?: string;
  createTime?: string;
  updateTime?: string;
}

export interface V3AuditLogData {
  auditLog?: V3AuditLog;
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

export interface GetDmMessageParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /**
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
}

export interface GetMessageParams {
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
}

export interface ListDmMessagesParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ListMessagesParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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

export interface ListMessageReactionsParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
  /**
   * The emoji's data
   * @format isEmoji
   */
  emoji?: string;
}

export interface ListDmMessageReactionsParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /**
   * Status response
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
  /**
   * The emoji's data
   * @format isEmoji
   */
  emoji?: string;
}

export interface GetPinnedMessageParams {
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

export interface GetPinnedDmMessageParams {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface JumpToDmMessageParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /**
   * The message identify jump to
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
}

export interface JumpToMessageParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
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
   * The message identify
   * @format isULID
   * @minLength 1
   */
  messageId?: string;
}

export interface ListChannelAuditLogsParams {
  /** The allowable value ranges from 1 to 500, with a default value of 100 */
  limit?: string | null;
  /**
   * The last messageId of this page will be the next_page_token of the current page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first messageId of this page will be the prev_page_token of the current page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * The channel Identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface ListDmMessageFragmentsParams {
  /**
   * messageId
   * @format isULID
   * @minLength 1
   */
  offsetId?: string | null;
  /**
   * Can be used to only return results with ID strictly smaller than max_id
   * @format isULID
   * @minLength 1
   */
  maxId?: string | null;
  /**
   * Can be used to only return results with ID strictly greater than min_id
   * @format isULID
   * @minLength 1
   */
  minId?: string | null;
  /** default: 500, maximum 5k */
  limit?: string | null;
  /** based pagination */
  addOffset?: string | null;
  /**
   * Can be used to only return results that are older than max_date
   * @format isDateTime
   * @minLength 1
   */
  maxDate?: string | null;
  /**
   * Can be used to only return results with are newer than min_date
   * @format isDateTime
   * @minLength 1
   */
  minDate?: string | null;
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ListMessageFragmentsParams {
  /**
   * messageId
   * @format isULID
   * @minLength 1
   */
  offsetId?: string | null;
  /**
   * Can be used to only return results with ID strictly smaller than max_id
   * @format isULID
   * @minLength 1
   */
  maxId?: string | null;
  /**
   * Can be used to only return results with ID strictly greater than min_id
   * @format isULID
   * @minLength 1
   */
  minId?: string | null;
  /** default: 500, maximum 5k */
  limit?: string | null;
  /** based pagination */
  addOffset?: string | null;
  /**
   * Can be used to only return results that are older than max_date
   * @format isDateTime
   * @minLength 1
   */
  maxDate?: string | null;
  /**
   * Can be used to only return results with are newer than min_date
   * @format isDateTime
   * @minLength 1
   */
  minDate?: string | null;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
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
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
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
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
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
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
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
 * @title Views message
 * @version v3
 *
 * Views message Ajv decorator swagger documents
 */
export class viewsMessageHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  messageView = {
    /**
     * No description
     *
     * @name GetDmMessage
     * @request GET:/MessageView/GetDMMessage
     */
    getDmMessage: (query: GetDmMessageParams, params: RequestParams = {}) =>
      this.http.request<V3GetDMMessageResponse, any>({
        path: `/MessageView/GetDMMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetMessage
     * @request GET:/MessageView/GetMessage
     */
    getMessage: (query: GetMessageParams, params: RequestParams = {}) =>
      this.http.request<V3GetMessageResponse, any>({
        path: `/MessageView/GetMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListDmMessages
     * @request GET:/MessageView/ListDMMessages
     */
    listDmMessages: (query: ListDmMessagesParams, params: RequestParams = {}) =>
      this.http.request<V3ListDMMessagesResponse, any>({
        path: `/MessageView/ListDMMessages`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListMessages
     * @request GET:/MessageView/ListMessages
     */
    listMessages: (query: ListMessagesParams, params: RequestParams = {}) =>
      this.http.request<V3ListMessagesResponse, any>({
        path: `/MessageView/ListMessages`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListMessageReactions
     * @request GET:/MessageView/ListMessageReactions
     */
    listMessageReactions: (
      query: ListMessageReactionsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListMessageReactionsResponse, any>({
        path: `/MessageView/ListMessageReactions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListDmMessageReactions
     * @request GET:/MessageView/ListDMMessageReactions
     */
    listDmMessageReactions: (
      query: ListDmMessageReactionsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListDMMessageReactionsResponse, any>({
        path: `/MessageView/ListDMMessageReactions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetPinnedMessage
     * @request GET:/MessageView/GetPinnedMessage
     */
    getPinnedMessage: (
      query: GetPinnedMessageParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GetPinnedMessageResponse, any>({
        path: `/MessageView/GetPinnedMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetPinnedDmMessage
     * @request GET:/MessageView/GetPinnedDMMessage
     */
    getPinnedDmMessage: (
      query: GetPinnedDmMessageParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GetPinnedDMMessageResponse, any>({
        path: `/MessageView/GetPinnedDMMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name JumpToDmMessage
     * @request GET:/MessageView/JumpToDMMessage
     */
    jumpToDmMessage: (
      query: JumpToDmMessageParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3JumpToDMMessageResponse, any>({
        path: `/MessageView/JumpToDMMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name JumpToMessage
     * @request GET:/MessageView/JumpToMessage
     */
    jumpToMessage: (query: JumpToMessageParams, params: RequestParams = {}) =>
      this.http.request<V3JumpToMessageResponse, any>({
        path: `/MessageView/JumpToMessage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListChannelAuditLogs
     * @request GET:/MessageView/ListChannelAuditLogs
     */
    listChannelAuditLogs: (
      query: ListChannelAuditLogsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListChannelAuditLogsResponse, any>({
        path: `/MessageView/ListChannelAuditLogs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListDmMessageFragments
     * @request GET:/MessageView/ListDMMessageFragments
     */
    listDmMessageFragments: (
      query: ListDmMessageFragmentsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListDMMessageFragmentsResponse, any>({
        path: `/MessageView/ListDMMessageFragments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListMessageFragments
     * @request GET:/MessageView/ListMessageFragments
     */
    listMessageFragments: (
      query: ListMessageFragmentsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListMessageFragmentsResponse, any>({
        path: `/MessageView/ListMessageFragments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}
