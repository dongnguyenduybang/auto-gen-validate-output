import axios from 'axios';

export async function createChannel() {
  try {
    if (!globalThis.globalVar.get('token0')) {
      return { ok: false, response: 'Token not found to create channel' };
    }

    const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
    const payload = { workspaceId: '0', name: 'sb11_test' };
    const headers = globalThis.globalVar.get('token0');
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
