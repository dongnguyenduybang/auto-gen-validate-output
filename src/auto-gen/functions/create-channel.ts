import axios from 'axios';

export async function createChannel(header, body) {
  try {
    console.log(header);
    if (!header.token) {
      return { error: 'Token not found to create channel' };
    }

    const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
    const payload = body;
    const headers = header.token;

    const response = await axios.post(baseUrl, payload, {
      headers: { 'x-session-token': headers },
    });
    if (!response.data || !response.data.data || !response.data.data.channel) {
      return { error: 'Invalid data create channel returned from API' };
    } else {
      return { response: response.data };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, result: error.response.data.error.details };
  }
}
