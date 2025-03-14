import axios from 'axios';
import {
  resolveJsonVariables,
  resolveVariables,
} from '../helps/get-resolve-variables';
export async function getMessage(
  tokenParam: string,
  channelIdParam: string,
  messageIdParam: any,
) {
  try {
    const token = resolveVariables(tokenParam);
    const channelId = resolveVariables(channelIdParam);
    const messageId = resolveVariables(messageIdParam);
    const baseUrl = `${globalThis.urls}/MessageView/GetMessage?workspaceId=0&channelId=${channelId}&messageId=${messageId}`;
    const header = { 'x-session-token': token };

    const response = await axios.get(baseUrl, { headers: header });
    if (response.data) {
      const content = response?.data?.data?.message?.content || [];
      const ref = response?.data?.data?.message?.ref || [];
      globalThis.globalVar.set('content', content);
      globalThis.globalVar.set('ref', ref);
      return response.data;
    } else {
      throw new Error('No data in response');
    }
  } catch (error) {
    console.error('Error in get message:', error);
    throw new Error('Fail to get message');
  }
}
