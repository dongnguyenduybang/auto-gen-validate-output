import axios from 'axios';
export async function deleteAllMessagesOnlyMe(method, path, header, body) {
  if (!header.token) {
    return { error: 'Token not found to delete all messages only me' };
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/DeleteAllMessagesOnlyMe` ;
    const methodLowCase =  method.toLowerCase() || 'delete' ;
    const queryParams = new URLSearchParams();
    queryParams.append('workspaceId', body.workspaceId || '0' );
    queryParams.append('channelId', body.channelId);
    const headers = { 'x-session-token': header.token };
    const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
    if (!response.data) {
      return {
        ok: false,
        response: 'Invalid data delete all message only me returned from API',
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
