import axios from 'axios';
export async function deleteMockedUsers(method, path, header, body) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to delete mock user' };
  }
  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/DeleteMockedUsers?prefix=${body.prefix}`;

    const response = await axios.delete(baseUrl, {});

    if (!response.data.ok === true) {
      return {
        ok: false,
        response: 'Invalid data get channel returned from API',
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
