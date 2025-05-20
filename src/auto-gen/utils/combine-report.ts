import * as path from 'path';
import * as fs from 'fs';
import { combinedReportTemplate } from './report-file';
import { getTime } from './helper';
import { TestResult } from './declarations';

function isResultFile(file: string, className: string): boolean {
  return file.startsWith(className) && file.endsWith('.result.json');
}

function isJsonResultFile(file: string): boolean {
  return file.endsWith('.result.json');
}

function parseResultFile(reportDir: string, file: string): TestResult {
  const filePath = path.join(reportDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as TestResult;
}

function extractFailedTests(result: TestResult): TestResult[] {
  return result.failedTests;
}

function extractCodedTests(result: TestResult): TestResult[] {
  return result.codedTest;
}

function extractLogicTests(result: TestResult): TestResult[] {
  return result.logicTests;
}

function extractFailedSteps(result: TestResult): TestResult[] {
  return result.failedStep;
}

function extractPaths(result: TestResult): string {
  return result.path;
}

function sumByField(results: TestResult[], field: keyof TestResult): number {
  return results.reduce(function (sum, r) {
    const value = typeof r[field] === 'number' ? r[field] : 0;
    return sum + value;
  }, 0);
}

function filterByCode(tests: any[], code: number): any[] {
  return tests.filter(function (t) {
    return t.code === code;
  });
}

function getReportFiles(reportDir: string, className: string): string[] {
  const allFiles = fs.readdirSync(reportDir);
  return allFiles.filter(function (file) {
    return isResultFile(file, className);
  });
}

function parseTestResults(reportDir: string, files: string[]): TestResult[] {
  return files.map(function (file) {
    return parseResultFile(reportDir, file);
  });
}

function generateSummary(
  codedTests: any[],
  failedTests: any[],
  passed200: number,
  passed201: number,
) {
  return {
    statusCodes: {
      200: filterByCode(codedTests, 200).length + passed200,
      201: passed201,
      403: filterByCode(codedTests, 403).length,
      500: filterByCode(failedTests, 500).length,
    },
  };
}

function ensureDirExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanupTempFiles(dir: string, files: string[]): void {
  files.forEach(function (file) {
    const filePath = path.join(dir, file);
    try {
      fs.unlinkSync(filePath);
      console.log(`🗑️ Deleted temporary file: ${filePath}`);
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error);
    }
  });
}

async function combineReports(className: string) {
  const reportDir = path.join(__dirname, '../tmp-reports');
  const reportFiles = getReportFiles(reportDir, className);

  if (reportFiles.length === 0) {
    console.error(`No report files found for ${className}`);
    return;
  }

  const results = parseTestResults(reportDir, reportFiles);

  const combinedFailedTests = results.map(extractFailedTests).flat();
  const combinedCodedTest = results.map(extractCodedTests).flat();
  const combinedLogicTests = results.map(extractLogicTests).flat();
  const combinedFailedStep = results.map(extractFailedSteps).flat();
  const pathRequest = results.map(extractPaths).flat();

  const totalPassedTests = sumByField(results, 'passedTests');
  const totalTests = sumByField(results, 'totalTests');
  const totalPassed200 = sumByField(results, 'passed200');
  const totalPassed201 = sumByField(results, 'passed201');

  const summary = generateSummary(
    combinedCodedTest,
    combinedFailedTests,
    totalPassed200,
    totalPassed201,
  );

  const reportContent = combinedReportTemplate(
    className,
    globalThis.url,
    pathRequest.join(', '),
    combinedFailedStep,
    totalPassedTests,
    combinedFailedTests,
    totalTests,
    combinedLogicTests,
    summary,
    'request',
  );

  const outputDir = path.join(__dirname, '../test-requests/reports', className);
  ensureDirExists(outputDir);

  const reportFileName = `${className}-combined-${getTime()}.report.txt`;
  const reportPath = path.join(outputDir, reportFileName);

  try {
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Combined report generated: ${reportPath}`);
    cleanupTempFiles(reportDir, reportFiles);
  } catch (error) {
    console.error(`Error writing combined report to ${reportPath}:`, error);
  }
}

export async function generateAllReports(dtoName?: string): Promise<void> {
  const reportDir = path.join(__dirname, '../tmp-reports');

  if (dtoName) {
    await combineReports(dtoName);
  } else {
    if (!fs.existsSync(reportDir)) {
      console.error(`directory ${reportDir} does not exist`);
      return;
    }

    const reportFiles = fs.readdirSync(reportDir).filter(isJsonResultFile);
    if (reportFiles.length === 0) {
      console.error(`no result files found in ${reportDir}`);
      return;
    }

    const dtoMap: Record<string, string[]> = {};
    for (let i = 0; i < reportFiles.length; i++) {
      const file = reportFiles[i];
      const match = file.endsWith('result.json');
      if (match) {
        const name = match[1];
        if (!dtoMap[name]) {
          dtoMap[name] = [];
        }
        dtoMap[name].push(file);
      }
    }

    const dtoNames = Object.keys(dtoMap);
    for (let j = 0; j < dtoNames.length; j++) {
      const name = dtoNames[j];
      console.log(`generating report for DTO: ${name}`);
      try {
        await combineReports(name);
      } catch (error) {
        console.error(`error generating report for ${name}:`, error);
      }
    }
  }
}
