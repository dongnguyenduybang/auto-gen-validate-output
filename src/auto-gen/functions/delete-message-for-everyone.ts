import axios from 'axios';
import { resolveJsonVariables } from '../helps/get-resolve-variables';

export async function deleteMessageForEveryone(
  workspaceId: string,
  channelId: string,
  messageId: string,
  headerRequest?: string,
) {
  const headers = resolveJsonVariables(headerRequest);

  try {
    const baseUrl = `${globalThis.urls}/Message/DeleteMessageForEveryone?workspaceId=${workspaceId}&channelId=${channelId}&messageId=${messageId}`;

    const response = await axios.delete(baseUrl, { headers: headers });

    if (response.data.ok === true) {
      console.log('delete message successfully');
    } else {
      throw new Error('invalid response from api');
    }
  } catch (error) {
    // console.log('error in delete message:', error)
  }
}
