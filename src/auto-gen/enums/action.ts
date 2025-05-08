import { METHOD } from "./method.enum";
import { APIPath } from './path.enum';

export enum ACTION {
  MOCK_USER = 'mockUser',
  CREATE_CHANNEL = 'createChannel',
  SEND_MESSAGE = 'sendMessage',
  SEND_DM_MESSAGE = 'sendDmMessage',
  REPORT_DM_MESSAGE = 'reportDmMessage',
  UPDATE_MESSAGE = 'updateMessage',
  GET_CHANNEL = 'getChannel',
  GET_MESSAGE = 'getMessage',
  ACCEPT_INVITATION = 'acceptInvitation',
  ADD_MESSAGE_REACTION = 'addMessageReaction',
  DELETE_MOCKED_USER = 'deleteMockedUsers',
  ADD_FRIEND = 'addFriend',
  ACCEPT_FRIEND_REQUEST = 'acceptFriendRequest',
  UPDATE_CHANNEl_NAME = 'updateChannelName',
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
  [ACTION.UPDATE_CHANNEl_NAME]: {
    path: APIPath.Channel.UpdateChannelName, method: METHOD.PUT
  },
}