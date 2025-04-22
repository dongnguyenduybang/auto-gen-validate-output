
import { ReportCategory } from "../../enums/report-category.enum";
import { HeaderList } from "../../enums/header.enum";
import { METHOD } from "../../enums/method.enum";
import { APIPath } from "../../enums/path.enum";
import { VAR } from "../../enums/var-placeholder.enum";
import { PretendingTo } from "../../enums/pretending-to.enum";

export const ReportMessageRequest = {
    method: METHOD.POST,
    path: APIPath.Message.ReportMessage,
    headers: HeaderList.Token1(),
    body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        messageId: VAR.messageId2,
        reportCategory: ReportCategory.REPORT_CATEGORY_HARASSMENT,
        pretendingTo: PretendingTo.PRETENDING_TO_UNSPECIFIED,
        reportReason: 'aaaaa'
    },
    beforeAll: [
        {
            action: "mockUser",
            body: {
                quantity: 2,
                prefix: "testABACDD",
                badge: 0
            }
        },
        {
            action: "createChannel"
        },
        {
            action: "acceptInvitation",
            method: METHOD.POST,
            path: APIPath.Invitation.AcceptInvitation,
            "body": {
                invitationLink: VAR.invitationLink,
            },
            headers: HeaderList.Token1(),
        },
        {
            action: "sendMessage",
            method: METHOD.POST,
            path: APIPath.Message.SendMessage,
            "body": {
                workspaceId: '0',
                channelId: VAR.channelId,
                content: "duybang12345",
                ref: "abc"
            },
            headers: HeaderList.Token(),
        }
    ],
    afterAll: [],
};
