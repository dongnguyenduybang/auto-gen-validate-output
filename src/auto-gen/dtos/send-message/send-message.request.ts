/* eslint-disable prettier/prettier */
export const HeaderRequest =
{
    method: "POST",
    path: "/Message/SendMessage",
    headers: {
        "Content-Type": "application/json",
        "x-session-token": "{{token}}",
        "x-country-code": "VN"
    },
    payload: {
        "workspaceId": "0",
        "channelId": "{{channelId}}",
        "content": "test123123",
        "ref": "ref"
    }
}
export const BeforeSendMessage = {
    steps: [
        {
            action: 'mockUser',
        },
        {
            action: 'createChannel',
        },
        {
            action: 'getChannel',
            body: { channelId: '{{channelId}}' },
            header: { token: '{{token}}' },
            expect: {
                ok: { operator: 'equal', expect: true },
                data: {
                    channel: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                        userId: { operator: 'equal', expect: '{{userId}}' },
                        totalMembers: { operator: 'equal', expect: 1 },
                    },
                    channelMetadata: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                        lastMessageId: { operator: 'equal', expect: '{{lastMessageId}}' },
                    }
                },
                includes: {
                    users: [
                        {
                            operator: 'equal',
                            expect: ['{{userId1}}'],
                            element: 'first',
                            field: 'userId'
                        }

                    ],
                    channelMetadata: [],
                    messages: [
                        {
                            operator: 'equal',
                            expect: ['%s created this channel'],
                            field: 'content'
                        }
                    ]
                }
            }
        }
    ]
};


export const SendMessageSaga = {
    steps: [
        {
            action: 'acceptInvitation',
            body: { linkInvitation: '{{invitationLink}}' },
            header: { token: '{{token1}}' },
            expect: {
                ok: { operator: 'equal', expect: true },
                data: {
                    channel: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                        userId: { operator: 'equal', expect: '{{userId}}' },
                        totalMembers: { operator: 'equal', expect: 2 },
                    },
                    channelMetadata: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                    }
                },
                includes: {
                    users: [
                        {
                            operator: 'include',
                            expect: ['{{userId}}'],
                            element: 'first',
                            field: 'userId'
                        },
                        {
                            operator: 'equal',
                            expect: 0,
                            element: 'all',
                            field: 'userType'
                        },
                        {
                            operator: 'equal',
                            expect: 1,
                            element: 'all',
                            field: 'profile.avatarType'
                        }
                    ],
                    messages: [
                    ],
                    members: [{
                    }]
                }
            }
        },
        {
            action: 'getChannel',
            body: { channelId: '{{channelId}}' },
            header: { token: '{{token}}' },
            expect: {
                ok: { operator: 'equal', expect: true },
                data: {
                    channel: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                        userId: { operator: 'equal', expect: '{{userId}}' },
                        totalMembers: { operator: 'equal', expect: 2 },
                    },
                    channelMetadata: {
                        channelId: { operator: 'equal', expect: '{{channelId}}' },
                    }
                },
                includes: {
                    users: [
                        {
                            operator: 'include',
                            expect: ['{{userId}}', '{{userId1}}'],
                            element: 'all',
                            field: 'userId'
                        },
                        {
                            operator: 'equal',
                            expect: 0,
                            element: 'all',
                            field: 'userType'
                        },
                        {
                            operator: 'equal',
                            expect: 1,
                            element: 'all',
                            field: 'profile.avatarType'
                        }
                    ],
                    channelMetadata: [],
                    messages: [],
                    members: [

                    ]
                }
            }
        },
        // {
        //   action: 'sendMessage',
        //   body: {
        //     workspaceId: '0',
        //     channelId: '{{createChannel.isChannelId}}',
        //     content: 'user send message',
        //   },
        //   header: { token: '{{mockUser[1].token}}' },
        //   expect: {}
        // },
    ],
};