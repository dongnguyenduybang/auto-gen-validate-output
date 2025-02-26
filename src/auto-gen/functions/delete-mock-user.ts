import axios from "axios";

export async function deleteMockUser(prefix) {
  // Giả lập logic tạo channel và trả về channelId

   try {
    const baseUrl = `${globalThis.urls}/InternalFaker/DeleteMockedUsers?prefix=${prefix}`;
    
    const response = await axios.delete(baseUrl, {});

    console.log(response.data);
    if (response.data.ok === true) {
        return {
            "ok": true
        }
    
    } else {
      throw new Error('invalid response from MockUsers api');
    }
  } catch (error) {
    console.error('error in delete MockUser:', error);
    throw new Error('fail to delete MockUser');
  }
}