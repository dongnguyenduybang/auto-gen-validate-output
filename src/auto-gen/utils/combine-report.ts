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

function extractFailedSteps(result: TestResult): TestResult[] {
  return result.allSteps;
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
) {
  return {
    statusCodes: {
      200: filterByCode(codedTests, 200).length,
      201: filterByCode(codedTests, 201).length,
      400: filterByCode(codedTests, 400).length, 
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
  const combinedFailedStep = results.map(extractFailedSteps).flat();
  const combinedWarnings = results.map(r => r.warnings).flat();
  const pathRequest = results.map(extractPaths).flat();

  const totalPassedTests = sumByField(results, 'passedTests');
  const totalTests = sumByField(results, 'totalTests');

  const summary = generateSummary(
    combinedCodedTest,
    combinedFailedTests,
  );
  const reportContent = combinedReportTemplate(
    className,
    globalThis.urls,
    pathRequest.join(', '),
    combinedFailedStep,
    totalPassedTests,
    combinedFailedTests,
    totalTests,
    summary,
    'request',
    combinedWarnings
  );

  const outputDir = path.join(
    __dirname,
    '../test-requests/.reports',
    className,
  );
  ensureDirExists(outputDir);

  const reportFileName = `${className}-combined-${getTime()}.report.txt`;
  const reportPath = path.join(outputDir, reportFileName);

  try {
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Combined report generated: ${reportPath}`);
    // cleanupTempFiles(reportDir, reportFiles);
  } catch (error) {
    console.error(`Error writing combined report to ${reportPath}:`, error);
  }
}

export async function generateAllReports(dtoName?: string): Promise<void> {
  const reportDir = path.join(__dirname, '../tmp-reports');
  
  // Nếu có truyền dtoName => chỉ gen report cho DTO đó
  if (dtoName) {
    console.log(`Generating report for single DTO: ${dtoName}`);
    await combineReports(dtoName);
    return;
  }

  // Nếu không có tham số => gen tất cả reports trong tmp-reports
  console.log(`Generating ALL reports from: ${reportDir}`);

  if (!fs.existsSync(reportDir)) {
    console.error(`❌ Directory ${reportDir} does not exist!`);
    return;
  }

  // Lấy tất cả file JSON trong thư mục
  const allFiles = fs.readdirSync(reportDir);
  const jsonFiles = allFiles.filter(file => file.endsWith('.json'));

  if (jsonFiles.length === 0) {
    console.error(`❌ No JSON files found in ${reportDir}!`);
    return;
  }

  console.log(`📁 Found ${jsonFiles.length} JSON files to process:`);
  jsonFiles.forEach(file => console.log(`- ${file}`));

  // Tạo Map để nhóm các file theo DTO (nếu cần)
  const dtoMap: Record<string, string[]> = {};

  for (const file of jsonFiles) {
    // Giả sử tên file có dạng: "dtoName-report.json" hoặc "dtoName.json"
const dtoName = file.split('.')[0]; // Lấy phần trước dấu '.' đầu tiên
    
    if (!dtoMap[dtoName]) {
      dtoMap[dtoName] = [];
    }
    dtoMap[dtoName].push(file);
  }

  // Gen report cho từng DTO
  for (const [dtoName, files] of Object.entries(dtoMap)) {
    console.log(`\n🚀 Generating report for DTO: ${dtoName}`);
    console.log(`📄 Files: ${files.join(', ')}`);
    
    try {
      await combineReports(dtoName);
      console.log(`✅ Successfully generated report for ${dtoName}`);
    } catch (error) {
      console.error(`❌ Failed to generate report for ${dtoName}:`, error);
    }
  }

  console.log('\n🎉 All reports generated successfully!');
}