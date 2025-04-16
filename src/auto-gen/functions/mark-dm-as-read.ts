import axios from 'axios';

export async function markDmAsRead(
  method, path,header, body
) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to mark dm as read'}
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/MarkDMAsRead` ;
    const methodLowCase =  method.toLowerCase() || 'post' ;
    const payload = {
      userId: body.userId,
      messageId: body.messageId,
    }
    const headers = { 'x-session-token': header.token };

    const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
    if (!response.data || !response.data.data) {
      return {
        ok: false,
        response: 'Invalid data mark dm as read returned from API',
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
