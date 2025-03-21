import axios from 'axios';

export async function mockUser(body) {
  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/MockUsers`;
    const payload = body;
    const response = await axios.post(baseUrl, payload);
    if (
      !response.data ||
      !Array.isArray(response.data.data) ||
      response.data.data.length === 0
    ) {
      return { error: 'No valid data returned from the server' };
    }

    console.log(response);
    return { response: response.data };
  } catch (error) {
    return { ok: false, result: error.response.data.error.details };
  }
}
