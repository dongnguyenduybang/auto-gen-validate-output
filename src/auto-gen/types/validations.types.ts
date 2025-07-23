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

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
