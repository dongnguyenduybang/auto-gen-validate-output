import axios from 'axios';

export async function sendInvitation(
  method, path,header, body
) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to send invitation'}
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Invitation/SendInvitation` ;
    const methodLowCase =  method.toLowerCase() || 'post' ;
    const payload = {
      userId: body.userId,
      invitationLink: body.invitationLink,
    }
    const headers = { 'x-session-token': header.token };

    const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
    if (!response.data || !response.data.data || !response.data.data.message) {
      return {
        ok: false,
        response: 'Invalid data send invitation returned from API',
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
