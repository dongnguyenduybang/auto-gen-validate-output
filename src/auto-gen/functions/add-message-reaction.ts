import axios from 'axios';

export async function addMessageReaction(
  token: string,
  workspaceIdField: string,
  channelIdField: string,
  messageIdField: string,
  emojiField: string,
) {
  try {
    if (!token) {
      throw new Error('token not found in global var');
    }

    const baseUrl = `${globalThis.urls}/Message/AddMessageReaction`;
    const payload = {
      workspaceId: workspaceIdField,
      channelId: channelIdField,
      messageId: messageIdField,
      emoji: emojiField,
    };
    const headers = { 'x-session-token': token };

    const response = await axios.post(baseUrl, payload, { headers: headers });
    if (response.data.data.message) {
      const messageId = response.data.data.message.reactions;
      const key = Object.keys(messageId)[0];
      globalThis.globalVar.set('emoji', key);
    } else {
      throw new Error('invalid response add message reaction api');
    }
  } catch (error) {
    console.error('error in add message reaction:', error);

    throw new Error('fail to add message reaction');
  }
}
