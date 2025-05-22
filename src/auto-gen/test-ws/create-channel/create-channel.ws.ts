import { VAR } from '../../enums/var-placeholder.enum';
import { SagaWSTestSuite } from '../../utils/declarations';
import { ACTION } from '../../enums';
import { HEADER_LIST } from '../../enums/header.enum';
import { API_EVENT } from '../../utils/ws-config';

export const CreateChannelWS = {
    options: [
        {
            beforeAll: [
                {
                    title: 'Open connection ws for Actor',
                    author: 'Actor',
                    action: ACTION.OPEN_CONNECTION_WS,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                },
                {
                    title: 'Connect ws for Actor',
                    author: 'Actor',
                    action: ACTION.CONNECT_WS,
                    body: {
                        url: VAR.url,
                    },
                },
                {
                    title: 'Open connection ws for Recipient',
                    author: 'Recipient',
                    action: ACTION.OPEN_CONNECTION_WS,
                    headers: HEADER_LIST.create({ token: VAR.token1 }),
                },
                {
                    title: 'Connect ws for Recipient',
                    author: 'Recipient',
                    action: ACTION.CONNECT_WS,
                    body: {
                        url: VAR.url1,
                    },
                },
                {
                    title: 'create channel for Actor',
                    author: 'Actor',
                    action: ACTION.CREATE_CHANNEL,
                    body: {
                        workspaceId: VAR.workspaceId,
                        name: 'channel1',
                    },
                    headers: HEADER_LIST.create({ token: VAR.token }),
                },
            ],
            resume: [
                {
                    title: 'User 1 send message Actor',
                    author: 'Actor',
                    type: API_EVENT.halome.v3.chat.MESSAGE_CREATED,
                    data: VAR.time,
                },
            ],
        },
    ],
    steps: [
        {
            title: 'should return ...',
            step: [
                {
                    title: 'User 1 send message Actor',
                    author: 'Actor',
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
            ],
        },
    ],
};
