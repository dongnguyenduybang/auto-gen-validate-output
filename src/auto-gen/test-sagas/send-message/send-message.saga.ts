    import { Operator } from "../../enums/operator.enum";
    import { Element } from "../../enums/element.enum";

    export const SendMessageSaga = {
        steps: [
            {
                action: 'mockUser',
            },
            {
                action: 'createChannel',
            },
            {
                action: 'sendMessage',
                method: "POST",
                path: "/Message/SendMessage",
                body: {
                    "workspaceId": '0',
                    "channelId": '{{channelId}}',
                    "content": 'user send message',
                    "ref": "ref"
                },
                header: { "token": '{{token}}' },
                expect: {
                    ok: { operator: Operator.EQUAL, expect: true },
                    data: {
                        message: {
                            workspaceId: { operator: Operator.EQUAL, expect: 0 },
                            channelId: { operator: Operator.EQUAL, expect: '{{channelId}}' },
                            userId: { operator: Operator.EQUAL, expect: '{{userId}}' },
                            content: { operator: Operator.EQUAL, expect: 'user send message' },
                            messageType: { operator: Operator.EQUAL, expect: 0 },
                            messageStatus: { operator: Operator.EQUAL, expect: 1 },
                            attachmentType: { operator: Operator.EQUAL, expect: 0 },
                        }
                    },
                    includes: {
                        users: [
                            {
                                field: 'userId',
                                operator: Operator.INCLUDE,
                                element: Element.FIRST,
                                expect: ['{{userId}}']
                            },
                            {
                                field: 'userType',
                                operator: Operator.INCLUDE,
                                element: Element.FIRST,
                                expect: 0
                            },
                            {
                                field: 'profile.userBadgeType',
                                operator: Operator.EQUAL,
                                expect: 0
                            }
                        ],
                        channels: [
                            {
                                field: 'workspaceId',
                                operator: Operator.EQUAL,
                                element: Element.FIRST,
                                expect: 0
                            },
                            {
                                field: 'channelId',
                                operator: Operator.EQUAL,
                                element: Element.FIRST,
                                expect: ['{{channelId}}']
                            },
                            {
                                field: 'userId',
                                operator: Operator.EQUAL,
                                element: Element.FIRST,
                                expect: ['{{userId}}']
                            },
                            {
                                field: 'totalMembers',
                                operator: Operator.EQUAL,
                                element: Element.FIRST,
                                expect: ['{{totalMembers}}']
                            },
                            {
                                field: 'name',
                                operator: Operator.EQUAL,
                                element: Element.FIRST,
                                expect: ['{{name}}']
                            }
                        ],
                        members: [
                            {
                                field: 'workspaceId',
                                operator: Operator.INCLUDE,
                                element: Element.ALL,
                                expect:  0
                            },
                            {
                                field: 'channelId',
                                operator: Operator.INCLUDE,
                                element: Element.ALL,
                                expect: ['{{channelId}}']
                            },
                            {
                                field: 'userId',
                                operator: Operator.INCLUDE,
                                element: Element.FIRST,
                                expect: ['{{userId}}']
                            },
                            {
                                field: 'role',
                                operator: Operator.INCLUDE,
                                element: Element.FIRST,
                                expect: ['owner']
                            },
                            // {
                            //     field: 'roles.role',
                            //     operator: Operator.INCLUDE,
                            //     element: Element.FIRST,
                            //     expect: ['owner']
                            // }
                        ],
                        channelMetadata: [
                            {
                                field: 'workspaceId',
                                operator: Operator.INCLUDE,
                                element: Element.ALL,
                                expect:  0
                            },
                            {
                                field: 'channelId',
                                operator: Operator.INCLUDE,
                                element: Element.ALL,
                                expect: ['{{channelId}}'] 
                            }
                        ]
                    }
                }
            },
            {
                action: 'acceptInvitation',
                body: { "linkInvitation": '{{invitationLink}}' },
                header: { "token": '{{token1}}' },
                expect: {
                    ok: { operator: Operator.EQUAL, expect: true },
                }
            },
            {
                action: 'getChannel',
                body: { "channelId": '{{channelId}}' },
                header: { "token": '{{token}}' },
                expect: {
                    ok: { operator: Operator.EQUAL, expect: true },
                }
            },

        ],
    };

