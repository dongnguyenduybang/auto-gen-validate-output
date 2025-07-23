import { TestContext } from './text-context';
import {
  commandsMessageHttpClient,
  HttpClient,
} from '../swagger-hono/commands-message-client';
import { commandsChatHttpClient } from '../swagger-hono/commands-chat-client';
import { fakerHttpClient } from '../swagger-hono/faker-client';
import { commandsUserDataHttpClient } from '../swagger-hono/commands-user-data-client';
import { viewsChatHttpClient } from '../swagger-hono/views-chat-client';
import { resolveVariables } from '../helpers/utils';
import { ApiConfig, ApiFunctionParams } from '../types/api.types';
import { ClientMethod, HEADERS } from '../types/shared.types';
import { extractActionName } from '../helpers/resolve-helpers';

export const getResponseSuccess = async <TReq, TRes>(
  request: TReq,
  method: ClientMethod<TReq, TRes>,
  headers?: HEADERS,
): Promise<TRes> => {
  try {
    const response = headers
      ? await method(request, headers)
      : await method(request);

    const { data } = response;
    return data;
  } catch (err: any) {
    // Nếu `err` là Response object thì đọc body
    if (err instanceof Response) {
      const text = await err.text();
      console.error('🔥 Error body:', text);
    } else if (err.response && err.response.text) {
      const text = await err.response.text();
      console.error('🔥 Error response body:', text);
    } else {
      console.error('🔥 ERROR CAUGHT:', err);
    }

    throw err;
  }
};

export function createApiFunction(config: ApiConfig, context: TestContext) {
  return async ({ path, headers, body }: ApiFunctionParams): Promise<any> => {
    try {
      const url = `${globalThis.urls}`;
      const moduleName = path.split('/').filter(Boolean)[0];
      const http = new HttpClient({ baseUrl: url });

      const client = getHttpClient(moduleName, http);

      const clusterEndpoint =
        moduleName.charAt(0).toLowerCase() + moduleName.slice(1);
      const resolveHeader = resolveVariables(headers, context);
      const resolveBody = resolveVariables(body, context);
      const toCamelCase = extractActionName(path);

      const apiDetail = client[clusterEndpoint];

      const callAPI = await getResponseSuccess(
        resolveBody,
        apiDetail[toCamelCase],
        { headers: resolveHeader },
      );
      return callAPI;
    } catch (error: any) {
      console.log(error);
      return {
        error:
          error.response?.data?.error?.details ||
          error.response?.data ||
          error.message,
      };
    }
  };
}

function getHttpClient(moduleName: string, http: HttpClient) {
  const map = {
    InternalFaker: fakerHttpClient,
    Message: commandsMessageHttpClient,
    Channel: commandsChatHttpClient,
    Friend: commandsChatHttpClient,
    Invitation: commandsChatHttpClient,
    UserProfile: commandsUserDataHttpClient,
    ChannelView: viewsChatHttpClient,
    default: commandsUserDataHttpClient,
  };

  const Client = map[moduleName] || map.default;
  return new Client(http);
}
