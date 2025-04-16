/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getChannel(method, path, header, body) {
    if (!header.token) {
        return { ok: false, response:  'Token not found to get channel' };
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/ChannelView/GetChannel` ;
        const methodLowCase =  method.toLowerCase() || 'get' ;
        const queryParams = new URLSearchParams();
        queryParams.append('workspaceId', body.workspaceId || '0' );
        queryParams.append('channelId', body.channelId);
        const headers = { 'x-session-token': header.token };
        const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
        if (!response.data || !response.data.data || !response.data.data.channel) {
            return {
                ok: false,
                response: 'Invalid data get channel returned from API',
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
