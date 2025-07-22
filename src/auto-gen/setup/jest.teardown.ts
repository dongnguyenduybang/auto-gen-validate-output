import { setupConfiguration } from '../utils/get-config';
import { executeSteps } from '../utils/execute-test';
import { findRequestFunction } from '../helpers/file-matching';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { TeardownConfig } from '../types/shared.types';

setupConfiguration();

export default async function () {
  try {
    console.log('Global teardown: Cleaning up after tests');

    // Đọc file YAML
    const configPath = path.resolve(process.cwd(), 'config.yaml');
    let teardownFilePath;

    try {
      const configContent = fs.readFileSync(configPath, 'utf8');
      const config = yaml.load(configContent) as TeardownConfig;
      teardownFilePath = config.teardownRequestFile;
    } catch (error) {
      console.warn('No teardown.config.yaml found, using default path: ./jest.teardown.request');
      teardownFilePath = './jest.teardown.request';
    }

    // Import file động dựa trên đường dẫn
    const absolutePath = path.resolve(process.cwd(), teardownFilePath);
    const module = await import(absolutePath);
    const requestFunction = findRequestFunction(module, absolutePath);
    const request = await requestFunction();
    const requestBeforeAll = request.steps?.[0]?.actions?.main || [];
    const results = await executeSteps(
      requestBeforeAll,
      globalThis.globalContext,
    );

    results.forEach((result) => {
      if (!result.status) {
        console.error(`Error: ${result.error}`);
      } else {
        console.log(`Step ${result.stepName} executed successfully`);
        console.log('Global teardown completed successfully');
        delete globalThis.globalContext;
        delete globalThis.globalVar;
        delete globalThis.urls;
      }
    });
  } catch (error) {
    console.error('Global teardown failed:', error);
    throw error;
  }
}