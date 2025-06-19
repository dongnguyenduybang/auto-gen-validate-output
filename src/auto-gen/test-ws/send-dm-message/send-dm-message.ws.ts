import { WSBuilder } from '../../utils/chain-declarations';
import { ACTION, HEADER_LIST, VAR } from '../../enums';
import { API_EVENT, SYSTEM_MESSAGE } from '../../utils/ws-config';
import { chain } from '../../utils/chain-function';
import {
  ChannelDataBuilder,
  MessageDataBuilder,
} from '../../utils/template-event';

export const SendDmMessageWS = new WSBuilder()
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
  // Steps
  .startStep('should return send dm success ws')
  .addStepAction(
    'send dm message',
    [VAR.actor, VAR.recipient],
    ACTION.SEND_DM_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        content: 'aaaaaaaaaaaa',
        ref: 'ref',
      },
      expect: {
        ok: true,
      },
    },
  )
  .addStepEvents(
    'event send dm message',
    [VAR.actor, VAR.recipient],
    ACTION.SEND_DM_MESSAGE,
    [
      {
        type: chain.expect.exact(
          API_EVENT.halome.v3.chat.OUTGOING_MESSAGE_REQUEST_CREATED,
        ),
        author: VAR.actor,
        source: chain.expect.exact({
          userId: VAR.userId,
          deviceId: VAR.deviceId,
        }),
        specversion: chain.expect.exact(VAR.specversion),
        version: chain.expect.exact(VAR.version),
        data: chain.expect.builder(
          new ChannelDataBuilder().setChannel({
            userId: VAR.userId,
          }),
        ),
      },
      {
        type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
        author: VAR.actor,
        source: chain.expect.exact({
          userId: VAR.userId,
          deviceId: VAR.deviceId,
        }),
        specversion: chain.expect.exact('1'),
        version: chain.expect.exact('2'),
        data: chain.expect.builder(
          new MessageDataBuilder().setMessage({
            userId: VAR.userId1,
          }),
        ),
      },
      {
        type: chain.expect.exact(
          API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED,
        ),
        author: VAR.actor,
        source: chain.expect.exact({
          userId: VAR.userId,
          deviceId: VAR.deviceId,
        }),
        specversion: chain.expect.exact(VAR.specversion),
        version: chain.expect.exact(VAR.version),
        data: chain.expect.exact({
          workspaceId: VAR.workspaceId,
        }),
      },
      {
        type: chain.expect.exact(
          API_EVENT.halome.v3.chat.INCOMING_MESSAGE_REQUEST_CREATED,
        ),
        author: VAR.recipient,
        source: chain.expect.exact({
          userId: VAR.userId1,
          deviceId: VAR.deviceId1,
        }),
        specversion: chain.expect.exact(VAR.specversion),
        version: chain.expect.exact(VAR.version),
        data: chain.expect.builder(
          new ChannelDataBuilder().setChannel({
            userId: VAR.userId1,
          }),
        ),
      },
      {
        type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
        author: VAR.recipient,
        source: chain.expect.exact({
          userId: VAR.userId1,
          deviceId: VAR.deviceId1,
        }),
        specversion: chain.expect.exact(VAR.specversion),
        version: chain.expect.exact(VAR.version),
        data: chain.expect.builder(
          new MessageDataBuilder().setMessage({
            userId: VAR.userId1,
          }),
        ),
      },
    ],
  )

  .addResume(
    'resume send dm message',
    VAR.actor,
    API_EVENT.halome.v3.chat.OUTGOING_MESSAGE_REQUEST_CREATED,
    VAR.time,
  )
  // .addResume('resume send dm message', VAR.recipient, API_EVENT.halome.v3.chat.INCOMING_MESSAGE_REQUEST_CREATED, VAR.time)
  .execute();
