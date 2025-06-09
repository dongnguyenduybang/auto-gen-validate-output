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

export interface V3AddDMMessageReactionRequest {
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
  /**
   * The emoji data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3AddMessageReactionRequest {
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
   * The emoji data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3AudioMetadata {
  samples?: number[];
}

export interface V3ClearDMMessagesForEveryoneRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ClearDMMessagesOnlyMeRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3DeleteAllDMMessagesForEveryoneRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3DeleteAllDMMessagesOnlyMeRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3DeleteAllMessagesOnlyMeRequest {
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

export interface V3DeleteDMMessagesForEveryoneRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds: string[];
}

export interface V3DeleteDMMessagesOnlyMeRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The list messages identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds: string[];
}

export interface V3DeleteMessagesForEveryoneRequest {
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
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds: string[];
}

export interface V3DeleteMessagesOnlyMeRequest {
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
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds: string[];
}

export interface V3FileMetadataRequest {
  /**
   * The size of the file in bytes.
   * @min 1
   */
  filesize?: number | null;
  /**
   * duration of video or record file, unit second
   * @min 1
   */
  duration?: number | null;
  /** The dimensions data */
  dimensions?: object | null;
  /**
   * The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet.
   * @minLength 1
   */
  mimetype: string;
  /**
   * The name of file.
   * @minLength 1
   */
  filename: string;
  /**
   * The file extension.
   * @minLength 1
   */
  extension: string;
}

export interface V3ForwardMessagesToChannelRequest {
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
   * The original message identify
   * @minItems 1
   * @uniqueItems true
   */
  originalMessageIds: string[];
}

export interface V3ForwardMessagesToDMChannelRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The original message identify
   * @minItems 1
   * @uniqueItems true
   */
  originalMessageIds: string[];
}

export type V3MarkAllChannelsAsReadRequest = object;

export interface V3MarkAsReadRequest {
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

export interface V3MarkDMAsReadRequest {
  /**
   * The user identify
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

export interface V3PinUnpinDMMessageRequest {
  /**
   * The user identify pin message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**
   * The message identify pinned
   * @format isULID
   * @minLength 1
   */
  messageId: string;
  /** The status of pin message */
  status?: boolean | null;
}

export interface V3PinUnpinMessageRequest {
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
  /** The status pin or unpin message */
  status?: boolean | null;
}

export interface V3QuoteDMMessageRequest {
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
  /** The message content */
  content: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /** The location language of content */
  contentLocale?: string | null;
}

export interface V3QuoteMessageRequest {
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
  /** The message content */
  content: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /** The location language of content */
  contentLocale?: string | null;
}

export interface V3ReportDMMessageRequest {
  /**
   * The user identify
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
  /** The category report */
  reportCategory: V3ReportCategory;
  /** The user must choose who is being pretended from PretendingToEnum */
  pretendingTo?: V3PretendingTo;
  /** The reason report */
  reportReason?: string;
}

export interface V3ReportMessageRequest {
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
  /** The category report */
  reportCategory: V3ReportCategory;
  /** The user must choose who is being pretended from PretendingToEnum */
  pretendingTo?: V3PretendingTo;
  /** The report reason */
  reportReason?: string;
}

export interface V3RevokeDMMessageReactionRequest {
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
  /**
   * The emoji data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3RevokeMessageReactionRequest {
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
   * The emoji data
   * @format isEmoji
   */
  emoji: string;
}

export interface V3SendDMLocationRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** The ref message */
  ref: string;
  /** The latitue coordinate */
  latitude: string;
  /** The longtitude coordinate */
  longitude: string;
  /** The content of message */
  content?: string | null;
  /** The description of location */
  description?: string | null;
}

export interface V3SendDMMessageRequest {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** The message content */
  content: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /** The location language of content */
  contentLocale?: string | null;
}

export interface V3SendDmMessageMediaRequest {
  /**
   * The user identify
   * @format isULID
   */
  userId: string;
  /** The attachment type */
  attachmentType: V3AttachmentTypeEnum;
  /**
   * The media object data
   * @maxItems 1
   * @minItems 1
   * @uniqueItems true
   */
  mediaObjects: V3MediaObject[];
  /** The message ref */
  ref: string;
}

export interface V3SendDMMessageStickerRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /**  Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /**
   * The sticker identify
   * @minLength 1
   */
  stickerId: string;
  /** The file identify of client send */
  fileRef?: string | null;
}

export interface V3SendLocationRequest {
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
  /** The ref message */
  ref: string;
  /** The latitude coordinate */
  latitude: string;
  /** The longtitude coordinate */
  longitude: string;
  /** The content of message */
  content?: string | null;
  /** Description of location */
  description?: string | null;
}

export interface V3SendMessageRequest {
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
  /** The message content */
  content: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /** The location language of content */
  contentLocale?: string | null;
}

export interface V3SendMessageMediaRequest {
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
  /** The attachment type */
  attachmentType: V3AttachmentTypeEnum;
  /**
   * The media object data
   * @maxItems 1
   * @minItems 1
   * @uniqueItems true
   */
  mediaObjects: V3MediaObject[];
  /** The message ref */
  ref?: string | null;
}

export interface V3SendMessageStickerRequest {
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
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref: string;
  /** The sticker identify */
  stickerId: string;
  /** The file identify of client send */
  fileRef?: string | null;
}

export interface V3SendPokeMessageRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** The ref message */
  ref: string;
}

export interface V3UpdateDmMediaAttachmentsRequest {
  /**
   * The user identify
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
  /**
   * The media object data
   * @minItems 1
   */
  mediaObjects: V3MediaObject[];
  /** The message ref */
  ref: string;
}

export interface V3UpdateDMMessageRequest {
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
  /** The message content */
  content: string;
  /** The location language of content */
  contentLocale?: string | null;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref?: string | null;
}

export interface V3UpdateMediaAttachmentsRequest {
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
   * New List media object data to update attachment
   * @minItems 1
   * @uniqueItems true
   */
  mediaObjects: V3MediaObject[];
  /** The message ref */
  ref: string;
}

export interface V3UpdateMessageRequest {
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
  /** The message content */
  content: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref?: string | null;
  /** The location language of content */
  contentLocale?: string | null;
}

export interface V3UserMetadataRequest {
  /**
   * The x-user identify
   * @format isULID
   * @minLength 1
   */
  "x-user-id": string;
  /** The code of x-country  */
  "x-country-code": string;
  /** the ip of x-client */
  "x-client-ip": string;
  /**
   * The data of x-geo
   * @format isJSON
   * @minLength 1
   */
  "x-geo-data": string;
  /** The x-device identify */
  "x-device-id": string;
  [key: string]: any;
}

export interface V3AddDMMessageReactionResponse {
  /** Status response */
  ok: boolean;
  /**  Data for DM message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3AddMessageReactionResponse {
  /** Status response */
  ok: boolean;
  /** The message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ClearDMMessagesForEveryoneResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ClearDMMessagesOnlyMeResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DataIncludeResponse {
  /** The list user information used for populate */
  users?: V3User;
  /** The list message information used for populate */
  messages?: V3Message;
  /** The list channel information used for populate */
  channels?: V3Channel;
  /** The list member information used for populate */
  members?: V3Member;
  /** The channel metadata data */
  channelMetadata?: V3ChannelMetadata;
}

export interface V3DeleteAllDMMessagesForEveryoneResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteAllDMMessagesOnlyMeResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteAllMessagesOnlyMeResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteDMMessagesForEveryoneResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteDMMessagesOnlyMeResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteMessagesForEveryoneResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteMessagesOnlyMeResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ErrorResponse {
  /** The error code */
  code: number;
  /** The error message */
  message: string;
  /** Detail about the error */
  details: string[];
}

export interface V3ForwardMessagesToChannelResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ForwardMessagesToDMChannelResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3MarkAllChannelsAsReadResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3MarkAsReadResponse {
  /** Status response */
  ok: boolean;
  /** Number total message */
  totalNewMessages: number;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3MarkDMAsReadResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3PinUnpinDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3PinUnpinMessageResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3QuoteDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for DM message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3QuoteMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3ReportDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ReportMessageResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3RevokeDMMessageReactionResponse {
  /** Status response */
  ok: boolean;
  /** Data for DM message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3RevokeMessageReactionResponse {
  /** Status response */
  ok: boolean;
  /** The message's data */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendDMLocationResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for DM message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendDmMessageMediaResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendDMMessageStickerResponse {
  /** Status response */
  ok: boolean;
  /** Data for DM message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendLocationResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendMessageMediaResponse {
  /** Status response */
  ok: boolean;
  /** Data for message */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendMessageStickerResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3SendPokeMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was created */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3UpdateDmMediaAttachmentsResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3UpdateDMMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for DM message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3UpdateMediaAttachmentsResponse {
  /** Status response */
  ok: boolean;
  /** Data for message */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
}

export interface V3UpdateMessageResponse {
  /** Status response */
  ok: boolean;
  /** Data for message that was updated */
  data?: V3MessageData;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for message */
  includes?: V3DataIncludeResponse;
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

export type V3ReactionData = object;

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

export interface DeleteAllDmMessagesForEveryoneParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface DeleteAllDmMessagesOnlyMeParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ClearDmMessageForEveryoneParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ClearDmMessageOnlyMeParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface DeleteDmMessagesForEveryoneParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /**
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds?: string[];
}

export interface DeleteDmMessagesOnlyMeParams {
  /**
   * The user identify whom receive message
   * @format isULID
   * @minLength 1
   */
  userId?: string;
  /**
   * The list messages identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds?: string[];
}

export interface DeleteAllMessagesOnlyMeParams {
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

export interface DeleteMessagesForEveryoneParams {
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
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds?: string[];
}

export interface DeleteMessagesOnlyMeParams {
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
   * The list message identify to delete
   * @minItems 1
   * @uniqueItems true
   */
  messageIds?: string[];
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
 * @title Commands message
 * @version 1.0.0
 *
 * Commands message ajv decorator swagger
 */
export class commandsMessageHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  message = {
    /**
     * No description
     *
     * @name SendDmMessage
     * @request POST:/Message/SendDMMessage
     */
    sendDmMessage: (data: V3SendDMMessageRequest, params: RequestParams = {}) =>
      this.http.request<V3SendDMMessageResponse, any>({
        path: `/Message/SendDMMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AddDmMessageReaction
     * @request POST:/Message/AddDMMessageReaction
     */
    addDmMessageReaction: (
      data: V3AddDMMessageReactionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AddDMMessageReactionResponse, any>({
        path: `/Message/AddDMMessageReaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteAllDmMessagesForEveryone
     * @request DELETE:/Message/DeleteAllDMMessagesForEveryone
     */
    deleteAllDmMessagesForEveryone: (
      query: DeleteAllDmMessagesForEveryoneParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteAllDMMessagesForEveryoneResponse, any>({
        path: `/Message/DeleteAllDMMessagesForEveryone`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteAllDmMessagesOnlyMe
     * @request DELETE:/Message/DeleteAllDMMessagesOnlyMe
     */
    deleteAllDmMessagesOnlyMe: (
      query: DeleteAllDmMessagesOnlyMeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteAllDMMessagesOnlyMeResponse, any>({
        path: `/Message/DeleteAllDMMessagesOnlyMe`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ClearDmMessageForEveryone
     * @request DELETE:/Message/ClearDMMessageForEveryone
     */
    clearDmMessageForEveryone: (
      query: ClearDmMessageForEveryoneParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ClearDMMessagesForEveryoneResponse, any>({
        path: `/Message/ClearDMMessageForEveryone`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ClearDmMessageOnlyMe
     * @request DELETE:/Message/ClearDMMessageOnlyMe
     */
    clearDmMessageOnlyMe: (
      query: ClearDmMessageOnlyMeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ClearDMMessagesOnlyMeResponse, any>({
        path: `/Message/ClearDMMessageOnlyMe`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteDmMessagesForEveryone
     * @request DELETE:/Message/DeleteDMMessagesForEveryone
     */
    deleteDmMessagesForEveryone: (
      query: DeleteDmMessagesForEveryoneParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteDMMessagesForEveryoneResponse, any>({
        path: `/Message/DeleteDMMessagesForEveryone`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteDmMessagesOnlyMe
     * @request DELETE:/Message/DeleteDMMessagesOnlyMe
     */
    deleteDmMessagesOnlyMe: (
      query: DeleteDmMessagesOnlyMeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteDMMessagesOnlyMeResponse, any>({
        path: `/Message/DeleteDMMessagesOnlyMe`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForwardMessagesToDmChannel
     * @request POST:/Message/ForwardMessagesToDMChannel
     */
    forwardMessagesToDmChannel: (
      data: V3ForwardMessagesToDMChannelRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ForwardMessagesToDMChannelResponse, any>({
        path: `/Message/ForwardMessagesToDMChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MarkDmAsRead
     * @request POST:/Message/MarkDMAsRead
     */
    markDmAsRead: (data: V3MarkDMAsReadRequest, params: RequestParams = {}) =>
      this.http.request<V3MarkDMAsReadResponse, any>({
        path: `/Message/MarkDMAsRead`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PinUnpinDmMessage
     * @request POST:/Message/PinUnpinDMMessage
     */
    pinUnpinDmMessage: (
      data: V3PinUnpinDMMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3PinUnpinDMMessageResponse, any>({
        path: `/Message/PinUnpinDMMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name QuoteDmMessage
     * @request POST:/Message/QuoteDMMessage
     */
    quoteDmMessage: (
      data: V3QuoteDMMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3QuoteDMMessageResponse, any>({
        path: `/Message/QuoteDMMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReportDmMessage
     * @request POST:/Message/ReportDMMessage
     */
    reportDmMessage: (
      data: V3ReportDMMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ReportDMMessageResponse, any>({
        path: `/Message/ReportDMMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RevokeDmMessageReaction
     * @request PUT:/Message/RevokeDMMessageReaction
     */
    revokeDmMessageReaction: (
      data: V3RevokeDMMessageReactionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RevokeDMMessageReactionResponse, any>({
        path: `/Message/RevokeDMMessageReaction`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendDmLocation
     * @request POST:/Message/SendDMLocation
     */
    sendDmLocation: (
      data: V3SendDMLocationRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendDMLocationResponse, any>({
        path: `/Message/SendDMLocation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendDmMessageMedia
     * @request POST:/Message/SendDmMessageMedia
     */
    sendDmMessageMedia: (
      data: V3SendDmMessageMediaRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendDmMessageMediaResponse, any>({
        path: `/Message/SendDmMessageMedia`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendDmMessageSticker
     * @request POST:/Message/SendDMMessageSticker
     */
    sendDmMessageSticker: (
      data: V3SendDMMessageStickerRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendDMMessageStickerResponse, any>({
        path: `/Message/SendDMMessageSticker`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendPokeMessage
     * @request POST:/Message/SendPokeMessage
     */
    sendPokeMessage: (
      data: V3SendPokeMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendPokeMessageResponse, any>({
        path: `/Message/SendPokeMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateDmMediaAttachments
     * @request PUT:/Message/UpdateDmMediaAttachments
     */
    updateDmMediaAttachments: (
      data: V3UpdateDmMediaAttachmentsRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateDmMediaAttachmentsResponse, any>({
        path: `/Message/UpdateDmMediaAttachments`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateDmMessage
     * @request PUT:/Message/UpdateDMMessage
     */
    updateDmMessage: (
      data: V3UpdateDMMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateDMMessageResponse, any>({
        path: `/Message/UpdateDMMessage`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendMessage
     * @request POST:/Message/SendMessage
     */
    sendMessage: (data: V3SendMessageRequest, params: RequestParams = {}) =>
      this.http.request<V3SendMessageResponse, any>({
        path: `/Message/SendMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MarkAllChannelsAsRead
     * @request POST:/Message/MarkAllChannelsAsRead
     */
    markAllChannelsAsRead: (
      data: V3MarkAllChannelsAsReadRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MarkAllChannelsAsReadResponse, any>({
        path: `/Message/MarkAllChannelsAsRead`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MarkAsRead
     * @request POST:/Message/MarkAsRead
     */
    markAsRead: (data: V3MarkAsReadRequest, params: RequestParams = {}) =>
      this.http.request<V3MarkAsReadResponse, any>({
        path: `/Message/MarkAsRead`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AddMessageReaction
     * @request POST:/Message/AddMessageReaction
     */
    addMessageReaction: (
      data: V3AddMessageReactionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AddMessageReactionResponse, any>({
        path: `/Message/AddMessageReaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RevokeMessageReaction
     * @request PUT:/Message/RevokeMessageReaction
     */
    revokeMessageReaction: (
      data: V3RevokeMessageReactionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RevokeMessageReactionResponse, any>({
        path: `/Message/RevokeMessageReaction`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteAllMessagesOnlyMe
     * @request DELETE:/Message/DeleteAllMessagesOnlyMe
     */
    deleteAllMessagesOnlyMe: (
      query: DeleteAllMessagesOnlyMeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteAllMessagesOnlyMeResponse, any>({
        path: `/Message/DeleteAllMessagesOnlyMe`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteMessagesForEveryone
     * @request DELETE:/Message/DeleteMessagesForEveryone
     */
    deleteMessagesForEveryone: (
      query: DeleteMessagesForEveryoneParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteMessagesForEveryoneResponse, any>({
        path: `/Message/DeleteMessagesForEveryone`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteMessagesOnlyMe
     * @request DELETE:/Message/DeleteMessagesOnlyMe
     */
    deleteMessagesOnlyMe: (
      query: DeleteMessagesOnlyMeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteMessagesOnlyMeResponse, any>({
        path: `/Message/DeleteMessagesOnlyMe`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForwardMessagesToChannel
     * @request POST:/Message/ForwardMessagesToChannel
     */
    forwardMessagesToChannel: (
      data: V3ForwardMessagesToChannelRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ForwardMessagesToChannelResponse, any>({
        path: `/Message/ForwardMessagesToChannel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PinUnpinMessage
     * @request POST:/Message/PinUnpinMessage
     */
    pinUnpinMessage: (
      data: V3PinUnpinMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3PinUnpinMessageResponse, any>({
        path: `/Message/PinUnpinMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name QuoteMessage
     * @request POST:/Message/QuoteMessage
     */
    quoteMessage: (data: V3QuoteMessageRequest, params: RequestParams = {}) =>
      this.http.request<V3QuoteMessageResponse, any>({
        path: `/Message/QuoteMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReportMessage
     * @request POST:/Message/ReportMessage
     */
    reportMessage: (data: V3ReportMessageRequest, params: RequestParams = {}) =>
      this.http.request<V3ReportMessageResponse, any>({
        path: `/Message/ReportMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendLocation
     * @request POST:/Message/SendLocation
     */
    sendLocation: (data: V3SendLocationRequest, params: RequestParams = {}) =>
      this.http.request<V3SendLocationResponse, any>({
        path: `/Message/SendLocation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendMessageMedia
     * @request POST:/Message/SendMessageMedia
     */
    sendMessageMedia: (
      data: V3SendMessageMediaRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendMessageMediaResponse, any>({
        path: `/Message/SendMessageMedia`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SendMessageSticker
     * @request POST:/Message/SendMessageSticker
     */
    sendMessageSticker: (
      data: V3SendMessageStickerRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SendMessageStickerResponse, any>({
        path: `/Message/SendMessageSticker`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateMediaAttachments
     * @request PUT:/Message/UpdateMediaAttachments
     */
    updateMediaAttachments: (
      data: V3UpdateMediaAttachmentsRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateMediaAttachmentsResponse, any>({
        path: `/Message/UpdateMediaAttachments`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateMessage
     * @request PUT:/Message/UpdateMessage
     */
    updateMessage: (data: V3UpdateMessageRequest, params: RequestParams = {}) =>
      this.http.request<V3UpdateMessageResponse, any>({
        path: `/Message/UpdateMessage`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
