// src/auto-gen/config/event-config.ts
export const EVENTS_BY_ACTION = {
    // openConnection: [
    //     'com.halome.realtime.v3.gateway.connected'
    // ],
    createChannel: [
      'com.halome.chat.v3.channel.created',
      'com.halome.chat.v3.message.created'
    ],
    acceptInvitation: [
      'com.halome.chat.v3.member.joined',
      'com.halome.chat.v3.message.created' // Tin nhắn hệ thống "%s joined this channel"
    ],
    sendMessage: [
      'com.halome.chat.v3.message.created',
      'com.halome.chat.v3.unread_messages.updated'
    ],
    resume: [
      'com.halome.websocket.v3.reconnection_started'
    ] 
  };