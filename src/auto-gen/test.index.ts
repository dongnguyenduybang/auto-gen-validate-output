#!/usr/bin/env node
import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { spawn } from 'child_process';
import { interactiveCLI } from './utils/inquirer-prompts';
import { loadAIModel } from './utils/ai-service';
import { genK6Request } from './utils/k6-test';
import { generateSetupData } from './utils/k6-help';
import { default as runTeardown } from './setup/jest.teardown';
import setup from './setup/jest.setup';
import { ActionHandler } from './types/shared.types';

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
  },
  test: {
    k6: [runTestsK6()],
  }
};

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
