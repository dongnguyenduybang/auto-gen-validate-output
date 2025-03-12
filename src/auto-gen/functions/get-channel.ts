import axios from "axios";

export async function getChannel(token, channelId: string){
    try {

        const baseUrl = `${globalThis.urls}/ChannelView/GetChannel?workspaceId=0&channelId=${channelId}`;
        const headers = {   "Content-Type": "application/json", "x-session-token": token };
  
        const response = await axios.get(baseUrl, { headers: headers });
        if(response.data.ok === true){
            return response.data.data
        }

        
    } catch (error) {
      console.error('error in get user:', error);
  
      throw new Error('fail to  get user');
    }
}

