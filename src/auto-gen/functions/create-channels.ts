import axios from 'axios';

export async function createChannels(token: string, name: string) {
  try {
    if (!token) {
      throw new Error('token not found in global var');
    }

    const indexs = 2
    const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
    const payload = { workspaceId: '0', name: name };
    const headers = { 'x-session-token': token };

    for (let index = 0; index < indexs; index++) {
      const response = await axios.post(baseUrl, payload, { headers: headers });

      if (response.data.data.channel) {
        const channelId = response.data.data.channel.channelId;
        const invitationLink = response.data.data.channel.invitationLink;
        console.log(`channelId_${index}`, channelId)
        console.log(`invitationLink_${index}`, invitationLink)
        globalThis.globalVar.set(`channelId_${index}`, channelId);
        globalThis.globalVar.set(`invitationLink_${index}`, invitationLink);

      } else {

        throw new Error('invalid response CreateChannels api');
      }
    }
  } catch (error) {
    console.error('error in createChannels:', error);

    throw new Error('fail to createChannels');
  }
}
