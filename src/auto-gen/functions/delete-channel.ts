import axios from 'axios';

export async function deleteChannel(header, body) {
  if (!header.token) {
    return { error: 'Token or userId not found to delete channel' };
  }
  console.log(header, body);
  try {
    const baseUrl = `${globalThis.urls}/Channel/DeleteChannel?workspaceId=0&channelId=${body.channelId}`;
    const headers = {
      'x-session-token': header.token
    };
    const response = await axios.delete(baseUrl, { headers: headers });

    console.log(response.data);
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data delete channel returned from API',
      };
    } else {
      return { response: response.data };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      response:
        error?.response?.data?.error?.details ||
        error?.response?.data ||
        'Unauthorized request',
    };
  }
}
