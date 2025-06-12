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
    //  steps
    .startStep('should return send dm success ws')
    .addStepAction('send dm message', VAR.actor, ACTION.SEND_DM_MESSAGE, {
        headers: HEADER_LIST.create({ token: VAR.token1 }),
        body: {
            userId: VAR.userId1,
            content: "aaaaaaaaaaaa",
            ref: "ref"
        },
        expect: {
            ok: true,
        },
    })
    .addStepEvents('event send dm message', VAR.actor, ACTION.SEND_DM_MESSAGE, [
        {
            type: chain.expect.exact(API_EVENT.halome.v3.chat.MESSAGE_CREATED),
            source: chain.expect.exact({
                userId: VAR.userId1,
                deviceId: VAR.deviceId1,
            }),
            specversion: chain.expect.exact('1.0'),
            version: chain.expect.exact('2.0'),
            data: chain.expect.builder(
                new MessageDataBuilder()
                    .setMessage({
                        userId: VAR.userId
                    })
            )
        },
        {
            type: chain.expect.exact(API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED),
            source: chain.expect.exact({
                userId: VAR.userId1,
                deviceId: VAR.deviceId1,
            }),
            specversion: chain.expect.exact('1.0'),
            version: chain.expect.exact('2.0'),
            data: chain.expect.exact({
                userId: VAR.userId1
            })
        },
    ])
    .execute();
