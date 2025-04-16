/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getListMessage(method, path, header, body) {
    if (!header.token) {
        return { ok: false, response:  'Token not found to get list messages' };
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/MessageView/ListMessages` ;
        const methodLowCase =  method.toLowerCase() || 'get' ;
        const queryParams = new URLSearchParams();
        queryParams.append('workspaceId', body.workspaceId || '0' );
        queryParams.append('channelId', body.channelId);
        const headers = { 'x-session-token': header.token };
        const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
        if (!response.data || !response.data.data) {
            return {
                ok: false,
                response: 'Invalid data get list messages returned from API',
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
