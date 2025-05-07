import { ApiRegistry } from '../utils/declarations';
import { TestContext } from '../utils/text-context';
import { createApiFunction } from './api-factory';

const API_REGISTRY: ApiRegistry = {
  mockUser: {
    defaultPath: '/InternalFaker/MockUsers',
    defaultMethod: 'post',
    requiredHeaders: {},
    payloadMapper: (body) => ({
      quantity: body.quantity,
      prefix: body.prefix,
      badge: body.badge,
    }),
  },
  createChannel: {
    defaultPath: '/Channel/CreateChannel',
    defaultMethod: 'post',
    requiredHeaders: {
      'x-session-token': {
        //headerName
        source: '{{token}}',
        errorMessage: 'Token not found to create channel', //error
      },
    },

    payloadMapper: (body) => {
      return body || { workspaceId: '0', name: 'channel1' };
    },
  },
};

export function getApiFunctions(action: string, context: TestContext) {
  const config = API_REGISTRY[action];

  return createApiFunction(config, context);
}
