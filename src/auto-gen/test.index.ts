import path from 'path';
import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { genTestRequest } from './utils/gen-test-request';
import { execSync } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { clearFiles, clearReports, findTestPath, getSubDirectories, handleBulkAction } from './utils/helper';
import { generateAllReports, viewReports } from './utils/combine-report';
import { interactiveCLI } from './utils/inquirer-prompts';

type ActionHandler = (dtoName: string) => Promise<void> | void;

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
      async (dto) => {
        try {
          const result = await genBodyRequest(dto);
          return result;
        } catch (e) {
          throw e;
        }
      },
      async (dto) => {
        try {
          const result = await genTestRequest(dto);
          return result;
        } catch (e) {
          throw e;
        }
      },
    ],
    response: [(dto) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto) => Promise.resolve(genTestSaga(dto))],
  },
  report: {
    single: [async (dtoName) => {
      console.log(`📊 Generating report for: ${dtoName}`);

      const normalizedDtoName = dtoName.replace(/\//g, '-');
      await generateAllReports(normalizedDtoName);
    }],
    all: [async () => {
      console.log('📊 Generating all reports');
      await generateAllReports();
    }],
    view: [async (dtoName) => {
      console.log('📊 View reports: ');
      await viewReports(dtoName)
    }]
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
    // report: [
    //   (dto) => {
    //     const basePath = `test-${subType}s/reports`;
    //     return clearReports(basePath)(dto);
    //   },
    // ],
  },
};



function runTests(testType: string): ActionHandler {
  return async (dtoName) => {
    console.log(`Running test for ${testType} "${dtoName}"...`);
    try {
      const basePath = path.resolve(__dirname, testType);
      const testPaths = findTestPath(basePath, dtoName);

      if (!testPaths || testPaths.length === 0) {
        console.error(`Test file not found for ${dtoName} in ${basePath}`);
        process.exit(1);
      }

      const normalizedPaths = testPaths
        .map((p) => `"${p.replace(/\\/g, '/')}"`)
        .join(' ');
      execSync(`jest ${normalizedPaths}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Test failed for ${dtoName}:`, error.message);
      process.exit(1);
    }
  };
}

async function main() {
  try {
    if (process.argv.includes('--started') || process.argv.length <= 2) {
      await interactiveCLI();
      return;
    }
  } catch (error) {
    console.error('⛔ Critical error:', error.message);
    process.exit(1);
  }
}

main();