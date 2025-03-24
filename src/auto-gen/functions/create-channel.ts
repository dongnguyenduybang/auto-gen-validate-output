import axios from 'axios';

export async function createChannel(header, body) {
  try {
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
      return {
        ok: false,
        response: 'Invalid data create channel returned from API',
      };
    } else {
      return { ok: true, response: response.data };
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
