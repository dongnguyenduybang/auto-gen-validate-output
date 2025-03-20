import axios from 'axios';

export async function createChannel(header, body) {
  try {
    if (!header.token) {
      return { error: 'Token not found to create channel' };
    }

    const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
    const payload = body;
    const headers = header.token;

    const response = await axios.post(baseUrl, payload, {
      headers: { 'x-session-token': headers },
    });
    if (!response.data || !response.data.data || !response.data.data.channel) {
      return { error: 'Invalid data create channel returned from API' };
    } else {
      // const channelId = response.data.data.channel.channelId;
      // const invitationLink = response.data.data.channel.invitationLink;
      // const lastMessageId = response.data.includes.messages[0].lastMessageId;
      // const content = response.data.includes.messages[0].content;
      // const messageId = response.data.includes.messages[0].messageId;
      // globalThis.globalVar.set('channelId', channelId);
      // globalThis.globalVar.set('invitationLink', invitationLink);
      // globalThis.globalVar.set('lastMessageId', lastMessageId);
      // globalThis.globalVar.set('contentChannel', content);
      // globalThis.globalVar.set('messageIdChannel', messageId);
      return { response: response.data };
    }
  } catch (error) {
    return { ok: false, result: error.response.data.error.details };
  }
}
