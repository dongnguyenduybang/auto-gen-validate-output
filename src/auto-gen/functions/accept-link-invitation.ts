import axios from 'axios';

export async function acceptInvitation(token: string, linkInvitation: string) {
  try {
    if (!token) {
      throw new Error('token not found in global var');
    }

    const baseUrl = `${globalThis.urls}/Invitation/AcceptInvitation`;
    const payload = { invitationLink: linkInvitation };
    const headers = { 'x-session-token': token };
    await axios.post(baseUrl, payload, { headers: headers });
  } catch (error) {
    throw new Error('fail to accept invitation');
  }
}
