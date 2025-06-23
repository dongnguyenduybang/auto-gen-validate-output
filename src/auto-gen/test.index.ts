import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import inquirer from 'inquirer';
import { genBodyRequest } from './utils/gen-body-request';
import { genTestRequest } from './utils/gen-test-request';
import { execSync } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { findTestPath } from './utils/helper';

type ActionHandler = (dtoName: string) => Promise<void> | void;

// Interface cho các lựa chọn
interface MainAction {
  name: string;
  value: string;
}

interface SubAction {
  name: string;
  value: string;
}

// Khởi tạo các tham số từ command line
const args = process.argv.slice(2);
let action: string, type: string, dtoName: string, subType: string;
let restArgs: string[] = [];
if (args.length > 0 && !args.includes('--started')) {
  // Chế độ command line cũ
  if (args.length < 2) {
    console.error(
      'Usage: pnpm <action> <type> [dtoName]\nExample: pnpm gen request [UserDTO] or pnpm test request [UserDTO]',
    );
    process.exit(1);
  }

  [action, type, ...restArgs] = args;

  if (type === 'report') {
    [subType, dtoName] = restArgs;
  } else if (type !== 'reports') {
    dtoName = restArgs[0];
  } else {
    dtoName = restArgs[0];
  }
}

const validTypes = ['request', 'response', 'saga', 'report', 'reports', 'ws'];

const actionHandlers: Record<string, Record<string, ActionHandler[]>> = {
  gen: {
    request: [
      async (dto) => {
        console.log(`[GEN BODY] Starting for: ${dto}`);
        try {
          const result = await genBodyRequest(dto);
          return result;
        } catch (e) {
          console.error(`[GEN BODY] Error for ${dto}:`, e);
          throw e;
        }
      },
      async (dto) => {
        console.log(`[GEN TEST] Starting for: ${dto}`);
        try {
          const result = await genTestRequest(dto);
          console.log(`[GEN TEST] Successfully generated spec file for: ${dto}`);
          return result;
        } catch (e) {
          console.error(`[GEN TEST] Error for ${dto}:`, e);
          throw e;
        }
      },
    ],
    response: [(dto) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto) => Promise.resolve(genTestSaga(dto))],
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

  if (handlers[0].name.includes('clearFiles')) {
    console.log(`Initiating recursive clear of all .spec.ts files in: ${fullPath}`);
    await clearAllFilesRecursively(fullPath);
    console.log(`Completed recursive clear in: ${fullPath}`);
    return;
  }

  const directories = getSubDirectories(fullPath).filter(
    (dir) => !dir.includes('reports'),
  );

  console.log(`Found ${directories.length} DTO directories:`, directories);

  for (const dir of directories) {
    console.log(`Processing DTO: ${dir}`);
    for (const handler of handlers) {
      try {
        console.log(`Executing handler for ${dir} with function: ${handler.name || 'anonymous'}`);
        await handler(dir);
        console.log(`Successfully processed ${dir} with handler: ${handler.name || 'anonymous'}`);
      } catch (error) {
        console.error(`Error processing ${dir} with handler: ${error.message}`, error.stack);
      }
    }
  }
}

function getSubDirectories(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() && !dirent.name.toLowerCase().includes('report'),
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
  const handler = async (dtoName: string) => {
    const baseDir = path.join(__dirname, testType);

    if (!dtoName) {
      console.log(`🧹 Clearing all files in ${baseDir}`);
      await clearAllFilesRecursively(baseDir);
      return;
    }

    const targetDir = path.join(baseDir, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`❌ Directory not found: ${targetDir}`);
      return;
    }

    console.log(`🧹 Cleaning files in ${targetDir}`);
    await clearAllFilesRecursively(targetDir);
  };

  Object.defineProperty(handler, 'name', {
    value: `clearFiles_${testType}`,
    writable: false
  });

  return handler;
}

function clearAllFilesRecursively(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      clearAllFilesRecursively(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.spec.ts')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Deleted: ${fullPath}`);
      } catch (error) {
        console.error(`Failed to delete ${fullPath}: ${error.message}`);
      }
    }
  });
}

function clearReports(reportType: string): ActionHandler {
  return async (dtoName: string) => {
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

async function interactiveCLI() {
  console.log('🚀 Validate 🚀');
  console.log('=============================\n');

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select action:',
        choices: [
          { name: 'Generate files', value: 'gen' },
          { name: 'Run tests', value: 'test' },
          { name: 'Clear files', value: 'clear' },
          { name: 'Exit', value: 'exit' }
        ],
      }
    ]);

    if (action === 'exit') {
      console.log('👋 Goodbye!');
      process.exit(0);
    }

    const { type } = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Select file type:',
        choices: [
          { name: 'Request', value: 'request' },
          { name: 'Response', value: 'response' },
          { name: 'Saga', value: 'saga' },
          { name: 'WebSocket', value: 'ws' },
          { name: 'Back', value: 'back' }
        ],
      }
    ]);

    if (type === 'back') continue;

    if (action === 'clear') {
      const { scope } = await inquirer.prompt([
        {
          type: 'list',
          name: 'scope',
          message: 'Select clear scope:',
          choices: [
            { name: 'Clear all', value: 'all' },
            { name: 'Clear by DTO', value: 'dto' },
            { name: 'Back', value: 'back' }
          ],
        }
      ]);

      if (scope === 'back') continue;

      if (scope === 'all') {
        console.log(`🧹 Clearing all ${type} files...`);
        await actionHandlers.clear[type][0]('');
        console.log('✅ Done!');
        continue;
      }
    }

    const requestDir = path.join(__dirname, './test-requests');
    const allDtos = getSubDirectories(requestDir);

    const { selectedDtos } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedDtos',
        message: 'Select DTOs to process:',
        choices: [
          { name: 'All DTOs', value: 'ALL' },
          new inquirer.Separator(),
          ...allDtos.map(dto => ({ name: dto, value: dto }))
        ],
        validate: answer => answer.length > 0 || 'You must choose at least one DTO!'
      }
    ]);

    const dtosToProcess = selectedDtos.includes('ALL') ? allDtos : selectedDtos;

    for (const dto of dtosToProcess) {
      console.log(`\n🔄 Processing ${action} ${type} for: ${dto}`);
      try {
        for (const handler of actionHandlers[action][type]) {
          await handler(dto);
        }
        console.log(`✅ Successfully processed ${dto}`);
      } catch (error) {
        console.error(`❌ Error processing ${dto}:`, error.message);
      }
    }

    console.log('\n🎉 All done!');
  }
}

async function main() {
  if (process.argv.includes('--started') || process.argv.length <= 2) {
    await interactiveCLI();
    return;
  }

  console.log(`Processing "${type}${subType ? ` ${subType}` : ''}"${dtoName ? ` for: ${dtoName}` : ''}`);

  try {
    const handlers = actionHandlers[action]?.[type];
    if (!handlers) throw new Error('Action invalid');

    let selectedDTOs: string[] = [];

    if (!dtoName && (action === 'gen' || action === 'test') && type === 'request') {
      const requestDir = path.join(__dirname, './test-requests');
      selectedDTOs = getSubDirectories(requestDir);
    } else if (action === 'clear' && !dtoName) {
      const basePath = `test-${type === 'report' ? subType : type}s`;
      await handleBulkAction(basePath, handlers);
      return;
    } else if (dtoName) {
      selectedDTOs = [dtoName];
    } else {
      throw new Error('Missing dtoName parameter');
    }

    for (const dto of selectedDTOs) {
      console.log(`\n🚀 Starting processing for: ${dto}`);
      for (const handler of handlers) {
        try {
          await handler(dto);
          console.log(`✅ Handler completed successfully for ${dto}`);
        } catch (error) {
          console.error(`❌ Handler failed for ${dto}:`, error.message);
        }
      }
    }

    console.log('\n🎉 All selected DTOs processed successfully!');
  } catch (error) {
    console.error('⛔ Critical error:', error.message);
    process.exit(1);
  }
}

main();