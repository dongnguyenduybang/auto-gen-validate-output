import { resolveVariables } from '../helps/get-resolve-variables';
import { createChannel } from './create-channel';
import { deleteMessageForEveryone } from './delete-message-for-everyone';
import { deleteMockChannel } from './delete-mock-channel';
import { deleteMockUser } from './delete-mock-user';
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

          case 'updateMessage': {
            const [token, channelId, messageId, name] = args

            // await updateMessage(token, channelId, messageId, name)
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

export async function executeDelete(prefix, headerRequest) {
  if (Array.isArray(prefix)) {
    for (const step of prefix) {
      const match = step.match(/([a-zA-Z]+)\((.*)\)/);

      if (match) {
        const functionName = match[1];
        const payload = match[2].trim();

        const args = payload
          .split(',')
          .map((arg) => resolveVariables(arg.trim()));

        switch (functionName) {
          case 'deleteMockUser': {
            const [prefix] = args;

            await deleteMockUser(prefix);
            break;
          }
          case 'deleteMessageForEveryone': {
            const [workspaceId, channelId, messageId] = args;
            await deleteMessageForEveryone(
              workspaceId,
              channelId,
              messageId,
              headerRequest,
            );
            break;
          }
          case 'deleteMockChannel': {
            const [prefix, workspaceId, typeChannel ] = args;
            if(typeChannel === '0'){
              await deleteMockChannel(prefix, workspaceId , headerRequest)
            }else{
              console.log('type channel must be 1-n')
            }
            
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
