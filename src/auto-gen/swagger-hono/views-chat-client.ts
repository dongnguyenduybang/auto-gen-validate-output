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

export enum V3UserScopeEnum {
  UNSPECIFIED = 0,
  EVERYBODY = 1,
  ONLY_FRIENDS = 2,
  NO_BODY = 3,
}

export enum V3CallStateEnum {
  CALL_STATE_UNSPECIFIED = 0,
  CALL_STATE_DIALING = 1,
  CALL_STATE_CALLING = 2,
  CALL_STATE_READY_TO_CONNECT = 3,
  CALL_STATE_CONNECTING = 4,
  CALL_STATE_CONNECTED = 5,
  CALL_STATE_RECONNECTING = 6,
  CALL_STATE_ENDED = 10,
}

export enum V3CallEndedReasonEnum {
  CALL_ENDED_REASON_UNSPECIFIED = 0,
  CALL_ENDED_REASON_FAILED = 1,
  CALL_ENDED_REASON_REMOTE_ENDED = 2,
  CALL_ENDED_REASON_UNANSWERED = 3,
  CALL_ENDED_REASON_ANSWERED_ELSEWHERE = 4,
  CALL_ENDED_REASON_DECLINED_ELSEWHERE = 5,
}

export enum V3UserDeletedTypeEnum {
  USER_DELETED = 0,
  USER_BLOCKED = 1,
}

export enum V3SessionExpirationSettingEnum {
  SESSION_EXPIRATION_SETTING_ENUM_180_DAYS = 0,
  SESSION_EXPIRATION_SETTING_ENUM_7_DAYS = 1,
  SESSION_EXPIRATION_SETTING_ENUM_30_DAYS = 2,
  SESSION_EXPIRATION_SETTING_ENUM_90_DAYS = 3,
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

export enum V3OrientationEnum {
  ORIENTATION_DEFAULT = 0,
  ORIENTATION_PORTRAIT = 1,
  ORIENTATION_LANDSCAPE = 2,
}

export enum V3AttachmentFileStatusEnum {
  ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED = 0,
  ATTACHMENT_FILE_STATUS_ENUM_UPLOADING = 1,
  ATTACHMENT_FILE_STATUS_ENUM_SUCCESS = 2,
  ATTACHMENT_FILE_STATUS_ENUM_FAILURE = 3,
}

export enum V3ChannelDeletedTypeEnum {
  CHANNEL_DELETED = 0,
  MESSAGES_DELETED = 1,
  CHANNEL_BLOCKED = 2,
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

export interface V3GetChannelRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: string;
  /**
   * The channel idenitfy
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3GetDMChannelRequest {
  /**
   * The workspace identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ListAllChannelsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListChannelsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListDMChannelsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListInComingMessageRequestsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListOutGoingMessageRequestsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3GetFriendRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ListFriendsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListInComingFriendRequestsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListOutGoingFriendRequestsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3GetInvitationRequest {
  /**
   * Link to the channel acceptance invitation
   * @minLength 1
   */
  code: string;
}

export interface V3ListInvitationRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export type V3ListInvitableUsersRequest = object;

export interface V3GetMemberRequest {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: '0';
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

export interface V3ListMembersRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export type V3PaginationRequest = any & {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
};

export interface V3GetAvatarFrameRequest {
  /**
   * The avatar frame identify
   * @minLength 1
   */
  avatarFrameId: string;
}

export interface V3GetDataUserRingbackToneRequest {
  /**
   * The ringback tone identify
   * @minLength 1
   */
  ringbackToneId: string;
}

export type V3GetMeRequest = object;

export type V3GetPrivateDataRequest = object;

export interface V3GetUserByUserIdRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3GetUserByUsernameRequest {
  /**
   * The user identify
   * @minLength 1
   */
  username: string;
}

export interface V3ListAvatarFrameCollectionRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListBannedUsersRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId: string;
}

export interface V3ListBlockedUsersRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export type V3ListRingbackTonesRequest = object;

export interface V3ListPrivateDataRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListUserStatusRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3ListUserVisitedProfileRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface V3SyncUsersRequest {
  /**
   * List userIds need sync data
   * @uniqueItems true
   */
  userIds: string[];
  /**
   * Datetime ISO String
   * @format isDateTime
   * @minLength 1
   */
  updateTimeAfter: string;
}

export interface V3UserMetadataRequest {
  /**
   * x-user identity
   * @format isULID
   * @minLength 1
   */
  'x-user-id': string;
  [key: string]: any;
}

export interface V3PaginationResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3GetChannelResponse {
  /** Status response */
  ok?: boolean;
  error?: V3ErrorResponse;
  /** The channel's data */
  data?: V3ChannelData;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3GetDMChannelResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The channel's data */
  data?: V3ChannelData;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3ListAllChannelsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Channel interface. */
  data?: V3ChannelData[];
}

export interface V3ListChannelsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Channel interface. */
  data?: V3ChannelData[];
}

export interface V3ListDMChannelsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Channel interface. */
  data?: V3ChannelData[];
}

export interface V3ListInComingMessageRequestsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Channel interface. */
  data?: V3ChannelData[];
}

export interface V3ListOutGoingMessageRequestsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Channel interface. */
  data?: V3ChannelData[];
}

export interface V3ErrorResponse {
  /** The error code */
  code?: number;
  /** The error message */
  message?: string;
  /** Detail about the error */
  details?: string[];
}

export interface V3GetFriendResponse {
  /** The status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The friend's data */
  data?: V3FriendData;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3ListFriendsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Friend interface. */
  data?: V3FriendData[];
}

export interface V3ListInComingFriendRequestsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Friend interface. */
  data?: V3FriendData[];
}

export interface V3ListOutGoingFriendRequestsResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Friend interface. */
  data?: V3FriendData[];
}

export interface V3GetInvitationResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The invitation's data */
  data?: V3InvitationData;
}

export interface V3ListInvitationResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the Invitation interface. */
  data?: V3Invitation[];
}

export interface V3ListInvitableUsersResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The list user's data */
  data?: V3User[];
  /** Data pagination information */
  paging?: V3Paging;
}

export interface V3GetMemberResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** List of values for the MemberView interface. */
  data?: V3MemberData;
  /** Information data and populate data for member */
  includes?: V3DataInclude;
}

export interface V3ListMembersResponse {
  /** Returns true if there is information on the next page. */
  ok?: boolean;
  /** Data pagination information */
  paging?: V3Paging;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
  /** List of values for the MemberView interface. */
  data?: V3MemberData[];
}

export interface V3Paging {
  /** Returns true if there is information on the next page. */
  hasNext?: boolean;
  /** Returns true if there is information on the prev page. */
  hasPrev?: boolean;
  /** is the token to send a request to get the next page's data. */
  nextPageToken?: string;
  /** is the token to send a request to get previous page data. */
  prevPageToken?: string;
}

export interface V3GetAvatarFrameResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** Avatar frame data */
  data?: V3AvatarFrameData;
}

export interface V3GetDataUserRingbackToneResponse {
  /** The status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The ringback tone response data */
  data?: V3RingbackToneData;
}

export interface V3GetMeResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The user's data */
  data?: V3MeResponse;
}

export interface V3GetPrivateDataResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The private data */
  data?: V3PrivateData;
}

export interface V3GetUserByUserIdResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The user's data */
  data?: V3UserView;
}

export interface V3GetUserByUsernameResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The user's data */
  data?: V3UserView;
}

export interface V3ListAvatarFrameCollectionResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** List avatar group by collection */
  data?: V3AvatarFrameCollectionData[];
  /** Data pagination */
  paging?: V3Paging;
}

export interface V3ListBannedUsersResponse {
  /** Status response */
  ok?: boolean;
  /**
   * An error message in case operation encountered any issues.
   *  Only have value when OK is false.
   */
  error?: V3ErrorResponse;
  /** List of values for the MemberView interface. */
  data?: V3MemberData[];
  /** Information about pagination, such as the current page, total pages, etc. */
  paging?: V3Paging;
  /** Information data and populate data for member */
  includes?: V3DataInclude;
}

export interface V3ListBlockedUsersResponse {
  /** Indicates whether the search operation was successful. */
  ok?: boolean;
  /**
   * An error message in case the search operation encountered any issues.
   * Only have value when OK is false.
   */
  error?: V3ErrorResponse;
  /**
   * An array of search result items containing user information.
   * Only have value when OK is true.
   */
  data?: V3User[];
  /** Information about pagination, such as the current page, total pages, etc. */
  paging?: V3Paging;
}

export interface V3ListRingbackTonesResponse {
  /** The status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The ringback tone response data */
  data?: V3RingbackToneData[];
}

export interface V3ListPrivateDataResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The private data */
  data?: V3PrivateData;
  /** Information about pagination, such as the current page, total pages, etc. */
  paging?: V3Paging;
}

export interface V3ListUserStatusResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The user data */
  data?: V3User[];
  /** Information about pagination, such as the current page, total pages, etc. */
  paging?: V3Paging;
}

export interface V3ListUserVisitedProfileResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The visited profile data */
  data?: V3VisitedProfileData[];
  /** Information about pagination, such as the current page, total pages, etc. */
  paging?: V3Paging;
}

export interface V3UserIdentification {
  /** The user identify */
  userId?: string;
  /** The user name */
  username?: string;
  /** User delete type */
  type?: V3UserDeletedTypeEnum;
}

export interface V3SyncUsersResponse {
  /** List of values for the user view interface have update after sync time input. */
  data?: V3UserView[];
  /** List of userIds deleted. */
  userDeleted?: V3UserIdentification[];
  /** time sync data */
  syncTime?: string;
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

export interface V3AvatarFrameCollectionData {
  collection?: string;
  avatarFrames?: V3AvatarFrameData[];
}

export interface V3AvatarFrameData {
  avatarFrameId?: string;
  avatarFramePath?: string;
  isDefault?: boolean;
  isActive?: boolean;
  createTime?: string;
  updateTime?: string;
  collection?: string;
}

export interface V3StorageClassObjectEmbed {
  bucket?: string;
  etag?: string;
  key?: string;
  location?: string;
}

export interface V3Matrix {
  row?: number;
  column?: number;
}

export interface V3LayoutMetadata {
  layoutId?: string;
  matrix?: V3Matrix | null;
  dimensions?: V3Dimensions | null;
  orientation?: V3OrientationEnum;
  isRowSpan?: boolean;
  fileRef?: string;
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

export interface V3VisitedProfileData {
  user?: V3UserView | null;
  visitedTime?: string;
  lastVisitedTime?: string;
}

export interface V3ChannelSyncData {
  id?: string;
  version?: number;
  source?: string;
  unreadCount?: number;
  lastSeenMessageId?: string;
  pinned?: boolean;
  sort?: number;
}

export interface V3UserSyncData {
  id?: string;
  version?: number;
  source?: string;
  dmId?: string;
  blocked?: boolean;
  aliasName?: string;
}

export interface V3CallLogSyncData {
  id?: string;
  version?: number;
  source?: string;
  callerId?: string;
  calleeId?: string;
  callState?: V3CallStateEnum;
  endedReason?: V3CallEndedReasonEnum;
  callTimeInSeconds?: number;
  isOutgoing?: boolean;
  readTime?: string;
  endedTime?: string;
  createTime?: string;
}

export interface V3PrivateData {
  channels?: V3ChannelSyncData[];
  users?: V3UserSyncData[];
  callLogs?: V3CallLogSyncData[];
  updateTime?: string;
  createTime?: string;
}

export interface V3RingbackToneData {
  ringbackToneId?: string;
  ringbackTonePath?: string;
  name?: string;
  isDefault?: boolean;
  isActive?: boolean;
  createTime?: string;
  updateTime?: string;
}

export interface V3MeResponse {
  userId?: string;
  username?: string;
  createTime?: string;
  updateTime?: string;
  email?: string;
  phoneNumber?: string;
  userConnectLink?: string;
  globalNotificationStatus?: string;
  profile?: V3Profile;
  setting?: V3UserSetting;
  statusData?: V3UserStatus;
}

export interface V3VariableSecurity {
  enable?: boolean;
}

export interface V3MediaPermissionPrivacy {
  value?: V3MediaPermissionSettingEnum;
}

export interface V3UserSecurity {
  smartOtp?: V3VariableSecurity;
  recoveryCode?: V3VariableSecurity;
  sessionExpiration?: V3VariableSecurity;
  securityKey?: V3VariableSecurity;
}

export interface V3UserSetting {
  security?: V3UserSecurity;
  privacy?: V3MediaPermissionPrivacy;
  callScope?: V3UserScopeEnum;
  messageScope?: V3UserScopeEnum;
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

export type V3GetDataIncludeMember = object;

export type V3GetDataIncludeMessage = object;

export type V3GetDataIncludeUser = object;

export type V3GetInitDataInclude = object;

export type V3GetUserPermissions = object;

export type V3MappingChannelData = object;

export type V3MappingFriendData = object;

export type V3MappingMemberData = object;

export type V3MappingUserEntityToProto = object;

export type V3WrapMessageEntityToResponse = object;

export interface GetMemberParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: '0';
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
}

export interface ListMembersParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface ListBannedUsersParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface GetInvitationParams {
  /**
   * Link to the channel acceptance invitation
   * @minLength 1
   */
  code?: string;
}

export interface ListInvitationParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: '0';
  /**
   * The channel identify
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface GetUserParams {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface GetUserByUsernameParams {
  /**
   * The user identify
   * @minLength 1
   */
  username?: string;
}

export interface ListUserVisitedProfileParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListUserStatusParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListPrivateDataParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListBlockedUsersParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface SyncUsersParams {
  /**
   * List userIds need sync data
   * @uniqueItems true
   */
  userIds?: string[];
  /**
   * Datetime ISO String
   * @format isDateTime
   * @minLength 1
   */
  updateTimeAfter?: string;
}

export interface GetChannelParams {
  /**
   * The workspace identify
   * @minLength 1
   */
  workspaceId?: string;
  /**
   * The channel idenitfy
   * @format isULID
   * @minLength 1
   */
  channelId?: string;
}

export interface GetDmChannelParams {
  /**
   * The workspace identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ListChannelsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListAllChannelsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListDmChannelsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListInComingMessageRequestsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListOutGoingMessageRequestsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface GetAvatarFrameParams {
  /**
   * The avatar frame identify
   * @minLength 1
   */
  avatarFrameId?: string;
}

export interface ListAvatarFrameCollectionParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface GetFriendParams {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface ListFriendsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListInComingFriendRequestsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface ListOutGoingFriendRequestsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: number;
  /**
   * The last channelId of this page will be the next_page_token of the next page
   * @format isULID
   */
  nextPageToken?: string;
  /**
   * The first channelId of this page will be the prev_page_token of the previous page
   * @format isULID
   */
  prevPageToken?: string;
}

export interface GetRingbackToneParams {
  /**
   * The ringback tone identify
   * @minLength 1
   */
  ringbackToneId?: string;
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
 * @title Views chat
 * @version v3
 *
 * Views chat ajv decorator swagger documents
 */
export class viewsChatHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  memberView = {
    /**
     * No description
     *
     * @name GetMember
     * @request GET:/MemberView/GetMember
     */
    getMember: (query: GetMemberParams, params: RequestParams = {}) =>
      this.http.request<V3GetMemberResponse, any>({
        path: `/MemberView/GetMember`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListMembers
     * @request GET:/MemberView/ListMembers
     */
    listMembers: (query: ListMembersParams, params: RequestParams = {}) =>
      this.http.request<V3ListMembersResponse, any>({
        path: `/MemberView/ListMembers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListBannedUsers
     * @request GET:/MemberView/ListBannedUsers
     */
    listBannedUsers: (
      query: ListBannedUsersParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListBannedUsersResponse, any>({
        path: `/MemberView/ListBannedUsers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  invitationView = {
    /**
     * No description
     *
     * @name GetInvitation
     * @request GET:/InvitationView/GetInvitation
     */
    getInvitation: (query: GetInvitationParams, params: RequestParams = {}) =>
      this.http.request<V3GetInvitationResponse, any>({
        path: `/InvitationView/GetInvitation`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListInvitation
     * @request GET:/InvitationView/ListInvitation
     */
    listInvitation: (query: ListInvitationParams, params: RequestParams = {}) =>
      this.http.request<V3ListInvitationResponse, any>({
        path: `/InvitationView/ListInvitation`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListInvitableUsers
     * @request GET:/InvitationView/ListInvitableUsers
     */
    listInvitableUsers: (params: RequestParams = {}) =>
      this.http.request<V3ListInvitableUsersResponse, any>({
        path: `/InvitationView/ListInvitableUsers`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  userView = {
    /**
     * No description
     *
     * @name GetUser
     * @request GET:/UserView/GetUser
     */
    getUser: (query: GetUserParams, params: RequestParams = {}) =>
      this.http.request<V3GetUserByUserIdResponse, any>({
        path: `/UserView/GetUser`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUserByUsername
     * @request GET:/UserView/GetUserByUsername
     */
    getUserByUsername: (
      query: GetUserByUsernameParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GetUserByUsernameResponse, any>({
        path: `/UserView/GetUserByUsername`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetMe
     * @request GET:/UserView/GetMe
     */
    getMe: (params: RequestParams = {}) =>
      this.http.request<V3GetMeResponse, any>({
        path: `/UserView/GetMe`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListUserVisitedProfile
     * @request GET:/UserView/ListUserVisitedProfile
     */
    listUserVisitedProfile: (
      query: ListUserVisitedProfileParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListUserVisitedProfileResponse, any>({
        path: `/UserView/ListUserVisitedProfile`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListUserStatus
     * @request GET:/UserView/ListUserStatus
     */
    listUserStatus: (query: ListUserStatusParams, params: RequestParams = {}) =>
      this.http.request<V3ListUserStatusResponse, any>({
        path: `/UserView/ListUserStatus`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetPrivateData
     * @request GET:/UserView/GetPrivateData
     */
    getPrivateData: (params: RequestParams = {}) =>
      this.http.request<V3GetPrivateDataResponse, any>({
        path: `/UserView/GetPrivateData`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListPrivateData
     * @request GET:/UserView/ListPrivateData
     */
    listPrivateData: (
      query: ListPrivateDataParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListPrivateDataResponse, any>({
        path: `/UserView/ListPrivateData`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListBlockedUsers
     * @request GET:/UserView/ListBlockedUsers
     */
    listBlockedUsers: (
      query: ListBlockedUsersParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListBlockedUsersResponse, any>({
        path: `/UserView/ListBlockedUsers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name SyncUsers
     * @request GET:/UserView/SyncUsers
     */
    syncUsers: (query: SyncUsersParams, params: RequestParams = {}) =>
      this.http.request<V3SyncUsersResponse, any>({
        path: `/UserView/SyncUsers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  channelView = {
    /**
     * No description
     *
     * @name GetChannel
     * @request GET:/ChannelView/GetChannel
     */
    getChannel: (query: GetChannelParams, params: RequestParams = {}) =>
      this.http.request<V3GetChannelResponse, any>({
        path: `/ChannelView/GetChannel`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetDmChannel
     * @request GET:/ChannelView/GetDMChannel
     */
    getDmChannel: (query: GetDmChannelParams, params: RequestParams = {}) =>
      this.http.request<V3GetDMChannelResponse, any>({
        path: `/ChannelView/GetDMChannel`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListChannels
     * @request GET:/ChannelView/ListChannels
     */
    listChannels: (query: ListChannelsParams, params: RequestParams = {}) =>
      this.http.request<V3ListChannelsResponse, any>({
        path: `/ChannelView/ListChannels`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListAllChannels
     * @request GET:/ChannelView/ListAllChannels
     */
    listAllChannels: (
      query: ListAllChannelsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListAllChannelsResponse, any>({
        path: `/ChannelView/ListAllChannels`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListDmChannels
     * @request GET:/ChannelView/ListDMChannels
     */
    listDmChannels: (query: ListDmChannelsParams, params: RequestParams = {}) =>
      this.http.request<V3ListDMChannelsResponse, any>({
        path: `/ChannelView/ListDMChannels`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListInComingMessageRequests
     * @request GET:/ChannelView/ListInComingMessageRequests
     */
    listInComingMessageRequests: (
      query: ListInComingMessageRequestsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListInComingMessageRequestsResponse, any>({
        path: `/ChannelView/ListInComingMessageRequests`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListOutGoingMessageRequests
     * @request GET:/ChannelView/ListOutGoingMessageRequests
     */
    listOutGoingMessageRequests: (
      query: ListOutGoingMessageRequestsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListOutGoingMessageRequestsResponse, any>({
        path: `/ChannelView/ListOutGoingMessageRequests`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  avatarFrame = {
    /**
     * No description
     *
     * @name GetAvatarFrame
     * @request GET:/AvatarFrame/GetAvatarFrame
     */
    getAvatarFrame: (query: GetAvatarFrameParams, params: RequestParams = {}) =>
      this.http.request<V3GetAvatarFrameResponse, any>({
        path: `/AvatarFrame/GetAvatarFrame`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListAvatarFrameCollection
     * @request GET:/AvatarFrame/ListAvatarFrameCollection
     */
    listAvatarFrameCollection: (
      query: ListAvatarFrameCollectionParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListAvatarFrameCollectionResponse, any>({
        path: `/AvatarFrame/ListAvatarFrameCollection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  friendView = {
    /**
     * No description
     *
     * @name GetFriend
     * @request GET:/FriendView/GetFriend
     */
    getFriend: (query: GetFriendParams, params: RequestParams = {}) =>
      this.http.request<V3GetFriendResponse, any>({
        path: `/FriendView/GetFriend`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListFriends
     * @request GET:/FriendView/ListFriends
     */
    listFriends: (query: ListFriendsParams, params: RequestParams = {}) =>
      this.http.request<V3ListFriendsResponse, any>({
        path: `/FriendView/ListFriends`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListInComingFriendRequests
     * @request GET:/FriendView/ListInComingFriendRequests
     */
    listInComingFriendRequests: (
      query: ListInComingFriendRequestsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListInComingFriendRequestsResponse, any>({
        path: `/FriendView/ListInComingFriendRequests`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListOutGoingFriendRequests
     * @request GET:/FriendView/ListOutGoingFriendRequests
     */
    listOutGoingFriendRequests: (
      query: ListOutGoingFriendRequestsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListOutGoingFriendRequestsResponse, any>({
        path: `/FriendView/ListOutGoingFriendRequests`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  ringbackTone = {
    /**
     * No description
     *
     * @name GetRingbackTone
     * @request GET:/RingbackTone/GetRingbackTone
     */
    getRingbackTone: (
      query: GetRingbackToneParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GetDataUserRingbackToneResponse, any>({
        path: `/RingbackTone/GetRingbackTone`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ListRingbackTones
     * @request GET:/RingbackTone/ListRingbackTones
     */
    listRingbackTones: (params: RequestParams = {}) =>
      this.http.request<V3ListRingbackTonesResponse, any>({
        path: `/RingbackTone/ListRingbackTones`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
