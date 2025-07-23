import { PredictionResult } from './prediction.types';

export type ActionHandler = (
  input: string | string[],
) => void | Promise<void> | Promise<string[]>;

export type Actual = {
  ok: boolean;
  data: object;
  includes: object;
};

export type ErrorItem = {
  type: string;
  path: string;
  message: string;
  index: number;
  key: string;
  actualValue?: any;
  expectedValue?: any;
};

export interface ProcessedBody {
  [key: string]: any;
  metadata?: {
    resolvedFields: Record<
      string,
      {
        originalValue: any;
        resolvedValue: any;
        isRequired?: boolean;
        propKey?: string;
        propType?: string;
        description?: string;
        reasoning?: string;
        aiResult?: PredictionResult;
      }
    >;
  };
}

export type HEADERS = Record<string, unknown>;

export type ClientMethod<TReq, TRes> = {
  (
    request: TReq,
    headers?: HEADERS,
  ): Promise<{
    status: number;
    data: TRes;
    error: object;
  }>;
};

export interface TeardownConfig {
  teardownRequestFile?: string;
}
export interface SetupConfig {
  setupRequestFile?: string;
}
