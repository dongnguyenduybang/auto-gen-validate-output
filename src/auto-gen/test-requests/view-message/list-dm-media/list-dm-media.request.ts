import { ACTION, AttachmentTypeEnum, HEADER_LIST, VAR } from "../../../enums";
import { DTOBuilder } from "../../../utils/chain-dto";

export const ListDmMediaRequest = new DTOBuilder()
    .startStep('List DM media')
    .addAction('list dm media', 'list-dm-media', ACTION.LIST_DM_MEDIA, {
        headers: HEADER_LIST.create({ token: VAR.token }),
        body: {
            userId: VAR.userId1,
            type: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
            limit: 1,
            nextPageToken: '01JPPHQFHCC697M93K6PTZTZ8Q'
        },
    })
    .addBeforeAll('send dm message media', 'send-dm-message-media', ACTION.SEND_DM_MESSAGE_MEDIA, {
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
    })
    .execute();
