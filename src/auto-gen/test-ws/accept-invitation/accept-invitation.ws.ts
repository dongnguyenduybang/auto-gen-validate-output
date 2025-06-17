import { WSBuilder } from '../../utils/chain-declarations';
import { ACTION, HEADER_LIST, VAR } from '../../enums';
import { API_EVENT, SYSTEM_MESSAGE } from '../../utils/ws-config';
import { chain } from '../../utils/chain-function';
import {
  ChannelDataBuilder,
  MessageDataBuilder,
} from '../../utils/template-event';

export const AcceptInvitationWS = new WSBuilder()
  .addBeforeAll(
    'Actor open connection ws',
    VAR.actor,
    ACTION.OPEN_CONNECTION_WS,
    { headers: HEADER_LIST.create({ token: VAR.token }) },
  )
  .addBeforeAll('Actor connect ws', VAR.actor, ACTION.CONNECT_WS, {
    body: { url: VAR.url },
  })
  .addBeforeAll(
    'Recipient open connection ws',
    VAR.recipient,
    ACTION.OPEN_CONNECTION_WS,
    { headers: HEADER_LIST.create({ token: VAR.token1 }) },
  )
  .addBeforeAll('Recipient connect ws', VAR.recipient, ACTION.CONNECT_WS, {
    body: { url: VAR.url1 },
  })
  //steps
  .startStep('should return join channel success ws')
  .addStepAction('create channel', [VAR.actor, VAR.recipient], ACTION.CREATE_CHANNEL, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: { name: 'channel1', workspaceId: VAR.workspaceId },
  })
  .addStepEvents('event create channel', [VAR.actor, VAR.recipient], ACTION.CREATE_CHANNEL, [
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.CHANNEL_CREATED),
      author: 'Actor',
      source: chain.expect.exact({
        userId: VAR.userId,
        deviceId: VAR.deviceId,
      }),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('2.0'),
      data: chain.expect.builder(
        new ChannelDataBuilder()
          .setChannel({
            channelId: VAR.channelId,
            userId: VAR.userId,
            name: 'channel1',
            totalMembers: 1,
            type: 1,
            isPrivate: true,
            workspaceId: VAR.workspaceId
          })
          .addUser({
            userId: VAR.userId,
            userType: 0,
          })
          .addMember({
            workspaceId: "0",
            channelId: VAR.channelId,
            userId: VAR.userId,
            role: 'owner',
            nickname: "",
          })
          .addMessage({
            content: SYSTEM_MESSAGE.CREATE_CHANNEL,
            messageType: 1,
            workspaceId: "0",
            channelId: VAR.channelId,
            userId: VAR.userId,
            isThread: false,
            messageStatus: 1,
            isReported: false,
            attachmentType: 0
          })
          .addMetadata({
            unreadCount: 0,
            workspaceId: "0",
            channelId: VAR.channelId,
            notificationStatus: true
          })
      ),
    },
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
      author: 'Actor',
      source: chain.expect.exact(API_EVENT.halome.cloudevent.system),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('2.0'),
      data: chain.expect.builder(
        new MessageDataBuilder()
          .setMessage({
            userId: VAR.userId,
            content: SYSTEM_MESSAGE.CREATE_CHANNEL,
          })
          .addChannel({
            channelId: VAR.channelId,
            userId: VAR.userId,
            name: 'channel1',
            totalMembers: 1,
          })
          .addMetadata({
            lastMessageId: VAR.lastMessageId,
            channelId: VAR.channelId,
          }),
      ),
    },
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.MEMBER_JOINED),
      author: 'Recipient',
      source: chain.expect.exact({
        userId: VAR.userId,
        deviceId: VAR.deviceId,
      }),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('1.0'),
      data: chain.expect.exact({
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
        joinedUserId: VAR.userId1,
      }),
    },
  ])
  .addStepAction('join channel', [VAR.actor, VAR.recipient], ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
    expect: {
      ok: true,
    },
  })
  .addStepEvents('event join channel', [VAR.actor, VAR.recipient], ACTION.ACCEPT_INVITATION, [
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.MEMBER_JOINED),
      author: 'Actor',
      source: chain.expect.exact({
        userId: VAR.userId1,
        deviceId: VAR.deviceId1,
      }),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('1.0'),
      data: chain.expect.exact({
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
        joinedUserId: VAR.userId1,
      }),
    },
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
      author: 'Actor',
      source: chain.expect.exact(API_EVENT.halome.cloudevent.system),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('2.0'),
      data: chain.expect.builder(
        new MessageDataBuilder().setMessage({
          content: SYSTEM_MESSAGE.JOINED_THIS_CHANNEL,
        }),
      ),
    },
    {
      type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
      author: 'Recipient',
      source: chain.expect.exact(API_EVENT.halome.cloudevent.system),
      specversion: chain.expect.exact('1.0'),
      version: chain.expect.exact('2.0'),
      data: chain.expect.builder(
        new MessageDataBuilder()
          .setMessage({
            userId: VAR.userId,
            content: SYSTEM_MESSAGE.CREATE_CHANNEL,
          })
          .addChannel({
            channelId: VAR.channelId,
            userId: VAR.userId,
            name: 'channel1',
            totalMembers: 1,
          })
          .addMetadata({
            lastMessageId: VAR.lastMessageId,
            channelId: VAR.channelId,
          }),
      ),
    },
  ])
  .execute();
