/* eslint-disable prettier/prettier */
import axios from 'axios';
export async function getStickerCollection(method, path, header, body) {
    if (!header.token) {
        return { ok: false, response:  'Token not found to get sticker collection' };
    }
    try {
        const baseUrl = `${globalThis.urls}${path}` || `${globalThis.urls}/StickerView/GetStickerCollection` ;
        const methodLowCase =  method.toLowerCase() || 'get' ;
        const queryParams = new URLSearchParams();
        queryParams.append('collectionId', body.collectionId);
        const headers = { 'x-session-token': header.token };
        const response = await axios[methodLowCase](`${baseUrl}?${queryParams.toString()}`, { headers: headers });
        if (!response.data || !response.data.data) {
            return {
                ok: false,
                response: 'Invalid data get sticker collection returned from API',
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
