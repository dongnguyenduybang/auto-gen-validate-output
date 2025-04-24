import axios, { AxiosRequestConfig } from 'axios';
import { ApiConfig, ApiFunctionParams, ApiResponse } from './types';
import { resolveVariables } from '../utils/test-executor';
import { TestContext } from '../utils/text-context';

export function createApiFunction(config: ApiConfig, context: TestContext) {
  return async ({
    method,
    path,
    headers,
    body
  }: ApiFunctionParams): Promise<ApiResponse> => {
    try {
      // 1. Validate required headers
      const finalHeaders: Record<string, string> = {};
      if (config) {
        for (const [headerName, { source, errorMessage }] of Object.entries(
          config.requiredHeaders
        )) {
          // Xử lý source có thể là template string ({{token}})
          let resolvedValue = source.startsWith('{{') ? 
            resolveVariables(source, context) : 
            headers[source];
          
          if (!resolvedValue) {
            return { ok: false, error: errorMessage };
          }
          finalHeaders[headerName] = resolvedValue;
        }
      }
      // 2. Prepare request
      const finalMethod = (method || config.defaultMethod || 'post').toLowerCase();
      const finalPath = path || config.defaultPath;
      const url = `${globalThis.urls}${finalPath}`;

      // 3. Prepare payload && header
      const payload = config && config.payloadMapper ? config.payloadMapper(body) : body;
      const header = config ? finalHeaders : headers
      
      // 4. Make API call
      const axiosConfig: AxiosRequestConfig = {
        method: finalMethod,
        url,
        headers: header
      };

      if (['post', 'put'].includes(finalMethod)) {
        axiosConfig.data = payload;
      } else if (['get', 'delete'].includes(finalMethod)) {
        axiosConfig.params = payload;
      }
      const response = await axios(axiosConfig);
      return {
        ok: true,
        data: response.data
      };

    } catch (error: any) {
      return {
        ok: false,
        error: error.response?.data?.error?.details ||
              error.response?.data ||
              error.message
      };
    }
  };
}