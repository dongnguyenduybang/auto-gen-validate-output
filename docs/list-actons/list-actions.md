
## List Action

- [acceptInvitation](#acceptInvitation)
- [addMessageReaction](#addMessageReaction)
- [addDMMessageReaction](#addDMMessageReaction)
- [createChannel](#createChannel)
- [deleteAllDMMessageForEveryone](#deleteAllDMMessageForEveryone)
- [deleteAllDMMessageOnlyMe](#deleteAllDMMessageOnlyMe)
- [deleteAllMessageOnlyMe](#deleteAllMessageOnlyMe)
- [deleteChannel](#deleteChannel)
- [deleteDMMessageForEveryone](#deleteDMMessageForEveryone)
- [deleteDMMessageOnlyMe](#deleteDMMessageOnlyMe)
- [deleteMessagesForEveryone](#deleteMessagesForEveryone)
- [deleteMessagesOnlyMe](#deleteMessagesOnlyMe)
- [deleteMockUser](#deleteMockUser)
- [getChannel](#getChannel)
- [getMessage](#getMessage)
- [getStickerCollection](#getStickerCollection)
- [getSticker](#getSticker)
- [markAsRead](#markAsRead)
- [markDMAsRead](#markDMAsRead)
- [mockChannel](#mockChannel)
- [mockUser](#mockUser)
- [reportMessage](#reportMessage)
- [sendDMMessage](#sendDMMessage)
- [sendInvitation](#sendInvitation)
- [sendMessageSticker](#sendMessageSticker)
- [sendMessage](#sendMessage)
- [updateMessage](#updateMessage)
- ...

### Action Detail

#### acceptInvitation
``` 
  {
        action: 'acceptInvitation',
        body: {   "invitationLink": '{{inviteLink}}'},
        header: { token: '{{token1}}' },
  }
```

#### addDMMessageReaction
``` 
  {
        action: 'addDmMessageReaction',
        body: {
            "userId": "{{userId1}}",
            "messageId": "{{messageId1}}",
            "emoji": "🚀"
        },
        header: { token: '{{token}}' },
  }
```

#### addMessageReaction
``` 
  {
        action: 'addMessageReaction',
        body: {
            "workspaceId": "0",
            "messageId": "{{messageId1}}",
            "emoji": "🚀"
        },
        header: { token: '{{token}}' },
  }
```

#### createChannel
``` 
  {
        action: 'createChannel',
  }
```

#### deleteAllDMMessageForEveryone
``` 
  {
        action: 'deleteAllDmMessageForEveryone',
        body: { userId: '{{userId1}}'},
        header: { token: '{{token}}' },
  }
```

#### deleteAllDmMessageOnlyMe
``` 
  {
        action: 'deleteAllDmMessageOnlyMe',
        body: { userId: '{{userId1}}'},
        header: { token: '{{token}}' },
  }
```

#### deleteAllMessageOnlyMe
``` 
  {
        action: 'deleteAllMessageOnlyMe',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}'
        },
        header: { token: '{{token}}' },
  }
```

#### deleteChannel
``` 
  {
        action: 'deleteChannel',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}'
        },
        header: { token: '{{token}}' },
  }
```

#### deleteDMMessageForEveryone
``` 
  {
        action: 'deleteDmMessageForEveryone',
        body: { 
          userId: '{{userId1}}'
          messageId: '{{messageId1}}'
        },
        header: { token: '{{token}}' },
  }
```

#### deleteDmMessageOnlyMe
``` 
  {
        action: 'deleteDmMessageOnlyMe',
        body: { 
          userId: '{{userId1}}'
          messageId: '{{messageId1}}'
        },
        header: { token: '{{token}}' },
  }
```

#### deleteMessagesForEveryone
``` 
  {
        action: 'deleteMessagesForEveryone',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}'
          messageId: '{{messageId1}}'
        },
        header: { token: '{{token}}' },
  }
```

#### deleteMessagesOnlyMe
``` 
  {
        action: 'deleteMessagesOnlyMe',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}'
          messageId: '{{messageId1}}'
        },
        header: { token: '{{token}}' },
  }
```
#### deleteMockUser
``` 
  {
        action: 'deleteMockUser',
        body: { 
          workspaceId: '0',
          prefix: 'abcdef'
        },
        header: { token: '{{token}}' },
  }
```
#### getChannel
``` 
  {
        action: 'getChannel',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```
#### getMessage
``` 
  {
        action: 'getMessage',
        body: {
          workspaceId: '0',
          channelId: '{{channelId}}'
          messageId: '{{messageId1}}'
           
        },
        header: { token: '{{token}}' },
  }
```
#### getStickerCollection
``` 
  {
        action: 'getStickerCollection',
        body: { collectionId: '{{collectionId}}'},
        header: { token: '{{token}}' },
  }
```
#### getSticker
``` 
  {
        action: 'getSticker',
        body: { stickerId: '{{stickerId}}'},
        header: { token: '{{token}}' },
  }
```
#### markAsRead
``` 
  {
        action: 'markAsRead',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}',
          messageId: '{{messageId1}},
        },
        header: { token: '{{token}}' },
  }
```
#### markDMAsRead
``` 
  {
        action: 'markDMAsRead',
        body: { 
          userId: '{{userId1}}',
          messageId: '{{messageId1}},
        },
        header: { token: '{{token}}' },
  }
```
#### mockUser
``` 
  {
        action: 'mockUser',
  }
```
#### reportMessage
``` 
  {
        action: 'reportMessage',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}',
          messageId: '{{messageId1}}',
          reportCategory: 1,
          pretendingTo: 1,
          reportReason: 'reportReason'
        },
        header: { token: '{{token}}' },
  }
```
#### sendDMMessage
``` 
  {
        action: 'sendDMMessage',
        body: { 
          userId: '{{userId1}}',
          content: 'content'
        },
        header: { token: '{{token}}' },
  }
```
#### sendInvitation
``` 
  {
        action: 'sendInvitation',
        body: { 
          invitationLink: '{{inviteLink}}'
          userIds: '{{userId1}}'
        },
        header: { token: '{{token}}' },
  }
```
#### sendMessageSticker
``` 
  {
        action: 'sendMessageSticker',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}',
          stickerId: '{{stickerId}}',
          
        },
        header: { token: '{{token}}' },
  }
```
#### sendMessage
``` 
  {
        action: 'sendMessage',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}',
          content: 'content',
          
        },
        header: { token: '{{token}}' },
  }
```
#### updateMessage
``` 
  {
        action: 'updateMessage',
        body: { 
          workspaceId: '0',
          channelId: '{{channelId}}',
          messageId: '{{messageId1}}'
          content: 'content',
          
        },
        header: { token: '{{token}}' },
  }
```
