import { TestContext } from '../utils/text-context';
import { createApiFunction } from './api-factory';
import { ApiConfig } from './types';
type ApiRegistry = Record<string, ApiConfig>;

const API_REGISTRY: ApiRegistry = {
  acceptMessageRequest: {
    defaultPath: '/Channel/AcceptMessageRequest',
    requiredHeaders: {
      'x-session-token': {
        //headerName
        source: 'token', //value
        errorMessage: 'Token not found to accept message', //error
      },
    },
    payloadMapper: (body) => ({ userId: body.userId }),
  },
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
    payloadMapper: () => ({ workspaceId: '0', name: 'channel1' }),
  },
};

export function getApiFunctions(action: string, context: TestContext) {
  const config = API_REGISTRY[action];

  return createApiFunction(config, context);
}
