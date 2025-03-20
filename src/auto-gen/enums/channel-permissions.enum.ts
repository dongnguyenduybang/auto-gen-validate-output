/* eslint-disable prettier/prettier */
export enum ChannelPermissionEnum {
  OWNER = 0, //	The owner channel permission
  CHANNELS__VIEW_CHANNEL = 1, //	The view channel permission
  CHANNELS__MANAGE = 2, ///	The manage channel permission
  CHANNELS__MEMBERS_MANAGE = 3, //	The member manage channel permission
  CHANNELS__STICKERS_MANAGE = 4, //	The stickers manage channel permission
  CHANNELS__INVITATIONS_MANAGE = 5, //	The invitations manage channel permission
  CHANNELS__INVITATIONS_CREATE = 6, //The invitation create channel permission
  MESSAGES__MANAGE = 7, //	The manage message permission in the channel
  MESSAGES__VIEW = 8, //The view messages permission in the channel
  MESSAGES__SEND_MESSAGE = 9, //	The send message permission in the channel
  MESSAGES__SEND_ATTACHMENTS = 10, //	The send attachments permission in the channel
  MESSAGES__EMBED_LINKS = 11, //	The link embed permission in the channel
  MESSAGES__MENTION_EVERYONE = 12, //	The everyone mention permission in the channel
  CHANNELS__VIEW_AUDIT_LOGS = 13, //The view audit log permission in the channel
}
