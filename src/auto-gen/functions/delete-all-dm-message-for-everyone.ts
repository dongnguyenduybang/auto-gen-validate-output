import axios from 'axios';

export async function deleteAllDmMessagesForEveryone(method, path,header, body) {
  if (!header.token) {
    return { error: 'Token not found to delete all dm messages for everyone' };
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/DeleteAllDMMessagesForEveryone` ;
    const methodLowCase =  method.toLowerCase() || 'delete' ;
    const queryParams = new URLSearchParams();
    queryParams.append('userId', body.userId);
    const headers = { 'x-session-token': header.token };
    const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data delete all dm message returned from API',
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
