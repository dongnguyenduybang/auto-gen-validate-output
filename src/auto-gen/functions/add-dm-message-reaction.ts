import axios from 'axios';

export async function addDmMessageReaction(
  method, path,header, body
) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to add dm message reaction'}
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/AddDMMessageReaction` ;
    const methodLowCase =  method.toLowerCase() || 'post' ;
    const payload = {
      userId: body.userId,
      messageId: body.messageId,
      emoji: body.emoji,
    }
    const headers = { 'x-session-token': header.token };

    const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
    if (!response.data || !response.data.data || !response.data.data.message) {
      return {
        ok: false,
        response: 'Invalid data add dm message reaction returned from API',
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
