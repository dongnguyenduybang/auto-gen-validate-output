// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getMessage(header, body) {
  try {
    // if (!header.token) {
    //   return { error: 'Token not found to create channel' };
    // }
    // const baseUrl = `${globalThis.urls}/MessageView/GetMessage?workspaceId=0&channelId=${channelId}&messageId=${messageId}`;
    // const header = { 'x-session-token': header.token };
    // const response = await axios.get(baseUrl, { headers: header });
    // if (!response.data || !response.data.data || !response.data.data.message) {
    //   return { error: 'Invalid data get message returned from API' };
    // } else {
    //   const content = response?.data?.data?.message?.content || [];
    //   const ref = response?.data?.data?.message?.ref || [];
    //   globalThis.globalVar.set('content', content);
    //   globalThis.globalVar.set('ref', ref);
    //   return { ok: true, result: response.data };
    // }
  } catch (error) {
    return { ok: false, result: error.response.data.error.details };
  }
}
