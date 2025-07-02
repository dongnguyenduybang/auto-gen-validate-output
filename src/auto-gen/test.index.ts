import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { genTestRequest } from './utils/gen-test-request';
import { exec } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { clearFiles, normalizePath } from './utils/helper';
import { generateAllReports, viewReports } from './utils/combine-report';
import { interactiveCLI } from './utils/inquirer-prompts';
import util from 'util';
import path from 'path';
import { generateTotalReportsFromJSON } from './utils/gen-total-reports';

type ActionHandler = (input: string | string[]) => void | Promise<void> | Promise<string[]>;

const args = process.argv.slice(2);
if (args.length > 0 && !args.includes('--started')) {
  if (args.length < 2) {
    console.error(
      'Usage: pnpm <action> <type> [dtoName]\nExample: pnpm gen request [UserDTO] or pnpm test request [UserDTO]',
    );
    process.exit(1);
  }
}

export const actionHandlers: Record<string, Record<string, ActionHandler[]>> = {
  gen: {
    request: [
      async (dto: string) => {
        try {
          const result = await genBodyRequest(dto);
          return result;
        } catch (e) {
          throw e;
        }
      },
      async (dto: string) => {
        try {
          const result = await genTestRequest(dto);
          return result;
        } catch (e) {
          throw e;
        }
      },
    ],
    response: [(dto: string) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto: string) => Promise.resolve(genTestSaga(dto))],
  },
  report: {
    single: [
      async (reportName: string) => {
        console.log(`📊 Generating report for: ${reportName}`);
        const normalizedDtoName = reportName.replace(/\//g, '-');
        try {
          await generateAllReports(normalizedDtoName);
        } catch (error) {
          console.error('❌ Failed to generate report:', (error as Error).message);
          throw error;
        }
      },
    ],
    all: [
      async () => {
        console.log('📊 Generating all reports');
        await generateAllReports();
      },
    ],
    view: [
      async (dtoName: string) => {
        console.log('📊 View reports:');
        await viewReports(dtoName);
      },
    ],
    total: [
      async () => {
        console.log ('Generating total report');
        await generateTotalReportsFromJSON()
      }
    ]
  },
  test: {
    request: [runTests('test-requests')],
    response: [runTests('test-responses')],
    saga: [runTests('test-sagas')],
    ws: [runTests('test-ws')],
  },
  clear: {
    request: [clearFiles('test-requests')],
    response: [clearFiles('test-responses')],
    saga: [clearFiles('test-sagas')],
    ws: [clearFiles('test-ws')],
  },
};

const execPromise = util.promisify(exec);
function runTests(subType: string): ActionHandler {
  return async (filePaths: string | string[]) => {
    const paths = Array.isArray(filePaths) ? filePaths : [filePaths];

    const testPromises = paths.map(async (filePath) => {
      try {
        const normalizedPath = normalizePath(filePath);
        const testPathPattern = `${normalizedPath}/.*\\.spec\\.ts$`;
        console.log(`🔄 Processing: ${normalizedPath}`);
        console.log(`Running test for ${subType} "${normalizedPath}"...`);
        await execPromise(`jest ${testPathPattern}`);
        console.log(`✅ Success: ${normalizedPath}`);
        return normalizedPath;
      } catch (error) {
        console.error(`❌ Failed to run test for ${filePath}:`, (error as Error).message);
        return null;
      }
    });

    const results = await Promise.all(testPromises);
    return results.filter(Boolean) as string[];
  };
}

async function main(): Promise<void> {
  try {
    if (process.argv.includes('--started') || process.argv.length <= 2) {
      await interactiveCLI();
      return;
    }
  } catch (error) {
    console.error('⛔ Critical error:', (error as Error).message);
    process.exit(1);
  }
}

main();