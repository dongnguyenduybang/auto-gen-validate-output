/* eslint-disable prettier/prettier */
import { acceptInvitation } from '../functions/accept-link-invitation';
import { createChannel } from '../functions/create-channel';
import { deleteChannel } from '../functions/delete-channel';
import { deleteDmMessagesForEveryone } from '../functions/delete-dm-messages-for-everyone';
import { deleteMessagesForEveryone } from '../functions/delete-messages-for-everyone';
import { deleteMockedUsers } from '../functions/delete-mock-user';
import { getChannel } from '../functions/get-channel';
import { mockUser } from '../functions/mock-user';
import { sendDmMessage } from '../functions/send-dm-message';
import { sendMessage } from '../functions/send-message';
import { TestContext } from './text-context';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getApiFunction(action: string, context: TestContext): Function {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const apiFunctions: Record<string, Function> = {
    mockUser: (method, path, header, body) => mockUser(header, body),
    deleteMockedUsers: (method, path, header, body) => deleteMockedUsers(header, body),
    deleteChannel: (method, path, header, body) => deleteChannel(header, body),
    createChannel: () => createChannel(context),
    getChannel: (method, path, header, body) => getChannel(header, body),
    acceptInvitation:(method, path, header, body) => acceptInvitation(header, body),
    sendMessage:(method, path, header, body) => sendMessage(method, path, header, body),
    deleteMessagesForEveryone: (method, path,header, body) => deleteMessagesForEveryone(header, body),
    deleteDmMessagesForEveryone: (method, path,header, body) => deleteDmMessagesForEveryone(header, body),
    sendDmMessage: (method, path, header, body) => sendDmMessage(method, path, header, body)
  };
  return (
    apiFunctions[action] ||
    (() => {
      throw new Error(`Unknown action: ${action}`);
    })
  );
}
