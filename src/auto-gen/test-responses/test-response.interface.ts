export interface PerformanceMetrics {
  responseTime: number;
  statusCode: number;
  responseSize: number;
}
export interface TestCaseResult {
  testcase: number;
  error?: string;
  expected?: any;
  actual?: any;
  performance?: PerformanceMetrics;
}
export const STATUS_CONFIG: Record<
  number,
  {
    name: string;
    headerOverrides?: Record<string, any>;
    bodyOverrides?: Record<string, any>;
    customFields?: any;
  }
> = {
  201: {
    name: 'Created',
  },
  403: {
    name: 'Forbidden',
    headerOverrides: {
      'x-session-token': null,
    },
    customFields: {},
  },
  404: {
    name: 'Not Found',
    customFields: {},
  },
  500: {
    name: 'Internal Server Error',
    customFields: {
      errorType: 'SERVER_ERROR',
    },
  },
};
