import { isEqual } from 'lodash';
import { AcceptInvitationResponse } from '../response/accept-invitation.response';
import { CreateChannelResponse } from '../response/create-channel.response';
import { GetChannelResponse } from '../response/get-channel.response';
import { MockUserResponse } from '../response/mock-user';
import { SendDmMessageResponse } from '../response/send-dm-message.response';
import { SendMessageResponse } from '../response/send-message.response';
import { UpdateMessageResponse } from '../response/update-message.response';
import { TestContext } from './text-context';

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
export interface ApiRequestConfig {
  body: any;
  header?: any;
}
export interface ExpectData {
  path: string;
  action: string;
  payload: ApiRequestConfig;
  fields?: string[];
  expect?: any;
}
export interface Expect {
  ok?: boolean;
  data?: ExpectData;
  includes?: ExpectData[];
}

export interface ExpectResult {
  type: string;
  message: string;
  index: number;
  key: string;
}
export interface MatcherResult {
  isEqual: boolean;
  allDifferences?: string[];
}

export interface CustomMatcher extends Function {
  (actual: any, context?: TestContext): Promise<MatcherResult>;
  matcherType: string;
  expectedValue: any;
  toString(): string;
}
export interface Step<T = any> {
  title?: string;
  author?: string;
  action?: string;
  body?: T;
  headers?: any;
  expect?: Expect;
  delay?: number;
}
export interface EventStep {
  [key: string]: any | EventMatcher;
  title: string;
  author: string;
}

export interface EventValidation {
  eventIndex: number;
  eventType: string;
  isPassed: boolean;
  error?: string;// true nếu cả SOURCE, TYPE và DATA đều pass
  specversionResult?: {
    isEqual: boolean;
    differences?: string[];
  }
  versionResult?: {
    isEqual: boolean;
    differences?: string[];
  }
  sourceResult?: {
    isEqual: boolean;
    differences?: string[];
  };
  typeResult?: {
    isEqual: boolean;
    differences?: string[];
  };
  dataResult?: {
    isEqual: boolean;
    differences?: string[];
  };
}

export interface StepValidationResult {
  author: string;
  stepAction: string;
  totalEvents: number;
  eventList: string[];
  passedEvents: number;
  failedEvents: number;
  orderIsValid: boolean, // New field to track order validation
  duplicateEvents: string[],
  eventResults: EventValidation[];
}

interface EventMatcher {
  type: string;
  source?: (source: any) => boolean;
  data?: (data: any) => boolean;
}

export interface SagaTestSuite {
  options?: FirstStep[];
  steps: TestCase[];
}

export interface SagaWSTestSuite {
  options?: FirstStep[];
  steps: TestCase[];
}

export interface Resume<T = any> {
  title: string;
  author: string;
  type?: string;
  index?: number;
  data: string;
}

interface FirstStep {
  beforeAll?: Step[];
  beforeEach?: Step[];
  afterEach?: Step[];
  afterAll?: Step[];
  resume?: Resume[];
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

export interface ResumeEvent {
  title: string;
  type: string;
  data: {
    id: string;
    time: string;
  };
}

export interface ResumeEntry {
  action: string;
  resume: ResumeEvent[];
}

export interface EventValidationResult {
  isValid: boolean;
  errors: {
    type: 'missing' | 'unexpected' | 'count' | 'duplicate' | 'order';
    message: string;
    expected?: string[];
    received?: string[];
  }[];
}

export type ActionHandler = (dtoName: string) => Promise<void> | void;
export type ApiRegistry = Record<string, ApiConfig>;
export type FieldValueObject = Record<string, any>;

export type HeaderOptions = {
  token?: string;
  userId?: string;
  deviceId?: string;
  role?: string;
  [key: string]: string | undefined;
};

export type Actual = {
  ok: boolean;
  data: object;
  includes: object;
};

export const responseClassMap = {
  CreateChannelResponse,
  GetChannelResponse,
  AcceptInvitationResponse,
  SendMessageResponse,
  MockUserResponse,
  SendDmMessageResponse,
  UpdateMessageResponse,
};

export type Entry = {
  path?: string;
  [key: string]: any;
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

export interface PayloadGen {
  body: Object;
  expects: string[];
}
