import axios from 'axios';

export async function sendMessage(
  token: string,
  workspaceIdField: string,
  channelIdField: string,
  contentField: string,
  refField: string,
) {
  try {
    if (!token) {
      throw new Error('token not found in global var');
    }

    const baseUrl = `${globalThis.urls}/Message/SendMessage`;
    const payload = {
      workspaceId: workspaceIdField,
      channelId: channelIdField,
      content: contentField,
      ref: refField,
    };
    const headers = { 'x-session-token': token };

    const response = await axios.post(baseUrl, payload, { headers: headers });
    if (response.data.data.message) {
      const messageId = response.data.data.message.messageId;
      const content = response.data.data.message.content;
      globalThis.globalVar.set('messageId', messageId);
      globalThis.globalVar.set('contentBefore', content);
    } else {
      throw new Error('invalid response send message api');
    }
  } catch (error) {
    console.error('error in send message:', error);

    throw new Error('fail to send message');
  }
}
