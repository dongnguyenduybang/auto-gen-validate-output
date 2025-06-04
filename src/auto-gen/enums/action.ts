import { METHOD } from "./method.enum";
import { APIPath } from './path.enum';

export enum ACTION {
  MOCK_USER = 'mockUser',
  CREATE_CHANNEL = 'createChannel',
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
  SEARCH_USERS = 'searchUsers',
  LIST_MEMBERS = 'listMembers',
  GET_USER = 'getUser',
  LIST_MESSAGE = 'listMessage',
  LIST_ALL_CHANNEL = 'listAllChannel',
  REPORT_USER = 'reportUser',
  ADD_USER_STATUS = 'addUserStatus',
  UPDATE_USER_STATUS = 'updateUserStatus',
  SEND_INVITATION = 'sendInvitation',
  UPDATE_NICKNAME = 'updateNickname',
  ASSIGN_AS_ADMIN = 'assignAsAdmin',
  DISMISS_AS_ADMIN = 'dismissAsAdmin',
  BAN_FROM_CHANNEL = 'banFromChannel',
  UNBAN_FROM_CHANNEL = 'unbanFromChannel',
  TRANSFER_OWNERSHIP = 'transferOwnership',
  TRANSFER_OWNERSHIP_LEAVE_CHANNEL = 'transferOwnershipLeaveChannel',
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
  FORWARD_DM_MESSAGE_CHANNEL = 'forwardDmMessageChannel'
}

export const ACTION_CONFIG: Record<ACTION, { path: string; method: METHOD }> = {
  [ACTION.MOCK_USER]: {
    path: APIPath.Faker.MockedUsers, method: METHOD.POST
  },
  [ACTION.CREATE_CHANNEL]: {
    path: APIPath.Channel.CreateChannel, method: METHOD.POST
  },
  [ACTION.SEND_MESSAGE]: {
    path: APIPath.Message.SendMessage, method: METHOD.POST
  },
  [ACTION.SEND_DM_MESSAGE]: {
    path: APIPath.Message.SendDMMessage, method: METHOD.POST
  },
  [ACTION.REPORT_DM_MESSAGE]: {
    path: APIPath.Message.ReportDMMessage, method: METHOD.POST
  },
  [ACTION.REPORT_MESSAGE]: {
    path: APIPath.Message.ReportMessage, method: METHOD.POST
  },
  [ACTION.UPDATE_MESSAGE]: {
    path: APIPath.Message.UpdateMessage, method: METHOD.PUT
  },
  [ACTION.GET_CHANNEL]: {
    path: APIPath.ViewChannel.GetChannel, method: METHOD.GET
  },
  [ACTION.GET_MESSAGE]: {
    path: APIPath.ViewMessage.GetMessage, method: METHOD.GET
  },
  [ACTION.ACCEPT_INVITATION]: {
    path: APIPath.Invitation.AcceptInvitation, method: METHOD.POST
  },
  [ACTION.ADD_MESSAGE_REACTION]: {
    path: APIPath.Message.AddMessageReaction, method: METHOD.POST
  },
  [ACTION.DELETE_MOCKED_USER]: {
    path: APIPath.Faker.DeleteMockedUsers, method: METHOD.DELETE
  },
  [ACTION.ADD_FRIEND]: {
    path: APIPath.Friend.AddFriend, method: METHOD.POST
  },
  [ACTION.ACCEPT_FRIEND_REQUEST]: {
    path: APIPath.Friend.AcceptFriendRequest, method: METHOD.POST
  },
  [ACTION.UPDATE_CHANNEL_NAME]: {
    path: APIPath.Channel.UpdateChannelName, method: METHOD.PUT
  },
  [ACTION.UPDATE_USER_DISPLAY_NAME]: {
    path: APIPath.UserProfile.UpdateUserDisplayName, method: METHOD.PUT
  },
  [ACTION.SEARCH_USERS]: {
    path: APIPath.Search.SearchUsers, method: METHOD.POST
  },
  [ACTION.LIST_MEMBERS]: {
    path: APIPath.ViewMember.ListMembers, method: METHOD.GET
  },
  [ACTION.GET_USER]: {
    path: APIPath.ViewUser.GetUser, method: METHOD.GET
  },
  [ACTION.LIST_MESSAGE]: {
    path: APIPath.ViewMessage.ListMessages, method: METHOD.GET
  },
  [ACTION.LIST_ALL_CHANNEL]: {
    path: APIPath.ViewChannel.ListAllChannels, method: METHOD.GET
  },
  [ACTION.REPORT_USER]: {
    path: APIPath.UserReport.ReportUser, method: METHOD.POST
  },
  [ACTION.ADD_USER_STATUS]: {
    path: APIPath.UserProfile.AddUserStatus, method: METHOD.POST
  },
  [ACTION.CREATE_INVITATION]: {
    path: APIPath.Invitation.CreateInvitation, method: METHOD.POST
  },
  [ACTION.SEND_INVITATION]: {
    path: APIPath.Invitation.SendInvitation, method: METHOD.POST
  },
  [ACTION.UPDATE_NICKNAME]: {
    path: APIPath.Member.UpdateNickname, method: METHOD.PUT
  },
  [ACTION.ASSIGN_AS_ADMIN]: {
    path: APIPath.Member.AssignAsAdmin, method: METHOD.POST
  },
  [ACTION.DISMISS_AS_ADMIN]: {
    path: APIPath.Member.AssignAsAdmin, method: METHOD.POST
  },
  [ACTION.BAN_FROM_CHANNEL]: {
    path: APIPath.Member.BanFromChannel, method: METHOD.POST
  },
  [ACTION.UNBAN_FROM_CHANNEL]: {
    path: APIPath.Member.UnbanFromChannel, method: METHOD.POST
  },
  [ACTION.TRANSFER_OWNERSHIP]: {
    path: APIPath.Member.TransferOwnership, method: METHOD.POST
  },
  [ACTION.TRANSFER_OWNERSHIP_LEAVE_CHANNEL]: {
    path: APIPath.Member.TransferOwnershipAndLeaveChannel, method: METHOD.POST
  },
  [ACTION.LEAVE_CHANNEL]: {
    path: APIPath.Member.LeaveChannel, method: METHOD.POST
  },
  [ACTION.REMOVE_FROM_CHANNEL]: {
    path: APIPath.Member.RemoveFromChannel, method: METHOD.DELETE
  },
  [ACTION.REVOKE_INVITATION]: {
    path: APIPath.Invitation.RevokeInvitation, method: METHOD.DELETE
  },
  [ACTION.UPDATE_CHANNEL_AVATAR]: {
    path: APIPath.Channel.UpdateChannelAvatar, method: METHOD.PUT
  },
  [ACTION.DELETE_CHANNEL]: {
    path: APIPath.Channel.DeleteChannel, method: METHOD.DELETE
  },
  [ACTION.UPDATE_DM_MEDIA_PERMISSION_SETTING]: {
    path: APIPath.Channel.UpdateDMMediaPermissionSetting, method: METHOD.PUT
  },
  [ACTION.UPDATE_USER_STATUS]: {
    path: APIPath.UserProfile.UpdateUserStatus, method: METHOD.PUT
  },
  [ACTION.UPDATE_DM_MESSAGE]: {
    path: APIPath.Message.UpdateDMMessage, method: METHOD.PUT
  },
  [ACTION.REVOKE_MESSAGE_REACTION]: {
    path: APIPath.Message.RevokeMessageReaction, method: METHOD.PUT
  },
  [ACTION.QUOTE_MESSAGE]: {
    path: APIPath.Message.QuoteMessage, method: METHOD.POST
  },
  [ACTION.FORWARD_MESSAGE_CHANNEL]: {
    path: APIPath.Message.ForwardMessagesToChannel, method: METHOD.POST
  },
  [ACTION.MARK_AS_READ]: {
    path: APIPath.Message.MarkAsRead, method: METHOD.POST
  },
  [ACTION.MARK_DM_AS_READ]: {
    path: APIPath.Message.MarkDmAsRead, method: METHOD.POST
  },
  [ACTION.PIN_UNPIN_DM_MESSAGE]: {
    path: APIPath.Message.PinUnpinDmMessage, method: METHOD.POST
  },
  [ACTION.PIN_UNPIN_MESSAGE]: {
    path: APIPath.Message.PinUnpinMessage, method: METHOD.POST
  },
  [ACTION.SEND_LOCATION]: {
    path: APIPath.Message.PinUnpinMessage, method: METHOD.POST
  },
  [ACTION.SEND_DM_LOCATION]: {
    path: APIPath.Message.SendDmLocation, method: METHOD.POST
  },
  [ACTION.SEND_POKE_MESSAGE]: {
    path: APIPath.Message.SendPokeMessage, method: METHOD.POST
  },
  [ACTION.SEND_DM_MESSAGE_STICKER]: {
    path: APIPath.Message.SendDMMessageSticker, method: METHOD.POST
  },
  [ACTION.SEND_MESSAGE_STICKER]: {
    path: APIPath.Message.SendMessageSticker, method: METHOD.POST
  },
  [ACTION.QUOTE_DM_MESSAGE]: {
    path: APIPath.Message.QuoteDMMessage, method: METHOD.POST
  },
  [ACTION.ADD_DM_MESSAGE_REACTION]: {
    path: APIPath.Message.AddDMMessageReaction, method: METHOD.POST
  },
  [ACTION.REVOKE_DM_MESSAGE_REACTION]: {
    path: APIPath.Message.RevokeDMMessageReaction, method: METHOD.PUT
  },
  [ACTION.FORWARD_DM_MESSAGE_CHANNEL]: {
    path: APIPath.Message.ForwardMessagesToDMChannel, method: METHOD.POST
  },
}