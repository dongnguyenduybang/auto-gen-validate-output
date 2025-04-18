import { ApiEvent } from "../functions/types";

type APIEvent = Record<string, ApiEvent>;

export const API_EVENT: APIEvent = {
    halome: {
        v3: {
            webSocket: {

            },
            user: {
                AVATAR_FRAME_CREATED: 'com.halome.user.v3.profile.avatar_frame_created',
                AVATAR_FRAME_DELETED: 'com.halome.user.v3.profile.avatar_frame_deleted',
                CLEAR_USER_VISITED_PROFILE_NOTIFICATION: 'com.halome.user.v3.profile.clear_user_visited_profile_notifications',
                DECORATOR_AVATAR_REMOVED: 'com.halome.user.v3.profile.decorated_avatar_removed',
                DECORATOR_AVATAR_UPLOADED: 'com.halome.user.v3.profile.decorated_avatar_uploaded',
                RINGBACK_TONE_CREATED: 'com.halome.user.v3.profile.ringback_tone_created',
                RINGBACK_TONE_DELETED: 'com.halome.user.v3.profile.ringback_tone_deleted',
                RINGBACK_TONE_RENAMED: 'com.halome.user.v3.profile.ringback_tone_renamed',
                RINGBACK_TONE_SELECTED: 'com.halome.user.v3.profile.ringback_tone_selected',
                USER_AVATAR_DELETED: 'com.halome.user.v3.profile.avatar_deleted',
                USER_AVATAR_UPDATED: 'com.halome.user.v3.profile.avatar_updated',
                USER_COVER_CREATED: 'com.halome.user.v3.profile.cover_created',
                USER_COVER_DELETED: 'com.halome.user.v3.profile.cover_deleted',
                USER_COVER_UPDATED: 'com.halome.user.v3.profile.cover_updated',
                USER_DISPLAY_NAME_UPDATED: 'com.halome.user.v3.profile.display_name_updated',
                USER_EMAIL_UPDATED: 'com.halome.user.v3.profile.email_updated',
                USER_GLOBAL_MEDIA_PERMISSION_SETTING_UPDATED: 'com.halome.user.v3.setting.global_media_permission_setting_updated',
                USER_PHONE_UPDATED: 'com.halome.user.v3.profile.phone_updated',
                USER_PRIVACY_DATA_SYNC: 'com.halome.user.v3.private_data_sync',
                USER_SCOPE_FOR_CALL_UPDATED: 'com.halome.user.v3.setting.user_scope_for_call_updated',
                USER_SCOPE_FOR_MESSAGE_UPDATED: 'com.halome.user.v3.setting.user_scope_for_message_updated',
                USER_STATUS_CREATED: 'com.halome.user.v3.profile.user_status_created',
                USER_STATUS_DELETED: 'com.halome.user.v3.profile.user_status_deleted',
                USER_STATUS_UPDATED: 'com.halome.user.v3.profile.user_status_updated',
                USER_VISITED_PROFILE_DELETED: 'com.halome.user.v3.profile.visited_profile_deleted',
                USER_VISITED_PROFILE: 'com.halome.user.v3.profile.visited_profile'
            },
            uploader: {

            },
            realTime: {
                GATEWAY_CONNECTED: 'com.halome.realtime.v3.gateway.connected',
                PRESENCE_UPDATED: 'com.halome.realtime.v3.presence.updated'
            },
            notification: {

            },
            iam: {

            },
            fs: {
                FILE_UPLOADED: 'com.halome.fs.v3.file.uploaded'
            },
            chat: {
                ALL_MESSAGE_DELETED: 'com.halome.chat.v3.all_messages.deleted',
                ALL_USER_MESSAGE_DELETED: 'com.halome.chat.v3.all_user_messages.deleted',
                CHANNEL_AVATAR_UPDATED: 'com.halome.chat.v3.channel.avatar_updated',
                CHANNEL_AVATAR_UPLOAD_FAILED: 'com.halome.chat.v3.channel.avatar_upload_failed',
                CHANNEL_CREATED: 'com.halome.chat.v3.channel.created',
                CHANNEL_CREATION_COMPLETED: 'com.halome.chat.v3.channel.creation_completed',
                CHANNEL_CREATION_FAILED: 'com.halome.chat.v3.channel.creation_failed',
                CHANNEL_DELETED: 'com.halome.chat.v3.channel.deleted',
                CHANNEL_NAME_UPDATED: 'com.halome.chat.v3.channel.name_updated',
                CHANNEL_NOTIFICATION_STATUS_UPDATED: 'com.halome.chat.v3.channel.notification_status_updated',
                CHANNEL_TYPING_SIGNAL: 'com.halome.chat.v3.channel.typing_signal',
                DM_CHANNEL_CREATED: 'com.halome.chat.v3.dm_channel.created',
                DM_CHANNEL_CREATION_COMPLETED: 'com.halome.chat.v3.dm_channel.creation_completed',
                DM_CHANNEL_MEDIA_PERMISSION_SETTING_UPDATED: 'com.halome.chat.v3.dm_channel.media_permission_setting_updated',
                FRIEND_REMOVED: 'com.halome.chat.v3.friend.unfriended',
                INCOMING_FRIEND_REQUEST_ACCEPTD: 'com.halome.chat.v3.incoming_friend_request.accepted',
                INCOMING_FRIEND_REQUEST_CANCELED: 'com.halome.chat.v3.incoming_friend_request.canceled',
                INCOMING_FRIEND_REQUEST_CREATED: 'com.halome.chat.v3.incoming_friend_request.created',
                INCOMING_FRIEND_REQUEST_DELETED: 'com.halome.chat.v3.incoming_friend_request.deleted',
                INCOMING_MESSAGE_REQUEST_ACCEPTED: 'com.halome.chat.v3.incoming_message_request.accepted',
                INCOMING_MESSAGE_REQUEST_CREATED: 'com.halome.chat.v3.incoming_message_request.created',
                MARK_ALL_CHANNELS_AS_READ: 'com.halome.chat.v3.channel.mark-all-as-read',
                MEMBER_BANNED: 'com.halome.chat.v3.member.banned',
                MEMBER_JOINED: 'com.halome.chat.v3.member.join',
                MEMBER_LEFT: 'com.halome.chat.v3.member.left',
                MEMBER_NICKNAME_UPDATED: 'com.halome.chat.v3.member.nickname_updated',
                MEMVER_REMOVED: 'com.halome.chat.v3.member.removed',
                MEMBER_ROLE_REVOKED: 'com.halome.chat.v3.member.role_revoked',
                MEMBER_ROLE_UPDATED: 'com.halome.chat.v3.member.role_updated',
                MEMBER_UNBANNED: 'com.halome.chat.v3.member.unbanned',
                MESSAGE_CREATED: 'com.halome.chat.v3.message.created',
                MESSAGE_PINNED: 'com.halome.chat.v3.message.pinned',
                MESSAGE_REACTION_UPDATED: 'com.halome.chat.v3.message.reaction_updated',
                MESSAGE_REQUEST_ACCEPTED: 'com.halome.chat.v3.message_request.accepted',
                MESSAGE_REQUEST_REJECTED: 'com.halome.chat.v3.message_request.rejected',
                MESSAGE_UNPINNED: 'com.halome.chat.v3.message.unpinned',
                MESSAGE_UPDATED: 'com.halome.chat.v3.message.updated',
                MESSAGE_DELETED: 'com.halome.chat.v3.message.deleted',
                OUTGOING_FRIEND_REQUEST_ACCEPTED: 'com.halome.chat.v3.outgoing_friend_request.accepted',
                OUTGOING_FRIEND_REQUEST_CANCELED: 'com.halome.chat.v3.outgoing_friend_request.canceled',
                OUTGOING_FRIEND_REQUEST_CREATED: 'com.halome.chat.v3.outgoing_friend_request.created',
                OUTGOING_FRIEND_REQUEST_DELETED: 'com.halome.chat.v3.outgoing_friend_request.deleted',
                OUTGOING_MESSAGE_REQUEST_ACCEPTED: 'com.halome.chat.v3.outgoing_message_request.accepted',
                OUTGOING_MESSAGE_REQUEST_CREATED: 'com.halome.chat.v3.outgoing_message_request.updated',
                USER_MESSAGE_REACTION_UPDATED: 'com.halome.chat.v3.message.user_reaction_updated',
                USER_MESSAGE_DELETED: 'com.halome.chat.v3.user_message.deleted',
                USER_UNREAD_MESSAGE_UPDATED: 'com.halome.chat.v3.friend.unfriended',
                WORKSPACE_CREATED: 'com.halome.chat.v3.workspace.created',
                WORKSPACE_CREATION_COMPLETED: 'com.halome.chat.v3.workspace.creation_completed',
                WORKSPACE_CREATION_FAILED: 'com.halome.chat.v3.workspace.creation_failed',

            },
            call: {
                CALL_CREATE: 'com.halome.call.v3.created',
                CALL_UPDATE: 'com.halome.call.v3.updated',
                CALL_SIGNAL_UPDATE: 'com.halome.call.v3.signal_updated',
            }
        }
    }
}