import {
  VAR,
  ACTION,
  HEADER_LIST,
  AttachmentTypeEnum,
} from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateDmMediaAttachmentRequest = new DTOBuilder()
  .startStep('update dm media attachment')
  .addAction(
    'send dm media message',
    'send-dm-media',
    ACTION.SEND_DM_MESSAGE_MEDIA,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
        ref: 'ref',
        mediaObjects: [
          {
            attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
            fileUrl:
              'https://fs.ugc.ziicdn.net/01JEZJ0GPMSHH2RVX9QTSJJNRX/heic_300kB.png',
            fileMetadata: {
              mimetype: 'text/plain',
              filename: 'text.txt',
              extension: 'text.txt',
            },
          },
        ],
      },
    }
  )
  .addAction(
    'update dm media attachment',
    'update-dm-media',
    ACTION.UPDATE_DM_MEDIA_ATTACHMENT,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        ref: 'ref',
        mediaObjects: [
          {
            attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
            fileUrl:
              'https://fs.ugc.ziicdn.net/SSSSSSS/heic_300kB.png',
            fileMetadata: {
              mimetype: 'text/plain',
              filename: 'AAAA.txt',
              extension: 'AAAA.txt',
            },
          },
        ],
      },
    }
  )
  .execute();
