import { TestContext } from "./text-context";

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
export interface ApiRequestConfig {
  body: any;
  header?: any
}
export interface ExpectData {
  path: string;
  action: string;
  payload: ApiRequestConfig
  fields?: string[];
  expect?: any;
}
export interface Expect {
  ok?: boolean,
  data?: ExpectData
  includes?: ExpectData[]
}
export interface Step<T = any> {
  action: string;
  body?: T;
  headers?: any;
  expect?: Expect;
  delay?: number;
}

export interface SagaTestSuite {
  options?: FirstStep[];
  steps: TestCase[];
}

interface FirstStep {
  beforeEach?: Step[];
  afterEach?: Step[];
  afterAll?: Step[];
}


interface TestCase {
  title: string;
  step: Step[];
}

export interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: string;
}

export interface IContext {
  getValue(path: string | string[]): any;
  setValue(key: string, value: any): void;
  mergeData(newData: Record<string, any>): void;
  debug(): void;
}

export type ExtractConfig = {
  [key: string]: {
    path: string[];
    fields: string[];
  };
};

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

export interface ApiResponse {
  // ok: boolean;
  data?: any;
  error?: any;
}

export interface ApiFunctionParams {
  method?: string;
  path?: string;
  headers: any;
  body: any;
}


export type ActionHandler = (dtoName: string) => Promise<void> | void;
export type ApiRegistry = Record<string, ApiConfig>;
export type HeaderOptions = {
  token?: string;
  userId?: string;
  deviceId?: string;
  role?: string;
  [key: string]: string | undefined;
};