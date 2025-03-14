import axios from "axios";

export async function getListMessages(token, channelId: string){
    try {
        console.log(token, 'sss', channelId)
        const baseUrl = `${globalThis.urls}/MessageView/ListMessages?workspaceId=0&channelId=${channelId}`;
        const headers = {   "Content-Type": "application/json",  "x-session-token": token};
  
        const response = await axios.get(baseUrl, { headers: headers });
        return {
            data: response.data.data
        }
        
    } catch (error) {
      console.error('error in get list messages:', error);
  
      throw new Error('fail to  get list messages');
    }
}

