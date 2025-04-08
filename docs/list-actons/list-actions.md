
## List Action

- [acceptInvitation](#acceptInvitation)
- [addMessageReaction](#addMessageReaction)
- [createChannel](#createChannel)
- [getChannel](#getChannel)
- [getMessage](#getMessage)
- [getStickerCollection](#getStickerCollection)
- [getSticker](#getSticker)
- [getListMessages](#getListMessages)
- [mockChannel](#mockChannel)
- [mockUser](#mockUser)
- [sendInvitation](#sendInvitation)
- [sendMessage](#sendMessage)
- ...

### Action Detail

#### acceptInvitation
``` 
  {
        action: 'getChannel',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### addMessageReaction
``` 
  {
        action: 'addMessageReaction',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### createChannel
``` 
  {
        action: 'createChannel',
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
        body: { messageId: '{{messageId}}'},
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
        action: 'stickerId',
        body: { stickerId: '{{stickerId}}'},
        header: { token: '{{token}}' },
  }
```

#### getListMessages
``` 
  {
        action: 'getListMessages',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### mockChannel
``` 
  {
        action: 'mockChannel',
  }
```

#### mockUser
``` 
  {
        action: 'mockUser',
        body: { quantity: 2 },
  }
```

#### sendInvitation
``` 
  {
        action: 'sendInvitation',
        body: { invitationLink: '{{inviteLink}}', userIds: "['{{userId1}}','{{userId2}}']" }
  }
```

#### sendMessage
``` 
  {
        action: 'sendMessage',
        body: { channelId: '{{channelId}}', content: 'aaaaa' },
        header: { token: '{{token}}' },
  }
```


