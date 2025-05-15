import { AcceptInvitationResponse } from "../response/accept-invitation.response";
import { CreateChannelResponse } from "../response/create-channel.response";
import { GetChannelResponse } from "../response/get-channel.response";
import { MockUserResponse } from "../response/mock-user";
import { SendDmMessageResponse } from "../response/send-dm-message.response";
import { SendMessageResponse } from "../response/send-message.response";
import { UpdateMessageResponse } from "../response/update-message.response";
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

export interface ExpectResult {
  type: string;
  message: string;
  index: number;
  key: string;

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

export const responseClassMap = {
  CreateChannelResponse,
  GetChannelResponse,
  AcceptInvitationResponse,
  SendMessageResponse,
  MockUserResponse,
  SendDmMessageResponse,
  UpdateMessageResponse,
};
