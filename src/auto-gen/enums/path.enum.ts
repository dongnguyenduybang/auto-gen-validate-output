export const APIPath = {
    Invitation: {
        AcceptInvitation: '/Invitation/AcceptInvitation',
        DeclineInvitation: '/Invitation/DeclineInvitation',
        CreateInvitation: '/Invitation/CreateInvitation',
        SendInvitation: '/Invitation/SendInvitation',

    },
    Message: {
        SendMessage: '/Message/SendMessage',
        UpdateMessage: '/Message/UpdateMessage',
        AddMessageReaction: '/Message/AddMessageReaction',
        RevokeMessageReaction: '/Message/RevokeMessageReaction',
        QuoteMessage: '/Message/QuoteMessage',
        ForwardMessagesToChannel: '/Message/ForwardMessagesToChannel',
        ReportMessage: '/Message/ReportMessage',
        MarkAsRead: '/Message/MarkAsRead',
        SendMessageSticker: '/Message/SendMessageSticker',
        MarkAllChannelsAsRead: '/Message/MarkAllChannelsAsRead',
        SendDMMessage: '/Message/SendDMMessage',
        SendDMMessageSticker: '/Message/SendDMMessageSticker',
        UpdateDMMessage: '/Message/UpdateDMMessage',
        AddDMMessageReaction: '/Message/AddDMMessageReaction',
        RevokeDMMessageReaction: '/Message/RevokeDMMessageReaction',
        QuoteDMMessage: '/Message/QuoteDMMessage',
        ForwardMessagesToDMChannel: '/Message/ForwardMessagesToDMChannel',
        ReportDMMessage: '/Message/ReportDMMessage',
        MarkDMAsRead: '/Message/MarkDMAsRead',
        Translation: '/Message/Translation',

    },
    ViewChannel: {
        GetChannel: '/ChannelView/GetChannel',
        ListAllChannels: '/ChannelView/ListAllChannels',
        GetDMChannel: '/ChannelView/GetDMChannel',
        ListChannels: '/ChannelView/ListChannels',
        ListDMChannels: '/ChannelView/ListDMChannels',
        ListInComingMessageRequests: '/ChannelView/ListInComingMessageRequests',
        ListOutGoingMessageRequests: '/ChannelView/ListOutGoingMessageRequests',
        SyncAllChannels: '/ChannelView/SyncAllChannels',

    },
    ViewMessage: {
        GetMessage: '/MessageView/GetMessage',
        GetDMMessage: '/MessageView/GetDMMessage',
        ListMessages: '/MessageView/ListMessages',
        ListDMMessages: '/MessageView/ListDMMessages',
        JumpToDMMessage: '/MessageView/JumpToDMMessage',
        JumpToMessage: '/MessageView/JumpToMessage',

    },
    ViewUser: {
        GetUser: '/UserView/GetUser',
        GetUserByUsername: '/UserView/GetUserByUsername',
        GetMe: '/UserView/GetMe',
        SyncUsers: '/UserView/SyncUsers',
        ListBlockedUsers: '/UserView/ListBlockedUsers',
    },
    Channel: {
        CreateChannel: '/Channel/CreateChannel',
        UpdateChannelName: '/Channel/UpdateChannelName',
        UpdateChannelAvatar: '/Channel/UpdateChannelAvatar',
        UpdateDMMediaPermissionSetting: '/Channel/UpdateDMMediaPermissionSetting',
        AcceptMessageRequest: '/Channel/AcceptMessageRequest',
        RejectMessageRequest: '/Channel/RejectMessageRequest',

    },
    Search: {
        SearchChannels: '/Search/SearchChannels',
        SearchFriends: '/Search/SearchFriends',
        SearchUsers: '/Search/SearchUsers',
        SearchMembers: '/Search/SearchMembers',
    },
    ViewSticker: {
        GetSticker: '/StickerView/GetSticker',
        ListAllStickerCollections: '/StickerView/ListAllStickerCollections',
        GetStickerCollection: '/StickerView/GetStickerCollection',
        ListStickers: '/StickerView/ListStickers',
        SyncStickerCollections: '/StickerView/SyncStickerCollections',
    },
    WebSocket: {
        OpenConnection: '/WebsocketManager/OpenConnection',
    }
};
