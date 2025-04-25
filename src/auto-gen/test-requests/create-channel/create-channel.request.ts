import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { HeaderList } from '../../enums/header.enum';

export const CreateChannelRequest = {
    method: METHOD.POST,
    path: APIPath.Channel.CreateChannel,
    headers: HeaderList.Token(),
    body: {
        workspaceId: '0',
        name: 'channel1',
        channelType: 1
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
    ],
    afterAll: [],
}