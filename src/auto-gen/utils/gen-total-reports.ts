import * as path from 'path';
import { promises as fsPromises } from 'fs';
import { ReportData } from './declarations';

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
      const data = JSON.parse(content);
      const endpoint = data.path || file.replace('.result.json', '');
      const hasFailures = data.failedTests?.length > 0;

      const dtoName = file.replace('.result.json', '');

      const reportCategory = hasFailures ? 'failed-reports' : 'success-reports';
      const txtFileDir = path.join(outputDir, reportCategory, dtoName);

      let detailFilePath: string | null = null;

      try {
        const txtFiles = await fsPromises.readdir(txtFileDir);
        const reportFiles = txtFiles.filter(f => f.endsWith('.report.txt') && f.includes(dtoName));

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
        // console.warn(`⚠️ Cannot process report files for ${dtoName}: ${error}`);
        // Không cần throw lỗi, chỉ log
      }
      reportData.push({
        endpoint,
        dtoName,
        total: data.summaries.totalTests || 0,
        passed: data.summaries.passedTests || 0,
        failed: data.summaries.failedTests || 0, // Not .length since it's a number
        warnings: data.summaries.warnings || 0,  // Fixed path and not .length
        case200: data.summaries.summary.statusCodes[200] || 0,
        case201: data.summaries.summary.statusCodes[201] || 0,
        case400: data.summaries.summary.statusCodes[400] || 0,
        case403: data.summaries.summary.statusCodes[403] || 0,
        case404: data.summaries.summary.statusCodes[404] || 0,
        case500: data.summaries.summary.statusCodes[500] || 0,
        hasFailures: !data.summaries.isSuccess, // Use isSuccess flag from summaries
        jsonFile: file,
        detailFilePath: data.reportPath,
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
  content += `\n---\n`;
  content += `Time: ${new Date().toLocaleString()}\n`;

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

  const failed = data.filter(d => d.hasFailures);
  if (failed.length > 0) {
    content += `## ❌ Failed Endpoints (${failed.length})\n\n`;
    content += `| Endpoint | DTO | Passed | Failed | Warnings | 200 | 201 | 400 | 403 | 404 | 500 | Detail Report |\n`;
    content += `|----------|-----|--------|--------|----------|-----|-----|-----|-----|-----|-----|---------------|\n`;

    failed.forEach(item => {
      let detailLink = '❌ No Report';

      if (item.detailFilePath) {
        const shortPath = item.detailFilePath.split('\\.reports\\')[1];
        const encodedPath = shortPath.replace(/\\/g, '/');
        detailLink = `[📄 View Report](./${encodedPath})`;
      }

      content += `| ${item.endpoint} | ${item.dtoName} | ${item.passed} | ${item.failed} | ${item.warnings} | ${item.case200} | ${item.case201} | ${item.case400} | ${item.case403} | ${item.case404} | ${item.case500} | ${detailLink} |\n`;
    });
    content += `\n`;
  }

  const passed = data.filter(d => !d.hasFailures);
  if (passed.length > 0) {
    content += `## ✅ Passed Endpoints (${passed.length})\n\n`;
    content += `| Endpoint | DTO | Passed | Failed | Warnings | 200 | 201 | 400 | 403 | 404 | 500 | Detail Report |\n`;
    content += `|----------|-----|--------|--------|----------|-----|-----|-----|-----|-----|-----|---------------|\n`;

    passed.forEach(item => {
      const detailLink = item.detailFilePath
        ? `[📄 View Report](${item.detailFilePath})`
        : '❌ No Report';

      content += `| ${item.endpoint} | ${item.dtoName} | ${item.passed} | ${item.failed} | ${item.warnings} | ${item.case200} | ${item.case201} | ${item.case400} | ${item.case403} | ${item.case404} | ${item.case500} | ${detailLink} |\n`;
    });
    content += `\n`;
  }
  return content;
}