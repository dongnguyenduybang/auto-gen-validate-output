
import { APIPath } from '../enums/path.enum';
import { EventContext, TestContext } from '../utils/text-context';
import { createApiFunction } from './apiFactory';
import { ApiConfig } from './types';
type ApiRegistry = Record<string, ApiConfig>;

const API_REGISTRY: ApiRegistry = {
  mockUser: {
    defaultPath: '/InternalFaker/MockUsers',
    defaultMethod: 'post',
    requiredHeaders: {
      
    },
    payloadMapper: (body) => ({ quantity: body.quantity, prefix: body.prefix, badge: body.badge})
  },
  createChannel: {
    defaultPath:  APIPath.Channel.CreateChannel,
    defaultMethod: 'post',
    requiredHeaders: {
      'x-session-token': { //headerName
        source: '{{token}}',
        errorMessage: 'Token not found to create channel' //error
      }
    },
    payloadMapper: (body) => ({ workspaceId: '0', name: 'channel1'})
  },
 
};

export function getApiFunctions(action: string, context: TestContext, eventContext: EventContext) {
  const config = API_REGISTRY[action];
  
  return createApiFunction(config, context, eventContext);
}