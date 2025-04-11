import axios from 'axios';

export async function deleteMessagesForEveryone(header, body) {

  if (!header.token) {
    return { error: 'Token not found to delete messages for everyone' };
  }
  try {
    const headers = { 'x-session-token': header.token };
    const baseUrl = `${globalThis.urls}/Message/DeleteMessagesForEveryone?workspaceId=0&channelId=${body.channelId}&messageIds[]=${body.messageId}`;
    const response = await axios.delete(baseUrl, { headers: headers });
    if (!response.data) {
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
