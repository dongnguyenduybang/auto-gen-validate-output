/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getSticker(method, path, header, body) {
    if (!header.token) {
        return { ok: false, response:  'Token not found to get sticker' };
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/StickerView/GetSticker` ;
        const methodLowCase =  method.toLowerCase() || 'get' ;
        const queryParams = new URLSearchParams();
        queryParams.append('stickerId', body.stickerId);
        const headers = { 'x-session-token': header.token };
        const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
        if (!response.data || !response.data.data) {
            return {
                ok: false,
                response: 'Invalid data get sticker returned from API',
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
