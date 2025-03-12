import axios from 'axios';

export async function deleteMockUser(prefix) {

  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/DeleteMockedUsers?prefix=${prefix}`;

    const response = await axios.delete(baseUrl, {});
    if (response.data.ok === true) {
      console.log('delete mock user successfully');
    } else {
      throw new Error('invalid response from MockUsers api');
    }
  } catch (error) {
    console.error('error in delete MockUser:', error);
    throw new Error('fail to delete MockUser');
  }
}
