import axios from 'axios';

export async function updateMessage(method, path, header, body) {
  try {
    if (!header.token) {
      return { error: 'Token not found to update message' };
    }
    const baseUrl = `${globalThis.urls}${path}`;
    const methodLowCase = method.toLowerCase();
    const payload = {
      workspaceId: body.workspaceId || "0",
      channelId: body.channelId,
      messageId: body.messageId,
      content: body.content,
    };
    const headers = { 'x-session-token': header.token };
    const response = await axios[methodLowCase](baseUrl, payload, {
      headers: headers,
    });
    if (!response.data || !response.data.data || !response.data.data.message) {
      return {
        ok: false,
        response: 'Invalid data update message returned from API',
      };
    } else {
      return { response: response.data };
    }
  } catch (error) {
    return {
      ok: false,
      response: {
        status: error.response.status,
        statusText: error.response.statusText,
        detailError:
          error?.response?.data?.error?.details ||
          error?.response?.data ||
          'Unauthorized request',
      },
    };
  }
}
