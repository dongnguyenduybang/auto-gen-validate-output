// import axios from "axios";
// import { countTokens } from "../helps/utils";

// export async function createChannel(token: string, name: string) {

//   try {

//     const quantityUser = countTokens();
//     //nếu số lượng token từ mock user = 1 => k thêm index phía sau  và ngược lại 
//     if (quantityUser === 1) {

//       const token = globalThis.globalVar.get('token');
//       if (!token) {
//         throw new Error('token not found in global var');
//       }

//       const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
//       const payload = { workspaceId: "0", name: name }; 
//       const headers = { 'x-session-token': token };

//       const response = await axios.post(baseUrl, payload, { headers });

//       if ( response.data.data.channel) {

//         const channelId = response.data.data.channel.channelId;
//         globalThis.globalVar.set('channelId', channelId); 

//       } else {

//         throw new Error('invalid response CreateChannel api');
//       }
//     } else {

//       let index = 0;

//       while (globalThis.globalVar.has(`token${index}`)) {
//         const token = globalThis.globalVar.get(`token${index}`);
//         const channelName = `${name}${index}`; 

//         const baseUrl = `${globalThis.urls}/Channel/CreateChannel`;
//         const payload = { workspaceId: "0", name: channelName };
//         const headers = { 'x-session-token': token };

//         const response = await axios.post(baseUrl, payload, { headers });

//         if (response.data.data.channel) {

//           const channelId = response.data.data.channel.channelId;
//           globalThis.globalVar.set(`channelId${index}`, channelId);
//         } else {

//           throw new Error('invalid response CreateChannel api');
//         }

//         index++;
//       }
//     }
//   } catch (error) {
//     console.error('error in createChannel:', error);

//     throw new Error('fail to create channels');
//   }
// }

export async function createChannel(token, name) {
  // Giả lập logic tạo channel và trả về channelId
  const channelId = `01JN06Z01F2NFGM30P4NGQ2QKB`;
  globalThis.globalVar.set('channelId', channelId); 
}