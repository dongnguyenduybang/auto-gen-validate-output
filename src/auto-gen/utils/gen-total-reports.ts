import * as path from 'path';
import { promises as fsPromises } from 'fs';
import { TestResult } from './declarations';

interface ReportData {
  endpoint: string;
  dtoName: string;
  total: number;
  passed: number;
  failed: number;
  warnings: number;
  hasFailures: boolean;
  jsonFile: string;
  detailFilePath: string | null;
  reportCategory: string;
}

export async function generateTotalReportsFromJSON(
  inputDir: string = path.join(__dirname, '../tmp-reports'),
  outputDir: string = path.join(__dirname, '../test-requests/.reports')
): Promise<void> {
  try {

    const jsonFiles = (await fsPromises.readdir(inputDir))
      .filter(file => file.endsWith('.result.json'));

    if (jsonFiles.length === 0) {
      console.log('ℹ️ No JSON report files found.');
      return;
    }

    await fsPromises.mkdir(outputDir, { recursive: true });

    const reportData: ReportData[] = [];
    for (const file of jsonFiles) {
      const filePath = path.join(inputDir, file);
      const content = await fsPromises.readFile(filePath, 'utf-8');
      const data: TestResult = JSON.parse(content);

      const endpoint = data.path || file.replace('.result.json', '');
      const hasFailures = data.failedTests?.length > 0;

      const dtoName = file.replace('.result.json', '');

      const reportCategory = hasFailures ? 'failed-reports' : 'success-reports';
      const txtFileDir = path.join(outputDir, reportCategory, dtoName);

      let detailFilePath: string | null = null;

      try {

        const txtFiles = await fsPromises.readdir(txtFileDir);
        const txtFile = txtFiles.find(f => f.endsWith('.report.txt') && f.includes(dtoName));

        if (txtFile) {
          detailFilePath = path.join(txtFileDir, txtFile);
        }
      } catch (error) {
        console.warn(`⚠️ Cannot find detail report for ${dtoName}: ${error}`);
      }
      try {

        const txtFiles = await fsPromises.readdir(txtFileDir);
        const reportFiles = txtFiles.filter(f => f.endsWith('.report.txt') && f.includes(dtoName));

        let detailFilePath: string | null = null;

        if (reportFiles.length > 0) {

          const fileStats = await Promise.all(
            reportFiles.map(async file => {
              const filePath = path.join(txtFileDir, file);
              const stats = await fsPromises.stat(filePath);
              return { filePath, mtime: stats.mtime };
            })
          );

          fileStats.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

          detailFilePath = fileStats[0].filePath;
        }
      } catch (error) {
        console.warn(`⚠️ Cannot find detail report for ${dtoName}: ${error}`);
        detailFilePath = null;
      }

      reportData.push({
        endpoint,
        dtoName,
        total: data.totalTests || 0,
        passed: data.passedTests || 0,
        failed: data.failedTests?.length || 0,
        warnings: data.warnings?.length || 0,
        hasFailures,
        jsonFile: file,
        detailFilePath: detailFilePath ? path.relative(outputDir, detailFilePath) : null,
        reportCategory
      });
    }

    const markdownContent = generateSummaryMarkdown(reportData);
    const summaryPath = path.join(outputDir, 'SUMMARY.md');
    await fsPromises.writeFile(summaryPath, markdownContent);

    console.log(`✅ Summary report generated at ${summaryPath}`);
    console.log(`📊 Total endpoints: ${reportData.length}`);
    console.log(`✅ Passed: ${reportData.filter(d => !d.hasFailures).length}`);
    console.log(`❌ Failed: ${reportData.filter(d => d.hasFailures).length}`);

  } catch (error) {
    console.error('❌ Error generating total reports:', error);
    throw error;
  }
}

function generateSummaryMarkdown(data: ReportData[]): string {
  let content = `# 📊 Test Report Summary\n\n`;

  // Overview section
  const totalEndpoints = data.length;
  const passedEndpoints = data.filter(d => !d.hasFailures).length;
  const failedEndpoints = data.filter(d => d.hasFailures).length;
  const totalTests = data.reduce((sum, d) => sum + d.total, 0);
  const totalPassed = data.reduce((sum, d) => sum + d.passed, 0);
  const totalFailed = data.reduce((sum, d) => sum + d.failed, 0);
  const totalWarnings = data.reduce((sum, d) => sum + d.warnings, 0);

  content += `## 📋 Overview\n\n`;
  content += `| Metric | Count |\n`;
  content += `|--------|-------|\n`;
  content += `| Total Endpoints | ${totalEndpoints} |\n`;
  content += `| ✅ Passed Endpoints | ${passedEndpoints} |\n`;
  content += `| ❌ Failed Endpoints | ${failedEndpoints} |\n`;
  content += `| Total Test Cases | ${totalTests} |\n`;
  content += `| ✅ Passed Tests | ${totalPassed} |\n`;
  content += `| ❌ Failed Tests | ${totalFailed} |\n`;
  content += `| ⚠️ Warnings | ${totalWarnings} |\n\n`;

  // Failed Endpoints section (có thể click)
  const failed = data.filter(d => d.hasFailures);
  if (failed.length > 0) {
    content += `## ❌ Failed Endpoints (${failed.length})\n\n`;
    content += `| Endpoint | DTO | Passed | Failed | Warnings | Detail Report |\n`;
    content += `|----------|-----|--------|--------|----------|---------------|\n`;

    failed.forEach(item => {
      let detailLink = '❌ No Report';

      if (item.detailFilePath) {

        const encodedPath = item.detailFilePath.replace(/\\/g, '/');
        detailLink = `[📄 View Report](./${encodedPath})`;

        // Debug: Log để kiểm tra path
        console.log(`Debug - DTO: ${item.dtoName}, Path: ${encodedPath}`);
      }

      content += `| ${item.endpoint} | ${item.dtoName} | ${item.passed} | ${item.failed} | ${item.warnings} | ${detailLink} |\n`;
    });
    content += `\n`;
  }

  const passed = data.filter(d => !d.hasFailures);
  if (passed.length > 0) {
    content += `## ✅ Passed Endpoints (${passed.length})\n\n`;
    content += `| Endpoint | DTO | Passed | Total | Detail Report |\n`;
    content += `|----------|-----|--------|-------|---------------|\n`;

    passed.forEach(item => {
      const detailLink = item.detailFilePath
        ? `[📄 View Report](${item.detailFilePath})`
        : '❌ No Report';

      content += `| ${item.endpoint} | ${item.dtoName} | ${item.passed} | ${item.total} | ${detailLink} |\n`;
    });
    content += `\n`;
  }

  content += `## 📁 Reports by Category\n\n`;
  content += `### ❌ Failed Reports\n`;
  content += `Location: \`test-requests/.reports/failed-reports/\`\n\n`;

  const failedByDto = failed.reduce((acc, item) => {
    if (!acc[item.dtoName]) acc[item.dtoName] = [];
    acc[item.dtoName].push(item);
    return acc;
  }, {} as Record<string, ReportData[]>);

  Object.entries(failedByDto).forEach(([dtoName, items]) => {
    content += `- **${dtoName}**: ${items.length} endpoint(s)\n`;
  });

  content += `\n### ✅ Success Reports\n`;
  content += `Location: \`test-requests/.reports/success-reports/\`\n\n`;

  const passedByDto = passed.reduce((acc, item) => {
    if (!acc[item.dtoName]) acc[item.dtoName] = [];
    acc[item.dtoName].push(item);
    return acc;
  }, {} as Record<string, ReportData[]>);

  Object.entries(passedByDto).forEach(([dtoName, items]) => {
    content += `- **${dtoName}**: ${items.length} endpoint(s)\n`;
  });

  content += `\n---\n`;
  content += `*Generated at: ${new Date().toLocaleString()}*\n`;

  return content;
}