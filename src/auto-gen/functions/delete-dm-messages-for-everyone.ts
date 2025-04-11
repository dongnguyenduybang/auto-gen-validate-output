import axios from 'axios';

export async function deleteDmMessagesForEveryone(header, body) {
  if (!header.token) {
    return { error: 'Token not found to delete dm messages for everyone' };
  }
  try {
    const headers = { 'x-session-token': header.token };
    const baseUrl = `${globalThis.urls}/Message/DeleteDMMessagesForEveryone?userId=${body.userId}&messageIds[]=${body.messageId}`;
    const response = await axios.delete(baseUrl, { headers: headers });
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data delete dm message returned from API',
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
