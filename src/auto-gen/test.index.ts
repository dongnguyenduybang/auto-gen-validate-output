import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import { execSync } from 'child_process';

import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { ActionHandler } from './utils/declarations';
import { generateAllReports } from './utils/combine-report';
import { findTestPath } from './utils/helper';
import { genClientSwagger } from './swagger/gen-client-swagger';
import { genBodyRequests } from './utils/swagger-help';
import { genTestRequest } from './utils/gen-test-request';

const rawArgs = process.argv.slice(2);

// --------- Parse Flags ---------
function getFlag(flagName: string): string | undefined {
  const index = rawArgs.indexOf(flagName);
  return index !== -1 && rawArgs.length > index + 1 ? rawArgs[index + 1] : undefined;
}

const optionsString = getFlag('--options');
const cluster = getFlag('--cluster');

const args = rawArgs.filter((arg, i) => {
  return !arg.startsWith('--') && !rawArgs[i - 1]?.startsWith('--');
});

if (args.length < 3) {
  console.error('Usage: pnpm <action> <type> <dtoName>\nExample: pnpm gen request UserDTO\nFor interface: pnpm gen interface <subType> <dtoName>');
  process.exit(1);
}

const [action, type, ...restArgs] = args;

let subType: string | undefined;
let dtoName: string;

if (type === 'report' || type === 'interface') {
  [ dtoName] = restArgs;
} else {
  dtoName = restArgs[0];
}

const validTypes = ['request', 'response', 'saga', 'report', 'reports', 'swagger', 'interface'];
if (!validTypes.includes(type)) {
  console.error(`Invalid type. Valid types: ${validTypes.join(', ')}`);
  process.exit(1);
}

function parseOptions(optionString: string | undefined): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  if (!optionString) return result;

  const cleanOption = optionString.replace('--options', '').trim();
  const pairs = cleanOption.split(';').filter(pair => pair.trim());

  for (const pair of pairs) {
    const [key, value] = pair.split(':').map(s => s.trim());
    if (key && value) {
      const actions = value.split(/[,|\s]+/).map(v => v.trim()).filter(Boolean);
      result[key] = actions;
    }
  }

  return result;
}

const actionHandlers: Record<string, Record<string, ActionHandler[]>> = {
  gen: {
    // request: [(dto) => Promise.resolve(genTestRequest(dto))],
    response: [(dto) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto) => Promise.resolve(genTestSaga(dto))],
    reports: [(dto) => generateAllReports(dto)],
    swagger: [() => genClientSwagger()],
    interface: [
      (dto, cluster, options) => Promise.resolve(genBodyRequests(dto, cluster, options)),
      // (dto, cluster ) => Promise.resolve(genTestRequest(dto, cluster)),
    ],
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
  const directories = getSubDirectories(fullPath).filter((dir) => !dir.includes('reports'));

  for (const dir of directories) {
    for (const handler of handlers) {
      try {
        await handler(dir);
      } catch (error: any) {
        console.error(`Handler failed: ${error.message}`);
      }
    }
  }
}

function getSubDirectories(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.toLowerCase().includes('report'))
    .map((dirent) => dirent.name);
}

function runTests(testType: string): ActionHandler {
  return async (dtoName) => {
    try {
      const basePath = path.resolve(__dirname, testType);
      const testPaths = findTestPath(basePath, dtoName);

      if (!testPaths || testPaths.length === 0) {
        console.error(`Test file not found for ${dtoName} in ${basePath}`);
        process.exit(1);
      }

      const normalizedPaths = testPaths.map((p) => `"${p.replace(/\\/g, '/')}"`).join(' ');
      execSync(`jest ${normalizedPaths}`, { stdio: 'inherit' });
    } catch (error: any) {
      console.error(`Test failed for ${dtoName}:`, error.message);
      process.exit(1);
    }
  };
}

function clearFiles(testType: string): ActionHandler {
  return async (dtoName) => {
    const basePath = path.join(__dirname, testType);
    if (!fs.existsSync(basePath)) return;

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
    if (!fs.existsSync(targetDir)) return;

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
    `Processing "${type}${subType ? ` ${subType}` : ''}"${dtoName ? ` for: ${dtoName}` : ''}`,
  );

  if (type === 'interface' && !cluster) {
    console.error('Error: --branch is required for interface type');
    process.exit(1);
  }

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

      if (isBulkAction) {
        await handleBulkAction(dtoName, handlers);
      } else {
        for (const handler of handlers) {
          if (type === 'interface') {
            await handler(dtoName, cluster, parseOptions(optionsString));
          } else {
            await handler(dtoName);
          }
        }
      }
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
main();