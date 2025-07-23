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

export interface TestReport {
  path: string;
  passedTests: number;
  totalTests: number;
  failedTests: { code: number }[];
  warnings: any[];
  codedTest: { code: number }[];
}

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
