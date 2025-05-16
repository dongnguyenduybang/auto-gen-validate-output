import axios, { AxiosRequestConfig } from 'axios';
<<<<<<< HEAD:src/auto-gen/functions/apiFactory.ts
import { ApiConfig, ApiFunctionParams, ApiResponse } from './types';
import { EventContext, TestContext } from '../utils/text-context';
import { resolveVariables } from '../utils/helper';
import { EVENTS_BY_ACTION } from '../utils/event-acction';
=======
import { TestContext } from '../utils/text-context';
import { ApiConfig, ApiFunctionParams } from '../utils/declarations';
import { resolveVariables } from '../utils/helper';
>>>>>>> main:src/auto-gen/functions/api-factory.ts

export function createApiFunction(config: ApiConfig, context: TestContext, eventContext: EventContext) {
  return async ({
    method,
    path,
    headers,
    body,
<<<<<<< HEAD:src/auto-gen/functions/apiFactory.ts
    action,
    stepIndex
  }: ApiFunctionParams): Promise<ApiResponse> => {
=======
  }: ApiFunctionParams): Promise<any> => {
>>>>>>> main:src/auto-gen/functions/api-factory.ts
    try {

      // 0. Create WS
      // 1. Validate required headers
      const finalHeaders: Record<string, string> = {};
      if (config) {
        for (const [headerName, { source, errorMessage }] of Object.entries(
          config.requiredHeaders,
        )) {
          // Xử lý source có thể là template string ({{token}})
          const resolvedValue = source.startsWith('{{')
            ? resolveVariables(source, context)
            : headers[source];

          if (!resolvedValue) {
            return { error: errorMessage };
          }
          finalHeaders[headerName] = resolvedValue;
        }
      }
      // 2. Prepare request
      const finalMethod = (
        method ||
        config.defaultMethod ||
        'post'
      ).toLowerCase();
      const finalPath = path || config.defaultPath;
      const url = `${globalThis.urls}${finalPath}`;

      // 3. Prepare payload && header
<<<<<<< HEAD:src/auto-gen/functions/apiFactory.ts
      const payload = config && config.payloadMapper ? config.payloadMapper(body) : body;
      const header = config ? finalHeaders : headers
=======
      const payload =
        config && config.payloadMapper ? config.payloadMapper(body) : body;
      const header = config ? finalHeaders : headers;

>>>>>>> main:src/auto-gen/functions/api-factory.ts
      // 4. Make API call
      const axiosConfig: AxiosRequestConfig = {
        method: finalMethod,
        url,
        headers: header,
        validateStatus: () => true
      };

      if (['post', 'put'].includes(finalMethod)) {
        axiosConfig.data = payload;
      } else if (['get', 'delete'].includes(finalMethod)) {
        axiosConfig.params = payload;
      }
      const response = await axios(axiosConfig);
<<<<<<< HEAD:src/auto-gen/functions/apiFactory.ts

      if(eventContext){
        const events = EVENTS_BY_ACTION[action] || [];
        if (events.length > 0 ) {
          eventContext.setValue(action, events);
        }
      }
      return {
        ok: true,
        data: response.data
      };
=======
      return response
>>>>>>> main:src/auto-gen/functions/api-factory.ts

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
