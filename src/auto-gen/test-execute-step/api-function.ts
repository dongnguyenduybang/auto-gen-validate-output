/* eslint-disable prettier/prettier */
import { acceptInvitation } from '../functions/accept-link-invitation';
import { createChannel } from '../functions/create-channel';
import { getChannel } from '../functions/get-channel';
import { mockUser } from '../functions/mock-user';
import { sendMessage } from '../functions/send-message';
import { TestContext } from './text-context';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getApiFunction(action: string, context: TestContext): Function {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const apiFunctions: Record<string, Function> = {
    mockUser: (method, path, header, body) => mockUser(header, body),
    createChannel: () => createChannel(context),
    getChannel: (method, path, header, body) => getChannel(header, body),
    acceptInvitation:(method, path, header, body) => acceptInvitation(header, body),
    sendMessage:(method, path, header, body) => sendMessage(method, path, header, body)
  };

  return (
    apiFunctions[action] ||
    (() => {
      throw new Error(`Unknown action: ${action}`);
    })
  );
}
