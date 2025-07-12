import { METHOD } from './method.enum';
import { APIPath } from './path.enum';

export enum ACTION {
  LIST_DM_MEDIA = 'listDmMedia',
  LIST_MEDIA = 'listMedia',
  SUBSCRIBE_ALL = 'subscribeAll',
  TURNON_GLOBAL_NOTIFICATION = 'turnonGlobalNotification',
  TURNOFF_GLOBAL_NOTIFICATION = 'turnoffGlobalNotification',
  UNSUBSCRIBE_ALL = 'unsubscribeAll',
  SUBSCRIBE_CHANNEL = 'subscribeChannel',
  UNSUBSCRIBE_CHANNEL = 'unsubscribeChannel',

  SEARCH_CHANNEL = 'searchChannel',
  SEARCH_USER = 'searchUser',
  SEARCH_FRIEND = 'searchFriend',
  SEARCH_MEMBER = 'searchMember',
  LIST_SUGGEST_FRIEND_BY_TYPE = 'listSuggestFriendByType',
  GET_STICKER_COLLECTION = 'getStickerCollection',
  GET_STICKER = 'getSticker',
  LIST_STICKER = 'listSticker',
  LIST_MESSAGE_FRAGMENT = 'listMessageFragment',
  GET_PINNED_MESSAGE = 'getPinnedMessage',
  GET_PINNED_DM_MESSAGE = 'getPinnedDmMessage',
  JUMP_TO_DM_MESSAGE = 'jumpToDmMessage',
  JUMP_TO_MESSAGE = 'jumpToMessage',
  LIST_DM_MESSAGE = 'listDmMessages',
  LIST_DM_MESSAGE_REACTION = 'listDmMessageReactions',
  LIST_MESSAGE_REACTION = 'listMessageReaction',
  LIST_DM_MESSAGE_FRAGMENT = 'listDmMessageFragments',
  GET_DM_MESSAGE = 'getDmMessage',
  LIST_BLOCK_USER = 'listBlockUser',
  GET_USER_BY_USERNAME = 'getUserByUsername',
  GET_INVITATION = 'getInvitation',
  LIST_INVITATION = 'listInvitation',
  LIST_INCOMING_FRIEND_REQUEST = 'listIncomingFriendRequest',
  LIST_OUTGOING_FRIEND_REQUEST = 'listOutgoingFriendRequest',
  GET_FRIEND = 'getFriend',
  LIST_FRIEND = 'listFriend',
  LIST_INCOMING_MESSAGE_REQUEST = 'listIncomingMessageRequest',
  LIST_OUTGOING_MESSAGE_REQUEST = 'listOutgoingMessageRequest',
  LIST_CHANNEL = 'listChannel',
  LIST_DM_CHANNEL = 'listDmChannel',
  GET_DM_CHANNEL = 'getDmChannel',
  LIST_BANNED_USER = 'listBannedUser',
  GET_MEMBER = 'getMember',
  UNFRIEND = 'unfriend',
  DELETE_DM_MESSAGES_ONLY_ME = 'deleteDmMessagesOnlyMe',
  DELETE_DM_MESSAGES_FOR_EVERYONE = 'deleteDmMessagesForEveryone',
  DELETE_MESSAGES_ONLY_ME = 'deleteMessagesOnlyMe',
  DELETE_MESSAGES_FOR_EVERYONE = 'deleteMessagesForEveryone',
  CANCEL_FRIEND_REQUEST = 'cancelFriendRequest',
  DELETE_FRIEND_REQUEST = 'deleteFriendRequest',
  ACCEPT_MESSAGE_REQUEST = 'acceptMessageRequest',
  REJECT_MESSAGE_REQUEST = 'rejectMessageRequest',
  SET_RING_BACK_TONE = 'setRingBackTone',
  RING_BACK_TONE_CREATE = 'ringBackToneCreate',
  RING_BACK_TONE_RENAME = 'ringBackToneRename',
  BLOCK_USER = 'blockUser',
  UNBLOCK_USER = 'unBlockUser',
  UPDATE_USER_EMAIL = 'updateUserEmail',
  DELETE_USER_AVATAR = 'deleteUserAvatar',
  MOCK_USER = 'mockUsers',
  CREATE_CHANNEL = 'createChannel',
  DELETE_CHANNEL_AVATAR = 'deleteChannelAvatar',
  SEND_MESSAGE = 'sendMessage',
  SEND_DM_MESSAGE = 'sendDmMessage',
  REPORT_DM_MESSAGE = 'reportDmMessage',
  REPORT_MESSAGE = 'reportMessage',
  UPDATE_MESSAGE = 'updateMessage',
  UPDATE_DM_MESSAGE = 'updateDmMessage',
  GET_CHANNEL = 'getChannel',
  GET_MESSAGE = 'getMessage',
  ACCEPT_INVITATION = 'acceptInvitation',
  CREATE_INVITATION = 'createInvitation',
  ADD_MESSAGE_REACTION = 'addMessageReaction',
  DELETE_MOCKED_USER = 'deleteMockedUsers',
  ADD_FRIEND = 'addFriend',
  ACCEPT_FRIEND_REQUEST = 'acceptFriendRequest',
  UPDATE_CHANNEL_NAME = 'updateChannelName',
  UPDATE_USER_DISPLAY_NAME = 'updateUserDisplayName',
  LIST_MEMBERS = 'listMembers',
  GET_USER = 'getUser',
  LIST_MESSAGE = 'listMessage',
  LIST_ALL_CHANNEL = 'listAllChannel',
  REPORT_USER = 'reportUserRequest',
  ADD_USER_STATUS = 'addUserStatus',
  UPDATE_USER_STATUS = 'updateUserStatus',
  SEND_INVITATION = 'sendInvitation',
  UPDATE_NICKNAME = 'updateNickname',
  ASSIGN_AS_ADMIN = 'assignAsAdmin',
  DISMISS_AS_ADMIN = 'dismissAsAdmin',
  BAN_FROM_CHANNEL = 'banFromChannel',
  UNBAN_FROM_CHANNEL = 'unbanFromChannel',
  TRANSFER_OWNERSHIP = 'transferOwnership',
  TRANSFER_OWNERSHIP_LEAVE_CHANNEL = 'transferOwnershipAndLeave',
  LEAVE_CHANNEL = 'leaveChannel',
  REMOVE_FROM_CHANNEL = 'removeFromChannel',
  REVOKE_INVITATION = 'revokeInvitation',
  UPDATE_CHANNEL_AVATAR = 'updateChannelAvatar',
  DELETE_CHANNEL = 'deleteChannel',
  UPDATE_DM_MEDIA_PERMISSION_SETTING = 'updateDmMediaPermissionSetting',
  REVOKE_MESSAGE_REACTION = 'revokeMessageReaction',
  QUOTE_MESSAGE = 'quoteMessage',
  QUOTE_DM_MESSAGE = 'quoteDmMessage',
  FORWARD_MESSAGE_CHANNEL = 'forwardMessageChannel',
  MARK_AS_READ = 'markAsRead',
  MARK_DM_AS_READ = 'markDmAsRead',
  PIN_UNPIN_DM_MESSAGE = 'pinUnpinDmMessage',
  PIN_UNPIN_MESSAGE = 'pinUnpinMessage',
  SEND_LOCATION = 'sendLocation',
  SEND_DM_LOCATION = 'sendDmLocation',
  SEND_POKE_MESSAGE = 'sendPokeMessage',
  SEND_DM_MESSAGE_STICKER = 'sendDmMessageSticker',
  SEND_MESSAGE_STICKER = 'sendMessageSticker',
  ADD_DM_MESSAGE_REACTION = 'addDmMessageReaction',
  REVOKE_DM_MESSAGE_REACTION = 'revokeDmMessageReaction',
  FORWARD_DM_MESSAGE_CHANNEL = 'forwardMessagesToDmChannel',
  SEND_DM_MESSAGE_MEDIA = 'sendDmMessageMedia',
  UPDATE_DM_MEDIA_ATTACHMENT = 'updateDmMediaAttachments',
  SEND_MESSAGE_MEDIA = 'sendMessageMedia',
  UPDATE_MEDIA_ATTACHMENT = 'updateMediaAttachment',
  DELETE_USER_VISIT_PROFILE = 'deleteUserVisitedProfile',
  VISIT_PROFILE = 'visitedProfile',
  ADD_COVER_PHOTO = 'addCoverPhoto',
  UPDATE_COVER_PHOTO = 'updateCoverPhoto',
  AVATAR_FRAME_PATH = 'avatarFramePath',
  DELETE_AVATAR_FRAME = 'deleteAvatarFrame',
  UPDATE_USER_AVATAR = 'updateUserAvatar',
}

export const ACTION_CONFIG: Record<ACTION, { path: string; method: METHOD }> = {
  [ACTION.DELETE_USER_AVATAR]: {
    path: APIPath.UserProfile.DeleteUserAvatar,
    method: METHOD.DELETE,
  },
  [ACTION.LIST_DM_MESSAGE_FRAGMENT]: {
    path: APIPath.ViewMessage.ListMessagesFragment,
    method: METHOD.GET,
  },
  [ACTION.LIST_DM_MEDIA]: {
    path: APIPath.ViewMessage.ListDmMedia,
    method: METHOD.GET,
  },
  [ACTION.LIST_MEDIA]: {
    path: APIPath.ViewMessage.ListMedia,
    method: METHOD.GET,
  },
  [ACTION.UPDATE_USER_EMAIL]: {
    path: APIPath.UserProfile.UpdateUserEmail,
    method: METHOD.PUT,
  },
  [ACTION.BLOCK_USER]: {
    path: APIPath.UserSetting.BlockUser,
    method: METHOD.POST,
  },
  [ACTION.UNBLOCK_USER]: {
    path: APIPath.UserSetting.UnBlockUser,
    method: METHOD.POST,
  },
  [ACTION.RING_BACK_TONE_CREATE]: {
    path: APIPath.RingBackTone.RingBackToneCreate,
    method: METHOD.POST,
  },
  [ACTION.RING_BACK_TONE_RENAME]: {
    path: APIPath.RingBackTone.RingBackToneRename,
    method: METHOD.PUT,
  },
  [ACTION.SET_RING_BACK_TONE]: {
    path: APIPath.RingBackTone.SetRingBackTone,
    method: METHOD.POST,
  },
  [ACTION.DELETE_CHANNEL_AVATAR]: {
    path: APIPath.Channel.DeleteChannelAvatar,
    method: METHOD.DELETE,
  },
  [ACTION.ACCEPT_MESSAGE_REQUEST]: {
    path: APIPath.Channel.AcceptMessageRequest,
    method: METHOD.POST,
  },
  [ACTION.REJECT_MESSAGE_REQUEST]: {
    path: APIPath.Channel.RejectMessageRequest,
    method: METHOD.POST,
  },
  [ACTION.CANCEL_FRIEND_REQUEST]: {
    path: APIPath.Friend.CancelFriendRequest,
    method: METHOD.POST,
  },
  [ACTION.ACCEPT_FRIEND_REQUEST]: {
    path: APIPath.Friend.AcceptFriendRequest,
    method: METHOD.POST,
  },
  [ACTION.DELETE_FRIEND_REQUEST]: {
    path: APIPath.Friend.DeleteFriendRequest,
    method: METHOD.DELETE,
  },
  [ACTION.UNFRIEND]: {
    path: APIPath.Friend.Unfriend,
    method: METHOD.DELETE,
  },
  [ACTION.DELETE_DM_MESSAGES_ONLY_ME]: {
    path: APIPath.Message.DeleteDmMessagesOnlyMe,
    method: METHOD.DELETE,
  },
  [ACTION.DELETE_DM_MESSAGES_FOR_EVERYONE]: {
    path: APIPath.Message.DeleteDmMessagesForEveryone,
    method: METHOD.DELETE,
  },
  [ACTION.DELETE_MESSAGES_ONLY_ME]: {
    path: APIPath.Message.DeleteMessagesOnlyMe,
    method: METHOD.DELETE,
  },
  [ACTION.DELETE_MESSAGES_FOR_EVERYONE]: {
    path: APIPath.Message.DeleteMessagesForEveryone,
    method: METHOD.DELETE,
  },
  [ACTION.GET_MEMBER]: {
    path: APIPath.ViewMember.GetMember,
    method: METHOD.GET,
  },
  [ACTION.LIST_BANNED_USER]: {
    path: APIPath.ViewMember.ListBannedUser,
    method: METHOD.GET,
  },
  [ACTION.GET_DM_CHANNEL]: {
    path: APIPath.ViewChannel.GetDMChannel,
    method: METHOD.GET,
  },
  [ACTION.LIST_CHANNEL]: {
    path: APIPath.ViewChannel.ListChannels,
    method: METHOD.GET,
  },
  [ACTION.LIST_DM_CHANNEL]: {
    path: APIPath.ViewChannel.ListDMChannels,
    method: METHOD.GET,
  },
  [ACTION.LIST_INCOMING_MESSAGE_REQUEST]: {
    path: APIPath.ViewChannel.ListInComingMessageRequests,
    method: METHOD.GET,
  },
  [ACTION.LIST_OUTGOING_MESSAGE_REQUEST]: {
    path: APIPath.ViewChannel.ListOutGoingMessageRequests,
    method: METHOD.GET,
  },
  [ACTION.LIST_FRIEND]: {
    path: APIPath.ViewFriend.ListFriend,
    method: METHOD.GET,
  },
  [ACTION.GET_FRIEND]: {
    path: APIPath.ViewFriend.GetFriend,
    method: METHOD.GET,
  },
  [ACTION.LIST_INCOMING_FRIEND_REQUEST]: {
    path: APIPath.ViewFriend.ListInComingFriendRequests,
    method: METHOD.GET,
  },
  [ACTION.LIST_OUTGOING_FRIEND_REQUEST]: {
    path: APIPath.ViewFriend.ListOutGoingFriendRequests,
    method: METHOD.GET,
  },
  [ACTION.LIST_INVITATION]: {
    path: APIPath.ViewInvitation.ListInvitation,
    method: METHOD.GET,
  },
  [ACTION.GET_INVITATION]: {
    path: APIPath.ViewInvitation.GetInvitation,
    method: METHOD.GET,
  },
  [ACTION.GET_USER_BY_USERNAME]: {
    path: APIPath.ViewUser.GetUserByUsername,
    method: METHOD.GET,
  },
  [ACTION.LIST_BLOCK_USER]: {
    path: APIPath.ViewUser.ListBlockedUsers,
    method: METHOD.GET,
  },
  [ACTION.GET_DM_MESSAGE]: {
    path: APIPath.ViewMessage.GetDMMessage,
    method: METHOD.GET,
  },
  [ACTION.LIST_DM_MESSAGE]: {
    path: APIPath.ViewMessage.ListDMMessages,
    method: METHOD.GET,
  },
  [ACTION.LIST_DM_MESSAGE_REACTION]: {
    path: APIPath.ViewMessage.ListDMMessageReaction,
    method: METHOD.GET,
  },
  [ACTION.LIST_MESSAGE_REACTION]: {
    path: APIPath.ViewMessage.ListMessageReaction,
    method: METHOD.GET,
  },
  [ACTION.JUMP_TO_MESSAGE]: {
    path: APIPath.ViewMessage.JumpToMessage,
    method: METHOD.GET,
  },
  [ACTION.JUMP_TO_DM_MESSAGE]: {
    path: APIPath.ViewMessage.JumpToDMMessage,
    method: METHOD.GET,
  },
  [ACTION.GET_PINNED_MESSAGE]: {
    path: APIPath.ViewMessage.GetPinnedMessage,
    method: METHOD.GET,
  },
  [ACTION.GET_PINNED_DM_MESSAGE]: {
    path: APIPath.ViewMessage.GetPinnedDMMessage,
    method: METHOD.GET,
  },
  [ACTION.LIST_MESSAGE_FRAGMENT]: {
    path: APIPath.ViewMessage.ListMessagesFragment,
    method: METHOD.GET,
  },
  [ACTION.LIST_STICKER]: {
    path: APIPath.ViewSticker.ListStickers,
    method: METHOD.GET,
  },
  [ACTION.GET_STICKER]: {
    path: APIPath.ViewSticker.GetSticker,
    method: METHOD.GET,
  },
  [ACTION.GET_STICKER_COLLECTION]: {
    path: APIPath.ViewSticker.GetStickerCollection,
    method: METHOD.GET,
  },
  [ACTION.SEARCH_USER]: {
    path: APIPath.Search.SearchUsers,
    method: METHOD.POST,
  },
  [ACTION.SEARCH_FRIEND]: {
    path: APIPath.Search.SearchFriends,
    method: METHOD.POST,
  },
  [ACTION.SEARCH_MEMBER]: {
    path: APIPath.Search.SearchMembers,
    method: METHOD.POST,
  },
  [ACTION.SEARCH_CHANNEL]: {
    path: APIPath.Search.SearchChannels,
    method: METHOD.POST,
  },
  [ACTION.LIST_SUGGEST_FRIEND_BY_TYPE]: {
    path: APIPath.Suggestion.ListSuggestedFriendsByType,
    method: METHOD.GET,
  },
  [ACTION.SUBSCRIBE_ALL]: {
    path: APIPath.Notification.SubscribeAll,
    method: METHOD.POST,
  },
  [ACTION.TURNOFF_GLOBAL_NOTIFICATION]: {
    path: APIPath.Notification.TurnOffGlobalNotification,
    method: METHOD.POST,
  },
  [ACTION.TURNON_GLOBAL_NOTIFICATION]: {
    path: APIPath.Notification.TurnOnGlobalNotification,
    method: METHOD.POST,
  },
  [ACTION.UNSUBSCRIBE_CHANNEL]: {
    path: APIPath.Notification.UnsubscribeChannel,
    method: METHOD.POST,
  },
  [ACTION.UNSUBSCRIBE_ALL]: {
    path: APIPath.Notification.UnsubscribeAll,
    method: METHOD.POST,
  },
  [ACTION.SUBSCRIBE_CHANNEL]: {
    path: APIPath.Notification.SubscribeChannel,
    method: METHOD.POST,
  },
  [ACTION.MOCK_USER]: {
    path: APIPath.Faker.MockedUsers,
    method: METHOD.POST,
  },
  [ACTION.CREATE_CHANNEL]: {
    path: APIPath.Channel.CreateChannel,
    method: METHOD.POST,
  },
  [ACTION.SEND_MESSAGE]: {
    path: APIPath.Message.SendMessage,
    method: METHOD.POST,
  },
  [ACTION.SEND_DM_MESSAGE]: {
    path: APIPath.Message.SendDMMessage,
    method: METHOD.POST,
  },
  [ACTION.REPORT_DM_MESSAGE]: {
    path: APIPath.Message.ReportDMMessage,
    method: METHOD.POST,
  },
  [ACTION.REPORT_MESSAGE]: {
    path: APIPath.Message.ReportMessage,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_MESSAGE]: {
    path: APIPath.Message.UpdateMessage,
    method: METHOD.PUT,
  },
  [ACTION.GET_CHANNEL]: {
    path: APIPath.ViewChannel.GetChannel,
    method: METHOD.GET,
  },
  [ACTION.GET_MESSAGE]: {
    path: APIPath.ViewMessage.GetMessage,
    method: METHOD.GET,
  },
  [ACTION.ACCEPT_INVITATION]: {
    path: APIPath.Invitation.AcceptInvitation,
    method: METHOD.POST,
  },
  [ACTION.ADD_MESSAGE_REACTION]: {
    path: APIPath.Message.AddMessageReaction,
    method: METHOD.POST,
  },
  [ACTION.DELETE_MOCKED_USER]: {
    path: APIPath.Faker.DeleteMockedUsers,
    method: METHOD.DELETE,
  },
  [ACTION.ADD_FRIEND]: {
    path: APIPath.Friend.AddFriend,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_CHANNEL_NAME]: {
    path: APIPath.Channel.UpdateChannelName,
    method: METHOD.PUT,
  },
  [ACTION.UPDATE_USER_DISPLAY_NAME]: {
    path: APIPath.UserProfile.UpdateUserDisplayName,
    method: METHOD.PUT,
  },
  [ACTION.LIST_MEMBERS]: {
    path: APIPath.ViewMember.ListMembers,
    method: METHOD.GET,
  },
  [ACTION.GET_USER]: {
    path: APIPath.ViewUser.GetUser,
    method: METHOD.GET,
  },
  [ACTION.LIST_MESSAGE]: {
    path: APIPath.ViewMessage.ListMessages,
    method: METHOD.GET,
  },
  [ACTION.LIST_ALL_CHANNEL]: {
    path: APIPath.ViewChannel.ListAllChannels,
    method: METHOD.GET,
  },
  [ACTION.REPORT_USER]: {
    path: APIPath.UserReport.ReportUser,
    method: METHOD.POST,
  },
  [ACTION.ADD_USER_STATUS]: {
    path: APIPath.UserProfile.AddUserStatus,
    method: METHOD.POST,
  },
  [ACTION.CREATE_INVITATION]: {
    path: APIPath.Invitation.CreateInvitation,
    method: METHOD.POST,
  },
  [ACTION.SEND_INVITATION]: {
    path: APIPath.Invitation.SendInvitation,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_NICKNAME]: {
    path: APIPath.Member.UpdateNickname,
    method: METHOD.PUT,
  },
  [ACTION.ASSIGN_AS_ADMIN]: {
    path: APIPath.Member.AssignAsAdmin,
    method: METHOD.POST,
  },
  [ACTION.DISMISS_AS_ADMIN]: {
    path: APIPath.Member.DismissAsAdmin,
    method: METHOD.POST,
  },
  [ACTION.BAN_FROM_CHANNEL]: {
    path: APIPath.Member.BanFromChannel,
    method: METHOD.POST,
  },
  [ACTION.UNBAN_FROM_CHANNEL]: {
    path: APIPath.Member.UnbanFromChannel,
    method: METHOD.POST,
  },
  [ACTION.TRANSFER_OWNERSHIP]: {
    path: APIPath.Member.TransferOwnership,
    method: METHOD.POST,
  },
  [ACTION.TRANSFER_OWNERSHIP_LEAVE_CHANNEL]: {
    path: APIPath.Member.TransferOwnershipAndLeaveChannel,
    method: METHOD.POST,
  },
  [ACTION.LEAVE_CHANNEL]: {
    path: APIPath.Member.LeaveChannel,
    method: METHOD.POST,
  },
  [ACTION.REMOVE_FROM_CHANNEL]: {
    path: APIPath.Member.RemoveFromChannel,
    method: METHOD.DELETE,
  },
  [ACTION.REVOKE_INVITATION]: {
    path: APIPath.Invitation.RevokeInvitation,
    method: METHOD.DELETE,
  },
  [ACTION.UPDATE_CHANNEL_AVATAR]: {
    path: APIPath.Channel.UpdateChannelAvatar,
    method: METHOD.PUT,
  },
  [ACTION.DELETE_CHANNEL]: {
    path: APIPath.Channel.DeleteChannel,
    method: METHOD.DELETE,
  },
  [ACTION.UPDATE_DM_MEDIA_PERMISSION_SETTING]: {
    path: APIPath.Channel.UpdateDMMediaPermissionSetting,
    method: METHOD.PUT,
  },
  [ACTION.UPDATE_USER_STATUS]: {
    path: APIPath.UserProfile.UpdateUserStatus,
    method: METHOD.PUT,
  },
  [ACTION.UPDATE_DM_MESSAGE]: {
    path: APIPath.Message.UpdateDMMessage,
    method: METHOD.PUT,
  },
  [ACTION.REVOKE_MESSAGE_REACTION]: {
    path: APIPath.Message.RevokeMessageReaction,
    method: METHOD.PUT,
  },
  [ACTION.QUOTE_MESSAGE]: {
    path: APIPath.Message.QuoteMessage,
    method: METHOD.POST,
  },
  [ACTION.FORWARD_MESSAGE_CHANNEL]: {
    path: APIPath.Message.ForwardMessagesToChannel,
    method: METHOD.POST,
  },
  [ACTION.MARK_AS_READ]: {
    path: APIPath.Message.MarkAsRead,
    method: METHOD.POST,
  },
  [ACTION.MARK_DM_AS_READ]: {
    path: APIPath.Message.MarkDmAsRead,
    method: METHOD.POST,
  },
  [ACTION.PIN_UNPIN_DM_MESSAGE]: {
    path: APIPath.Message.PinUnpinDmMessage,
    method: METHOD.POST,
  },
  [ACTION.PIN_UNPIN_MESSAGE]: {
    path: APIPath.Message.PinUnpinMessage,
    method: METHOD.POST,
  },
  [ACTION.SEND_LOCATION]: {
    path: APIPath.Message.SendLocation,
    method: METHOD.POST,
  },
  [ACTION.SEND_DM_LOCATION]: {
    path: APIPath.Message.SendDmLocation,
    method: METHOD.POST,
  },
  [ACTION.SEND_POKE_MESSAGE]: {
    path: APIPath.Message.SendPokeMessage,
    method: METHOD.POST,
  },
  [ACTION.SEND_DM_MESSAGE_STICKER]: {
    path: APIPath.Message.SendDMMessageSticker,
    method: METHOD.POST,
  },
  [ACTION.SEND_MESSAGE_STICKER]: {
    path: APIPath.Message.SendMessageSticker,
    method: METHOD.POST,
  },
  [ACTION.QUOTE_DM_MESSAGE]: {
    path: APIPath.Message.QuoteDMMessage,
    method: METHOD.POST,
  },
  [ACTION.ADD_DM_MESSAGE_REACTION]: {
    path: APIPath.Message.AddDMMessageReaction,
    method: METHOD.POST,
  },
  [ACTION.REVOKE_DM_MESSAGE_REACTION]: {
    path: APIPath.Message.RevokeDMMessageReaction,
    method: METHOD.PUT,
  },
  [ACTION.FORWARD_DM_MESSAGE_CHANNEL]: {
    path: APIPath.Message.ForwardMessagesToDMChannel,
    method: METHOD.POST,
  },
  [ACTION.SEND_DM_MESSAGE_MEDIA]: {
    path: APIPath.Message.SendDmMessageMedia,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_DM_MEDIA_ATTACHMENT]: {
    path: APIPath.Message.UpdateDmMediaAttachments,
    method: METHOD.POST,
  },
  [ACTION.SEND_MESSAGE_MEDIA]: {
    path: APIPath.Message.SendMessageMedia,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_MEDIA_ATTACHMENT]: {
    path: APIPath.Message.UpdateMediaAttachments,
    method: METHOD.POST,
  },
  [ACTION.DELETE_USER_VISIT_PROFILE]: {
    path: APIPath.UserProfile.DeleteUserVisitProfile,
    method: METHOD.DELETE,
  },
  [ACTION.VISIT_PROFILE]: {
    path: APIPath.UserProfile.VisitProfile,
    method: METHOD.POST,
  },
  [ACTION.ADD_COVER_PHOTO]: {
    path: APIPath.UserProfile.AddCoverPhoto,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_COVER_PHOTO]: {
    path: APIPath.UserProfile.UpdateCoverPhoto,
    method: METHOD.PUT,
  },
  [ACTION.AVATAR_FRAME_PATH]: {
    path: APIPath.UserProfile.AvatarFramePath,
    method: METHOD.POST,
  },
  [ACTION.DELETE_AVATAR_FRAME]: {
    path: APIPath.UserProfile.DeleteAvatarFrame,
    method: METHOD.POST,
  },
  [ACTION.UPDATE_USER_AVATAR]: {
    path: APIPath.UserProfile.UpdateUserAvatar,
    method: METHOD.PUT,
  },
};
