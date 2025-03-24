/* eslint-disable prettier/prettier */
import { Step } from '../decorator/request-decorator';
/* eslint-disable prettier/prettier */
export class BeforeSendMessage {
    //step1
    //default: prefix: 'test12345', quantity: 2, badge: 0 
    @Step({
        action: 'mockUser',
        body: {},
        header: {},
        expect: {},
    })
    mockUserStep() { }

    //step2
    //default: createChannel => token = mockUser[0]
    @Step({
        action: 'createChannel',
        body: {},
        header: {},
        expect: {},
    })
    createChannelStep() { }

    //step3
    @Step({
        action: 'getChannel',
        body: { workspaceId: '0', channelId: '{{createChannel.isChannelId}}' },
        header: { token: '{{mockUser[0].token}}' },
        expect: {
            countMember: 1,
            countMessage: 1,
            isChannelId: '{{createChannel.isChannelId}}',
            isLastMessage: '{{createChannel.messageId}}',
            isContent: '{{createChannel.isContent}}',
            isOwner: '{{mockUser[0].userId}}',
        },
    })
    getChannelStep() { }
    
}
export class SendMessageSaga {
    //step5
    @Step({
        action: 'acceptInvitation',
        body: { linkInvitation: '{{getChannel.invitationLink}}' },
        header: { token: '{{mockUser[1].token}}' },
        expect: {
            countMember: 2,
            countMessage: 1,
            isChannelId: '{{createChannel.isChannelId}}',
            isContent: '%s joined this channel',
        },
    })
    acceptInvitationStep() { }
    //step6
    @Step({
        action: 'getChannel',
        body: { workspaceId: '0', channelId: '{{createChannel.isChannelId}}' },
        header: { token: '{{mockUser[0].token}}' },
        expect: {
            countMember: 2,
            countMessage: 1,
            isChannelId: '{{createChannel.isChannelId}}',
            isLastMessage: '{{acceptInvitation.isLastMessage}}',
            isContent: '{{acceptInvitation.isContent}}',
            isOwner: '{{mockUser[0].userId}}',
        },
    })
    getChannelStep() { }
    //step7
    @Step({
        action: 'sendMessage_2',
        body: {
            workspaceId: '0',
            channelId: '{{createChannel.isChannelId}}',
            content: 'user send message',
        },
        header: { token: '{{mockUser[1].token}}' },
    })
    sendMessageStep() { }
}
