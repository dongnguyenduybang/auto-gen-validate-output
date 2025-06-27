import * as path from 'path';
import * as fs from 'fs';
import { combinedReportTemplate } from './report-file';
import { getTime } from './helper';
import { TestResult } from './declarations';
import { table } from 'table';


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
  console.log('reportFile', reportFiles)
  if (reportFiles.length === 0) {
    console.error(`No report files found for ${className}`);
    return;
  }

  const results = parseTestResults(reportDir, reportFiles);

  // Kiểm tra có case fail hay không
  const noFailedTests = hasNoFailedTests(results);

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

  // Xác định thư mục output dựa trên có case fail hay không
  const outputBaseDir = path.join(__dirname, '../test-requests/.reports');
  const outputDir = path.join(
    outputBaseDir,
    noFailedTests ? 'success-reports' : 'failed-reports',
    className
  );

  ensureDirExists(outputDir);

  const reportFileName = `${className}-combined-${getTime()}.report.txt`;
  const reportPath = path.join(outputDir, reportFileName);

  try {
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Combined report generated: ${reportPath}`);
    console.log(`ℹ️ Report classified as: ${noFailedTests ? 'SUCCESS (no failed tests)' : 'FAILED (has failed tests)'}`);
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
    const reportFile = path.join(reportDir, `${dtoName}.result.json`);
    if (!fs.existsSync(reportFile)) {
      fs.writeFileSync(reportFile, '{}'); // Tạo file mẫu nếu không tồn tại
      console.log(`Created placeholder JSON for ${dtoName} at ${reportFile}`);
    }
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

function hasNoFailedTests(results: TestResult[]): boolean {
  return results.every(result => result.failedTests.length === 0);
}

export function viewReports(dtoName: string) {
  const fullPath = path.join(__dirname, '../test-requests/.reports', dtoName);

  try {
    // Check if dtoName is a file
    if (dtoName.endsWith('.txt') || dtoName.endsWith('.md')) {
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        const data = fs.readFileSync(fullPath, 'utf8');
        renderMarkdown(data);
        return;
      } else {
        console.log('File not found:', fullPath);
        return;
      }
    }

    // Treat dtoName as a directory
    const files = fs.readdirSync(fullPath)
      .filter(file => file.endsWith('.txt') || file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(fullPath, file);
        const stats = fs.statSync(filePath);
        return { file, mtime: stats.mtime };
      })
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

    if (files.length === 0) {
      console.log('No .txt or .md file found in:', fullPath);
      return;
    }

    const newestFile = files[0].file;
    const newestFilePath = path.join(fullPath, newestFile);
    const data = fs.readFileSync(newestFilePath, 'utf8');
    renderMarkdown(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Directory or file does not exist:', fullPath);
    } else if (err.code === 'ENOTDIR') {
      console.error('Expected a directory but found a file:', fullPath);
    } else {
      console.error('Error reading file:', err);
    }
  }
}

function renderMarkdown(content: string) {
  // Split content into lines
  const lines = content.split('\n');

  // Variables to track table parsing
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  let output: string[] = [];

  for (let line of lines) {
    line = line.trim();

    // Handle headers
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)![0].length;
      const text = line.replace(/^#+/, '').trim();
      output.push(`\x1b[1m${' '.repeat(level * 2)}${text}\x1b[0m`); // Bold headers with indentation
      continue;
    }

    // Handle table start
    if (line.startsWith('|')) {
      const columns = line.split('|').map(col => col.trim()).filter(col => col);
      if (!inTable) {
        // Header row
        tableHeaders = columns;
        inTable = true;
        tableRows = [tableHeaders];
      } else if (line.match(/^\|[-:\s|]+$/)) {
        // Separator row, ignore
        continue;
      } else {
        // Data row
        tableRows.push(columns);
      }
      continue;
    }

    // Handle non-table lines (e.g., text, links)
    if (inTable && tableRows.length > 1) {
      // End of table, render it
      output.push(table(tableRows, {
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
          joinBody: `─`
        }
      }));
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }

    // Handle regular text or links
    if (line) {
      // Replace Markdown links [text](url) with text
      line = line.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      output.push(line);
    }
  }

  // Render any remaining table
  if (inTable && tableRows.length > 1) {
    output.push(table(tableRows, {
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
        joinBody: `─`
      }
    }));
  }

  console.log(output.join('\n'));
}