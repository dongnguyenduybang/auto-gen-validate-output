import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { exec, spawn } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { clearFiles, normalizePath } from './utils/helper';
import { generateAllReports, viewReports } from './utils/combine-report';
import { interactiveCLI } from './utils/inquirer-prompts';
import util from 'util';
import { loadAIModel } from './utils/ai-service';
import { genK6Request } from './utils/k6-test';
import { generateSetupData } from './utils/k6-help';
import { default as runTeardown } from './setup/jest.teardown';
import setup from './setup/jest.setup';

type ActionHandler = (
  input: string | string[],
) => void | Promise<void> | Promise<string[]>;

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
        genAllRequests(dto);
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
          console.error(
            '❌ Failed to generate report:',
            (error as Error).message,
          );
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
  },
  test: {
    request: [runTests('test-requests')],
    response: [runTests('test-responses')],
    saga: [runTests('test-sagas')],
    ws: [runTests('test-ws')],
    k6: [runTestsK6()],
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
        // console.log(stderr, stdout)
        console.log(`✅ Success: ${normalizedPath}`);
        return normalizedPath;
      } catch (error) {
        console.error(
          `❌ Failed to run test for ${filePath}:`,
          (error as Error).message,
        );
        return null;
      }
    });

    const results = await Promise.all(testPromises);
    return results.filter(Boolean) as string[];
  };
}

function runTestsK6(): ActionHandler {
  return async (filePaths: string | string[]) => {
    await setup();
    await generateSetupData(filePaths);
    if (Array.isArray(filePaths)) {
      for (const filePath of filePaths) {
        const lastSegment = filePath.split('/').pop() || '';
        await runK6TestScript(filePath, `${lastSegment}.k6.js`);
      }
    } else {
      const lastSegment = filePaths.split('/').pop() || '';
      await runK6TestScript(filePaths, `${lastSegment}.k6.js`);
    }
    console.log('🧹 Starting global teardown...');
    await runTeardown();
  };
}

function runK6TestScript(scriptFolderPath: string, scriptFile: string) {
  return new Promise<void>((resolve) => {
    const fullPath = `${scriptFolderPath}/${scriptFile}`;
    const k6Process = spawn('k6', ['run', fullPath], {
      cwd: scriptFolderPath,
      stdio: 'inherit',
      shell: true,
    });

    k6Process.on('close', () => {
      console.log(`✅ K6 test for ${scriptFile} completed successfully.`);
      resolve();
    });
  });
}

export async function genAllRequests(dto: string) {
  try {
    await setup();
    await loadAIModel();
    const [bodyResult, testResult] = await Promise.all([
      genBodyRequest(dto),
      // genTestRequest(dto)
      genK6Request(dto),
    ]);

    return { bodyResult, testResult };
  } catch (e) {
    console.error('❌ Lỗi khi gen requests:', e);
    throw e;
  }
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
