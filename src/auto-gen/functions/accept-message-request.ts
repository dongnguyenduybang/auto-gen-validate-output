import axios from 'axios';

export async function acceptMessageRequest(
  method, path,header, body
) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to accept message'}
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Channel/AcceptMessageRequest` ;
    const methodLowCase =  method.toLowerCase() || 'post' ;
    const payload = {
      userId: body.userId,
    }
    const headers = { 'x-session-token': header.token };

    const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
    // console.log(response.data)
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data accept message returned from API',
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
