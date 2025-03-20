import axios from 'axios';

export async function mockUser(body) {
  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/MockUsers`;
    const payload = body;
    // Gọi API để tạo mock users
    const response = await axios.post(baseUrl, payload);
    // Kiểm tra nếu phản hồi không chứa dữ liệu hợp lệ
    if (
      !response.data ||
      !Array.isArray(response.data.data) ||
      response.data.data.length === 0
    ) {
      return { error: 'No valid data returned from the server' };
    }

    // Xử lý dữ liệu phản hồi
    response.data.data.forEach((user: any, index: number) => {
      if (body.quantity === 1) {
        globalThis.globalVar.set('userId', user.userId);
        globalThis.globalVar.set('token', user.token);
      } else {
        globalThis.globalVar.set(`userId_${index}`, user.userId);
        globalThis.globalVar.set(`token_${index}`, user.token);
      }
    });

    return { response: response.data };
  } catch (error) {
    return { ok: false, result: error.response.data.error.details };
  }
}
