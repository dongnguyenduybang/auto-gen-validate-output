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
import { findTestPath } from './utils/helper';
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
      (dto) => Promise.resolve(genBodyRequest(dto)),
      (dto) => Promise.resolve(genTestRequest(dto)),
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

async function handleBulkAction(basePath: string, handlers: ActionHandler[]) {
  const fullPath = path.join(__dirname, basePath);
  console.log(`Processing bulk action in directory: ${fullPath}`);

  // Lấy danh sách thư mục con, loại bỏ thư mục reports
  const directories = getSubDirectories(fullPath).filter(
    (dir) => !dir.includes('reports'),
  );

  console.log(`Found ${directories.length} DTO directories:`, directories);

  for (const dir of directories) {
    for (const handler of handlers) {
      try {
        await handler(dir);
      } catch (error) {
        console.error(`Handler failed: ${error.message}`);
      }
    }
  }
}

function getSubDirectories(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() && !dirent.name.toLowerCase().includes('report'), // Loại bỏ thư mục report
    )
    .map((dirent) => dirent.name);
}

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

function clearFiles(testType: string): ActionHandler {
  return async (dtoName) => {
    const basePath = path.join(__dirname, testType);
    if (!fs.existsSync(basePath)) {
      console.error(`${testType} directory not found: ${basePath}`);
      return;
    }

    function clearDirectory(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          clearDirectory(fullPath);
        } else if (
          entry.name.toLowerCase().includes(dtoName.toLowerCase()) &&
          entry.name.endsWith('.spec.ts')
        ) {
          fs.unlinkSync(fullPath);
          console.log(`Deleted: ${fullPath}`);
        }
      }
    }

    clearDirectory(basePath);
  };
}

function clearReports(reportType: string): ActionHandler {
  return async (dtoName) => {
    const targetDir = path.join(__dirname, reportType, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`Report directory not found: ${targetDir}`);
      return;
    }

    fs.readdirSync(targetDir)
      .filter((file) => file.endsWith('.txt'))
      .forEach((file) => {
        const filePath = path.join(targetDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      });
  };
}

async function main() {
  console.log(
    `Processing "${type}${subType ? ` ${subType}` : ''}"${
      dtoName ? ` for: ${dtoName}` : ''
    }`,
  );

  try {
    const handlers = actionHandlers[action]?.[type];
    if (!handlers) throw new Error('Invalid action');

    if (type === 'reports') {
      for (const handler of handlers) {
        await handler(dtoName);
      }
    } else {
      const isBulkAction =
        dtoName &&
        (dtoName.includes('-requests') ||
          dtoName.includes('-responses') ||
          dtoName.includes('-sagas'));

      // if (!dtoName) {
      //   throw new Error('Missing dtoName parameter');
      // }

      if (isBulkAction) {
        await handleBulkAction(dtoName, handlers);
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
