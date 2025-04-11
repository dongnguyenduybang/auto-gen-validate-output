import axios from 'axios';

export async function deleteMockedUsers(header, prefix) {
  if (!header.token) {
    return { error: 'Token not found to delete mock user' };
  }
  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/DeleteMockedUsers?prefix=${prefix}`;

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
