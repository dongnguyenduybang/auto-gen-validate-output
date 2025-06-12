import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { genTestRequest } from './utils/gen-test-request';
import { execSync } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { ActionHandler } from './utils/declarations';
import { generateAllReports } from './utils/combine-report';
import { clearFiles, clearReports, findAllDtoDirectories, findTestPath } from './utils/helper';
import { genClientSwagger } from './swagger/gen-client-swagger';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    'Usage: pnpm <action> <type> <dtoName>\nExample: pnpm gen request UserDTO',
  );
  process.exit(1);
}

const [action, type, ...restArgs] = args;
let subType, dtoName;

if (type === 'report') {
  [subType, dtoName] = restArgs;
} else if (type !== 'reports') {
  dtoName = restArgs[0];
} else {
  dtoName = restArgs[0];
}
const validTypes = ['request', 'response', 'saga', 'report', 'reports', 'swagger'];

if (!validTypes.includes(type)) {
  console.error(`Invalid type. Valid types: ${validTypes.join(', ')}`);
  process.exit(1);
}

const actionHandlers: Record<string, Record<string, ActionHandler[]>> = {
  gen: {
    request: [
      (dto) => {
        console.log(`[GEN BODY] Starting for: ${dto}`);
        try {
          const result = genBodyRequest(dto);
          console.log(`[GEN BODY] Completed for: ${dto}`);
          return Promise.resolve(result);
        } catch (e) {
          console.error(`[GEN BODY] Error for ${dto}:`, e);
          throw e;
        }
      },
      (dto) => {
        console.log(`[GEN TEST] Starting for: ${dto}`);
        try {
          const result = genTestRequest(dto);
          console.log(`[GEN TEST] Completed for: ${dto}`);
          return Promise.resolve(result);
        } catch (e) {
          console.error(`[GEN TEST] Error for ${dto}:`, e);
          throw e;
        }
      },
    ],
    response: [(dto) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto) => Promise.resolve(genTestSaga(dto))],
    reports: [(dto) => generateAllReports(dto)],
    swagger: [() => genClientSwagger()]
  },
  test: {
    request: [runTests('test-requests')],
    response: [runTests('test-responses')],
    saga: [runTests('test-sagas')],
  },
  clear: {
    request: [clearFiles('test-requests')],
    response: [clearFiles('test-responses')],
    saga: [clearFiles('test-sagas')],
    report: [
      (dto) => {
        const basePath = `test-${subType}s/reports`;
        return clearReports(basePath)(dto);
      },
    ],
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
  console.log(`Processing "${type}${subType ? ` ${subType}` : ''}${dtoName ? ` for: ${dtoName}` : ''}`);

  try {
    const handlers = actionHandlers[action]?.[type];
    if (!handlers) throw new Error('Invalid action');

    if (type === 'reports') {
      for (const handler of handlers) {
        await handler(dtoName);
      }
    } else {
      const parentDirPath = path.join(__dirname, 'test-requests', dtoName);
      const isParentDir = fs.existsSync(parentDirPath) && fs.statSync(parentDirPath).isDirectory();

      if (isParentDir) {
        const allDtoDirs = findAllDtoDirectories(dtoName);
        console.log(`Found DTO directories:`, allDtoDirs);
        for (const dtoDir of allDtoDirs) {
          for (const handler of handlers) {
            console.log(`Executing handler for: ${dtoDir}`);
            await handler(dtoDir);
          }
        }
      } else {
       
        for (const handler of handlers) {
          await handler(dtoName);
        }
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
