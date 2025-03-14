import axios from 'axios';

export async function mockUser(
  prefix: string,
  quantity: number,
  badge: number,
) {
  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/MockUsers`;
    const payload = { prefix: prefix, quantity: quantity, badge: badge };
    const response = await axios.post(baseUrl, payload);

    if (response.data && response.data.data.length > 0) {
      response.data.data.forEach((user: any, index: number) => {
        if (quantity === 1) {
          globalThis.globalVar.set('userId', user.userId);
          globalThis.globalVar.set('token', user.token);
        } else {
          // console.log(`token_${index}`,user.token)
          globalThis.globalVar.set(`userId_${index}`, user.userId);
          globalThis.globalVar.set(`token_${index}`, user.token);
        }
      });
    } else {
      throw new Error('invalid response from MockUsers api');
    }
  } catch (error) {
    console.error('eror in MockUsers:', error);
    throw new Error('fail to get MockUsers');
  }
}

// export async function mockUser(
//   prefix?: string,
//   quantity?: number,
//   badge?: number,
// ) {
//   return globalThis.globalVar.set(
//     'token',
//     'si_zbMf_u9EJBZjanH-mWW6ZNMh-vosAW89owMWwC8bFUMtUNXdddIiSRasITgdFnvA5OFohcydLgsZwb7YG9g',
//   );
// }
