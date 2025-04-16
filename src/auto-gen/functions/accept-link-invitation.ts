import axios from 'axios';

export async function acceptInvitation(method, path, header, body) {
  try {
    if (!header.token) {
      return { error: 'Token not found to accept invitation' };
    }
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Invitation/AcceptInvitation` ;
    const methodLowCase =  method.toLowerCase() || 'post' ;
    const payload = { 
      invitationLink: body.linkInvitation
     };
    const headers = { 'x-session-token': header.token };
    const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
    if (!response.data || !response.data.data || !response.data.data.channel) {
      return {
        ok: false,
        response: 'Invalid data accept invitation returned from API',
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
