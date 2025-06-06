import { VAR, ACTION, HEADER_LIST, AttachmentTypeEnum } from '../../../../enums/index';

export const UpdateDmMediaAttachmentRequest = {
    action: ACTION.UPDATE_DM_MEDIA_ATTACHMENT,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        ref: "ref",
        mediaObjects: [
            {
                attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
                fileUrl: "https://fs.ugc.ziicdn.net/SSSSSSS/heic_300kB.png",
                fileMetadata: {
                    mimetype: "text/plain",
                    filename: "AAAA.txt",
                    extension: "AAAA.txt"
                }
            }
        ]
    },
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.SEND_DM_MESSAGE_MEDIA,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        userId: VAR.userId1,
                        attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
                        ref: "ref",
                        mediaObjects: [
                            {
                                attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
                                fileUrl: "https://fs.ugc.ziicdn.net/01JEZJ0GPMSHH2RVX9QTSJJNRX/heic_300kB.png",
                                fileMetadata: {
                                    mimetype: "text/plain",
                                    filename: "text.txt",
                                    extension: "text.txt"
                                }
                            }
                        ]
                    },
                }
            ],
            beforeEach: [

            ],
            afterEach: [],
            afterAll: []
        },
    ],
};
