import axios from 'axios';
export async function mockUser(header: any, body: any) {
  try {
    let payload;
    if (!body) {
      payload = { prefix: 'testfaker', quantity: 2, badge: 0 };
    } else {
      payload = { prefix: 'testfaker', quantity: body.quantity, badge: 0 };
    }
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
    return { response: response.data };
  } catch (error) {
    console.log(error)
    return { ok: false, response: error.response?.data?.error?.details };
  }
}
