/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getChannel(header, body) {
    try {
        if (!header.token) {
            return { error: 'Token not found to get channel' };
        }
        const baseUrl = `${globalThis.urls}/ChannelView/GetChannel?workspaceId=0&channelId=${body.channelId}`;
        const headers = { 'x-session-token': header.token };
        const response = await axios.get(baseUrl, { headers: headers });
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
