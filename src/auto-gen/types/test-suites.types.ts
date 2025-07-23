import { Expect } from './validations.types';

export interface RequestTestSuite {
  action: string;
  dtoName: string;
  cluster: string;
  headers: object;
  body: object;
  options: FirstStep[];
}

export interface IContext {
  getValue(path: string | string[]): any;
  setValue(key: string, value: any): void;
  mergeData(newData: Record<string, any>): void;
  debug(): void;
}

export interface GenRequestOptions {
  beforeAll?: any[];
  beforeEach?: any[];
  afterAll?: any[];
  afterEach?: any[];
}

interface FirstStep {
  beforeEach?: Step[];
  beforeAll?: Step[];
  afterEach?: Step[];
  afterAll?: Step[];
}

export interface Step<T = any> {
  headers?: Record<string, string>;
  config?: T;
  expect?: Expect;
  delay?: number;
}

export interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: any;
}
