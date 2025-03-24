import axios from 'axios';

export async function mockUser() {
  try {
    const payload = { prefix: 'test12345', quantity: 2, badge: 0 };
    const response = await axios.post(
      `${globalThis.urls}/InternalFaker/MockUsers`,
      {
        ...payload,
      },
    );

    if (!response.data?.data?.length) {
      return {
        ok: false,
        response: 'Invalid data mock user returned from API',
      };
    }
    response.data.data.forEach((user: any, index: number) => {
      globalThis.globalVar.set(`userId${index}`, user.userId);
      globalThis.globalVar.set(`token${index}`, user.token);
    });
    return { response: response.data };
  } catch (error) {
    return { ok: false, response: error.response?.data?.error?.details };
  }
}
