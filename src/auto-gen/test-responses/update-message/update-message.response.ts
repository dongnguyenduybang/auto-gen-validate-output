import { HeaderList } from "../../enums/header.enum";
import { METHOD } from "../../enums/method.enum";
import { APIPath } from "../../enums/path.enum";
import { VAR } from "../../enums/var-placeholder.enum";

export const UpdateMessageResponse = {
    method: METHOD.PUT,
    path: APIPath.Message.UpdateMessage,
    header: HeaderList.Token(),
    body: {
      channelId: VAR.channelId,
      workspaceId: '0',
      messageId: VAR.messageId1,
      content: 'test response update message'
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
        action: "sendMessage",
        method: METHOD.POST,
        path: APIPath.Message.SendMessage,
        body: {
            workspaceId: "0",
            channelId: VAR.channelId,
            content: "test response send message",
            ref: "sssssssss"
        },
        header: HeaderList.Token()
    } ],
    afterAll: [],
  };
  