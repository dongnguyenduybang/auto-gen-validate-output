import { table } from 'table';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import { TestReport } from './declarations';

export async function generateTotalReports(folderPath: string, outputFile: string = 'report.txt'): Promise<void> {
  // Xử lý đường dẫn thư mục
  let resolvedFolderPath = folderPath;
  if (!path.isAbsolute(folderPath)) {
    // Ánh xạ tới thư mục tmp-reports mặc định trong src/auto-gen/test-requests
    resolvedFolderPath = path.resolve(__dirname, '..', folderPath || 'tmp-reports');
    console.log(`Resolved folder path: ${resolvedFolderPath}`);
  }

  // Kiểm tra xem thư mục có tồn tại không
  try {
    await fsPromises.access(resolvedFolderPath);
  } catch (error) {
    console.error(`Error: Directory ${resolvedFolderPath} does not exist.`);
    throw error;
  }

  // Đọc tất cả file JSON trong thư mục
  const jsonData: TestReport[] = [];
  try {
    const files = await fsPromises.readdir(resolvedFolderPath);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(resolvedFolderPath, file);
        try {
          const content = await fsPromises.readFile(filePath, 'utf-8');
          const data: TestReport = JSON.parse(content);
          jsonData.push(data);
        } catch (error) {
          console.error(`Error reading ${file}: ${error}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error accessing folder ${resolvedFolderPath}: ${error}`);
    throw error;
  }

  if (jsonData.length === 0) {
    console.log('No JSON files found in the specified folder.');
    return;
  }

  // Phân tích dữ liệu
  const rows = jsonData.map(data => {
    const endpoint = data.path || 'Unknown';
    const total = data.totalTests || 0;
    const passed = data.passedTests || 0;
    const failed = data.failedTests?.length || 0;
    const warnings = data.warnings?.length || 0;

    // Đếm mã HTTP
    const statusCounts: { [key: number]: number } = {};
    [...(data.codedTest || []), ...(data.failedTests || [])].forEach(test => {
      const code = test.code;
      if (code) {
        statusCounts[code] = (statusCounts[code] || 0) + 1;
      }
    });

    return {
      row: [
        endpoint,
        total,
        passed,
        failed,
        warnings,
        statusCounts[200] || 0,
        statusCounts[201] || 0,
        statusCounts[400] || 0,
        statusCounts[403] || 0,
        statusCounts[500] || 0,
      ],
      failed // Lưu failed để lọc
    };
  });

  // Tạo bảng Fail Report (chỉ các endpoint có Fail > 0)
  const headers = [
    'Endpoint',
    'Total',
    'Pass',
    'Fail',
    'Warning',
    '200',
    '201',
    '400',
    '403',
    '500',
  ];
  const failRows = rows.filter(r => r.failed > 0).map(r => r.row);
  let failTableOutput = '';
  if (failRows.length === 0) {
    failTableOutput = 'No endpoints with failed tests found.\n';
  } else {
    failTableOutput = table([headers, ...failRows], {
      drawHorizontalLine: (index, size) => index === 0 || index === 1 || index === size,
      drawVerticalLine: () => true,
    });
  }

  // Tạo bảng Success Report (chỉ các endpoint có Fail = 0)
  const successRows = rows.filter(r => r.failed === 0).map(r => r.row);
  let successTableOutput = '';
  if (successRows.length === 0) {
    successTableOutput = 'No endpoints with zero failed tests found.\n';
  } else {
    successTableOutput = table([headers, ...successRows], {
      drawHorizontalLine: (index, size) => index === 0 || index === 1 || index === size,
      drawVerticalLine: () => true,
    });
  }

  // Kết hợp nội dung hai bảng với tiêu đề
  const combinedOutput = [
    'Fail Report',
    '===========',
    failTableOutput,
    '\nSuccess Report',
    '==============',
    successTableOutput,
  ].join('\n');

  // Ghi ra file
  try {
    const resolvedOutputFile = path.resolve(outputFile);
    await fsPromises.writeFile(resolvedOutputFile, combinedOutput, 'utf-8');
    console.log(`Combined report generated successfully at ${resolvedOutputFile}`);
  } catch (error) {
    console.error(`Error writing to ${outputFile}: ${error}`);
    throw error;
  }
}