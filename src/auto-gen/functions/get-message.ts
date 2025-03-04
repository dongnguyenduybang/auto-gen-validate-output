import axios from 'axios';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
export async function getMessage(params: any, messageId: any) {
    try {
        const param = resolveJsonVariables(params);
        const baseUrl = `${globalThis.urls}/MessageView/GetMessage?workspaceId=0&channelId=${param.channelId}&messageId=${messageId}`;
        const header = { 'x-session-token': param.token };

        const response = await axios.get(baseUrl, { headers: header });

        if (response.data) {
            return { data: response.data }; 
        } else {
            throw new Error('No data in response');
        }
    } catch (error) {
        console.error('Error in get message:', error);
        throw new Error('Fail to get message');
    }
}
