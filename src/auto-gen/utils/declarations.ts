import { TestContext } from "./text-context";

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
export interface Step {
  action: string;
  body?: any;
  headers?: any;
  expect?: any;
}

export interface SagaTestSuite {
  beforeAll?: TestStep[];
  steps: TestCase[];
  afterAll?: TestStep[];
}

interface TestStep {
  title: string;
  step: Step;
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

// export interface ApiResponse {
//   // ok: boolean;
//   data?: any;
//   error?: any;
// }

export interface ApiFunctionParams {
  method?: string;
  path?: string;
  headers: any;
  body: any;
}

export interface TestResult {
  path: string;
    className: string;
    chunkNumber?: number;
    failedTests: any[];
    codedTest: any[];
    passedTests: number;
    totalTests: number;
    logicTests: any[];
    failedStep: any[];
    passed200?: number;
    passed201?: number;
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

export type Actual = {
  ok: boolean;
  data: object
  includes: object;
}