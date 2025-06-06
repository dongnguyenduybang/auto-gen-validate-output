import {
  IsString,
  IsDefined,
  IsEnum,
  IsInvalid,
  IsNotEmpty,
  IsULID,
  ValidIf,
  IsNotNull,
} from '../decorator';
import { MaxLength, MinLength } from '../decorator';
import { ErrorMessage, PretendingTo, ReportCategory, VAR } from '../enums';
import { generateStructuredErrorCases } from '../utils/dto-helper-v2';
import * as ExcelJS from 'exceljs';

let singleErrorCases: any[], pairwiseErrorCases: any[];

export class ReportMessageDTO {
  @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
  @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsULID()
  @IsDefined()
  messageId: string = '';

  @IsEnum(ReportCategory)
  @IsDefined()
  @IsNotEmpty()
  reportCategory: ReportCategory = 0;

  @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_OTHER, {
    optional: false,
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  reportReason: string = '';

  @ValidIf(
    'reportCategory',
    '===',
    ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
    { optional: false },
  )
  @IsEnum(PretendingTo)
  @IsDefined()
  pretendingTo: PretendingTo = 0;
}
const validPayload = {
  channelId: VAR.channelId,
  workspaceId: VAR.workspaceId,
  messageId: VAR.messageId1,
  reportCategory: ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
  pretendingTo: PretendingTo.PRETENDING_TO_FRIEND,
  reportReason: 'report message',
};

function analyzeTestCases(testCases: any[], dtoClass: any) {
  const keys = Object.keys(new dtoClass());

  // Phân loại test cases
  singleErrorCases = testCases.filter((tc) => tc.expects.length === 1);

  pairwiseErrorCases = testCases.filter((tc) => tc.expects.length >= 2);

  // Thống kê
  console.log('=== Analysis Report ===');
  console.log(`Total cases: ${testCases.length}`);
  console.log(`Single-error cases: ${singleErrorCases.length}`);
  console.log(`Pairwise-error cases: ${pairwiseErrorCases.length}`);
  let coveredPairs = 0;
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const hasPair = pairwiseErrorCases.some((tc) => {
        const errorFields = tc.expects.map((e: any) => e.field);
        return errorFields.includes(keys[i]) && errorFields.includes(keys[j]);
      });
      if (hasPair) coveredPairs++;
    }
  }

  const totalPossiblePairs = (keys.length * (keys.length - 1)) / 2;
  console.log(
    `Pairwise coverage: ${coveredPairs}/${totalPossiblePairs} combinations`,
  );
}

async function exportToExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Test Cases');
  worksheet.columns = [
    { header: 'Test Case #', key: 'testCase', width: 15 },
    { header: 'Single Field', key: 'SingleField', width: 15 },
    { header: 'Workspace ID', key: 'workspaceId', width: 15 },
    { header: 'Channel ID', key: 'channelId', width: 15 },
    { header: 'Message ID', key: 'messageId', width: 15 },
    { header: 'Report Category', key: 'reportCategory', width: 15 },
    { header: 'Report Reason', key: 'reportReason', width: 30 },
    { header: 'Pretending To', key: 'pretendingTo', width: 15 },
    { header: 'Expected Errors', key: 'expectedErrors', width: 40 },
  ];

  let type;
  testCases.forEach((testCase, index) => {
    const isSingle = singleErrorCases.includes(testCase);
    const isPairwise = pairwiseErrorCases.includes(testCase);
    if (isSingle === true) {
      type = true;
    } else {
      type = false;
    }
    worksheet.addRow({
      index: index + 1,
      SingleField: type ? '✓' : '',
      workspaceId: testCase.body.workspaceId,
      channelId: testCase.body.channelId,
      messageId: testCase.body.messageId,
      reportCategory: testCase.body.reportCategory,
      reportReason: testCase.body.reportReason,
      pretendingTo: testCase.body.pretendingTo,
      expectedErrors: testCase.expects,
    });
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCCCCC' },
    };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
  });

  const filePath = `test-cases-${new Date().toISOString().split('T')[0]}.xlsx`;
  await workbook.xlsx.writeFile(filePath);
}

function exportToMarkdown(
  testCases: any[],
  singleErrorCases: any[],
  pairwiseErrorCases: any[],
) {
  let markdown = `# Test Cases Report\n\n`;
  markdown += `**Total cases**: ${testCases.length}  \n`;
  markdown += `**Single-error cases**: ${singleErrorCases.length}  \n`;
  markdown += `**Pairwise-error cases**: ${pairwiseErrorCases.length}\n\n`;

  // Bảng tổng hợp
  markdown += `## Summary\n`;
  markdown += `| Case Type | Count |\n`;
  markdown += `|-----------|-------|\n`;
  markdown += `| Single-error | ${singleErrorCases.length} |\n`;
  markdown += `| Pairwise-error | ${pairwiseErrorCases.length} |\n`;
  markdown += `| Valid cases | ${testCases.length - singleErrorCases.length - pairwiseErrorCases.length} |\n\n`;

  markdown += `## Detailed Test Cases\n`;
  testCases.forEach((testCase, index) => {
    const isSingle = singleErrorCases.includes(testCase);
    const isPairwise = pairwiseErrorCases.includes(testCase);

    markdown += `### Test Case #${index + 1}\n`;
    markdown += `**Type**: ${isSingle ? 'Single-error' : isPairwise ? 'Pairwise-error' : 'Valid'}\n\n`;
    markdown += `**Payload**:\n\`\`\`json\n${JSON.stringify(testCase.body, null, 2)}\n\`\`\`\n\n`;

    if (testCase.expects.length > 0) {
      markdown += `**Expected Errors**:\n`;
      markdown += `${testCase.expects}\n`;
    } else {
      markdown += `**Expected**: No errors\n`;
    }
    markdown += `\n---\n`;
  });

  const fs = require('fs');
  const filename = `test-cases-${new Date().toISOString().split('T')[0]}.md`;
  fs.writeFileSync(filename, markdown);
  console.log(`Markdown file generated: ${filename}`);
}

const testCases = generateStructuredErrorCases(ReportMessageDTO, validPayload);
const test = [];
test.push(testCases);

analyzeTestCases(testCases, ReportMessageDTO);
exportToMarkdown(testCases, singleErrorCases, pairwiseErrorCases);
exportToExcel().catch((err) => console.error('Lỗi khi xuất Excel:', err));
