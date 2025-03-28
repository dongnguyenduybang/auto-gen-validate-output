/* eslint-disable prettier/prettier */
import { acceptInvitation } from '../functions/accept-link-invitation';
import { createChannel } from '../functions/create-channel';
import { getChannel } from '../functions/get-channel';
import { mockUser } from '../functions/mock-user';
import { TestContext } from './text-context';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getApiFunction(action: string, context: TestContext): Function {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const apiFunctions: Record<string, Function> = {
    mockUser,
    createChannel: () => createChannel(context),
    getChannel: (header, body) => getChannel(header, body),
    acceptInvitation:(header, body) => acceptInvitation(header, body)
  };

  return (
    apiFunctions[action] ||
    (() => {
      throw new Error(`Unknown action: ${action}`);
    })
  );
}
