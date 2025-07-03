import { ACTION, AttachmentTypeEnum, HEADER_LIST, VAR } from "../../../enums";
import { DTOBuilder } from "../../../utils/chain-dto";

export const ListMediaRequest = new DTOBuilder()
    .startStep('List media')
    .addAction('list media', 'list-media', ACTION.LIST_MEDIA, {
        headers: HEADER_LIST.create({ token: VAR.token }),
        body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            type: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
            limit: 1,
            nextPageToken: "01JPPHQFHCC697M93K6PTZTZ8Q"
        },
    })
    .addBeforeAll('send message media', 'send-message-media', ACTION.SEND_MESSAGE_MEDIA, {
        headers: HEADER_LIST.create({ token: VAR.token }),
        body: {
            workspace: VAR.workspaceId,
            channelId: VAR.channelId,
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
