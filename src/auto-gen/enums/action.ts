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
  SEND_INVITATION = 'sendInvitation',
  UPDATE_NICKNAME = 'updateNickname',
  ASSIGN_AS_ADMIN = 'assignAsAdmin',
  DISMISS_AS_ADMIN = 'dismissAsAdmin',
  BAN_FROM_CHANNEL = 'banFromChannel',
  UNBAN_FROM_CHANNEL = 'unbanFromChannel',
  TRANSFER_OWNERSHIP = 'transferOwnership',
  TRANSFER_OWNERSHIP_LEAVE_CHANNEL = 'transferOwnershipLeaveChannel',
  LEAVE_CHANNEL = 'leaveChannel',
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
}