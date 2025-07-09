import axios, { AxiosRequestConfig } from 'axios';
import { TestContext } from '../utils/text-context';
import { ApiConfig, ApiFunctionParams } from '../utils/declarations';
import { resolveVariables } from '../utils/helper';
import { commandsMessageHttpClient, HttpClient } from '../swagger-hono/commands-message-client';
import { commandsChatHttpClient } from '../swagger-hono/commands-chat-client';
import { fakerHttpClient } from '../swagger-hono/faker-client';

export type HEADERS = Record<string, unknown>;

export type ClientMethod<TReq, TRes> = {
  (request: TReq, headers?: HEADERS): Promise<{
    status: number;
    data: TRes;
    error: object;
  }>;
};

export const getResponseSuccess = async <TReq, TRes>(
  request: TReq,
  method: ClientMethod<TReq, TRes>,
  headers?: HEADERS,
): Promise<TRes> => {
  try {
    const response = headers
      ? await method(request, headers)
      : await method(request);

    const { data, status } = response;

    return data;
  } catch (err: any) {
    // Nếu `err` là Response object thì đọc body
    if (err instanceof Response) {
      const text = await err.text();
      console.error("🔥 Error body:", text);
    } else if (err.response && err.response.text) {
      const text = await err.response.text();
      console.error("🔥 Error response body:", text);
    } else {
      console.error("🔥 ERROR CAUGHT:", err);
    }

    throw err;
  }
};

export function createApiFunction(config: ApiConfig, context: TestContext) {
  return async ({
    method,
    path,
    headers,
    body,
  }: ApiFunctionParams): Promise<any> => {
    try {
      // 1. Validate required headers
      const url = `${globalThis.urls}`;
      // 4. Make API call
      const moduleName = path.split("/").filter(Boolean)[0];
      const http = new HttpClient({ baseUrl: url });

      const client = getHttpClient(moduleName, http);

      const clusterEndpoint = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);
      const resolveHeader = resolveVariables(headers, context)

      const resolveBody = resolveVariables(body, context)

      const toCamelCase = extractActionName(path)

      const apiDetail = client[clusterEndpoint]
      const callAPI = await getResponseSuccess(
        resolveBody,
        apiDetail[toCamelCase],
        { headers: resolveHeader }
      )
      return callAPI
    } catch (error: any) {
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
    default: commandsChatHttpClient
  };

  const Client = map[moduleName] || map.default;
  return new Client(http);
}

function extractActionName(path: string): string {
  const parts = path.split("/").filter(Boolean); // ['Channel', 'RejectMessageRequest']
  const last = parts[parts.length - 1]; // 'RejectMessageRequest'
  return last.charAt(0).toLowerCase() + last.slice(1); // 'rejectMessageRequest'
}
