import axios from 'axios';

export async function deleteDmMessagesOnlyMe(method, path,header, body) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to delete dm messages only me' };
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/DeleteDMMessagesOnlyMe` ;
    const methodLowCase =  method.toLowerCase() || 'delete' ;
    const queryParams = new URLSearchParams();
    queryParams.append('userId', body.userId);
    if(Array.isArray(body.messageId)){
      body.messageIds.forEach(messageId => {
        queryParams.append('messageIds[]', messageId);
      });
    }else{
      queryParams.append('messageIds[]', body.messageId);
    }
    const headers = { 'x-session-token': header.token };
    const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data delete dm message returned from API',
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
