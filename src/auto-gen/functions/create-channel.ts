import axios from 'axios';
export async function createChannel(token: string, name: string) {
  try {
      if (!token) {
        throw new Error('token not found in global var');
      }

      const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
      const payload = { workspaceId: '0', name: name };
      const headers = { 'x-session-token': token };

      const response = await axios.post(baseUrl, payload, { headers: headers });
      if (response.data.data.channel) {
        const channelId = response.data.data.channel.channelId;
        const invitationLink = response.data.data.channel.invitationLink;
        globalThis.globalVar.set('channelId', channelId);
        globalThis.globalVar.set('invitationLink', invitationLink);

      } else {
        throw new Error('invalid response CreateChannel api');
      }
  } catch (error) {
    console.error('error in createChannel:', error);

    throw new Error('fail to create channels');
  }
}

// export async function createChannel(token, name) {
//   // Giả lập logic tạo channel và trả về channelId
//   const channelId = `01JN2FK2KRJMJA7G54MTW1J240`;
//   const messageId = `01JN2FK7JMX8M6693KJZW8SJJ5`;
//   globalThis.globalVar.set('channelId', channelId);
//   globalThis.globalVar.set('messageId', messageId);
// }
