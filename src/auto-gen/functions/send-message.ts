import axios from 'axios';

export async function sendMessage(header, body) {
  try {
    if (!header.token) {
      return { error: 'Token not found to send message' };
    }
    const baseUrl = `${globalThis.urls}/Message/SendMessage`;
    const payload = {
      workspaceId: body.workspaceId,
      channelId: body.channelId,
      content: body.content,
    };
    const headers = { 'x-session-token': header.token };
    const response = await axios.post(baseUrl, payload, { headers: headers });
    if (!response.data || !response.data.data || !response.data.data.message) {
      return {
        ok: false,
        response: 'Invalid data send message returned from API',
      };
    } else {
      return { response: response.data };
    }
  } catch (error) {
    return {
      ok: false,
      response:
        error?.response?.data?.error?.details ||
        error?.response?.data ||
        'Unauthorized request',
    };
  }
}
