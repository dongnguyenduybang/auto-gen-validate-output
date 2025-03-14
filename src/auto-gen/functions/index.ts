import { resolveVariables } from '../helps/get-resolve-variables';
import { acceptInvitation } from './accept-link-invitation';
import { addMessageReaction } from './add-message-reaction';
import { createChannel } from './create-channel';
import { createChannels } from './create-channels';
import { deleteMessageForEveryone } from './delete-message-for-everyone';
import { deleteMockChannel } from './delete-mock-channel';
import { deleteMockUser } from './delete-mock-user';
import { getMessage } from './get-message';
import { getSticker } from './get-sticker';
import { getStickerCollection } from './get-sticker-collection';
import { getListMessages } from './list-messages';
import { mockUser } from './mock-user';
import { sendInvitation } from './send-invitation';
import { sendMessage } from './send-message';
import { sendMessages } from './send-messages';

export async function executeBeforeAllSteps(request: string[]): Promise<any[]> {
  const results: any[] = [];
  if (Array.isArray(request)) {
    let result;
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

          case 'createChannels': {
            const [token, name] = args;
            await createChannels(token, name);
            break;
          }

          case 'updateMessage': {
            const [token, channelId, messageId, name] = args;

            // await updateMessage(token, channelId, messageId, name)
          }

          case 'sendMessage': {
            const [token, workspaceId, channelId, content, ref] = args;

            await sendMessage(token, workspaceId, channelId, content, ref);
            break;
          }

          case 'sendMessages': {
            const [token, workspaceId, channelId, content, ref] = args;

            await sendMessages(token, workspaceId, channelId, content, ref);
            break;
          }

          case 'getMessage': {
            const [token, channelId, messageId] = args;
            result = await getMessage(token, channelId, messageId);
            break;
          }

          case 'sendLinkInvitation': {
            const [token, linkInvitation, userId] = args;

            await sendInvitation(token, linkInvitation, userId);
            break;
          }

          case 'acceptLinkInvitation': {
            const [token, linkInvitation] = args;

            await acceptInvitation(token, linkInvitation);
            break;
          }

          case 'checkCollection': {
            const [collectionId] = args;

            result = await getStickerCollection(collectionId);
            break;
          }

          case 'addMessageReaction': {
            const [token, workspaceId, channelId, messageId, emoji] = args;

            await addMessageReaction(
              token,
              workspaceId,
              channelId,
              messageId,
              emoji,
            );
            break;
          }

          case 'checkSticker': {
            const [stickerId] = args;

            result = await getSticker(stickerId);
            break;
          }

          case 'getListMessages': {
            const [token, channelId] = args;

            result = await getListMessages(token, channelId);
            break;
          }
          default:
            console.log('Invalid step:', step);
            break;
        }
        results.push(result);
      } else {
        console.log('Invalid step format:', step);
      }
    }
  }

  return results;
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
            const [prefix, workspaceId, typeChannel] = args;
            if (typeChannel === '0') {
              await deleteMockChannel(prefix, workspaceId, headerRequest);
            } else {
              console.log('type channel must be 1-n');
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
