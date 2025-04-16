/* eslint-disable prettier/prettier */

import { acceptInvitation, acceptMessageRequest, addDmMessageReaction, addMessageReaction, createChannel, deleteAllDmMessagesForEveryone, deleteAllDMMessagesOnlyMe, deleteAllMessagesOnlyMe, deleteChannel, deleteDmMessagesForEveryone, deleteDmMessagesOnlyMe, deleteMessagesForEveryone, deleteMessagesOnlyMe, deleteMockedUsers, getChannel, getListMessage, getMessage, getSticker, getStickerCollection, markAsRead, markDmAsRead, mockChannel, mockUser, rejectMessageRequest, reportMessage, sendDmMessage, sendInvitation, sendMessage, sendMessageSticker, updateMessage } from '../functions';

import { TestContext } from './text-context';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getApiFunction(action: string, context: TestContext): Function {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const apiFunctions: Record<string, Function> = {

    acceptInvitation: (method, path, header, body) => acceptInvitation(method, path, header, body),
    acceptMessageRequest: (method, path, header, body) => acceptMessageRequest(method, path, header, body),
    addDmMessageReaction: (method, path, header, body) => addDmMessageReaction(method, path, header, body),
    addMessageReaction: (method, path, header, body) => addMessageReaction(method, path, header, body),
    createChannel: () => createChannel(context),
    deleteAllDmMessagesForEveryone: (method, path, header, body) => deleteAllDmMessagesForEveryone(method, path, header, body),
    deleteAllDMMessagesOnlyMe: (method, path, header, body) => deleteAllDMMessagesOnlyMe(method, path, header, body),
    deleteAllMessagesOnlyMe: (method, path, header, body) => deleteAllMessagesOnlyMe(method, path, header, body),
    deleteChannel: (method, path, header, body) => deleteChannel(header, body),
    deleteDmMessagesForEveryone: (method, path, header, body) => deleteDmMessagesForEveryone(method, path, header, body),
    deleteDmMessagesOnlyMe: (method, path, header, body) => deleteDmMessagesOnlyMe(method, path, header, body),
    deleteMessagesForEveryone: (method, path, header, body) => deleteMessagesForEveryone(method, path, header, body),
    deleteMessagesOnlyMe: (method, path, header, body) => deleteMessagesOnlyMe(method, path, header, body),
    deleteMockedUsers: (method, path, header, body) => deleteMockedUsers(method, path, header, body),
    getChannel: (method, path, header, body) => getChannel(method, path, header, body),
    getMessage: (method, path, header, body) => getMessage(method, path, header, body),
    getStickerCollection: (method, path, header, body) => getStickerCollection(method, path, header, body),
    getSticker: (method, path, header, body) => getSticker(method, path, header, body),
    getListMessage: (method, path, header, body) => getListMessage(method, path, header, body),
    markAsRead: (method, path, header, body) => markAsRead(method, path, header, body),
    markDmAsRead: (method, path, header, body) => markDmAsRead(method, path, header, body),
    mockChannel: (method, path, header, body) => mockChannel(method, path, header, body),
    mockUser: (method, path, header, body) => mockUser(header, body),
    rejectMessageRequest: (method, path, header, body) => rejectMessageRequest(method, path, header, body),
    reportMessage: (method, path, header, body) => reportMessage(method, path, header, body),
    sendDmMessage: (method, path, header, body) => sendDmMessage(method, path, header, body),
    sendInvitation: (method, path, header, body) => sendInvitation(method, path, header, body),
    sendMessageSticker: (method, path, header, body) => sendMessageSticker(method, path, header, body),
    sendMessage: (method, path, header, body) => sendMessage(method, path, header, body),
    updateMessage: (method, path, header, body) => updateMessage(method, path, header, body),
  };
  return (
    apiFunctions[action] ||
    (() => {
      throw new Error(`Unknown action: ${action}`);
    })
  );
}
