import axios from 'axios';
export async function sendInvitation(
  token: string,
  linkInvitation: string,
  userId: string,
) {
  try {
    if (!token) {
      throw new Error('token not found in global var');
    }

    // console.log(token, linkInvitation, userId)

    const baseUrl = `${globalThis.urls}/Invitation/SendInvitation`;
    const payload = { invitationLink: linkInvitation, userIds: userId };
    const headers = { 'x-session-token': token };

    await axios.post(baseUrl, payload, { headers: headers });
  } catch (error) {
    console.error('error in send link invitation:', error);

    throw new Error('fail to send link invitation');
  }
}
