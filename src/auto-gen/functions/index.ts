import { resolveVariables } from '../helps/get-resolve-variables';
import { createChannel } from './create-channel';
import { mockUser } from './mock-user';

export async function executeBeforeAllSteps(request) {
  if (Array.isArray(request)) {
    for (const step of request) {
      const match = step.match(/([a-zA-Z]+)\((.*)\)/);

      if (match) {
        const functionName = match[1];
        const payload = match[2].trim();

        const args = payload
          .split(',')
          .map((arg) => resolveVariables(arg.trim()));

        switch (functionName) {
          case 'mockUser': {
            const [prefix, quantityStr, badgeStr] = args;
            const quantity = parseInt(quantityStr, 10);
            const badge = parseInt(badgeStr, 10);
            await mockUser(prefix, quantity, badge);
            break;
          }
          case 'createChannel': {
            const [token, name] = args;
            await createChannel(token, name);
            break;
          }
          default:
            console.log('Invalid step:', step);
            break;
        }
      } else {
        console.log('Invalid step format:', step);
      }
    }
  }
}
