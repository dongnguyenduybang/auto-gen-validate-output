import axios from 'axios';
import { TestContext } from '../test-execute-step/text-context';

export async function createChannel(context: TestContext) {
  try {
    const token = context.getValue('token');
    if (!token) {
      return { ok: false, response: 'Token not found to create channel' };
    }
    const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
    const payload = { workspaceId: '0', name: 'sb11_test' };
    const response = await axios.post(baseUrl, payload, {
      headers: { 'x-session-token': token },
    });
    if (!response.data || !response.data.data || !response.data.data.channel) {
      return {
        ok: false,
        response: 'Invalid data create channel returned from API',
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
