import axios from 'axios';

export async function sendMessageSticker(
    method, path, header, body
) {
    if (!header.token) {
        return { ok: false, response: 'Token not found to send message sticker' }
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/Message/SendMessageSticker`;
        const methodLowCase = method.toLowerCase() || 'post';
        const payload = {
            workspaceId: body.workspaceId || '0',
            channelId: body.channelId,
            stickerId: body.stickerId,
            ref: body.ref,
        }
        const headers = { 'x-session-token': header.token };

        const response = await axios[methodLowCase](baseUrl, payload, { headers: headers });
        if (!response.data || !response.data.data || !response.data.data.message) {
            return {
                ok: false,
                response: 'Invalid data send message sticker returned from API',
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
