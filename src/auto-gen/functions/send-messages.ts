import axios from 'axios';

export async function sendMessages(token: string, workspaceIdField: string, channelIdField: string, contentField: string, refField: string) {
  try {
      if (!token) {
        throw new Error('token not found in global var');
      }

      const indexs = 2
      const baseUrl = `${globalThis.urls}/Message/SendMessage`;
      const payload = { workspaceId: workspaceIdField , channelId: channelIdField, content: contentField, ref: refField };
      const headers = { 'x-session-token': token };

      for (let index = 0; index < indexs; index++) {
        const response = await axios.post(baseUrl, payload, { headers: headers });
  
        if (response.data.data.message) {
          const messageId = response.data.data.message.messageId;
      
          globalThis.globalVar.set(`messageId${index}`, messageId);

        } else {
          
          throw new Error('Invalid response from send message API');
        }
      }
  } catch (error) {
    console.error('error in send message:', error);

    throw new Error('fail to send message');
  }
}
