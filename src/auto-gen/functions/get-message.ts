/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getMessage(method, path, header, body) {
    if (!header.token) {
        return { ok: false, response:  'Token not found to get message' };
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/MessageView/GetMessage` ;
        const methodLowCase =  method.toLowerCase() || 'get' ;
        const queryParams = new URLSearchParams();
        queryParams.append('messageId', body.messageId);
        queryParams.append('channelId', body.channelId);
        const headers = { 'x-session-token': header.token };
        const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
        if (!response.data || !response.data.data || !response.data.data.message) {
            return {
                ok: false,
                response: 'Invalid data get message returned from API',
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
