import axios from "axios";

export async function getStickerCollection(collectionIid: string){
    try {

        const baseUrl = `${globalThis.urls}/StickerView/GetStickerCollection?collectionId=${collectionIid}`;
        const headers = {   "Content-Type": "application/json", };
  
        const response = await axios.get(baseUrl, { headers: headers });
        return {
            data: response.data.data
        }
        
    } catch (error) {
      console.error('error in get sticker collection:', error);
  
      throw new Error('fail to  get sticker collection');
    }
}

