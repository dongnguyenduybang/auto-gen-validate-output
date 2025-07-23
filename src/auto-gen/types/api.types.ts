import { TestContext } from '../utils/text-context';

export interface RequestHeaders {
  [key: string]: string;
}

export interface ApiStep {
  action: string;
  method?: string;
  path?: string;
  body?: any;
  header?: any;
  expect?: any;
}

export interface ApiConfig {
  defaultPath: string;
  defaultMethod?: string;
  requiredHeaders?: {
    [headerName: string]: {
      source: string;
      errorMessage: string;
    };
  };
  payloadMapper?: (body: any) => any;
  context?: TestContext;
}

export interface ApiFunctionParams {
  path?: string;
  headers: any;
  body: any;
}

export type ApiRegistry = Record<string, ApiConfig>;

export interface ActionConfig {
  method: string;
  path: string;
}
