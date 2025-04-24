import { METHOD } from "src/auto-gen/enums/method.enum";
import { HeaderList } from "../../enums/header.enum";
import { APIPath } from "../../enums/path.enum";
import { VAR } from "../../enums/var-placeholder.enum";

export const SendMessageRequest = {
    method: METHOD.POST,
    path: APIPath.Message.SendMessage,
    headers: HeaderList.Token(),
    body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        content: 'test DTO send message',
        ref: 'ref'
    },
    beforeAll: [
        {
            action: "mockUser",
            body: {
                quantity: 2,
                prefix: "testDTO",
                badge: 0
            }
        },
        {
            action: "createChannel"
        }
    ],
    afterAll: [
        {
            action: "deleteMockedUsers",
            method: METHOD.DELETE,
            path: APIPath.Faker.DeleteMockedUsers,
            body: {
                prefix: "testDTO",
            }
        }
    ],
};
