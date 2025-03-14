import axios from 'axios';
import { resolveJsonVariables } from '../helps/get-resolve-variables';

export async function deleteMockChannel(
  prefix: string,
  workspaceId: string,
  headerRequest: string,
) {
  console.log(prefix, workspaceId);

  const headers = resolveJsonVariables(headerRequest);

  try {
    const baseUrl = `${globalThis.urls}/InternalFaker/DeleteMockedChannels?workspaceId=${workspaceId}&prefix=${prefix}`;

    const response = await axios.delete(baseUrl, { headers: headers });

    if (response.data.ok === true) {
      console.log('delete mock channel successfully');
    } else {
      throw new Error('invalid response from api');
    }
  } catch (error) {
    console.error('error in delete mock channel:', error);
    throw new Error('fail to delete mock channel');
  }
}
