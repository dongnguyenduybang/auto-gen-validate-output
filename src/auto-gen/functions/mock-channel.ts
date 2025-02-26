import axios from "axios";

export async function mockChannel(prefix: string, quantity: number, totalMessages: number, typeChannel: number) {

  try {

    const baseUrl = `${globalThis.urls}/InternalFaker/MockChannels`;
    const payload = { prefix: prefix, quantity: quantity, totalMessages: totalMessages,typeChannel: typeChannel};
    const response = await axios.post(baseUrl, payload, { headers: globalThis.geoCode });

     console.log(response)
    // if (response.data && response.data.data.length > 0) {

       

    //   response.data.data.forEach((channel: any, index: number) => {

    //     if (quantity === 1) {

    //       globalThis.globalVar.set('channelId', channel.channelId);
    //     } else {

    //       globalThis.globalVar.set(`channelId${index}`, channel.channelId);
       
    //     }
    //   });
    // } else {
    //   throw new Error('invalid response from MockUsers api');
    // }
  } catch (error) {

    console.error('eror in MockUsers:', error);
    throw new Error('fail to get MockUsers');
  }
}