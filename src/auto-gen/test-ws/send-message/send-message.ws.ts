import { VAR } from '../../enums/var-placeholder.enum';
import { SagaWSTestSuite } from '../../utils/declarations';
import { ACTION } from '../../enums';
import { HEADER_LIST } from '../../enums/header.enum';
import { API_EVENT } from '../../utils/ws-config';
import { channel } from 'diagnostics_channel';

export const SendMessageWS: SagaWSTestSuite = {
  options: [
    {
      beforeAll: [
        {
          title: 'Open connection ws for Actor',
          action: ACTION.OPEN_CONNECTION_WS,
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
        {
          title: 'Connect ws for Actor',
          action: ACTION.CONNECT_WS,
          body: {
            url: VAR.url,
          },
        },
        {
          title: 'Open connection ws for Recipient',
          action: ACTION.OPEN_CONNECTION_WS,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
        },
        {
          title: 'Connect ws for Recipient',
          action: ACTION.CONNECT_WS,
          body: {
            url: VAR.url1,
          },
        },
        {
          title: 'create channel for Actor',
          action: ACTION.CREATE_CHANNEL,
          body: {
            workspaceId: VAR.workspaceId,
            name: 'channel1',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
      ],
      // resume: [
      //   {
      //     title: 'User 1 send message 2 Actor',
      //     type: API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED,
      //     data: VAR.time,
      //   },
      // ],
    },
  ],
  steps: [
    {
      title: 'should return ...',
      step: [
        {
          title: 'User 1 send message Actor',
          action: ACTION.SEND_MESSAGE,
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            content: 'send message',
            ref: 'ref',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
        },
        // {
        //   title: 'User 1 update channel name Actor',
        //   action: ACTION.UPDATE_CHANNEL_NAME,
        //   body: {
        //     workspaceId: VAR.workspaceId,
        //     channelId: VAR.channelId,
        //     name: 'aaaaa'
        //   },
        //   headers: HEADER_LIST.create({
        //     token: VAR.token,
        //   }),
        // }
        // {
        //   title: 'User 2 joined channel Recipient',
        //   action: ACTION.ACCEPT_INVITATION,
        //   body: {
        //     invitationLink: VAR.invitationLink,
        //   },
        //   headers: HEADER_LIST.create({ token: VAR.token1 }),
        // },
        // {
        //     title: 'User 2 send message Recipient',
        //     action: ACTION.SEND_MESSAGE,
        //     body: {
        //         workspaceId: VAR.workspaceId, channelId: VAR.channelId, content: 'send message 3', ref: 'ref'
        //     },
        //     headers: HEADER_LIST.create({
        //         token: VAR.token1,
        //     }),
        // }
      ],
    },
  ],
};
