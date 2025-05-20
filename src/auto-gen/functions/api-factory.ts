import axios, { AxiosRequestConfig } from 'axios';
import { EventContext, TestContext } from '../utils/text-context';
import { ApiConfig, ApiFunctionParams } from '../utils/declarations';
import { resolveVariables } from '../utils/helper';

export function createApiFunction(
  config: ApiConfig,
  context: TestContext,
  eventContext: EventContext,
) {
  return async ({
    method,
    path,
    headers,
    body,
  }: ApiFunctionParams): Promise<any> => {
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

      const payload =
        config && config.payloadMapper ? config.payloadMapper(body) : body;
      const header = config ? finalHeaders : headers;

      // 4. Make API call
      const axiosConfig: AxiosRequestConfig = {
        method: finalMethod,
        url,
        headers: header,
        validateStatus: () => true,
      };

      if (['post', 'put'].includes(finalMethod)) {
        axiosConfig.data = payload;
      } else if (['get', 'delete'].includes(finalMethod)) {
        axiosConfig.params = payload;
      }
      const response = await axios(axiosConfig);

      // if(eventContext){
      //   const events = EVENTS_BY_ACTION[action] || [];
      //   if (events.length > 0 ) {
      //     eventContext.setValue(action, events);
      //   }
      // }
      return response;
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
