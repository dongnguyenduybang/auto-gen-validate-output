import axios from 'axios';

export async function getListMessages(header, body) {
  try {
    if (!header.token) {
      return { error: 'Token not found to get list message' };
    }
    const baseUrl = `${globalThis.urls}/MessageView/ListMessages?workspaceId=${body.workspaceId}&channelId=${body.channelId}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-session-token': header.token,
    };

    const response = await axios.get(baseUrl, { headers: headers });
    if (!response.data || !response.data.data) {
      return {
        ok: false,
        response: 'Invalid data get list message returned from API',
      };
    } else {
      return { response: response.data };
    }
  } catch (error) {
    console.log(error.response.data);
    return {
      ok: false,
      result:
        error?.response?.data?.error?.details ||
        error?.response?.data ||
        'Default error get message',
    };
  }
}
