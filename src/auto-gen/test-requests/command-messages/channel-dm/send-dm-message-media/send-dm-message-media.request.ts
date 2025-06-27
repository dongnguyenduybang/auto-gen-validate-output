import {
  VAR,
  ACTION,
  HEADER_LIST,
  AttachmentTypeEnum,
} from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendDmMessageMediaRequest = new DTOBuilder()
  .startStep('send dm message media')
  .addAction(
    'send dm message media',
    'send-dm-message-media',
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
  .execute();
