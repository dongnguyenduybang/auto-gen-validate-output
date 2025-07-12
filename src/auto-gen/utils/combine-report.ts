import * as path from 'path';
import * as fs from 'fs';
import { combinedReportTemplate } from './report-file';
import { getTime } from './helper';
import { table } from 'table';

// Định nghĩa interface TestResult với các thuộc tính tùy chọn để xử lý trường hợp undefined
interface TestResult {
  failedTests?: any[];
  codedTest?: any[];
  allSteps?: any[];
  warnings?: any[];
  path?: string;
  passedTests?: number;
  totalTests?: number;
  [key: string]: any;
}

function isResultFile(file: string, className: string): boolean {
  const baseName = file.replace('.result.json', '');
  return baseName === className;
}

function parseResultFile(reportDir: string, file: string): TestResult {
  const filePath = path.join(reportDir, file);
  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw new Error(`Failed to read report file: ${file}`);
  }

  let parsed: TestResult;
  try {
    parsed = JSON.parse(content) as TestResult;
  } catch (error) {
    console.error(`Error parsing JSON in ${filePath}:`, error);
    throw new Error(`Invalid JSON format in ${file}`);
  }

  // Đảm bảo các thuộc tính cần thiết tồn tại, nếu không thì cung cấp giá trị mặc định
  parsed = {
    failedTests: Array.isArray(parsed.failedTests) ? parsed.failedTests : [],
    codedTest: Array.isArray(parsed.codedTest) ? parsed.codedTest : [],
    allSteps: Array.isArray(parsed.allSteps) ? parsed.allSteps : [],
    warnings: Array.isArray(parsed.warnings) ? parsed.warnings : [],
    path: typeof parsed.path === 'string' ? parsed.path : '',
    passedTests:
      typeof parsed.passedTests === 'number' ? parsed.passedTests : 0,
    totalTests: typeof parsed.totalTests === 'number' ? parsed.totalTests : 0,
    ...parsed, // Giữ các thuộc tính khác nếu có
  };

  return parsed;
}

function extractFailedTests(result: TestResult): TestResult[] {
  return Array.isArray(result.failedTests) ? result.failedTests : [];
}

function extractCodedTests(result: TestResult): TestResult[] {
  return Array.isArray(result.codedTest) ? result.codedTest : [];
}

function extractFailedSteps(result: TestResult): TestResult[] {
  return Array.isArray(result.allSteps) ? result.allSteps : [];
}

function extractPaths(result: TestResult): string {
  return typeof result.path === 'string' ? result.path : '';
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

function parseTestResults(reportDir: string, files: string[]): TestResult[] {
  return files.map(function (file) {
    return parseResultFile(reportDir, file);
  });
}

function generateSummary(codedTests: any[], failedTests: any[]) {
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
async function combineReports(className: string): Promise<{
  reportContent: string;
  reportPath: string;
  summary: any;
  noFailedTests: boolean;
}> {
  const reportDir = path.join(__dirname, '../tmp-reports');

  try {
    const reportFiles = fs
      .readdirSync(reportDir)
      .filter((file) => file === `${className}.result.json`);

    if (reportFiles.length === 0) {
      throw new Error(`No report files found for ${className}`);
    }

    const results = parseTestResults(reportDir, reportFiles);

    // Sanitize data before processing
    const sanitizedResults = results.map((result) => ({
      ...result,
      failedTests: Array.isArray(result.failedTests) ? result.failedTests : [],
      codedTest: Array.isArray(result.codedTest) ? result.codedTest : [],
      allSteps: Array.isArray(result.allSteps) ? result.allSteps : [],
      warnings: Array.isArray(result.warnings) ? result.warnings : [],
    }));

    const noFailedTests = hasNoFailedTests(sanitizedResults);

    const combinedFailedTests = sanitizedResults.map(extractFailedTests).flat();
    const combinedCodedTest = sanitizedResults.map(extractCodedTests).flat();
    const combinedFailedStep = sanitizedResults.map(extractFailedSteps).flat();
    const combinedWarnings = sanitizedResults.map((r) => r.warnings).flat();
    const pathRequest = sanitizedResults.map(extractPaths).filter(Boolean);

    const totalPassedTests = sumByField(sanitizedResults, 'passedTests');
    const totalTests = sumByField(sanitizedResults, 'totalTests');

    const summary = generateSummary(combinedCodedTest, combinedFailedTests);

    const reportContent = combinedReportTemplate(
      className,
      globalThis.urls || {},
      pathRequest.join(', '),
      combinedFailedStep,
      totalPassedTests,
      combinedFailedTests,
      totalTests,
      summary,
      'request',
      combinedWarnings,
    );

    const outputBaseDir = path.join(__dirname, '../test-requests/.reports');
    const outputDir = path.join(
      outputBaseDir,
      noFailedTests ? 'success-reports' : 'failed-reports',
      className,
    );

    ensureDirExists(outputDir);

    const reportFileName = `${className}-combined-${getTime()}.report.txt`;
    const reportPath = path.join(outputDir, reportFileName);

    // Write the report content first
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Combined report generated: ${reportPath}`);
    console.log(
      `ℹ️ Report classified as: ${noFailedTests ? 'SUCCESS (no failed tests)' : 'FAILED (has failed tests)'}`,
    );

    // Prepare return value carefully
    const returnValue = {
      reportContent,
      reportPath,
      summary: {
        className,
        totalTests,
        passedTests: totalPassedTests,
        failedTests: combinedFailedTests.length,
        warnings: combinedWarnings.length,
        isSuccess: noFailedTests,
      },
      noFailedTests,
    };

    return returnValue;
  } catch (error) {
    console.error('❌ Error in combineReports:', error);
    throw new Error(`Failed to combine reports: ${error.message}`);
  }
}
export async function generateAllReports(
  dtoName?: string,
): Promise<{ filePath: string; content?: any } | void> {
  const reportDir = path.join(__dirname, '../tmp-reports');

  if (dtoName) {
    console.log(`Generating report for single DTO: ${dtoName}`);
    const reportFile = path.join(reportDir, `${dtoName}.result.json`);
    let reportContent = {};
    if (fs.existsSync(reportFile)) {
      try {
        reportContent = JSON.parse(fs.readFileSync(reportFile, 'utf-8'));
      } catch (error) {
        console.error(`Error parsing ${reportFile}:`, error);
        reportContent = {};
      }
    } else {
      fs.writeFileSync(reportFile, JSON.stringify(reportContent, null, 2));
      console.log(`Created placeholder JSON for ${dtoName} at ${reportFile}`);
    }

    const result = await combineReports(dtoName);
    const finalContent = result || reportContent;

    fs.writeFileSync(reportFile, JSON.stringify(finalContent, null, 2));

    return {
      filePath: reportFile,
      content: finalContent,
    };
  }

  console.log(`Generating ALL reports from: ${reportDir}`);
  const allFiles = fs.readdirSync(reportDir);
  const jsonFiles = allFiles.filter((file) => file.endsWith('.json'));

  if (jsonFiles.length === 0) {
    console.error(`❌ No JSON files found in ${reportDir}!`);
    return;
  }

  console.log(`📁 Found ${jsonFiles.length} JSON files to process:`);

  const results = [];
  for (const file of jsonFiles) {
    const dtoName = file.split('.')[0];
    console.log(`\n🚀 Processing: ${file}`);

    try {
      const result = await combineReports(dtoName);
      const reportFile = path.join(reportDir, file);
      fs.writeFileSync(reportFile, JSON.stringify(result, null, 2));

      results.push({
        dtoName,
        filePath: reportFile,
        content: result,
      });

      console.log(`✅ Successfully processed ${file}`);
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error);
    }
  }

  console.log('\n🎉 All reports generated successfully!');
}

function hasNoFailedTests(results: TestResult[]): boolean {
  return results.every(
    (result) =>
      Array.isArray(result.failedTests) && result.failedTests.length === 0,
  );
}

export function viewReports(dtoName: string) {
  const basePath = path.join(__dirname, '../test-requests/.reports');

  const tryReadReport = (fullPath: string): string | null => {
    try {
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        return fs.readFileSync(fullPath, 'utf8');
      }
    } catch (err) {
      console.error(`Error reading file ${fullPath}:`, err);
    }
    return null;
  };

  const findNewestReportInDir = (
    dirPath: string,
    targetDtoName: string,
  ): string | null => {
    try {
      const files = fs
        .readdirSync(dirPath)
        .filter((file) => file.endsWith('.txt') || file.endsWith('.md'))
        .map((file) => {
          const filePath = path.join(dirPath, file);
          const fileBaseName = path.parse(file).name.split('-combined-')[0];
          return { filePath, mtime: fs.statSync(filePath).mtime, fileBaseName };
        })
        .filter((file) => file.fileBaseName === targetDtoName);

      if (files.length === 0) {
        console.log(
          `No matching report files found for ${targetDtoName} in ${dirPath}`,
        );
        return null;
      }

      const sortedFiles = files.sort(
        (a, b) => b.mtime.getTime() - a.mtime.getTime(),
      );
      return sortedFiles[0].filePath;
    } catch (err) {
      console.error(`Error reading directory ${dirPath}:`, err);
      return null;
    }
  };

  if (dtoName.endsWith('.txt') || dtoName.endsWith('.md')) {
    const fullPath = path.join(basePath, dtoName);
    const data = tryReadReport(fullPath);
    if (data) {
      renderMarkdown(data);
      return;
    }
    console.log('File not found:', fullPath);
    return;
  }

  const possiblePaths = [
    path.join(basePath, 'success-reports', dtoName), // Prioritize success reports
    path.join(basePath, 'failed-reports', dtoName), // Then failed reports
  ];

  let newestFilePath: string | null = null;

  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      const foundPath = findNewestReportInDir(possiblePath, dtoName);
      if (
        foundPath &&
        (!newestFilePath ||
          fs.statSync(foundPath).mtime > fs.statSync(newestFilePath).mtime)
      ) {
        newestFilePath = foundPath;
      }
    } else {
      // console.log(`Directory not found: ${possiblePath}`);
    }
  }

  if (newestFilePath) {
    const data = fs.readFileSync(newestFilePath, 'utf8');
    renderMarkdown(data);
    return;
  }
  possiblePaths.forEach((p) => console.error('-', p));
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  const output: string[] = [];

  for (let line of lines) {
    line = line.trim();

    if (line.startsWith('#')) {
      const level = line.match(/^#+/)![0].length;
      const text = line.replace(/^#+/, '').trim();
      output.push(`\x1b[1m${' '.repeat(level * 2)}${text}\x1b[0m`);
      continue;
    }

    if (line.startsWith('|')) {
      const columns = line
        .split('|')
        .map((col) => col.trim())
        .filter((col) => col);
      if (!inTable) {
        tableHeaders = columns;
        inTable = true;
        tableRows = [tableHeaders];
      } else if (line.match(/^\|[-:\s|]+$/)) {
        continue;
      } else {
        tableRows.push(columns);
      }
      continue;
    }

    if (inTable && tableRows.length > 1) {
      output.push(
        table(tableRows, {
          border: {
            topBody: `─`,
            topJoin: `┬`,
            topLeft: `┌`,
            topRight: `┐`,
            bottomBody: `─`,
            bottomJoin: `┴`,
            bottomLeft: `└`,
            bottomRight: `┘`,
            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,
            joinLeft: `├`,
            joinRight: `┤`,
            joinBody: `─`,
          },
        }),
      );
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }

    if (line) {
      line = line.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      output.push(line);
    }
  }

  if (inTable && tableRows.length > 1) {
    output.push(
      table(tableRows, {
        border: {
          topBody: `─`,
          topJoin: `┬`,
          topLeft: `┌`,
          topRight: `┐`,
          bottomBody: `─`,
          bottomJoin: `┴`,
          bottomLeft: `└`,
          bottomRight: `┘`,
          bodyLeft: `│`,
          bodyRight: `│`,
          bodyJoin: `│`,
          joinLeft: `├`,
          joinRight: `┤`,
          joinBody: `─`,
        },
      }),
    );
  }

  console.log(output.join('\n'));
}
