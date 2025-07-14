import { ulid } from 'ulidx';
import { ChannelTypeEnum } from './channel-type.enum';
import { ExpireAfterTimeEnum } from './expire-after-time.enum';
import { BadgeEnum } from './badge.enum';
import { VAR } from './var-placeholder.enum';
import { AttachmentTypeEnum } from './attachment-type.enum';
import { ReportCategory } from './report-category.enum';
import { PretendingTo } from './pretending-to.enum';

export const CONST = {
  workspaceId: VAR.workspaceId,
  code: '{{code}}',
  avatarPath:
    'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
  coverPath:
    'https://fs.ugc.ziicdn.net/01JEWASZD3TK58P25Y1QJSYRPC/heic_300kB.heic',
  latitude: '10.0324312',
  longitude: '105.7833368',
  stickerId: '01JPPHQFHA85NG58H2TYTMCXK0',
  email: 'ziichat@halome.com',
  ringBackTone:
    'https://fs.ugc.ziicdn.net/01JEZJ0GPMSHH2RVX9QTSJJNRX/heic_300kB.heic',
  ringBackToneId: '{{ringbackToneId}}',
  defaultEmoji: '🚀',
  defaultCollectionId: '01JPPHQFHCC697M93K6PTZTZ8Q',
  name: 'channelname1',
  versionSwagger: 'V3$Request',
  content: 'defaultContent',
  // userIds: `["{{VAR.userId1}}"]`,
  channelType: ChannelTypeEnum.CHANNEL_TYPE_ENUM_CHANNEL,
  ref: VAR.ref,
  prefix: VAR.prefix,
  quantity: 2,
  badge: BadgeEnum.USER_BADGE_TYPE_DEFAULT,
  nextPageToken: ulid(), // ✅ OK
  status: '🚀',
  expireAfterTime: ExpireAfterTimeEnum.USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR,
  channelId: VAR.channelId,
  attachmentType: AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO,
  fileUrl: "https://fs.ugc.ziicdn.net/01JEZJ0GPMSHH2RVX9QTSJJNRX/heic_300kB.heic",
  mimetype: "text/plain",
  filename: "text.txt",
  extension: "text.txt",
  messageId: VAR.messageId,
  emoji: '🎉',
  messageIds: [VAR.messageId],
  originalMessageIds: [VAR.messageId],
  reportCategory: ReportCategory.REPORT_CATEGORY_HARASSMENT,
  pretendingTo: PretendingTo.PRETENDING_TO_ME,
  reportReason: 'default report reason',
  
} as const;
