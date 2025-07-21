import {
  GetChannelResponse,
  MockUserResponse,
  AcceptInvitationResponse,
  CreateChannelResponse,
  SendDmMessageResponse,
  SendMessageResponse,
  UpdateMessageResponse,
} from '../response';
import { TestContext } from './text-context';

export interface GenRequestOptions {
  beforeAll?: any[];
  beforeEach?: any[];
  afterAll?: any[];
  afterEach?: any[];
}

export interface RequestHeaders {
  [key: string]: string;
}

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
interface ApiRequestConfig {
  body?: any;
  header?: Record<string, string>;
}

interface ExpectData {
  path: string;
  action: string;
  payload: ApiRequestConfig | ApiRequestConfig[];
  filter?: string[];
  fields?: string[];
  isArrayMapping?: boolean;
  headers?: Record<string, string>;
}
export interface Expect {
  ok?: boolean;
  data?: ExpectData;
  includes?: ExpectData[];
}

export interface ExpectResult {
  type: string;
  path: string;
  message: string;
  actualValue?: string;
  expectedValue?: string;
}
export interface Step<T = any> {
  headers?: Record<string, string>;
  config?: T;
  expect?: Expect;
  delay?: number;
}

export interface SagaTestSuite {
  options?: FirstStep[];
  steps: TestCase[];
}

export interface RequestTestSuite {
  action: string;
  dtoName: string;
  cluster: string;
  headers: object;
  body: object;
  options: FirstStep[];
}

interface FirstStep {
  beforeEach?: Step[];
  beforeAll?: Step[];
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
  error?: any;
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
  path?: string;
  headers: any;
  body: any;
}

export interface RecentSelection {
  action: string;
  type: string;
  paths: string[];
  timestamp: number;
}

export interface TestResult {
  path: string;
  className: string;
  allSteps: any[];
  chunkNumber?: number;
  failedTests: any[];
  codedTest: any[];
  warnings: any[];
  passedTests: number;
  totalTests: number;
  failedStep: any[];
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
  body: Record<string, any>;
  expects: string[];
}

export interface ValidIfCondition {
  field: string;
  operator: string;
  value: any;
}

export interface ValidIfOptions {
  conditions: ValidIfCondition | ValidIfCondition[];
  result?: {
    required?: boolean;
    message?: string;
    [key: string]: any;
  };
  logicalOperator?: 'AND' | 'OR';
}

export interface TestReport {
  path: string;
  passedTests: number;
  totalTests: number;
  failedTests: { code: number }[];
  warnings: any[];
  codedTest: { code: number }[];
}

// Định nghĩa interface cho dữ liệu phân tích
export interface ReportMetrics {
  endpoint: string;
  passed: number;
  failed: number;
  warnings: number;
  code_200: number;
  code_201: number;
  code_400: number;
  code_403: number;
  code_500: number;
}

export interface TestReport {
  path: string;
  passedTests: number;
  failedTests: { code: number }[];
  warnings: any[];
  codedTest: { code: number }[];
}

// Định nghĩa interface cho dữ liệu phân tích
export interface ReportMetrics {
  endpoint: string;
  passed: number;
  failed: number;
  warnings: number;
  code_200: number;
  code_201: number;
  code_400: number;
  code_403: number;
  code_500: number;
}

export interface ReportData {
  endpoint: string;
  dtoName: string;
  total: number;
  passed: number;
  failed: number;
  warnings: number;
  case200: number;
  case201: number;
  case400: number;
  case403: number;
  case404: number;
  case500: number;
  hasFailures: boolean;
  jsonFile: string;
  detailFilePath: string | null;
  reportCategory: string;
}

export interface TrainingData {
  action: string;
  apiEndpoint: string;
  swaggerDesc: string;
  contextClues: string[];
  httpMethod?: string;
  schemaId?: string;
  fieldName?: string;
  userIdMeaning?: 'sender' | 'receiver';
}

export interface ActionConfig {
  method: string;
  path: string;
}

export interface PredictionResult {
  userIdMeaning: string;
  confidence: number;
  probabilities?: Record<string, number>;
  reasoning: string;
  method?: string;
  suggestedVariableName?: string;
}

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
