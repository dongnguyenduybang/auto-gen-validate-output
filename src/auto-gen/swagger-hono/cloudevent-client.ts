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

/**
 * - USER_TYPE_ENUM_DEFAULT: Default user
 *  - USER_TYPE_ENUM_BOT: User is bot
 *  - USER_TYPE_ENUM_GHOST: User deleted
 * @default "USER_TYPE_ENUM_DEFAULT"
 */
export enum V3UserTypeEnum {
  USER_TYPE_ENUM_DEFAULT = 0,
  USER_TYPE_ENUM_BOT = 1,
  USER_TYPE_ENUM_GHOST = 2,
}

/**
 * - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED: The user status expires time after unspecified
 *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR: The user status expires time after 1 hour
 *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR: The user status expires time after 4 hour
 *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR: The user status expires time after 8 hour
 *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR: The user status expires time after 24 hour
 *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER: The user status never expires
 * @default "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
 */
export enum V3UserStatusExpireAfterTimeEnum {
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED = 0,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR = 1,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR = 2,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR = 3,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR = 4,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER = 99,
}

/** @default "UNSPECIFIED" */
export enum V3UserScopeEnum {
  UNSPECIFIED = 0,
  EVERYBODY = 1,
  ONLY_FRIENDS = 2,
  NO_BODY = 3,
}

/** @default "USER_BADGE_TYPE_DEFAULT" */
export enum V3UserBadgeTypeEnum {
  USER_BADGE_TYPE_DEFAULT = 0,
  USER_BADGE_TYPE_BLUE = 1,
  USER_BADGE_TYPE_GRAY = 2,
  USER_BADGE_TYPE_YELLOW = 3,
}

/**
 * - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
 *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
 *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
 * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
 */
export enum V3UserAvatarTypeEnum {
  USER_AVATAR_TYPE_ENUM_UNSPECIFIED = 0,
  USER_AVATAR_TYPE_ENUM_PHOTO = 1,
  USER_AVATAR_TYPE_ENUM_VIDEO = 2,
}

/**
 *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
 *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
 *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
 *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
 *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
 * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
 */
export enum V3SessionDescriptionTypeEnum {
  SESSION_DESCRIPTION_TYPE_UNSPECIFIED = 0,
  SESSION_DESCRIPTION_TYPE_ANSWER = 1,
  SESSION_DESCRIPTION_TYPE_OFFER = 2,
  SESSION_DESCRIPTION_TYPE_PRANSWER = 3,
  SESSION_DESCRIPTION_TYPE_ROLLBACK = 4,
}

/**
 * The category can choose to report a message
 * PRETENDING_TO_BE_SOMEONE: The user must choose who is being pretended from PretendingToEnum
 * OTHERS: The user need to enter the reason for the report
 *
 *  - REPORT_CATEGORY_UNSPECIFIED: the user report for reasonable unspecified
 *  - REPORT_CATEGORY_HARASSMENT: the user report for reasonable harassment
 *  - REPORT_CATEGORY_SUICIDE_OR_SELF_INJURY: the user report for reasonable suicide or self injury
 *  - REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE: The user must choose who is being pretended from PretendingToEnum
 *  - REPORT_CATEGORY_SHARING_INAPPROPRIATE_CONTENT: the user report for reasonable sharing inappropriate content
 *  - REPORT_CATEGORY_HATE_SPEECH: the user report for reasonable hate speech
 *  - REPORT_CATEGORY_UNAUTHORIZED_SALES: the user report for reasonable unauthorized sales
 *  - REPORT_CATEGORY_SCAMS: the user report for reasonable scams
 *  - REPORT_CATEGORY_SPAM: the user report for reasonable spam
 *  - REPORT_CATEGORY_COPYRIGHT: the user report for reasonable copyright
 *  - REPORT_CATEGORY_OTHER: the user report for reasonable others reasons
 * @default "REPORT_CATEGORY_UNSPECIFIED"
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

/**
 * The category can choose to report a message
 * - PRETENDING_TO_UNSPECIFIED: The user pretends unspecified.
 *  - PRETENDING_TO_ME: The user pretends to be me.
 *  - PRETENDING_TO_FRIEND: The user pretends to be a friend.
 *  - PRETENDING_TO_CELEBRITY: The user pretends to be a celebrity.
 * @default "PRETENDING_TO_UNSPECIFIED"
 */
export enum V3PretendingTo {
  PRETENDING_TO_UNSPECIFIED = 0,
  PRETENDING_TO_ME = 1,
  PRETENDING_TO_FRIEND = 2,
  PRETENDING_TO_CELEBRITY = 3,
}

/**
 * - PRESENCE_STATUS_UNSPECIFIED: The presence is unspecified
 *  - PRESENCE_STATUS_ONLINE: The presence is online
 *  - PRESENCE_STATUS_IDLE: The presence is  idle
 *  - PRESENCE_STATUS_DO_NOT_DISTURB: The presence is not disturb
 *  - PRESENCE_STATUS_OFFLINE: The presence is offline
 *  - PRESENCE_STATUS_OTHER: The presence is other
 * @default "PRESENCE_STATUS_UNSPECIFIED"
 */
export enum V3PresenceStateEnum {
  PRESENCE_STATUS_UNSPECIFIED = 0,
  PRESENCE_STATUS_ONLINE = 1,
  PRESENCE_STATUS_IDLE = 2,
  PRESENCE_STATUS_DO_NOT_DISTURB = 3,
  PRESENCE_STATUS_OFFLINE = 4,
  PRESENCE_STATUS_OTHER = 5,
}

/**
 * Types of message
 * - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
 *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
 * @default "MESSAGE_TYPE_ENUM_DEFAULT"
 */
export enum V3MessageTypeEnum {
  MESSAGE_TYPE_ENUM_DEFAULT = 0,
  MESSAGE_TYPE_ENUM_AUDIT_LOG = 1,
}

/**
 * Status sending of message
 * - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
 *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
 *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
 * @default "MESSAGE_STATUS_ENUM_PENDING"
 */
export enum V3MessageStatusEnum {
  MESSAGE_STATUS_ENUM_PENDING = 0,
  MESSAGE_STATUS_ENUM_SUCCESS = 1,
  MESSAGE_STATUS_ENUM_FAILURE = 2,
}

/**
 * Media sharing permission setting
 * - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
 *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
 *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
 * @default "MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK"
 */
export enum V3MediaPermissionSettingEnum {
  MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK = 0,
  MEDIA_PERMISSION_SETTING_ENUM_ALLOW = 1,
  MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW = 2,
}

/**
 * - ICE_CONNECTION_STATE_UNSPECIFIED: The connection state are unspecified
 *  - ICE_CONNECTION_STATE_NEW: The connection state is new
 *  - ICE_CONNECTION_STATE_CHECKING: The connection state is checking
 *  - ICE_CONNECTION_STATE_CONNECTED: The connection state is connected
 *  - ICE_CONNECTION_STATE_COMPLETED: The connection state is complete
 *  - ICE_CONNECTION_STATE_FAILED: The connection state is failed
 *  - ICE_CONNECTION_STATE_DISCONNECTED: The connection state is disconnected
 *  - ICE_CONNECTION_STATE_CLOSE: The connection state is close
 * @default "ICE_CONNECTION_STATE_UNSPECIFIED"
 */
export enum V3ICEConnectionStateEnum {
  ICE_CONNECTION_STATE_UNSPECIFIED = 0,
  ICE_CONNECTION_STATE_NEW = 1,
  ICE_CONNECTION_STATE_CHECKING = 2,
  ICE_CONNECTION_STATE_CONNECTED = 3,
  ICE_CONNECTION_STATE_COMPLETED = 4,
  ICE_CONNECTION_STATE_FAILED = 5,
  ICE_CONNECTION_STATE_DISCONNECTED = 6,
  ICE_CONNECTION_STATE_CLOSE = 7,
}

/**
 * Status of friend
 * - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
 *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
 *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
 *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
 *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
 *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
 * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
 */
export enum V3FriendStatusEnum {
  FRIEND_STATUS_ENUM_UNSPECIFIED = 0,
  FRIEND_STATUS_ENUM_NOT_FRIEND = 1,
  FRIEND_STATUS_ENUM_REQUEST_SENT = 2,
  FRIEND_STATUS_ENUM_REQUEST_RECEIVED = 3,
  FRIEND_STATUS_ENUM_REQUEST_DELETED = 4,
  FRIEND_STATUS_ENUM_FRIEND = 5,
}

/**
 * - EMBED_TYPE_ENUM_UNSPECIFIED: The embed is unspecified
 *  - EMBED_TYPE_ENUM_PHOTO: The embed is a photo type
 *  - EMBED_TYPE_ENUM_VIDEO: The embed is video type
 *  - EMBED_TYPE_ENUM_LINK: The embed is link type
 *  - EMBED_TYPE_ENUM_INVITATION: The embed is invitation
 *  - EMBED_TYPE_ENUM_OTHER: The embed has other type
 *  - EMBED_TYPE_ENUM_LOCATION: The embed is location
 * @default "EMBED_TYPE_ENUM_UNSPECIFIED"
 */
export enum V3EmbedTypeEnum {
  EMBED_TYPE_ENUM_UNSPECIFIED = 0,
  EMBED_TYPE_ENUM_PHOTO = 1,
  EMBED_TYPE_ENUM_VIDEO = 2,
  EMBED_TYPE_ENUM_LINK = 3,
  EMBED_TYPE_ENUM_INVITATION = 4,
  EMBED_TYPE_ENUM_OTHER = 5,
  EMBED_TYPE_ENUM_LOCATION = 6,
}

/**
 * Status of channel has type DM
 * - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
 *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
 * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
 */
export enum V3DirectMessageStatusEnum {
  DIRECT_MESSAGE_STATUS_ENUM_PENDING = 0,
  DIRECT_MESSAGE_STATUS_ENUM_CONTACTED = 1,
}

/**
 * Types of channel
 * - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
 *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
 *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
 * @default "CHANNEL_TYPE_ENUM_DM"
 */
export enum V3ChannelTypeEnum {
  CHANNEL_TYPE_ENUM_DM = 0,
  CHANNEL_TYPE_ENUM_CHANNEL = 1,
  CHANNEL_TYPE_ENUM_BROADCAST = 2,
}

/**
 * - OWNER: The owner channel permission
 *  - CHANNELS__VIEW_CHANNEL: The view channel permission
 *  - CHANNELS__MANAGE: The manage channel permission
 *  - CHANNELS__MEMBERS_MANAGE: The member manage channel permission
 *  - CHANNELS__STICKERS_MANAGE: The stickers manage channel permission
 *  - CHANNELS__INVITATIONS_MANAGE: The invitations manage channel permission
 *  - CHANNELS__INVITATIONS_CREATE: The invitation create channel permission
 *  - MESSAGES__MANAGE: The manage message permission in the channel
 *  - MESSAGES__VIEW: The view messages permission in the channel
 *  - MESSAGES__SEND_MESSAGE: The send message permission in the channel
 *  - MESSAGES__SEND_ATTACHMENTS: The send attachments permission in the channel
 *  - MESSAGES__EMBED_LINKS: The link embed permission in the channel
 *  - MESSAGES__MENTION_EVERYONE: The everyone mention permission in the channel
 *  - CHANNELS__VIEW_AUDIT_LOGS: The view audit log permission in the channel
 * @default "OWNER"
 */
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

/**
 * - CALL_TYPE_UNSPECIFIED: The unspecified call
 *  - CALL_TYPE_VIDEO: The video call
 *  - CALL_TYPE_AUDIO: The audio call
 * @default "CALL_TYPE_UNSPECIFIED"
 */
export enum V3CallTypeEnum {
  CALL_TYPE_UNSPECIFIED = 0,
  CALL_TYPE_VIDEO = 1,
  CALL_TYPE_AUDIO = 2,
}

/**
 * - CALL_STATE_UNSPECIFIED: Call state unspecified
 *  - CALL_STATE_DIALING: Call state returned by the API when the user initiates a call
 *  - CALL_STATE_CALLING: Call state when the callee is being connected via websocket
 *  - CALL_STATE_READY_TO_CONNECT: Call state when both the caller and the callee have updated enough ICE information
 *  - CALL_STATE_CONNECTING: Call state is connecting
 *  - CALL_STATE_CONNECTED: Call state when the caller and the callee have successfully established a webRTC connection
 *  - CALL_STATE_RECONNECTING: Call state is reconnecting
 *  - CALL_STATE_ENDED: Call state when either of the two users ends the call, cancels the call, or rejects the call
 * @default "CALL_STATE_UNSPECIFIED"
 */
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

/**
 * - CALL_SIGNAL_INTENT_UNSPECIFIED: The call signal intent are unspecified
 *  - CALL_SIGNAL_INTENT_CAMERA_ON: The call signal intent are camera on
 *  - CALL_SIGNAL_INTENT_CAMERA_OFF: The call signal intent are camera of
 *  - CALL_SIGNAL_INTENT_MIC_ON: The call signal intent is mic on
 *  - CALL_SIGNAL_INTENT_MIC_OFF: The call signal intent are mic off
 *  - CALL_SIGNAL_INTENT_WILL_END: The call signal intent are will end
 * @default "CALL_SIGNAL_INTENT_UNSPECIFIED"
 */
export enum V3CallSignalIntentEnum {
  CALL_SIGNAL_INTENT_UNSPECIFIED = 0,
  CALL_SIGNAL_INTENT_CAMERA_ON = 1,
  CALL_SIGNAL_INTENT_CAMERA_OFF = 2,
  CALL_SIGNAL_INTENT_MIC_ON = 3,
  CALL_SIGNAL_INTENT_MIC_OFF = 4,
  CALL_SIGNAL_INTENT_WILL_END = 5,
}

/**
 * - CALL_ENDED_REASON_UNSPECIFIED: The call ended due to reason unspecified
 *  - CALL_ENDED_REASON_FAILED: The call ended due to reason failed
 *  - CALL_ENDED_REASON_REMOTE_ENDED: The call ended due to reason remote ended
 *  - CALL_ENDED_REASON_UNANSWERED: The call ended due to reason unanswered
 *  - CALL_ENDED_REASON_ANSWERED_ELSEWHERE: The call ended due to reason answered elsewhere
 *  - CALL_ENDED_REASON_DECLINED_ELSEWHERE: The call ended due to reason declined elsewhere
 * @default "CALL_ENDED_REASON_UNSPECIFIED"
 */
export enum V3CallEndedReasonEnum {
  CALL_ENDED_REASON_UNSPECIFIED = 0,
  CALL_ENDED_REASON_FAILED = 1,
  CALL_ENDED_REASON_REMOTE_ENDED = 2,
  CALL_ENDED_REASON_UNANSWERED = 3,
  CALL_ENDED_REASON_ANSWERED_ELSEWHERE = 4,
  CALL_ENDED_REASON_DECLINED_ELSEWHERE = 5,
}

/**
 * - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
 *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
 *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
 *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
 *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
 *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
 *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
 *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
 *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
 *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
 *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
 *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
 * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
 */
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

/**
 * Status attachment file upload
 * - ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED: Unspecified, default value
 *  - ATTACHMENT_FILE_STATUS_ENUM_UPLOADING: File Uploading to server
 *  - ATTACHMENT_FILE_STATUS_ENUM_SUCCESS: File uploaded success
 *  - ATTACHMENT_FILE_STATUS_ENUM_FAILURE: File uploaded failed
 * @default "ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED"
 */
export enum V3AttachmentFileStatusEnum {
  ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED = 0,
  ATTACHMENT_FILE_STATUS_ENUM_UPLOADING = 1,
  ATTACHMENT_FILE_STATUS_ENUM_SUCCESS = 2,
  ATTACHMENT_FILE_STATUS_ENUM_FAILURE = 3,
}

export interface CallSignalUpdatedEventDataRecipientInfo {
  /** The user identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
}

export interface MessageReactionUpdatedEventDataMessageReactionData {
  /** Emoji reaction */
  emoji?: string;
  /**
   * The total reaction
   * @format int64
   */
  total?: number;
}

/** Status boosted of channel */
export interface PremiumSettingsBoosted {
  enable?: boolean;
}

/** Disable forwarding, copying, saving, or screenshotting content within the conversation. */
export interface PrivacySettingsRestrictSavingContent {
  /** Is limited saving enabled? */
  enable?: boolean;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *     // or ...
 *     if (any.isSameTypeAs(Foo.getDefaultInstance())) {
 *       foo = any.unpack(Foo.getDefaultInstance());
 *     }
 *
 * Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 * Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 * JSON
 *
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
  [key: string]: any;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/** Delete all messages for everyone */
export interface V3AllMessagesDeletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The message's data */
  destination?: V3ChannelDestinationCloudEvent;
}

/** Delete all messages only me */
export interface V3AllUserMessagesDeletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The message's data */
  destination?: V3ChannelDestinationCloudEvent;
}

export interface V3AudioMetadata {
  /** audio samples rate */
  samples?: number[];
}

export interface V3AvatarFrameCreatedEventData {
  /** The user identify whom create avatar frame */
  actorId?: string;
  /** The URL avatar frame */
  avatarFrame?: string;
}

export interface V3AvatarFrameDeletedEventData {
  /** The user identify whom delete avatar frame */
  actorId?: string;
  /** The URL avatar frame deleted */
  avatarFrame?: string;
}

export interface V3BadgeValueArgument {
  /** The channel identify unread */
  unreadChannelIds?: string[];
  /** The user identify of friend request */
  unreadFriendRequestIds?: string[];
}

export interface V3CallCreatedEventData {
  /** The call' data */
  callData?: V3CallData;
  /** The list RTCIcServer's data */
  rtcIceServers?: V3RTCIceServer[];
}

export interface V3CallData {
  /** The call identify */
  callId?: string;
  /** The state of call */
  state?: V3CallStateEnum;
  /** The type of call */
  type?: V3CallTypeEnum;
  /** The ended reason of call */
  endedReason?: V3CallEndedReasonEnum;
  /** The create time */
  createTime?: string;
  /** The deadline */
  deadline?: string;
  /** The participant data whom start the call */
  caller?: V3Participant;
  /** The participant data whom receive the call */
  callee?: V3Participant;
  /** The list participant data whom receive the call */
  participants?: V3Participant[];
  /** ICE connection state */
  iceConnectionState?: V3ICEConnectionStateEnum;
  /** The ringback tone file url */
  ringbackToneUrl?: string;
}

export interface V3CallSignalUpdatedEventData {
  /** The call identify */
  callId?: string;
  /** The user identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The recipient information's data */
  recipientInfo?: CallSignalUpdatedEventDataRecipientInfo;
  /** Describes the protocols and routing needed for WebRTC to be able to communicate with a remote device. When starting a WebRTC peer connection */
  rtcIceCandidate?: string;
  /** The RTCSessionDescription's data */
  rtcSessionDescription?: V3RTCSessionDescription;
  /** The call signal intent data */
  intent?: V3CallSignalIntentEnum;
}

export interface V3CallUpdatedEventData {
  /** The call's data */
  callData?: V3CallData;
}

/** Channel information details */
export interface V3Channel {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The channel's creator is identified by the user. */
  userId?: string;
  /** The name of channel */
  name?: string;
  /** The avatar of channel */
  avatar?: string;
  /** The channel is not yet private. */
  isPrivate?: boolean;
  /**
   * The type of channel
   * - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   */
  type?: V3ChannelTypeEnum;
  /** Invitation link after create channel */
  invitationLink?: string;
  /** Privacy setting of channel/dm use for block some features as reply, forward */
  privacySettings?: V3PrivacySettings;
  /** Premium settings of channel */
  premiumSettings?: V3PremiumSettings;
  /** The original avatar */
  originalAvatar?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  totalMembers?: number;
  /**
   * Status of channel has type DM
   * - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   */
  dmStatus?: V3DirectMessageStatusEnum;
  /** The message data has pinned */
  pinnedMessage?: V3Message;
  /** The list participant id */
  participantIds?: string[];
  /** Time recipient reject message request */
  rejectTime?: string;
  /** Time recipient accept message request */
  acceptTime?: string;
  /** The first time channel created */
  createTime?: string;
  /** The time channel updated */
  updateTime?: string;
}

export interface V3ChannelAvatarUploadFailedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The reason upload avatar false */
  reason?: string;
}

export interface V3ChannelCreatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3ChannelCreationCompletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
}

export interface V3ChannelCreationFailedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The reason create channel false */
  reason?: string;
}

export interface V3ChannelDeletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
}

/** Channel destination data */
export interface V3ChannelDestinationCloudEvent {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /**
   * The channel type
   * - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   */
  channelType?: V3ChannelTypeEnum;
  /** The user identify whom receive message */
  recipientId?: string;
  /** The dm channel identify */
  dmId?: string;
  /**
   * The dm message status
   * - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   */
  dmStatus?: V3DirectMessageStatusEnum;
}

export interface V3ChannelMetadata {
  /**
   * The unread count message
   * @format int64
   */
  unreadCount?: number;
  /** The last message identify */
  lastMessageId?: string;
  /** Only return when get list channel or get channel */
  notificationStatus?: boolean;
  /**
   * The media permission setting
   * - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
   *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
   */
  mediaPermissionSetting?: V3MediaPermissionSettingEnum;
  /** Only return permissions when get full info of channel */
  permissions?: V3ChannelPermissionsEnum[];
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  dmId?: string;
}

export interface V3ChannelNotificationStatusUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send */
  actorId?: string;
  /** The notification status */
  notificationStatus?: boolean;
  /** The channel destination's data */
  destination?: V3ChannelDestinationCloudEvent;
}

export interface V3ChannelTypingEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom typing */
  actorId?: string;
  /** The name's data */
  name?: string;
  /** The avatar's data */
  avatar?: string;
}

export interface V3ChannelUpdatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export type V3ClearUserVisitedProfileNotificationsEventData = object;

export interface V3CloudEvent {
  /** The cloud event identify */
  id?: string;
  /** The type of cloud event */
  type?: string;
  /** Identifies the context in which an event happened */
  source?: string;
  /** The version of the CloudEvents specification which the event uses. This enables the interpretation of the context. */
  specversion?: string;
  /** Content type of data value. This attribute enables data to carry any type of content, whereby format and encoding might differ from that of the chosen event format. */
  datacontenttype?: string;
  /** Identifies the schema that data adheres to. Incompatible changes to the schema SHOULD be reflected by a different URI. */
  dataschema?: string;
  /** This describes the subject of the event in the context of the event producer (identified by source) */
  subject?: string;
  /** Timestamp of when the occurrence happened */
  time?: string;
  /**
   * The data's event
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *     // or ...
   *     if (any.isSameTypeAs(Foo.getDefaultInstance())) {
   *       foo = any.unpack(Foo.getDefaultInstance());
   *     }
   *
   * Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   * Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   * JSON
   *
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  data?: ProtobufAny;
}

export interface V3CoverPhotoCreatedEventData {
  /** The user identify */
  userId?: string;
  /** The cover photo data */
  cover?: string;
}

export interface V3CoverPhotoDeletedEventData {
  /** The user identify */
  userId?: string;
}

export interface V3CoverPhotoUpdatedData {
  /** The user identify */
  userId?: string;
  /** The cover photo data */
  cover?: string;
}

export interface V3DMChannelCreatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3DMChannelUpdatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for channel */
  includes?: V3DataInclude;
}

export interface V3DataInclude {
  /** The list user information used for populate */
  users?: V3User[];
  /** The list message information used for populate */
  messages?: V3Message[];
  /** The list channel information used for populate */
  channels?: V3Channel[];
  /** The list member information used for populate */
  members?: V3Member[];
  channelMetadata?: V3ChannelMetadata[];
}

export interface V3DecoratedAvatarRemovedEventData {
  /** The user identify whom remove decorated avatar */
  actorId?: string;
}

export interface V3DecoratedAvatarUploadedEventData {
  /** The user identify whom upload decorated avatar */
  actorId?: string;
  /** The avatar frame identify */
  avatarFrameId?: string;
  /** The avatar decorated URL */
  decoratedAvatar?: string;
  /** The original decorated avatar URL */
  originalDecoratedAvatar?: string;
}

export interface V3DeleteUserVisitedProfileEventData {
  /** User identify whom delete visited profile */
  actorId?: string;
  /** User identify whom visited profile */
  userId?: string;
  /** The created visited profile time */
  createTime?: string;
  /** The update visited profile time */
  updateTime?: string;
}

export interface V3DeviceLinkedEventData {
  /** The workspace identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
}

export interface V3DeviceUnlinkedEventData {
  /** The workspace identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
}

export interface V3Dimensions {
  /**
   * The height of file.
   * @format int64
   */
  height?: number;
  /**
   * The width of file.
   * @format int64
   */
  width?: number;
}

export interface V3Embed {
  /** Data crawler return as JSON stringify */
  meta?: string;
  /** The name of the resource provider */
  provider?: string;
  /** The URL of the resource */
  url?: string;
  /** The type of the resource (e.g., "photo", "video", "link", etc.) */
  type?: V3EmbedTypeEnum;
  /** A data return crawl by oembed or metascraper */
  embedData?: V3EmbedData;
  /** A info return from ziichat (e.g., "invitation", etc.) */
  invitationData?: V3InvitationData;
  /** The location data */
  locationData?: V3LocationData;
}

export interface V3EmbedData {
  /** The URL of the resource */
  url?: string;
  /** The oembed version */
  version?: string;
  /** The title of the resource */
  title?: string;
  /** The name of the author/owner of the resource */
  authorName?: string;
  /** The URL of the author/owner's profile */
  authorUrl?: string;
  /** The name of the resource provider */
  providerName?: string;
  /** The URL of the resource provider */
  providerUrl?: string;
  /** The suggested cache lifetime for the resource */
  cacheAge?: string;
  /** The HTML code to embed the resource */
  html?: string;
  /**
   * The width of the resource in pixels
   * @format int32
   */
  width?: number;
  /**
   * The height of the resource in pixels
   * @format int32
   */
  height?: number;
  /** A description for the resource */
  description?: string;
  /** URL to thumbnail image */
  thumbnailUrl?: string;
  /** The width of thumbnail image */
  thumbnailWidth?: string;
  /** The height of thumbnail image */
  thumbnailHeight?: string;
}

export interface V3FileMetadata {
  /** The name of file. */
  filename?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  filesize?: number;
  /** The file extension. */
  extension?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  mimetype?: string;
  /** The dimensions data */
  dimensions?: V3Dimensions;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  duration?: number;
}

export interface V3FileUploadedEventData {
  /** The user identify whom upload file */
  actorId?: string;
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The message identify */
  messageId?: string;
  /**
   * The attachment file status
   * - ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED: Unspecified, default value
   *  - ATTACHMENT_FILE_STATUS_ENUM_UPLOADING: File Uploading to server
   *  - ATTACHMENT_FILE_STATUS_ENUM_SUCCESS: File uploaded success
   *  - ATTACHMENT_FILE_STATUS_ENUM_FAILURE: File uploaded failed
   */
  attachmentFileStatus?: V3AttachmentFileStatusEnum;
  /** The file ref */
  fileRef?: string;
  /** The file name */
  fileName?: string;
  /**
   * The file size
   * @format int64
   */
  fileSize?: number;
}

export interface V3Friend {
  /** The user identify whom send request */
  requestedFromUserId?: string;
  /** The user identify whom receive request */
  requestedToUserId?: string;
  /**
   * The status of friend
   * - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   */
  status?: V3FriendStatusEnum;
  /** The friend identify */
  friendId?: string;
  /** The list participant id */
  participantIds?: string[];
  /** The time has been read by the receiver. */
  readTime?: string;
  /** The time to accept friend */
  acceptTime?: string;
  /** The first time friend created */
  createTime?: string;
  /** The time of friend updated */
  updateTime?: string;
  /** The timestamp when the friend request was deleted */
  deleteTime?: string;
}

export interface V3FriendRemovedEventData {
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom receive request */
  targetUserId?: string;
}

export interface V3GatewayConnectedEventData {
  /** The user identify connect to gateway */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The message's data */
  message?: string;
}

export interface V3IceCandidate {
  /** The device identify */
  deviceId?: string;
  /** Describes the protocols and routing needed for WebRTC to be able to communicate with a remote device. When starting a WebRTC peer connection */
  rtcIceCandidate?: string;
  /** Type of device */
  deviceType?: string;
}

export interface V3IncomingFriendRequestAcceptedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3IncomingFriendRequestCanceledEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3IncomingFriendRequestCreatedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3IncomingFriendRequestDeletedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3IncomingMessageRequestAcceptedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

/** Message request event */
export interface V3IncomingMessageRequestCreatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface V3InvitationData {
  /** The channel's data */
  channel?: V3InvitationDataChannelData;
  /** Invitation code */
  code?: string;
  /** Is expired */
  isExpired?: boolean;
  /** expire time */
  expireTime?: string;
  /** Is joined */
  isJoined?: boolean;
  /** The invitation link */
  invitationLink?: string;
  /** The create time of invitation */
  createTime?: string;
  /** The update time of invitation */
  updateTime?: string;
}

export interface V3InvitationDataChannelData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The name of channel */
  name?: string;
  /** The avatar data */
  avatar?: string;
  /**
   * Total member in channel
   * @format int64
   */
  totalMembers?: number;
  /** List of values for the User interface. */
  members?: V3User[];
}

export interface V3LinkObject {
  /** types */
  attachmentType?: V3AttachmentTypeEnum;
  /** url */
  url?: string;
  /** short url */
  shortUrl?: string;
}

export interface V3LocationData {
  /** Measurement of a location north or south of the Equator */
  latitude?: string;
  /** Measurement of location east or west of the prime meridian */
  longitude?: string;
  /** The description of location */
  description?: string;
  /** The thumbnail image url of location */
  thumbnailUrl?: string;
}

export interface V3MarkAllChannelsAsReadEventData {
  /** The user identify */
  userId?: string;
}

export interface V3MediaAttachment {
  /** The media info data for link */
  link?: V3LinkObject;
  /** The sticker info data */
  sticker?: V3StickerObject;
  /** The media info data for photo */
  photo?: V3MediaObject;
  /** The media info data for audio */
  audio?: V3MediaObject;
  /** The media info data for video */
  video?: V3MediaObject;
  /** The media info data for voice message */
  voiceMessage?: V3MediaObject;
  /** The media info data for video message */
  videoMessage?: V3MediaObject;
  /** Include PHOTO and VIDEO, using for mixing file collection */
  mediaMessage?: V3MediaObject;
  /** The media info data for file */
  file?: V3MediaObject;
}

export interface V3MediaObject {
  /** file_id to handle file operations */
  fileId?: string;
  /** types */
  attachmentType?: V3AttachmentTypeEnum;
  /** Readable file object */
  fileUrl?: string;
  /** File metadata data */
  fileMetadata?: V3FileMetadata;
  /** Readable thumbnail, OPTIONAL */
  thumbnailUrl?: string;
  /** audio metadata, OPTIONAL */
  audioMetadata?: V3AudioMetadata;
  /** file ref */
  fileRef?: string;
  /** attachment id */
  attachmentId?: string;
  /** channel id */
  channelId?: string;
  /** user id */
  userId?: string;
  /** message id */
  messageId?: string;
}

export interface V3Member {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify */
  userId?: string;
  /** The nickname of member in group */
  nickname?: string;
  /** The role of member in group */
  role?: string;
  /** The list role's data */
  roles?: V3MemberRole[];
  /** The first time member has joined channel */
  createTime?: string;
  /** The time member updated */
  updateTime?: string;
}

export interface V3MemberBannedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom be banned */
  bannedUserId?: string;
}

export interface V3MemberJoinedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom joined channel */
  joinedUserId?: string;
}

export interface V3MemberLeftEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom left channel */
  userId?: string;
}

export interface V3MemberNicknameUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom update nickname */
  actorId?: string;
  /** The user identify whom be updated nickname */
  targetUserId?: string;
  /** The new nickname of member */
  nickname?: string;
}

export interface V3MemberRemovedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom remove member */
  actorId?: string;
  /** The user identify whom be removed from channel */
  targetUserId?: string;
}

export interface V3MemberRole {
  /** The role of member in channel */
  role?: string;
  /**
   * The weight of role
   * @format int64
   */
  weight?: number;
}

export interface V3MemberRoleRevokedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom revoke role */
  actorId?: string;
  /** The user identify whom be revoked role */
  targetUserId?: string;
  /** The role to revoke */
  role?: string;
}

export interface V3MemberRoleUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom update role */
  actorId?: string;
  /** The user identify whom be updated role */
  targetUserId?: string;
  /** The role to update */
  role?: string;
}

export interface V3MemberUnbannedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom unban member */
  actorId?: string;
  /** The user identify whom be unbanned from channel */
  unbannedUserId?: string;
}

export interface V3Message {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The message identify */
  messageId?: string;
  /** UserId send message */
  userId?: string;
  /** Content of message */
  content?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  ref?: string;
  /**
   * Message type and message status
   * - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   */
  messageType?: V3MessageTypeEnum;
  /**
   * Status of message
   * - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   */
  messageStatus?: V3MessageStatusEnum;
  /** Original message when reply message */
  originalMessage?: V3OriginalMessage;
  /** Statistical react of message */
  reactions?: Record<string, V3ReactionData>;
  /** List username mentions */
  mentions?: string[];
  /** List data embed */
  embed?: V3Embed[];
  /** Attachment type */
  attachmentType?: V3AttachmentTypeEnum;
  /** List users report a message */
  reports?: V3Report[];
  /** State is thread of message, default = false */
  isThread?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  reportCount?: number;
  /** Flag report, default = false */
  isReported?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  attachmentCount?: number;
  /** List attachment refactor */
  mediaAttachments?: V3MediaAttachment[];
  /** The location language of content */
  contentLocale?: string;
  /** The list arguments to replace in content message */
  contentArguments?: string[];
  /** Is pinned */
  isPinned?: boolean;
  /** Pin time */
  pinTime?: string;
  /** Time edit message */
  editTime?: string;
  /** The first time message created */
  createTime?: string;
  /** The time message updated */
  updateTime?: string;
}

export interface V3MessageCreatedEventData {
  /** The message's data */
  message?: V3Message;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface V3MessagePinnedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom pine message */
  actorId?: string;
  /** The channel data */
  channel?: V3Channel;
  /** The message data */
  message?: V3Message;
}

/** Publish all members */
export interface V3MessageReactionUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The message identify */
  messageId?: string;
  /** The message reaction's data */
  reactions?: MessageReactionUpdatedEventDataMessageReactionData[];
  /** The message reaction's data */
  destination?: V3ChannelDestinationCloudEvent;
  /** Statistical react of message */
  jsonReactions?: Record<
    string,
    MessageReactionUpdatedEventDataMessageReactionData
  >;
}

export interface V3MessageRequestRejectedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom receive request */
  targetUserId?: string;
}

export interface V3MessageUnpinnedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify */
  actorId?: string;
  /** The channel data */
  channel?: V3Channel;
  /** The message data */
  message?: V3Message;
}

export interface V3MessageUpdatedEventData {
  /** The message's data */
  message?: V3Message;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

/** Delete messages for everyone */
export interface V3MessagesDeletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The list message identify to delete */
  messageIds?: string[];
  /** The message's data */
  destination?: V3ChannelDestinationCloudEvent;
}

export interface V3OriginalMessage {
  /** The message identify */
  messageId?: string;
  /** The message content */
  content?: string;
  /** Attachment type */
  attachmentType?: V3AttachmentTypeEnum;
  /** first item in list media attachment */
  mediaAttachments?: V3MediaAttachment;
  /**
   * Message type
   * - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   */
  messageType?: V3MessageTypeEnum;
  /** The location language of content */
  contentLocale?: string;
  /** The list arguments to replace in content message */
  contentArguments?: string[];
  /** The user identify */
  userId?: string;
  /** Time edit message */
  editTime?: string;
  /** The create time */
  createTime?: string;
  /** The update time */
  updateTime?: string;
}

export interface V3OutgoingFriendRequestAcceptedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3OutgoingFriendRequestCanceledEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3OutgoingFriendRequestCreatedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3OutgoingFriendRequestDeletedEventData {
  /** The friend request data */
  friendRequest?: V3Friend;
  /** Information data and populate data for friend */
  includes?: V3DataInclude;
}

export interface V3OutgoingMessageRequestAcceptedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface V3OutgoingMessageRequestCreatedEventData {
  /** The channel's data */
  channel?: V3Channel;
  /** Information data and populate data for message */
  includes?: V3DataInclude;
}

export interface V3Participant {
  /** The user identify */
  userId?: string;
  /** The username */
  username?: string;
  /** The display name */
  displayName?: string;
  /** Path to avatar */
  avatar?: string;
  /** The display avatar of user */
  originalAvatar?: string;
  /** The list ice candidate's data */
  iceCandidates?: V3IceCandidate[];
  /** The RTCSessionDescription's data */
  rtcSessionDescription?: V3RTCSessionDescription;
  /** The avatar type */
  avatarType?: V3UserAvatarTypeEnum;
  /** The user badge type */
  userBadgeType?: V3UserBadgeTypeEnum;
  /** The video avatar */
  videoAvatar?: string;
  /** The decorated avatar */
  decoratedAvatar?: string;
  /** The decorated avatar */
  originalDecoratedAvatar?: string;
  /** The thumbnail video avatar */
  thumbVideoAvatar?: string;
}

export interface V3PremiumSettings {
  /**
   * Boosted = false: Lifetime of media is 30 days
   * Boosted = true: Lifetime of media is forever
   */
  boosted?: PremiumSettingsBoosted;
}

export interface V3PresenceData {
  /** The last time updated */
  lastUpdateTime?: string;
  /**
   * now - last_update_time, always greater than or equal zero, unit: seconds
   * @format int64
   */
  lastUpdateInSeconds?: number;
  /** The presence state's data */
  presenceState?: V3PresenceStateEnum;
  /** The custom status */
  customStatus?: string;
}

export interface V3PresenceUpdatedEventData {
  /** The user identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The device is online */
  isOnline?: boolean;
  /** The badge count value */
  badgeValueArgument?: V3BadgeValueArgument;
}

export interface V3PrivacySettings {
  /**
   * Restrict saving content setting
   * Disable forwarding, copying, saving, or screenshotting content within the conversation.
   */
  restrictSavingContent?: PrivacySettingsRestrictSavingContent;
}

export interface V3Profile {
  /** The thumbnail avatar of user */
  avatar?: string;
  /** The user display name */
  displayName?: string;
  /** The cover page of user */
  cover?: string;
  /** The avatar of user */
  originalAvatar?: string;
  /** The avatar type */
  avatarType?: V3UserAvatarTypeEnum;
  /** The video avatar URL */
  videoAvatar?: string;
  /** The user badge type */
  userBadgeType?: V3UserBadgeTypeEnum;
  /** The decorated avatar */
  decoratedAvatar?: string;
  /** The original decorated avatar */
  originalDecoratedAvatar?: string;
}

export interface V3RTCIceServer {
  /** The list urls, each specifying a URL which can be used to connect to the server. */
  urls?: string[];
  /** The username If the RTCIceServer is a TURN server, then this is the username to use during the authentication process. */
  username?: string;
  /** The credential to use when logging into the server. This is only used if the RTCIceServer represents a TURN server. */
  credential?: string;
  /** This attribute specifies what kind of credential is to be used when connecting. The default is password. */
  credentialType?: string;
}

export interface V3RTCSessionDescription {
  /**
   * The type of session description
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   */
  rtcSessionDescriptionType?: V3SessionDescriptionTypeEnum;
  /** The SDP which describes the session. */
  rtcSessionDescriptionSdp?: string;
}

export interface V3ReactionData {
  /** Has reacted */
  isReacted?: boolean;
  /**
   * The total number reaction
   * @format int64
   */
  total?: number;
}

export interface V3Report {
  /**
   * The category report
   * PRETENDING_TO_BE_SOMEONE: The user must choose who is being pretended from PretendingToEnum
   * OTHERS: The user need to enter the reason for the report
   *
   *  - REPORT_CATEGORY_UNSPECIFIED: the user report for reasonable unspecified
   *  - REPORT_CATEGORY_HARASSMENT: the user report for reasonable harassment
   *  - REPORT_CATEGORY_SUICIDE_OR_SELF_INJURY: the user report for reasonable suicide or self injury
   *  - REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE: The user must choose who is being pretended from PretendingToEnum
   *  - REPORT_CATEGORY_SHARING_INAPPROPRIATE_CONTENT: the user report for reasonable sharing inappropriate content
   *  - REPORT_CATEGORY_HATE_SPEECH: the user report for reasonable hate speech
   *  - REPORT_CATEGORY_UNAUTHORIZED_SALES: the user report for reasonable unauthorized sales
   *  - REPORT_CATEGORY_SCAMS: the user report for reasonable scams
   *  - REPORT_CATEGORY_SPAM: the user report for reasonable spam
   *  - REPORT_CATEGORY_COPYRIGHT: the user report for reasonable copyright
   *  - REPORT_CATEGORY_OTHER: the user report for reasonable others reasons
   */
  reportCategory?: V3ReportCategory;
  /**
   * The user must choose who is being pretended
   * - PRETENDING_TO_UNSPECIFIED: The user pretends unspecified.
   *  - PRETENDING_TO_ME: The user pretends to be me.
   *  - PRETENDING_TO_FRIEND: The user pretends to be a friend.
   *  - PRETENDING_TO_CELEBRITY: The user pretends to be a celebrity.
   */
  pretendingTo?: V3PretendingTo;
  /** The reason report */
  reportReason?: string;
  /** The user create report */
  reportBy?: string;
  /** The first time report created */
  reportTime?: string;
}

export interface V3RevokeChannelsNotificationPushedEventData {
  /** The list channel identify revoke notification */
  channelsIds?: string[];
}

export interface V3RevokeMessagesNotificationPushedEventData {
  /** The list message identify to revoke notification */
  messageIds?: string[];
}

export interface V3RingbackToneCreatedEventData {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The name of ringback tone */
  name?: string;
  /** Is default ringback tone */
  isDefault?: boolean;
  /** Is active ringback tone */
  isActive?: boolean;
  /** Create time */
  createTime?: string;
  /** Update time */
  updateTime?: string;
}

export interface V3RingbackToneDeletedEventData {
  /** The ringback tone identify */
  ringbackToneId?: string;
}

export interface V3RingbackToneRenamedEventData {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The name of ringback tone */
  name?: string;
  /** The update time */
  updateTime?: string;
}

export interface V3RingbackToneSelectedEventData {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The update time */
  updateTime?: string;
}

export interface V3StickerObject {
  /** collection_id of sticker file */
  collectionId?: string;
  /** sticker_id of sticker */
  stickerId?: string;
  /** types */
  attachmentType?: V3AttachmentTypeEnum;
  /** url of sticker if attachment type is sticker */
  stickerUrl?: string;
  /** attachment id */
  attachmentId?: string;
  /** file ref */
  fileRef?: string;
}

export interface V3User {
  /** The user identify */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The create time of user */
  createTime?: string;
  /** The update time of user */
  updateTime?: string;
  /** profile of user */
  profile?: V3Profile;
  /** The type of user */
  userType?: V3UserTypeEnum;
  /** The presence's data */
  presenceData?: V3PresenceData;
  /** The user status data */
  statusData?: V3UserStatus;
}

export interface V3UserAvatarDeletedEventData {
  /** User identify avatar deleted */
  actorId?: string;
  /** The type of avatar */
  avatarType?: V3UserAvatarTypeEnum;
}

export interface V3UserAvatarUpdatedEventData {
  /** The user identify whom update avatar */
  actorId?: string;
  /** The new avatar */
  avatar?: string;
  /** The video avatar path */
  videoAvatar?: string;
  /** The type of avatar */
  avatarType?: V3UserAvatarTypeEnum;
}

export interface V3UserBadgeCountUpdatedEventData {
  /** The user identify */
  userId?: string;
  /**
   * The badge count
   * @format int64
   */
  badgeCount?: number;
}

export interface V3UserBlockedEventData {
  /** The user identify whom block */
  actorId?: string;
  /** The user identify whom be blocked */
  targetUserId?: string;
}

export interface V3UserCreatedEventData {
  /** The user identify of user */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The geoLocation's data */
  geolocation?: V3UserCreatedEventDataGeoLocation;
}

/** The geoLocation's data */
export interface V3UserCreatedEventDataGeoLocation {
  /** The country code */
  countryCode?: string;
}

export interface V3UserCreationFailedData {
  /** The user identify of user */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The geo location code */
  geolocation?: V3UserCreationFailedDataGeoLocation;
}

/** The geoLocation's data */
export interface V3UserCreationFailedDataGeoLocation {
  /** The country code */
  countryCode?: string;
}

export interface V3UserDeletedEventData {
  /** The user identify */
  userId?: string;
  /** The user name */
  username?: string;
}

export interface V3UserDisplayNameUpdatedEventData {
  /** The user identify whom delete message */
  actorId?: string;
  /** The new display name of user */
  displayName?: string;
}

export interface V3UserEmailUpdatedEventData {
  /** The user identify whom update email */
  actorId?: string;
  /** The email of user */
  email?: string;
  /** The email hashed */
  emailHash?: string;
}

export interface V3UserGlobalMediaPermissionSettingUpdatedEventData {
  /** The user identify whom update */
  actorId?: string;
  /**
   * The media permission setting
   * - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
   *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
   */
  globalMediaPermissionSetting?: V3MediaPermissionSettingEnum;
}

export interface V3UserGlobalNotificationStatusUpdatedEventData {
  /** The user identify */
  userId?: string;
  /** Is the global notification */
  globalNotificationStatus?: boolean;
}

/** Publish to user reacted */
export interface V3UserMessageReactionUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom react message */
  actorId?: string;
  /** The message identify */
  messageId?: string;
  /** The emoji data */
  emoji?: string;
  /** True if react, false if revoke */
  isReacted?: boolean;
  /** The message reaction's data */
  destination?: V3ChannelDestinationCloudEvent;
  /** Statistical react of message */
  reactions?: Record<string, V3ReactionData>;
}

/** Delete messages only me */
export interface V3UserMessagesDeletedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The list message identify deleted */
  messageIds?: string[];
  /** The message's data */
  destination?: V3ChannelDestinationCloudEvent;
}

export interface V3UserPhoneUpdatedEventData {
  /** The user identify whom update phone number */
  actorId?: string;
  /** The phone number of user */
  phone?: string;
  /** The phone number hashed */
  phoneHash?: string;
}

export interface V3UserScopeForCallUpdatedEventData {
  actorId?: string;
  userScope?: V3UserScopeEnum;
}

export interface V3UserScopeForMessageUpdatedEventData {
  actorId?: string;
  userScope?: V3UserScopeEnum;
}

export interface V3UserStatus {
  /** The content of user status */
  content?: string;
  /** The emoji status */
  status?: string;
  /** The expires time after create */
  expireAfterTime?: V3UserStatusExpireAfterTimeEnum;
  /** The create time */
  createTime?: string;
  /** The update time */
  updateTime?: string;
  /** The end time (create time + expires time) */
  endTime?: string;
}

export interface V3UserStatusCreatedEventData {
  /** The user identify */
  userId?: string;
  /** The user status data */
  statusData?: V3UserStatus;
}

export interface V3UserStatusDeletedEventData {
  /** The user identify */
  userId?: string;
}

export interface V3UserStatusUpdatedEventData {
  /** The user identify */
  userId?: string;
  /** The user status data */
  statusData?: V3UserStatus;
}

export interface V3UserUnblockedEventData {
  /** The user identify whom unblock */
  actorId?: string;
  /** The user identify whom be unblocked */
  targetUserId?: string;
}

export interface V3UserUnreadMessagesUpdatedEventData {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify */
  userId?: string;
  /**
   * The unread count
   * @format int64
   */
  unreadCount?: number;
  /** The last seen message identify */
  lastSeenMessageId?: string;
  /** The message's data */
  destination?: V3ChannelDestinationCloudEvent;
}

export interface V3UserVideoAvatarDeletedEventData {
  /** The user identify whom delete video avatar */
  actorId?: string;
}

export interface V3UserView {
  /** The user identify */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The friend's data */
  friendData?: V3Friend;
  /**
   * The media sharing permission setting of user
   * - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
   *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
   */
  mediaPermissionSetting?: V3MediaPermissionSettingEnum;
  /** The create time of user */
  createTime?: string;
  /** The update time of user */
  updateTime?: string;
  /** The user's account settings. */
  profile?: V3Profile;
  /** The type of user */
  userType?: V3UserTypeEnum;
  /** The presence's data */
  presenceData?: V3PresenceData;
  /** The user status's data */
  statusData?: V3UserStatus;
  /** Is blocked */
  blocked?: boolean;
}

export interface V3UserVisitedProfileEventData {
  /** User identify */
  userId?: string;
  /** The user view data */
  userData?: V3UserView;
  /** The created visited profile time */
  createTime?: string;
  /** The update visited profile time */
  updateTime?: string;
}

export interface V3WebsocketResumeEventData {
  /** The token's data */
  token?: string;
}

export interface AllMessagesDeletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface AllUserMessagesDeletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface AvatarFrameCreatedEventDataTParams {
  /** The user identify whom create avatar frame */
  actorId?: string;
  /** The URL avatar frame */
  avatarFrame?: string;
}

export interface AvatarFrameDeletedEventDataTParams {
  /** The user identify whom delete avatar frame */
  actorId?: string;
  /** The URL avatar frame deleted */
  avatarFrame?: string;
}

export interface CallCreatedEventDataTParams {
  /** The call identify */
  "callData.callId"?: string;
  /**
   * The state of call
   *
   *  - CALL_STATE_UNSPECIFIED: Call state unspecified
   *  - CALL_STATE_DIALING: Call state returned by the API when the user initiates a call
   *  - CALL_STATE_CALLING: Call state when the callee is being connected via websocket
   *  - CALL_STATE_READY_TO_CONNECT: Call state when both the caller and the callee have updated enough ICE information
   *  - CALL_STATE_CONNECTING: Call state is connecting
   *  - CALL_STATE_CONNECTED: Call state when the caller and the callee have successfully established a webRTC connection
   *  - CALL_STATE_RECONNECTING: Call state is reconnecting
   *  - CALL_STATE_ENDED: Call state when either of the two users ends the call, cancels the call, or rejects the call
   * @default "CALL_STATE_UNSPECIFIED"
   */
  "callData.state"?:
    | "CALL_STATE_UNSPECIFIED"
    | "CALL_STATE_DIALING"
    | "CALL_STATE_CALLING"
    | "CALL_STATE_READY_TO_CONNECT"
    | "CALL_STATE_CONNECTING"
    | "CALL_STATE_CONNECTED"
    | "CALL_STATE_RECONNECTING"
    | "CALL_STATE_ENDED";
  /**
   * The type of call
   *
   *  - CALL_TYPE_UNSPECIFIED: The unspecified call
   *  - CALL_TYPE_VIDEO: The video call
   *  - CALL_TYPE_AUDIO: The audio call
   * @default "CALL_TYPE_UNSPECIFIED"
   */
  "callData.type"?:
    | "CALL_TYPE_UNSPECIFIED"
    | "CALL_TYPE_VIDEO"
    | "CALL_TYPE_AUDIO";
  /**
   * The ended reason of call
   *
   *  - CALL_ENDED_REASON_UNSPECIFIED: The call ended due to reason unspecified
   *  - CALL_ENDED_REASON_FAILED: The call ended due to reason failed
   *  - CALL_ENDED_REASON_REMOTE_ENDED: The call ended due to reason remote ended
   *  - CALL_ENDED_REASON_UNANSWERED: The call ended due to reason unanswered
   *  - CALL_ENDED_REASON_ANSWERED_ELSEWHERE: The call ended due to reason answered elsewhere
   *  - CALL_ENDED_REASON_DECLINED_ELSEWHERE: The call ended due to reason declined elsewhere
   * @default "CALL_ENDED_REASON_UNSPECIFIED"
   */
  "callData.endedReason"?:
    | "CALL_ENDED_REASON_UNSPECIFIED"
    | "CALL_ENDED_REASON_FAILED"
    | "CALL_ENDED_REASON_REMOTE_ENDED"
    | "CALL_ENDED_REASON_UNANSWERED"
    | "CALL_ENDED_REASON_ANSWERED_ELSEWHERE"
    | "CALL_ENDED_REASON_DECLINED_ELSEWHERE";
  /** The create time */
  "callData.createTime"?: string;
  /** The deadline */
  "callData.deadline"?: string;
  /** The user identify */
  "callData.caller.userId"?: string;
  /** The username */
  "callData.caller.username"?: string;
  /** The display name */
  "callData.caller.displayName"?: string;
  /** Path to avatar */
  "callData.caller.avatar"?: string;
  /** The display avatar of user */
  "callData.caller.originalAvatar"?: string;
  /**
   * The type of session description
   *
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
   */
  "callData.caller.rtcSessionDescription.rtcSessionDescriptionType"?:
    | "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
    | "SESSION_DESCRIPTION_TYPE_ANSWER"
    | "SESSION_DESCRIPTION_TYPE_OFFER"
    | "SESSION_DESCRIPTION_TYPE_PRANSWER"
    | "SESSION_DESCRIPTION_TYPE_ROLLBACK";
  /** The SDP which describes the session. */
  "callData.caller.rtcSessionDescription.rtcSessionDescriptionSdp"?: string;
  /**
   * The avatar type
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  "callData.caller.avatarType"?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
  /**
   * The user badge type
   * @default "USER_BADGE_TYPE_DEFAULT"
   */
  "callData.caller.userBadgeType"?:
    | "USER_BADGE_TYPE_DEFAULT"
    | "USER_BADGE_TYPE_BLUE"
    | "USER_BADGE_TYPE_GRAY"
    | "USER_BADGE_TYPE_YELLOW";
  /** The video avatar */
  "callData.caller.videoAvatar"?: string;
  /** The decorated avatar */
  "callData.caller.decoratedAvatar"?: string;
  /** The decorated avatar */
  "callData.caller.originalDecoratedAvatar"?: string;
  /** The thumbnail video avatar */
  "callData.caller.thumbVideoAvatar"?: string;
  /** The user identify */
  "callData.callee.userId"?: string;
  /** The username */
  "callData.callee.username"?: string;
  /** The display name */
  "callData.callee.displayName"?: string;
  /** Path to avatar */
  "callData.callee.avatar"?: string;
  /** The display avatar of user */
  "callData.callee.originalAvatar"?: string;
  /**
   * The type of session description
   *
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
   */
  "callData.callee.rtcSessionDescription.rtcSessionDescriptionType"?:
    | "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
    | "SESSION_DESCRIPTION_TYPE_ANSWER"
    | "SESSION_DESCRIPTION_TYPE_OFFER"
    | "SESSION_DESCRIPTION_TYPE_PRANSWER"
    | "SESSION_DESCRIPTION_TYPE_ROLLBACK";
  /** The SDP which describes the session. */
  "callData.callee.rtcSessionDescription.rtcSessionDescriptionSdp"?: string;
  /**
   * The avatar type
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  "callData.callee.avatarType"?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
  /**
   * The user badge type
   * @default "USER_BADGE_TYPE_DEFAULT"
   */
  "callData.callee.userBadgeType"?:
    | "USER_BADGE_TYPE_DEFAULT"
    | "USER_BADGE_TYPE_BLUE"
    | "USER_BADGE_TYPE_GRAY"
    | "USER_BADGE_TYPE_YELLOW";
  /** The video avatar */
  "callData.callee.videoAvatar"?: string;
  /** The decorated avatar */
  "callData.callee.decoratedAvatar"?: string;
  /** The decorated avatar */
  "callData.callee.originalDecoratedAvatar"?: string;
  /** The thumbnail video avatar */
  "callData.callee.thumbVideoAvatar"?: string;
  /**
   * ICE connection state
   *
   *  - ICE_CONNECTION_STATE_UNSPECIFIED: The connection state are unspecified
   *  - ICE_CONNECTION_STATE_NEW: The connection state is new
   *  - ICE_CONNECTION_STATE_CHECKING: The connection state is checking
   *  - ICE_CONNECTION_STATE_CONNECTED: The connection state is connected
   *  - ICE_CONNECTION_STATE_COMPLETED: The connection state is complete
   *  - ICE_CONNECTION_STATE_FAILED: The connection state is failed
   *  - ICE_CONNECTION_STATE_DISCONNECTED: The connection state is disconnected
   *  - ICE_CONNECTION_STATE_CLOSE: The connection state is close
   * @default "ICE_CONNECTION_STATE_UNSPECIFIED"
   */
  "callData.iceConnectionState"?:
    | "ICE_CONNECTION_STATE_UNSPECIFIED"
    | "ICE_CONNECTION_STATE_NEW"
    | "ICE_CONNECTION_STATE_CHECKING"
    | "ICE_CONNECTION_STATE_CONNECTED"
    | "ICE_CONNECTION_STATE_COMPLETED"
    | "ICE_CONNECTION_STATE_FAILED"
    | "ICE_CONNECTION_STATE_DISCONNECTED"
    | "ICE_CONNECTION_STATE_CLOSE";
  /** The ringback tone file url */
  "callData.ringbackToneUrl"?: string;
}

export interface CallSignalUpdatedEventDataTParams {
  /** The call identify */
  callId?: string;
  /** The user identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The user identify */
  "recipientInfo.userId"?: string;
  /** The device identify */
  "recipientInfo.deviceId"?: string;
  /** Describes the protocols and routing needed for WebRTC to be able to communicate with a remote device. When starting a WebRTC peer connection */
  rtcIceCandidate?: string;
  /**
   * The type of session description
   *
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
   */
  "rtcSessionDescription.rtcSessionDescriptionType"?:
    | "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
    | "SESSION_DESCRIPTION_TYPE_ANSWER"
    | "SESSION_DESCRIPTION_TYPE_OFFER"
    | "SESSION_DESCRIPTION_TYPE_PRANSWER"
    | "SESSION_DESCRIPTION_TYPE_ROLLBACK";
  /** The SDP which describes the session. */
  "rtcSessionDescription.rtcSessionDescriptionSdp"?: string;
  /**
   * The call signal intent data
   *
   *  - CALL_SIGNAL_INTENT_UNSPECIFIED: The call signal intent are unspecified
   *  - CALL_SIGNAL_INTENT_CAMERA_ON: The call signal intent are camera on
   *  - CALL_SIGNAL_INTENT_CAMERA_OFF: The call signal intent are camera of
   *  - CALL_SIGNAL_INTENT_MIC_ON: The call signal intent is mic on
   *  - CALL_SIGNAL_INTENT_MIC_OFF: The call signal intent are mic off
   *  - CALL_SIGNAL_INTENT_WILL_END: The call signal intent are will end
   * @default "CALL_SIGNAL_INTENT_UNSPECIFIED"
   */
  intent?:
    | "CALL_SIGNAL_INTENT_UNSPECIFIED"
    | "CALL_SIGNAL_INTENT_CAMERA_ON"
    | "CALL_SIGNAL_INTENT_CAMERA_OFF"
    | "CALL_SIGNAL_INTENT_MIC_ON"
    | "CALL_SIGNAL_INTENT_MIC_OFF"
    | "CALL_SIGNAL_INTENT_WILL_END";
}

export interface CallUpdatedEventDataTParams {
  /** The call identify */
  "callData.callId"?: string;
  /**
   * The state of call
   *
   *  - CALL_STATE_UNSPECIFIED: Call state unspecified
   *  - CALL_STATE_DIALING: Call state returned by the API when the user initiates a call
   *  - CALL_STATE_CALLING: Call state when the callee is being connected via websocket
   *  - CALL_STATE_READY_TO_CONNECT: Call state when both the caller and the callee have updated enough ICE information
   *  - CALL_STATE_CONNECTING: Call state is connecting
   *  - CALL_STATE_CONNECTED: Call state when the caller and the callee have successfully established a webRTC connection
   *  - CALL_STATE_RECONNECTING: Call state is reconnecting
   *  - CALL_STATE_ENDED: Call state when either of the two users ends the call, cancels the call, or rejects the call
   * @default "CALL_STATE_UNSPECIFIED"
   */
  "callData.state"?:
    | "CALL_STATE_UNSPECIFIED"
    | "CALL_STATE_DIALING"
    | "CALL_STATE_CALLING"
    | "CALL_STATE_READY_TO_CONNECT"
    | "CALL_STATE_CONNECTING"
    | "CALL_STATE_CONNECTED"
    | "CALL_STATE_RECONNECTING"
    | "CALL_STATE_ENDED";
  /**
   * The type of call
   *
   *  - CALL_TYPE_UNSPECIFIED: The unspecified call
   *  - CALL_TYPE_VIDEO: The video call
   *  - CALL_TYPE_AUDIO: The audio call
   * @default "CALL_TYPE_UNSPECIFIED"
   */
  "callData.type"?:
    | "CALL_TYPE_UNSPECIFIED"
    | "CALL_TYPE_VIDEO"
    | "CALL_TYPE_AUDIO";
  /**
   * The ended reason of call
   *
   *  - CALL_ENDED_REASON_UNSPECIFIED: The call ended due to reason unspecified
   *  - CALL_ENDED_REASON_FAILED: The call ended due to reason failed
   *  - CALL_ENDED_REASON_REMOTE_ENDED: The call ended due to reason remote ended
   *  - CALL_ENDED_REASON_UNANSWERED: The call ended due to reason unanswered
   *  - CALL_ENDED_REASON_ANSWERED_ELSEWHERE: The call ended due to reason answered elsewhere
   *  - CALL_ENDED_REASON_DECLINED_ELSEWHERE: The call ended due to reason declined elsewhere
   * @default "CALL_ENDED_REASON_UNSPECIFIED"
   */
  "callData.endedReason"?:
    | "CALL_ENDED_REASON_UNSPECIFIED"
    | "CALL_ENDED_REASON_FAILED"
    | "CALL_ENDED_REASON_REMOTE_ENDED"
    | "CALL_ENDED_REASON_UNANSWERED"
    | "CALL_ENDED_REASON_ANSWERED_ELSEWHERE"
    | "CALL_ENDED_REASON_DECLINED_ELSEWHERE";
  /** The create time */
  "callData.createTime"?: string;
  /** The deadline */
  "callData.deadline"?: string;
  /** The user identify */
  "callData.caller.userId"?: string;
  /** The username */
  "callData.caller.username"?: string;
  /** The display name */
  "callData.caller.displayName"?: string;
  /** Path to avatar */
  "callData.caller.avatar"?: string;
  /** The display avatar of user */
  "callData.caller.originalAvatar"?: string;
  /**
   * The type of session description
   *
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
   */
  "callData.caller.rtcSessionDescription.rtcSessionDescriptionType"?:
    | "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
    | "SESSION_DESCRIPTION_TYPE_ANSWER"
    | "SESSION_DESCRIPTION_TYPE_OFFER"
    | "SESSION_DESCRIPTION_TYPE_PRANSWER"
    | "SESSION_DESCRIPTION_TYPE_ROLLBACK";
  /** The SDP which describes the session. */
  "callData.caller.rtcSessionDescription.rtcSessionDescriptionSdp"?: string;
  /**
   * The avatar type
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  "callData.caller.avatarType"?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
  /**
   * The user badge type
   * @default "USER_BADGE_TYPE_DEFAULT"
   */
  "callData.caller.userBadgeType"?:
    | "USER_BADGE_TYPE_DEFAULT"
    | "USER_BADGE_TYPE_BLUE"
    | "USER_BADGE_TYPE_GRAY"
    | "USER_BADGE_TYPE_YELLOW";
  /** The video avatar */
  "callData.caller.videoAvatar"?: string;
  /** The decorated avatar */
  "callData.caller.decoratedAvatar"?: string;
  /** The decorated avatar */
  "callData.caller.originalDecoratedAvatar"?: string;
  /** The thumbnail video avatar */
  "callData.caller.thumbVideoAvatar"?: string;
  /** The user identify */
  "callData.callee.userId"?: string;
  /** The username */
  "callData.callee.username"?: string;
  /** The display name */
  "callData.callee.displayName"?: string;
  /** Path to avatar */
  "callData.callee.avatar"?: string;
  /** The display avatar of user */
  "callData.callee.originalAvatar"?: string;
  /**
   * The type of session description
   *
   *  - SESSION_DESCRIPTION_TYPE_UNSPECIFIED: The session description unspecified
   *  - SESSION_DESCRIPTION_TYPE_ANSWER: This session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
   *  - SESSION_DESCRIPTION_TYPE_OFFER: The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
   *  - SESSION_DESCRIPTION_TYPE_PRANSWER: The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
   *  - SESSION_DESCRIPTION_TYPE_ROLLBACK: This special type with an empty session description is used to roll back to the previous stable state.
   * @default "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
   */
  "callData.callee.rtcSessionDescription.rtcSessionDescriptionType"?:
    | "SESSION_DESCRIPTION_TYPE_UNSPECIFIED"
    | "SESSION_DESCRIPTION_TYPE_ANSWER"
    | "SESSION_DESCRIPTION_TYPE_OFFER"
    | "SESSION_DESCRIPTION_TYPE_PRANSWER"
    | "SESSION_DESCRIPTION_TYPE_ROLLBACK";
  /** The SDP which describes the session. */
  "callData.callee.rtcSessionDescription.rtcSessionDescriptionSdp"?: string;
  /**
   * The avatar type
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  "callData.callee.avatarType"?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
  /**
   * The user badge type
   * @default "USER_BADGE_TYPE_DEFAULT"
   */
  "callData.callee.userBadgeType"?:
    | "USER_BADGE_TYPE_DEFAULT"
    | "USER_BADGE_TYPE_BLUE"
    | "USER_BADGE_TYPE_GRAY"
    | "USER_BADGE_TYPE_YELLOW";
  /** The video avatar */
  "callData.callee.videoAvatar"?: string;
  /** The decorated avatar */
  "callData.callee.decoratedAvatar"?: string;
  /** The decorated avatar */
  "callData.callee.originalDecoratedAvatar"?: string;
  /** The thumbnail video avatar */
  "callData.callee.thumbVideoAvatar"?: string;
  /**
   * ICE connection state
   *
   *  - ICE_CONNECTION_STATE_UNSPECIFIED: The connection state are unspecified
   *  - ICE_CONNECTION_STATE_NEW: The connection state is new
   *  - ICE_CONNECTION_STATE_CHECKING: The connection state is checking
   *  - ICE_CONNECTION_STATE_CONNECTED: The connection state is connected
   *  - ICE_CONNECTION_STATE_COMPLETED: The connection state is complete
   *  - ICE_CONNECTION_STATE_FAILED: The connection state is failed
   *  - ICE_CONNECTION_STATE_DISCONNECTED: The connection state is disconnected
   *  - ICE_CONNECTION_STATE_CLOSE: The connection state is close
   * @default "ICE_CONNECTION_STATE_UNSPECIFIED"
   */
  "callData.iceConnectionState"?:
    | "ICE_CONNECTION_STATE_UNSPECIFIED"
    | "ICE_CONNECTION_STATE_NEW"
    | "ICE_CONNECTION_STATE_CHECKING"
    | "ICE_CONNECTION_STATE_CONNECTED"
    | "ICE_CONNECTION_STATE_COMPLETED"
    | "ICE_CONNECTION_STATE_FAILED"
    | "ICE_CONNECTION_STATE_DISCONNECTED"
    | "ICE_CONNECTION_STATE_CLOSE";
  /** The ringback tone file url */
  "callData.ringbackToneUrl"?: string;
}

export interface ChannelAvatarUploadFailedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The reason upload avatar false */
  reason?: string;
}

export interface ChannelCreatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface ChannelCreationCompletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
}

export interface ChannelCreationFailedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The reason create channel false */
  reason?: string;
}

export interface ChannelDeletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
}

export interface ChannelDestinationCloudEventTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  channelType?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  recipientId?: string;
  /** The dm channel identify */
  dmId?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  dmStatus?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface ChannelNotificationStatusUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send */
  actorId?: string;
  /** The notification status */
  notificationStatus?: boolean;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface ChannelTypingEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom typing */
  actorId?: string;
  /** The name's data */
  name?: string;
  /** The avatar's data */
  avatar?: string;
}

export interface ChannelUpdatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface CloudEventTParams {
  /** The cloud event identify */
  id?: string;
  /** The type of cloud event */
  type?: string;
  /** Identifies the context in which an event happened */
  source?: string;
  /** The version of the CloudEvents specification which the event uses. This enables the interpretation of the context. */
  specversion?: string;
  /** Content type of data value. This attribute enables data to carry any type of content, whereby format and encoding might differ from that of the chosen event format. */
  datacontenttype?: string;
  /** Identifies the schema that data adheres to. Incompatible changes to the schema SHOULD be reflected by a different URI. */
  dataschema?: string;
  /** This describes the subject of the event in the context of the event producer (identified by source) */
  subject?: string;
  /** Timestamp of when the occurrence happened */
  time?: string;
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "data.typeUrl"?: string;
  /**
   * Must be a valid serialized protocol buffer of the above specified type.
   * @format byte
   */
  "data.value"?: string;
}

export interface CoverPhotoCreatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** The cover photo data */
  cover?: string;
}

export interface CoverPhotoDeletedEventDataTParams {
  /** The user identify */
  userId?: string;
}

export interface CoverPhotoUpdatedDataTParams {
  /** The user identify */
  userId?: string;
  /** The cover photo data */
  cover?: string;
}

export interface DmChannelCreatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface DmChannelUpdatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface DecoratedAvatarRemovedEventDataTParams {
  /** The user identify whom remove decorated avatar */
  actorId?: string;
}

export interface DecoratedAvatarUploadedEventDataTParams {
  /** The user identify whom upload decorated avatar */
  actorId?: string;
  /** The avatar frame identify */
  avatarFrameId?: string;
  /** The avatar decorated URL */
  decoratedAvatar?: string;
  /** The original decorated avatar URL */
  originalDecoratedAvatar?: string;
}

export interface DeleteUserVisitedProfileEventDataTParams {
  /** User identify whom delete visited profile */
  actorId?: string;
  /** User identify whom visited profile */
  userId?: string;
  /** The created visited profile time */
  createTime?: string;
  /** The update visited profile time */
  updateTime?: string;
}

export interface DeviceLinkedEventDataTParams {
  /** The workspace identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
}

export interface DeviceUnlinkedEventDataTParams {
  /** The workspace identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
}

export interface FileUploadedEventDataTParams {
  /** The user identify whom upload file */
  actorId?: string;
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The message identify */
  messageId?: string;
  /**
   * The attachment file status
   *
   *  - ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED: Unspecified, default value
   *  - ATTACHMENT_FILE_STATUS_ENUM_UPLOADING: File Uploading to server
   *  - ATTACHMENT_FILE_STATUS_ENUM_SUCCESS: File uploaded success
   *  - ATTACHMENT_FILE_STATUS_ENUM_FAILURE: File uploaded failed
   * @default "ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED"
   */
  attachmentFileStatus?:
    | "ATTACHMENT_FILE_STATUS_ENUM_UNSPECIFIED"
    | "ATTACHMENT_FILE_STATUS_ENUM_UPLOADING"
    | "ATTACHMENT_FILE_STATUS_ENUM_SUCCESS"
    | "ATTACHMENT_FILE_STATUS_ENUM_FAILURE";
  /** The file ref */
  fileRef?: string;
  /** The file name */
  fileName?: string;
  /**
   * The file size
   * @format int64
   */
  fileSize?: number;
}

export interface FriendRemovedEventDataTParams {
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom receive request */
  targetUserId?: string;
}

export interface GatewayConnectedEventDataTParams {
  /** The user identify connect to gateway */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The message's data */
  message?: string;
}

export interface IncomingFriendRequestAcceptedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface IncomingFriendRequestCanceledEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface IncomingFriendRequestCreatedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface IncomingFriendRequestDeletedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface IncomingMessageRequestAcceptedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface IncomingMessageRequestCreatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface MarkAllChannelsAsReadEventDataTParams {
  /** The user identify */
  userId?: string;
}

export interface MemberBannedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom be banned */
  bannedUserId?: string;
}

export interface MemberJoinedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom joined channel */
  joinedUserId?: string;
}

export interface MemberLeftEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom left channel */
  userId?: string;
}

export interface MemberNicknameUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom update nickname */
  actorId?: string;
  /** The user identify whom be updated nickname */
  targetUserId?: string;
  /** The new nickname of member */
  nickname?: string;
}

export interface MemberRemovedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom remove member */
  actorId?: string;
  /** The user identify whom be removed from channel */
  targetUserId?: string;
}

export interface MemberRoleRevokedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom revoke role */
  actorId?: string;
  /** The user identify whom be revoked role */
  targetUserId?: string;
  /** The role to revoke */
  role?: string;
}

export interface MemberRoleUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom update role */
  actorId?: string;
  /** The user identify whom be updated role */
  targetUserId?: string;
  /** The role to update */
  role?: string;
}

export interface MemberUnbannedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom unban member */
  actorId?: string;
  /** The user identify whom be unbanned from channel */
  unbannedUserId?: string;
}

export interface MessageCreatedEventDataTParams {
  /** The workspace identify */
  "message.workspaceId"?: string;
  /** The channel identify */
  "message.channelId"?: string;
  /** The message identify */
  "message.messageId"?: string;
  /** UserId send message */
  "message.userId"?: string;
  /** Content of message */
  "message.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "message.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "message.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "message.originalMessage.messageId"?: string;
  /** The message content */
  "message.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "message.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "message.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "message.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "message.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "message.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "message.originalMessage.userId"?: string;
  /** Time edit message */
  "message.originalMessage.editTime"?: string;
  /** The create time */
  "message.originalMessage.createTime"?: string;
  /** The update time */
  "message.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "message.reactions"?: any;
  /** List username mentions */
  "message.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "message.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "message.reportCount"?: number;
  /** Flag report, default = false */
  "message.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "message.attachmentCount"?: number;
  /** The location language of content */
  "message.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.contentArguments"?: string[];
  /** Is pinned */
  "message.isPinned"?: boolean;
  /** Pin time */
  "message.pinTime"?: string;
  /** Time edit message */
  "message.editTime"?: string;
  /** The first time message created */
  "message.createTime"?: string;
  /** The time message updated */
  "message.updateTime"?: string;
}

export interface MessagePinnedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom pine message */
  actorId?: string;
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
  /** The workspace identify */
  "message.workspaceId"?: string;
  /** The channel identify */
  "message.channelId"?: string;
  /** The message identify */
  "message.messageId"?: string;
  /** UserId send message */
  "message.userId"?: string;
  /** Content of message */
  "message.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "message.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "message.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "message.originalMessage.messageId"?: string;
  /** The message content */
  "message.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "message.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "message.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "message.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "message.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "message.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "message.originalMessage.userId"?: string;
  /** Time edit message */
  "message.originalMessage.editTime"?: string;
  /** The create time */
  "message.originalMessage.createTime"?: string;
  /** The update time */
  "message.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "message.reactions"?: any;
  /** List username mentions */
  "message.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "message.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "message.reportCount"?: number;
  /** Flag report, default = false */
  "message.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "message.attachmentCount"?: number;
  /** The location language of content */
  "message.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.contentArguments"?: string[];
  /** Is pinned */
  "message.isPinned"?: boolean;
  /** Pin time */
  "message.pinTime"?: string;
  /** Time edit message */
  "message.editTime"?: string;
  /** The first time message created */
  "message.createTime"?: string;
  /** The time message updated */
  "message.updateTime"?: string;
}

export interface MessageReactionUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The message identify */
  messageId?: string;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  jsonReactions?: any;
}

export interface MessageRequestRejectedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom send request */
  actorId?: string;
  /** The user identify whom receive request */
  targetUserId?: string;
}

export interface MessageUnpinnedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify */
  actorId?: string;
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
  /** The workspace identify */
  "message.workspaceId"?: string;
  /** The channel identify */
  "message.channelId"?: string;
  /** The message identify */
  "message.messageId"?: string;
  /** UserId send message */
  "message.userId"?: string;
  /** Content of message */
  "message.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "message.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "message.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "message.originalMessage.messageId"?: string;
  /** The message content */
  "message.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "message.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "message.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "message.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "message.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "message.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "message.originalMessage.userId"?: string;
  /** Time edit message */
  "message.originalMessage.editTime"?: string;
  /** The create time */
  "message.originalMessage.createTime"?: string;
  /** The update time */
  "message.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "message.reactions"?: any;
  /** List username mentions */
  "message.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "message.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "message.reportCount"?: number;
  /** Flag report, default = false */
  "message.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "message.attachmentCount"?: number;
  /** The location language of content */
  "message.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.contentArguments"?: string[];
  /** Is pinned */
  "message.isPinned"?: boolean;
  /** Pin time */
  "message.pinTime"?: string;
  /** Time edit message */
  "message.editTime"?: string;
  /** The first time message created */
  "message.createTime"?: string;
  /** The time message updated */
  "message.updateTime"?: string;
}

export interface MessageUpdatedEventDataTParams {
  /** The workspace identify */
  "message.workspaceId"?: string;
  /** The channel identify */
  "message.channelId"?: string;
  /** The message identify */
  "message.messageId"?: string;
  /** UserId send message */
  "message.userId"?: string;
  /** Content of message */
  "message.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "message.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "message.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "message.originalMessage.messageId"?: string;
  /** The message content */
  "message.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "message.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "message.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "message.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "message.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "message.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "message.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "message.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "message.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "message.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "message.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "message.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "message.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "message.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "message.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "message.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "message.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "message.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "message.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "message.originalMessage.userId"?: string;
  /** Time edit message */
  "message.originalMessage.editTime"?: string;
  /** The create time */
  "message.originalMessage.createTime"?: string;
  /** The update time */
  "message.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "message.reactions"?: any;
  /** List username mentions */
  "message.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "message.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "message.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "message.reportCount"?: number;
  /** Flag report, default = false */
  "message.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "message.attachmentCount"?: number;
  /** The location language of content */
  "message.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "message.contentArguments"?: string[];
  /** Is pinned */
  "message.isPinned"?: boolean;
  /** Pin time */
  "message.pinTime"?: string;
  /** Time edit message */
  "message.editTime"?: string;
  /** The first time message created */
  "message.createTime"?: string;
  /** The time message updated */
  "message.updateTime"?: string;
}

export interface MessagesDeletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The list message identify to delete */
  messageIds?: string[];
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface OutgoingFriendRequestAcceptedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface OutgoingFriendRequestCanceledEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface OutgoingFriendRequestCreatedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface OutgoingFriendRequestDeletedEventDataTParams {
  /** The user identify whom send request */
  "friendRequest.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "friendRequest.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "friendRequest.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "friendRequest.friendId"?: string;
  /** The list participant id */
  "friendRequest.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "friendRequest.readTime"?: string;
  /** The time to accept friend */
  "friendRequest.acceptTime"?: string;
  /** The first time friend created */
  "friendRequest.createTime"?: string;
  /** The time of friend updated */
  "friendRequest.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "friendRequest.deleteTime"?: string;
}

export interface OutgoingMessageRequestAcceptedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface OutgoingMessageRequestCreatedEventDataTParams {
  /** The workspace identify */
  "channel.workspaceId"?: string;
  /** The channel identify */
  "channel.channelId"?: string;
  /** The channel's creator is identified by the user. */
  "channel.userId"?: string;
  /** The name of channel */
  "channel.name"?: string;
  /** The avatar of channel */
  "channel.avatar"?: string;
  /** The channel is not yet private. */
  "channel.isPrivate"?: boolean;
  /**
   * The type of channel
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "channel.type"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** Invitation link after create channel */
  "channel.invitationLink"?: string;
  /** Is limited saving enabled? */
  "channel.privacySettings.restrictSavingContent.enable"?: boolean;
  "channel.premiumSettings.boosted.enable"?: boolean;
  /** The original avatar */
  "channel.originalAvatar"?: string;
  /**
   * Only return when get get channel
   * @format int64
   */
  "channel.totalMembers"?: number;
  /**
   * Status of channel has type DM
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /** The workspace identify */
  "channel.pinnedMessage.workspaceId"?: string;
  /** The channel identify */
  "channel.pinnedMessage.channelId"?: string;
  /** The message identify */
  "channel.pinnedMessage.messageId"?: string;
  /** UserId send message */
  "channel.pinnedMessage.userId"?: string;
  /** Content of message */
  "channel.pinnedMessage.content"?: string;
  /** Is a random value created by the client, which is used as a similar attribute to the local ID */
  "channel.pinnedMessage.ref"?: string;
  /**
   * Message type and message status
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /**
   * Status of message
   *
   *  - MESSAGE_STATUS_ENUM_PENDING: Waiting for process from server
   *  - MESSAGE_STATUS_ENUM_SUCCESS: Send message success
   *  - MESSAGE_STATUS_ENUM_FAILURE: Send message failed
   * @default "MESSAGE_STATUS_ENUM_PENDING"
   */
  "channel.pinnedMessage.messageStatus"?:
    | "MESSAGE_STATUS_ENUM_PENDING"
    | "MESSAGE_STATUS_ENUM_SUCCESS"
    | "MESSAGE_STATUS_ENUM_FAILURE";
  /** The message identify */
  "channel.pinnedMessage.originalMessage.messageId"?: string;
  /** The message content */
  "channel.pinnedMessage.originalMessage.content"?: string;
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.url"?: string;
  /** short url */
  "channel.pinnedMessage.originalMessage.mediaAttachments.link.shortUrl"?: string;
  /** collection_id of sticker file */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.collectionId"?: string;
  /** sticker_id of sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** url of sticker if attachment type is sticker */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.stickerUrl"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.attachmentId"?: string;
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.sticker.fileRef"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.photo.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.audio.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.video.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.voiceMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.videoMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.mediaMessage.messageId"?: string;
  /** file_id to handle file operations */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileId"?: string;
  /**
   * types
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** Readable file object */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileUrl"?: string;
  /** The name of file. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filename"?: string;
  /**
   * The size of the file in bytes.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.filesize"?: number;
  /** The file extension. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.extension"?: string;
  /** The MIME type of the file. MIME types are used to identify the nature and format of a file on the internet. */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.mimetype"?: string;
  /**
   * The height of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.height"?: number;
  /**
   * The width of file.
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.dimensions.width"?: number;
  /**
   * duration of video or record file, unit second
   * @format int64
   */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileMetadata.duration"?: number;
  /** Readable thumbnail, OPTIONAL */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.thumbnailUrl"?: string;
  /** audio samples rate */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.audioMetadata.samples"?: number[];
  /** file ref */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.fileRef"?: string;
  /** attachment id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.attachmentId"?: string;
  /** channel id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.channelId"?: string;
  /** user id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.userId"?: string;
  /** message id */
  "channel.pinnedMessage.originalMessage.mediaAttachments.file.messageId"?: string;
  /**
   * Message type
   *
   *  - MESSAGE_TYPE_ENUM_DEFAULT: Default is message of user
   *  - MESSAGE_TYPE_ENUM_AUDIT_LOG: Message from system
   * @default "MESSAGE_TYPE_ENUM_DEFAULT"
   */
  "channel.pinnedMessage.originalMessage.messageType"?:
    | "MESSAGE_TYPE_ENUM_DEFAULT"
    | "MESSAGE_TYPE_ENUM_AUDIT_LOG";
  /** The location language of content */
  "channel.pinnedMessage.originalMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.originalMessage.contentArguments"?: string[];
  /** The user identify */
  "channel.pinnedMessage.originalMessage.userId"?: string;
  /** Time edit message */
  "channel.pinnedMessage.originalMessage.editTime"?: string;
  /** The create time */
  "channel.pinnedMessage.originalMessage.createTime"?: string;
  /** The update time */
  "channel.pinnedMessage.originalMessage.updateTime"?: string;
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  "channel.pinnedMessage.reactions"?: any;
  /** List username mentions */
  "channel.pinnedMessage.mentions"?: string[];
  /**
   * Attachment type
   *
   *  - ATTACHMENT_TYPE_ENUM_UNSPECIFIED: Unspecified
   *  - ATTACHMENT_TYPE_ENUM_PHOTO: Photo
   *  - ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE: Voice message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE: video message
   *  - ATTACHMENT_TYPE_ENUM_AUDIO: Audio message
   *  - ATTACHMENT_TYPE_ENUM_VIDEO: Video message
   *  - ATTACHMENT_TYPE_ENUM_LINKS: The link message
   *  - ATTACHMENT_TYPE_ENUM_STICKER: The sticker message
   *  - ATTACHMENT_TYPE_ENUM_MEDIA: Include PHOTO and VIDEO
   *  - ATTACHMENT_TYPE_ENUM_MENTION: Include mention
   *  - ATTACHMENT_TYPE_ENUM_LOCATION: Include location
   *  - ATTACHMENT_TYPE_ENUM_FILE: Include file
   * @default "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
   */
  "channel.pinnedMessage.attachmentType"?:
    | "ATTACHMENT_TYPE_ENUM_UNSPECIFIED"
    | "ATTACHMENT_TYPE_ENUM_PHOTO"
    | "ATTACHMENT_TYPE_ENUM_VOICE_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_VIDEO_MESSAGE"
    | "ATTACHMENT_TYPE_ENUM_AUDIO"
    | "ATTACHMENT_TYPE_ENUM_VIDEO"
    | "ATTACHMENT_TYPE_ENUM_LINKS"
    | "ATTACHMENT_TYPE_ENUM_STICKER"
    | "ATTACHMENT_TYPE_ENUM_MEDIA"
    | "ATTACHMENT_TYPE_ENUM_MENTION"
    | "ATTACHMENT_TYPE_ENUM_LOCATION"
    | "ATTACHMENT_TYPE_ENUM_FILE";
  /** State is thread of message, default = false */
  "channel.pinnedMessage.isThread"?: boolean;
  /**
   * Number of times reported, default = 0
   * @format int64
   */
  "channel.pinnedMessage.reportCount"?: number;
  /** Flag report, default = false */
  "channel.pinnedMessage.isReported"?: boolean;
  /**
   * Number of files, using for upload album
   * @format int64
   */
  "channel.pinnedMessage.attachmentCount"?: number;
  /** The location language of content */
  "channel.pinnedMessage.contentLocale"?: string;
  /** The list arguments to replace in content message */
  "channel.pinnedMessage.contentArguments"?: string[];
  /** Is pinned */
  "channel.pinnedMessage.isPinned"?: boolean;
  /** Pin time */
  "channel.pinnedMessage.pinTime"?: string;
  /** Time edit message */
  "channel.pinnedMessage.editTime"?: string;
  /** The first time message created */
  "channel.pinnedMessage.createTime"?: string;
  /** The time message updated */
  "channel.pinnedMessage.updateTime"?: string;
  /** The list participant id */
  "channel.participantIds"?: string[];
  /** Time recipient reject message request */
  "channel.rejectTime"?: string;
  /** Time recipient accept message request */
  "channel.acceptTime"?: string;
  /** The first time channel created */
  "channel.createTime"?: string;
  /** The time channel updated */
  "channel.updateTime"?: string;
}

export interface PresenceUpdatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** The device identify */
  deviceId?: string;
  /** The device is online */
  isOnline?: boolean;
  /** The channel identify unread */
  "badgeValueArgument.unreadChannelIds"?: string[];
  /** The user identify of friend request */
  "badgeValueArgument.unreadFriendRequestIds"?: string[];
}

export interface RevokeChannelsNotificationPushedEventDataTParams {
  /** The list channel identify revoke notification */
  channelsIds?: string[];
}

export interface RevokeMessagesNotificationPushedEventDataTParams {
  /** The list message identify to revoke notification */
  messageIds?: string[];
}

export interface RingbackToneCreatedEventDataTParams {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The name of ringback tone */
  name?: string;
  /** Is default ringback tone */
  isDefault?: boolean;
  /** Is active ringback tone */
  isActive?: boolean;
  /** Create time */
  createTime?: string;
  /** Update time */
  updateTime?: string;
}

export interface RingbackToneDeletedEventDataTParams {
  /** The ringback tone identify */
  ringbackToneId?: string;
}

export interface RingbackToneRenamedEventDataTParams {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The name of ringback tone */
  name?: string;
  /** The update time */
  updateTime?: string;
}

export interface RingbackToneSelectedEventDataTParams {
  /** The ringback tone identify */
  ringbackToneId?: string;
  /** The update time */
  updateTime?: string;
}

export interface UserAvatarDeletedEventDataTParams {
  /** User identify avatar deleted */
  actorId?: string;
  /**
   * The type of avatar
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  avatarType?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
}

export interface UserAvatarUpdatedEventDataTParams {
  /** The user identify whom update avatar */
  actorId?: string;
  /** The new avatar */
  avatar?: string;
  /** The video avatar path */
  videoAvatar?: string;
  /**
   * The type of avatar
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  avatarType?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
}

export interface UserBadgeCountUpdatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /**
   * The badge count
   * @format int64
   */
  badgeCount?: number;
}

export interface UserBlockedEventDataTParams {
  /** The user identify whom block */
  actorId?: string;
  /** The user identify whom be blocked */
  targetUserId?: string;
}

export interface UserCreatedEventDataTParams {
  /** The user identify of user */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The country code */
  "geolocation.countryCode"?: string;
}

export interface UserCreationFailedDataTParams {
  /** The user identify of user */
  userId?: string;
  /** The username of user */
  username?: string;
  /** The country code */
  "geolocation.countryCode"?: string;
}

export interface UserDeletedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** The user name */
  username?: string;
}

export interface UserDisplayNameUpdatedEventDataTParams {
  /** The user identify whom delete message */
  actorId?: string;
  /** The new display name of user */
  displayName?: string;
}

export interface UserEmailUpdatedEventDataTParams {
  /** The user identify whom update email */
  actorId?: string;
  /** The email of user */
  email?: string;
  /** The email hashed */
  emailHash?: string;
}

export interface UserGlobalMediaPermissionSettingUpdatedEventDataTParams {
  /** The user identify whom update */
  actorId?: string;
  /**
   * The media permission setting
   *
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
   *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
   * @default "MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK"
   */
  globalMediaPermissionSetting?:
    | "MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK"
    | "MEDIA_PERMISSION_SETTING_ENUM_ALLOW"
    | "MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW";
}

export interface UserGlobalNotificationStatusUpdatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** Is the global notification */
  globalNotificationStatus?: boolean;
}

export interface UserMessageReactionUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom react message */
  actorId?: string;
  /** The message identify */
  messageId?: string;
  /** The emoji data */
  emoji?: string;
  /** True if react, false if revoke */
  isReacted?: boolean;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
  /**
   * Statistical react of message
   *
   * This is a request variable of the map type. The query format is "map_name[key]=value", e.g. If the map name is Age, the key type is string, and the value type is integer, the query parameter is expressed as Age["bob"]=18
   */
  reactions?: any;
}

export interface UserMessagesDeletedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify whom delete message */
  actorId?: string;
  /** The list message identify deleted */
  messageIds?: string[];
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface UserPhoneUpdatedEventDataTParams {
  /** The user identify whom update phone number */
  actorId?: string;
  /** The phone number of user */
  phone?: string;
  /** The phone number hashed */
  phoneHash?: string;
}

export interface UserScopeForCallUpdatedEventDataTParams {
  actorId?: string;
  /** @default "UNSPECIFIED" */
  userScope?: "UNSPECIFIED" | "EVERYBODY" | "ONLY_FRIENDS" | "NO_BODY";
}

export interface UserScopeForMessageUpdatedEventDataTParams {
  actorId?: string;
  /** @default "UNSPECIFIED" */
  userScope?: "UNSPECIFIED" | "EVERYBODY" | "ONLY_FRIENDS" | "NO_BODY";
}

export interface UserStatusCreatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** The content of user status */
  "statusData.content"?: string;
  /** The emoji status */
  "statusData.status"?: string;
  /**
   * The expires time after create
   *
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED: The user status expires time after unspecified
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR: The user status expires time after 1 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR: The user status expires time after 4 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR: The user status expires time after 8 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR: The user status expires time after 24 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER: The user status never expires
   * @default "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
   */
  "statusData.expireAfterTime"?:
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER";
  /** The create time */
  "statusData.createTime"?: string;
  /** The update time */
  "statusData.updateTime"?: string;
  /** The end time (create time + expires time) */
  "statusData.endTime"?: string;
}

export interface UserStatusDeletedEventDataTParams {
  /** The user identify */
  userId?: string;
}

export interface UserStatusUpdatedEventDataTParams {
  /** The user identify */
  userId?: string;
  /** The content of user status */
  "statusData.content"?: string;
  /** The emoji status */
  "statusData.status"?: string;
  /**
   * The expires time after create
   *
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED: The user status expires time after unspecified
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR: The user status expires time after 1 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR: The user status expires time after 4 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR: The user status expires time after 8 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR: The user status expires time after 24 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER: The user status never expires
   * @default "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
   */
  "statusData.expireAfterTime"?:
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER";
  /** The create time */
  "statusData.createTime"?: string;
  /** The update time */
  "statusData.updateTime"?: string;
  /** The end time (create time + expires time) */
  "statusData.endTime"?: string;
}

export interface UserUnblockedEventDataTParams {
  /** The user identify whom unblock */
  actorId?: string;
  /** The user identify whom be unblocked */
  targetUserId?: string;
}

export interface UserUnreadMessagesUpdatedEventDataTParams {
  /** The workspace identify */
  workspaceId?: string;
  /** The channel identify */
  channelId?: string;
  /** The user identify */
  userId?: string;
  /**
   * The unread count
   * @format int64
   */
  unreadCount?: number;
  /** The last seen message identify */
  lastSeenMessageId?: string;
  /** The workspace identify */
  "destination.workspaceId"?: string;
  /** The channel identify */
  "destination.channelId"?: string;
  /**
   * The channel type
   *
   *  - CHANNEL_TYPE_ENUM_DM: DM: Direct message 1-1
   *  - CHANNEL_TYPE_ENUM_CHANNEL: CHANNEL: A group can send message to multiple user 1-n
   *  - CHANNEL_TYPE_ENUM_BROADCAST: BROADCAST: A broadcast channel consists of a single sender and multiple receivers
   * @default "CHANNEL_TYPE_ENUM_DM"
   */
  "destination.channelType"?:
    | "CHANNEL_TYPE_ENUM_DM"
    | "CHANNEL_TYPE_ENUM_CHANNEL"
    | "CHANNEL_TYPE_ENUM_BROADCAST";
  /** The user identify whom receive message */
  "destination.recipientId"?: string;
  /** The dm channel identify */
  "destination.dmId"?: string;
  /**
   * The dm message status
   *
   *  - DIRECT_MESSAGE_STATUS_ENUM_PENDING: PENDING: The recipient has not replied or accept the message request
   *  - DIRECT_MESSAGE_STATUS_ENUM_CONTACTED: CONTACTED: The recipient has accepted the message request or they were friends
   * @default "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
   */
  "destination.dmStatus"?:
    | "DIRECT_MESSAGE_STATUS_ENUM_PENDING"
    | "DIRECT_MESSAGE_STATUS_ENUM_CONTACTED";
}

export interface UserVideoAvatarDeletedEventDataTParams {
  /** The user identify whom delete video avatar */
  actorId?: string;
}

export interface UserVisitedProfileEventDataTParams {
  /** User identify */
  userId?: string;
  /** The user identify */
  "userData.userId"?: string;
  /** The username of user */
  "userData.username"?: string;
  /** The user identify whom send request */
  "userData.friendData.requestedFromUserId"?: string;
  /** The user identify whom receive request */
  "userData.friendData.requestedToUserId"?: string;
  /**
   * The status of friend
   *
   *  - FRIEND_STATUS_ENUM_UNSPECIFIED: UNSPECIFIED: default value
   *  - FRIEND_STATUS_ENUM_NOT_FRIEND: NOT_FRIEND: Two user are not friends.
   *  - FRIEND_STATUS_ENUM_REQUEST_SENT: SENT: At least one of two users has sent a friend request to the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_RECEIVED: RECEIVED: At least one of two users has received a friend request sent by the other user.
   *  - FRIEND_STATUS_ENUM_REQUEST_DELETED: DELETED: At user received delete a friend request
   *  - FRIEND_STATUS_ENUM_FRIEND: FRIEND: Two user are friends.
   * @default "FRIEND_STATUS_ENUM_UNSPECIFIED"
   */
  "userData.friendData.status"?:
    | "FRIEND_STATUS_ENUM_UNSPECIFIED"
    | "FRIEND_STATUS_ENUM_NOT_FRIEND"
    | "FRIEND_STATUS_ENUM_REQUEST_SENT"
    | "FRIEND_STATUS_ENUM_REQUEST_RECEIVED"
    | "FRIEND_STATUS_ENUM_REQUEST_DELETED"
    | "FRIEND_STATUS_ENUM_FRIEND";
  /** The friend identify */
  "userData.friendData.friendId"?: string;
  /** The list participant id */
  "userData.friendData.participantIds"?: string[];
  /** The time has been read by the receiver. */
  "userData.friendData.readTime"?: string;
  /** The time to accept friend */
  "userData.friendData.acceptTime"?: string;
  /** The first time friend created */
  "userData.friendData.createTime"?: string;
  /** The time of friend updated */
  "userData.friendData.updateTime"?: string;
  /** The timestamp when the friend request was deleted */
  "userData.friendData.deleteTime"?: string;
  /**
   * The media sharing permission setting of user
   *
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK: ALWAYS_ASK (DEFAULT): ask everytime user received new media message
   *  - MEDIA_PERMISSION_SETTING_ENUM_ALLOW: ALLOW: accept incoming media messages from every body
   *  - MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW: NOT_ALLOW: au-to denied incoming media messages
   * @default "MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK"
   */
  "userData.mediaPermissionSetting"?:
    | "MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK"
    | "MEDIA_PERMISSION_SETTING_ENUM_ALLOW"
    | "MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW";
  /** The create time of user */
  "userData.createTime"?: string;
  /** The update time of user */
  "userData.updateTime"?: string;
  /** The thumbnail avatar of user */
  "userData.profile.avatar"?: string;
  /** The user display name */
  "userData.profile.displayName"?: string;
  /** The cover page of user */
  "userData.profile.cover"?: string;
  /** The avatar of user */
  "userData.profile.originalAvatar"?: string;
  /**
   * The avatar type
   *
   *  - USER_AVATAR_TYPE_ENUM_UNSPECIFIED: User avatar type is unspecified
   *  - USER_AVATAR_TYPE_ENUM_PHOTO: User avatar type is photo
   *  - USER_AVATAR_TYPE_ENUM_VIDEO: User avatar type is video
   * @default "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
   */
  "userData.profile.avatarType"?:
    | "USER_AVATAR_TYPE_ENUM_UNSPECIFIED"
    | "USER_AVATAR_TYPE_ENUM_PHOTO"
    | "USER_AVATAR_TYPE_ENUM_VIDEO";
  /** The video avatar URL */
  "userData.profile.videoAvatar"?: string;
  /**
   * The user badge type
   * @default "USER_BADGE_TYPE_DEFAULT"
   */
  "userData.profile.userBadgeType"?:
    | "USER_BADGE_TYPE_DEFAULT"
    | "USER_BADGE_TYPE_BLUE"
    | "USER_BADGE_TYPE_GRAY"
    | "USER_BADGE_TYPE_YELLOW";
  /** The decorated avatar */
  "userData.profile.decoratedAvatar"?: string;
  /** The original decorated avatar */
  "userData.profile.originalDecoratedAvatar"?: string;
  /**
   * The type of user
   *
   *  - USER_TYPE_ENUM_DEFAULT: Default user
   *  - USER_TYPE_ENUM_BOT: User is bot
   *  - USER_TYPE_ENUM_GHOST: User deleted
   * @default "USER_TYPE_ENUM_DEFAULT"
   */
  "userData.userType"?:
    | "USER_TYPE_ENUM_DEFAULT"
    | "USER_TYPE_ENUM_BOT"
    | "USER_TYPE_ENUM_GHOST";
  /** The last time updated */
  "userData.presenceData.lastUpdateTime"?: string;
  /**
   * now - last_update_time, always greater than or equal zero, unit: seconds
   * @format int64
   */
  "userData.presenceData.lastUpdateInSeconds"?: number;
  /**
   * The presence state's data
   *
   *  - PRESENCE_STATUS_UNSPECIFIED: The presence is unspecified
   *  - PRESENCE_STATUS_ONLINE: The presence is online
   *  - PRESENCE_STATUS_IDLE: The presence is  idle
   *  - PRESENCE_STATUS_DO_NOT_DISTURB: The presence is not disturb
   *  - PRESENCE_STATUS_OFFLINE: The presence is offline
   *  - PRESENCE_STATUS_OTHER: The presence is other
   * @default "PRESENCE_STATUS_UNSPECIFIED"
   */
  "userData.presenceData.presenceState"?:
    | "PRESENCE_STATUS_UNSPECIFIED"
    | "PRESENCE_STATUS_ONLINE"
    | "PRESENCE_STATUS_IDLE"
    | "PRESENCE_STATUS_DO_NOT_DISTURB"
    | "PRESENCE_STATUS_OFFLINE"
    | "PRESENCE_STATUS_OTHER";
  /** The custom status */
  "userData.presenceData.customStatus"?: string;
  /** The content of user status */
  "userData.statusData.content"?: string;
  /** The emoji status */
  "userData.statusData.status"?: string;
  /**
   * The expires time after create
   *
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED: The user status expires time after unspecified
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR: The user status expires time after 1 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR: The user status expires time after 4 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR: The user status expires time after 8 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR: The user status expires time after 24 hour
   *  - USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER: The user status never expires
   * @default "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
   */
  "userData.statusData.expireAfterTime"?:
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR"
    | "USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER";
  /** The create time */
  "userData.statusData.createTime"?: string;
  /** The update time */
  "userData.statusData.updateTime"?: string;
  /** The end time (create time + expires time) */
  "userData.statusData.endTime"?: string;
  /** Is blocked */
  "userData.blocked"?: boolean;
  /** The created visited profile time */
  createTime?: string;
  /** The update visited profile time */
  updateTime?: string;
}

export interface WebsocketResumeEventDataTParams {
  /** The token's data */
  token?: string;
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
 * @title halome/cloudevents/v3/services/cloudevent.proto
 * @version version not set
 */
export class cloudeventHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cloudEventServiceTemp = {
    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name AllMessagesDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/AllMessagesDeletedEventData
     */
    allMessagesDeletedEventDataT: (
      query: AllMessagesDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AllMessagesDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/AllMessagesDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name AllUserMessagesDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/AllUserMessagesDeletedEventData
     */
    allUserMessagesDeletedEventDataT: (
      query: AllUserMessagesDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AllUserMessagesDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/AllUserMessagesDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name AvatarFrameCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/AvatarFrameCreatedEventData
     */
    avatarFrameCreatedEventDataT: (
      query: AvatarFrameCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AvatarFrameCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/AvatarFrameCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name AvatarFrameDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/AvatarFrameDeletedEventData
     */
    avatarFrameDeletedEventDataT: (
      query: AvatarFrameDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3AvatarFrameDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/AvatarFrameDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CallCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/CallCreatedEventData
     */
    callCreatedEventDataT: (
      query: CallCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CallCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/CallCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CallSignalUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/CallSignalUpdatedEventData
     */
    callSignalUpdatedEventDataT: (
      query: CallSignalUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CallSignalUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/CallSignalUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CallUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/CallUpdatedEventData
     */
    callUpdatedEventDataT: (
      query: CallUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CallUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/CallUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelAvatarUploadFailedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelAvatarUploadFailedEventData
     */
    channelAvatarUploadFailedEventDataT: (
      query: ChannelAvatarUploadFailedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelAvatarUploadFailedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelAvatarUploadFailedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelCreatedEventData
     */
    channelCreatedEventDataT: (
      query: ChannelCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelCreationCompletedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelCreationCompletedEventData
     */
    channelCreationCompletedEventDataT: (
      query: ChannelCreationCompletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelCreationCompletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelCreationCompletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelCreationFailedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelCreationFailedEventData
     */
    channelCreationFailedEventDataT: (
      query: ChannelCreationFailedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelCreationFailedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelCreationFailedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelDeletedEventData
     */
    channelDeletedEventDataT: (
      query: ChannelDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelDestinationCloudEventT
     * @request POST:/CloudEventServiceTemp/ChannelDestinationCloudEventT
     */
    channelDestinationCloudEventT: (
      query: ChannelDestinationCloudEventTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelDestinationCloudEvent, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelDestinationCloudEventT`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelNotificationStatusUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelNotificationStatusUpdatedEventData
     */
    channelNotificationStatusUpdatedEventDataT: (
      query: ChannelNotificationStatusUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelNotificationStatusUpdatedEventData, RpcStatus>(
        {
          path: `/CloudEventServiceTemp/ChannelNotificationStatusUpdatedEventData`,
          method: "POST",
          query: query,
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelTypingEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelTypingEventDataT
     */
    channelTypingEventDataT: (
      query: ChannelTypingEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelTypingEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelTypingEventDataT`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ChannelUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/ChannelUpdatedEventData
     */
    channelUpdatedEventDataT: (
      query: ChannelUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ChannelUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/ChannelUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name ClearUserVisitedProfileNotificationsEventDataT
     * @request POST:/CloudEventServiceTemp/ClearUserVisitedProfileNotificationsEventData
     */
    clearUserVisitedProfileNotificationsEventDataT: (
      params: RequestParams = {},
    ) =>
      this.http.request<
        V3ClearUserVisitedProfileNotificationsEventData,
        RpcStatus
      >({
        path: `/CloudEventServiceTemp/ClearUserVisitedProfileNotificationsEventData`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CloudEventT
     * @request POST:/CloudEventServiceTemp/CloudEventT
     */
    cloudEventT: (query: CloudEventTParams, params: RequestParams = {}) =>
      this.http.request<V3CloudEvent, RpcStatus>({
        path: `/CloudEventServiceTemp/CloudEventT`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CoverPhotoCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/CoverPhotoCreatedEventData
     */
    coverPhotoCreatedEventDataT: (
      query: CoverPhotoCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CoverPhotoCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/CoverPhotoCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CoverPhotoDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/CoverPhotoDeletedEventData
     */
    coverPhotoDeletedEventDataT: (
      query: CoverPhotoDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CoverPhotoDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/CoverPhotoDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name CoverPhotoUpdatedDataT
     * @request POST:/CloudEventServiceTemp/CoverPhotoUpdatedData
     */
    coverPhotoUpdatedDataT: (
      query: CoverPhotoUpdatedDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CoverPhotoUpdatedData, RpcStatus>({
        path: `/CloudEventServiceTemp/CoverPhotoUpdatedData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DmChannelCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/DMChannelCreatedEventData
     */
    dmChannelCreatedEventDataT: (
      query: DmChannelCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DMChannelCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DMChannelCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DmChannelUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/DMChannelUpdatedEventData
     */
    dmChannelUpdatedEventDataT: (
      query: DmChannelUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DMChannelUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DMChannelUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DecoratedAvatarRemovedEventDataT
     * @request POST:/CloudEventServiceTemp/DecoratedAvatarRemovedEventData
     */
    decoratedAvatarRemovedEventDataT: (
      query: DecoratedAvatarRemovedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DecoratedAvatarRemovedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DecoratedAvatarRemovedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DecoratedAvatarUploadedEventDataT
     * @request POST:/CloudEventServiceTemp/DecoratedAvatarUploadedEventData
     */
    decoratedAvatarUploadedEventDataT: (
      query: DecoratedAvatarUploadedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DecoratedAvatarUploadedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DecoratedAvatarUploadedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DeleteUserVisitedProfileEventDataT
     * @request POST:/CloudEventServiceTemp/DeleteUserVisitedProfileEventData
     */
    deleteUserVisitedProfileEventDataT: (
      query: DeleteUserVisitedProfileEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteUserVisitedProfileEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DeleteUserVisitedProfileEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DeviceLinkedEventDataT
     * @request POST:/CloudEventServiceTemp/DeviceLinkedEventData
     */
    deviceLinkedEventDataT: (
      query: DeviceLinkedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeviceLinkedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DeviceLinkedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name DeviceUnlinkedEventDataT
     * @request POST:/CloudEventServiceTemp/DeviceUnlinkedEventData
     */
    deviceUnlinkedEventDataT: (
      query: DeviceUnlinkedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeviceUnlinkedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/DeviceUnlinkedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name FileUploadedEventDataT
     * @request POST:/CloudEventServiceTemp/FileUploadedEventData
     */
    fileUploadedEventDataT: (
      query: FileUploadedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3FileUploadedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/FileUploadedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name FriendRemovedEventDataT
     * @request POST:/CloudEventServiceTemp/FriendRemovedEventData
     */
    friendRemovedEventDataT: (
      query: FriendRemovedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3FriendRemovedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/FriendRemovedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name GatewayConnectedEventDataT
     * @request POST:/CloudEventServiceTemp/GatewayConnectedEventData
     */
    gatewayConnectedEventDataT: (
      query: GatewayConnectedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GatewayConnectedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/GatewayConnectedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingFriendRequestAcceptedEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingFriendRequestAcceptedEventData
     */
    incomingFriendRequestAcceptedEventDataT: (
      query: IncomingFriendRequestAcceptedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingFriendRequestAcceptedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingFriendRequestAcceptedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingFriendRequestCanceledEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingFriendRequestCanceledEventData
     */
    incomingFriendRequestCanceledEventDataT: (
      query: IncomingFriendRequestCanceledEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingFriendRequestCanceledEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingFriendRequestCanceledEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingFriendRequestCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingFriendRequestCreatedEventData
     */
    incomingFriendRequestCreatedEventDataT: (
      query: IncomingFriendRequestCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingFriendRequestCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingFriendRequestCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingFriendRequestDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingFriendRequestDeletedEventData
     */
    incomingFriendRequestDeletedEventDataT: (
      query: IncomingFriendRequestDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingFriendRequestDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingFriendRequestDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingMessageRequestAcceptedEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingMessageRequestAcceptedEventData
     */
    incomingMessageRequestAcceptedEventDataT: (
      query: IncomingMessageRequestAcceptedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingMessageRequestAcceptedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingMessageRequestAcceptedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name IncomingMessageRequestCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/IncomingMessageRequestCreatedEventData
     */
    incomingMessageRequestCreatedEventDataT: (
      query: IncomingMessageRequestCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3IncomingMessageRequestCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/IncomingMessageRequestCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MarkAllChannelsAsReadEventDataT
     * @request POST:/CloudEventServiceTemp/MarkAllChannelsAsReadEventData
     */
    markAllChannelsAsReadEventDataT: (
      query: MarkAllChannelsAsReadEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MarkAllChannelsAsReadEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MarkAllChannelsAsReadEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberBannedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberBannedEventData
     */
    memberBannedEventDataT: (
      query: MemberBannedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberBannedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberBannedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberJoinedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberJoinedEventData
     */
    memberJoinedEventDataT: (
      query: MemberJoinedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberJoinedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberJoinedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberLeftEventDataT
     * @request POST:/CloudEventServiceTemp/MemberLeftEventData
     */
    memberLeftEventDataT: (
      query: MemberLeftEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberLeftEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberLeftEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberNicknameUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberNicknameUpdatedEventData
     */
    memberNicknameUpdatedEventDataT: (
      query: MemberNicknameUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberNicknameUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberNicknameUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberRemovedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberRemovedEventData
     */
    memberRemovedEventDataT: (
      query: MemberRemovedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberRemovedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberRemovedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberRoleRevokedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberRoleRevokedEventData
     */
    memberRoleRevokedEventDataT: (
      query: MemberRoleRevokedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberRoleRevokedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberRoleRevokedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberRoleUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberRoleUpdatedEventData
     */
    memberRoleUpdatedEventDataT: (
      query: MemberRoleUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberRoleUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberRoleUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MemberUnbannedEventDataT
     * @request POST:/CloudEventServiceTemp/MemberUnbannedEventData
     */
    memberUnbannedEventDataT: (
      query: MemberUnbannedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MemberUnbannedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MemberUnbannedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessageCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/MessageCreatedEventData
     */
    messageCreatedEventDataT: (
      query: MessageCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessageCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessageCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessagePinnedEventDataT
     * @request POST:/CloudEventServiceTemp/MessagePinnedEventData
     */
    messagePinnedEventDataT: (
      query: MessagePinnedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessagePinnedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessagePinnedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessageReactionUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/MessageReactionUpdatedEventData
     */
    messageReactionUpdatedEventDataT: (
      query: MessageReactionUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessageReactionUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessageReactionUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessageRequestRejectedEventDataT
     * @request POST:/CloudEventServiceTemp/MessageRequestRejectedEventData
     */
    messageRequestRejectedEventDataT: (
      query: MessageRequestRejectedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessageRequestRejectedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessageRequestRejectedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessageUnpinnedEventDataT
     * @request POST:/CloudEventServiceTemp/MessageUnpinnedEventData
     */
    messageUnpinnedEventDataT: (
      query: MessageUnpinnedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessageUnpinnedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessageUnpinnedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessageUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/MessageUpdatedEventData
     */
    messageUpdatedEventDataT: (
      query: MessageUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessageUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessageUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name MessagesDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/MessagesDeletedEventData
     */
    messagesDeletedEventDataT: (
      query: MessagesDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3MessagesDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/MessagesDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingFriendRequestAcceptedEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingFriendRequestAcceptedEventData
     */
    outgoingFriendRequestAcceptedEventDataT: (
      query: OutgoingFriendRequestAcceptedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingFriendRequestAcceptedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingFriendRequestAcceptedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingFriendRequestCanceledEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingFriendRequestCanceledEventData
     */
    outgoingFriendRequestCanceledEventDataT: (
      query: OutgoingFriendRequestCanceledEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingFriendRequestCanceledEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingFriendRequestCanceledEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingFriendRequestCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingFriendRequestCreatedEventData
     */
    outgoingFriendRequestCreatedEventDataT: (
      query: OutgoingFriendRequestCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingFriendRequestCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingFriendRequestCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingFriendRequestDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingFriendRequestDeletedEventData
     */
    outgoingFriendRequestDeletedEventDataT: (
      query: OutgoingFriendRequestDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingFriendRequestDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingFriendRequestDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingMessageRequestAcceptedEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingMessageRequestAcceptedEventData
     */
    outgoingMessageRequestAcceptedEventDataT: (
      query: OutgoingMessageRequestAcceptedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingMessageRequestAcceptedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingMessageRequestAcceptedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name OutgoingMessageRequestCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/OutgoingMessageRequestCreatedEventData
     */
    outgoingMessageRequestCreatedEventDataT: (
      query: OutgoingMessageRequestCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3OutgoingMessageRequestCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/OutgoingMessageRequestCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name PresenceUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/PresenceUpdatedEventData
     */
    presenceUpdatedEventDataT: (
      query: PresenceUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3PresenceUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/PresenceUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RevokeChannelsNotificationPushedEventDataT
     * @request POST:/CloudEventServiceTemp/RevokeChannelsNotificationPushedEventData
     */
    revokeChannelsNotificationPushedEventDataT: (
      query: RevokeChannelsNotificationPushedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RevokeChannelsNotificationPushedEventData, RpcStatus>(
        {
          path: `/CloudEventServiceTemp/RevokeChannelsNotificationPushedEventData`,
          method: "POST",
          query: query,
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RevokeMessagesNotificationPushedEventDataT
     * @request POST:/CloudEventServiceTemp/RevokeMessagesNotificationPushedEventData
     */
    revokeMessagesNotificationPushedEventDataT: (
      query: RevokeMessagesNotificationPushedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RevokeMessagesNotificationPushedEventData, RpcStatus>(
        {
          path: `/CloudEventServiceTemp/RevokeMessagesNotificationPushedEventData`,
          method: "POST",
          query: query,
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RingbackToneCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/RingbackToneCreatedEventData
     */
    ringbackToneCreatedEventDataT: (
      query: RingbackToneCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/RingbackToneCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RingbackToneDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/RingbackToneDeletedEventData
     */
    ringbackToneDeletedEventDataT: (
      query: RingbackToneDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/RingbackToneDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RingbackToneRenamedEventDataT
     * @request POST:/CloudEventServiceTemp/RingbackToneRenamedEventData
     */
    ringbackToneRenamedEventDataT: (
      query: RingbackToneRenamedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneRenamedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/RingbackToneRenamedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name RingbackToneSelectedEventDataT
     * @request POST:/CloudEventServiceTemp/RingbackToneSelectedEventData
     */
    ringbackToneSelectedEventDataT: (
      query: RingbackToneSelectedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneSelectedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/RingbackToneSelectedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserAvatarDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/UserAvatarDeletedEventData
     */
    userAvatarDeletedEventDataT: (
      query: UserAvatarDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserAvatarDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserAvatarDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserAvatarUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserAvatarUpdatedEventData
     */
    userAvatarUpdatedEventDataT: (
      query: UserAvatarUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserAvatarUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserAvatarUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserBadgeCountUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserBadgeCountUpdatedEventData
     */
    userBadgeCountUpdatedEventDataT: (
      query: UserBadgeCountUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserBadgeCountUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserBadgeCountUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserBlockedEventDataT
     * @request POST:/CloudEventServiceTemp/UserBlockedEventData
     */
    userBlockedEventDataT: (
      query: UserBlockedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserBlockedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserBlockedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserCreatedEventData
     */
    userCreatedEventDataT: (
      query: UserCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserCreationFailedDataT
     * @request POST:/CloudEventServiceTemp/UserCreationFailedData
     */
    userCreationFailedDataT: (
      query: UserCreationFailedDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserCreationFailedData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserCreationFailedData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/UserDeletedEventData
     */
    userDeletedEventDataT: (
      query: UserDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserDisplayNameUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserDisplayNameUpdatedEventData
     */
    userDisplayNameUpdatedEventDataT: (
      query: UserDisplayNameUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserDisplayNameUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserDisplayNameUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserEmailUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserEmailUpdatedEventData
     */
    userEmailUpdatedEventDataT: (
      query: UserEmailUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserEmailUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserEmailUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserGlobalMediaPermissionSettingUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserGlobalMediaPermissionSettingUpdatedEventData
     */
    userGlobalMediaPermissionSettingUpdatedEventDataT: (
      query: UserGlobalMediaPermissionSettingUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        V3UserGlobalMediaPermissionSettingUpdatedEventData,
        RpcStatus
      >({
        path: `/CloudEventServiceTemp/UserGlobalMediaPermissionSettingUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserGlobalNotificationStatusUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserGlobalNotificationStatusUpdatedEventData
     */
    userGlobalNotificationStatusUpdatedEventDataT: (
      query: UserGlobalNotificationStatusUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        V3UserGlobalNotificationStatusUpdatedEventData,
        RpcStatus
      >({
        path: `/CloudEventServiceTemp/UserGlobalNotificationStatusUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserMessageReactionUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserMessageReactionUpdatedEventData
     */
    userMessageReactionUpdatedEventDataT: (
      query: UserMessageReactionUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserMessageReactionUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserMessageReactionUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserMessagesDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/UserMessagesDeletedEventData
     */
    userMessagesDeletedEventDataT: (
      query: UserMessagesDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserMessagesDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserMessagesDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserPhoneUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserPhoneUpdatedEventData
     */
    userPhoneUpdatedEventDataT: (
      query: UserPhoneUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserPhoneUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserPhoneUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserScopeForCallUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserScopeForCallUpdatedEventData
     */
    userScopeForCallUpdatedEventDataT: (
      query: UserScopeForCallUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserScopeForCallUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserScopeForCallUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserScopeForMessageUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserScopeForMessageUpdatedEventData
     */
    userScopeForMessageUpdatedEventDataT: (
      query: UserScopeForMessageUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserScopeForMessageUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserScopeForMessageUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserStatusCreatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserStatusCreatedEventData
     */
    userStatusCreatedEventDataT: (
      query: UserStatusCreatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserStatusCreatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserStatusCreatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserStatusDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/UserStatusDeletedEventData
     */
    userStatusDeletedEventDataT: (
      query: UserStatusDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserStatusDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserStatusDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserStatusUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserStatusUpdatedEventData
     */
    userStatusUpdatedEventDataT: (
      query: UserStatusUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserStatusUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserStatusUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserUnblockedEventDataT
     * @request POST:/CloudEventServiceTemp/UserUnblockedEventData
     */
    userUnblockedEventDataT: (
      query: UserUnblockedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserUnblockedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserUnblockedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserUnreadMessagesUpdatedEventDataT
     * @request POST:/CloudEventServiceTemp/UserUnreadMessagesUpdatedEventData
     */
    userUnreadMessagesUpdatedEventDataT: (
      query: UserUnreadMessagesUpdatedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserUnreadMessagesUpdatedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserUnreadMessagesUpdatedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserVideoAvatarDeletedEventDataT
     * @request POST:/CloudEventServiceTemp/UserVideoAvatarDeletedEventData
     */
    userVideoAvatarDeletedEventDataT: (
      query: UserVideoAvatarDeletedEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserVideoAvatarDeletedEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserVideoAvatarDeletedEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name UserVisitedProfileEventDataT
     * @request POST:/CloudEventServiceTemp/UserVisitedProfileEventData
     */
    userVisitedProfileEventDataT: (
      query: UserVisitedProfileEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UserVisitedProfileEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/UserVisitedProfileEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CloudEventServiceTemp
     * @name WebsocketResumeEventDataT
     * @request POST:/CloudEventServiceTemp/WebsocketResumeEventData
     */
    websocketResumeEventDataT: (
      query: WebsocketResumeEventDataTParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3WebsocketResumeEventData, RpcStatus>({
        path: `/CloudEventServiceTemp/WebsocketResumeEventData`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
