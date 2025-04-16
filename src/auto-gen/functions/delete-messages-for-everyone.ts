import axios from 'axios';

export async function deleteMessagesForEveryone(method, path, header, body) {
  if (!header.token) {
    return { ok: false, response: 'Token not found to delete messages for everyone' };
  }
  try {
    const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/DeleteMessagesForEveryone` ;
    const methodLowCase =  method.toLowerCase() || 'delete' ;
    const queryParams = new URLSearchParams();
    queryParams.append('workspaceId', body.workspaceId || '0' );
    queryParams.append('channelId', body.channelId);
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
        response: 'Invalid data send message returned from API',
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
