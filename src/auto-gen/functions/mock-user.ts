import axios from 'axios';

export async function mockUser(body) {
  try {
    const response = await axios.post(
      `${globalThis.urls}/InternalFaker/MockUsers`,
      {
        ...body,
        quantity: body.quantity || 1,
      },
    );

    if (!response.data?.data?.length) {
      return {
        ok: false,
        response: 'Invalid data mock user returned from API',
      };
    }
    return {
      response: response.data,
    };
  } catch (error) {
    return { response: false, result: error.response?.data?.error?.details };
  }
}
