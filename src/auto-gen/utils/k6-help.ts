import path, { basename } from 'path';
import fs from 'fs';
import * as os from 'os';
import yaml from 'js-yaml';
import { setupConfiguration } from './get-config';
import { executeSteps } from './execute-test';
import { getDtoFolderPath } from '../helpers/fs-helpers';
import { findRequestFunction } from '../helpers/file-matching';
import { SetupConfig } from '../types/shared.types';
setupConfiguration();

export function mapOption(
  vus,
  executor,
  stages,
  thresholds,
  gracefulRampDown,
  iterations,
) {
  return ` {
                "scenarios": {
                  "load_test": {
                   "executor": "${executor}",
                    "vus": ${vus},
                    "iterations": ${iterations}
                  }
                },
                "thresholds": ${thresholds
      ? thresholds
      : `{
                  "http_req_duration": ["p(95)<500"],
                  "passed_tests": ["count>=1"],
                  "failed_tests": ["count<2"]
                }`
    },
                "discardResponseBodies": false
              }
            `;
}

export async function generateSetupData(dtoPath) {
  try {
    const resolveVar = `export function resolveVariables(obj, context) {
  if (typeof obj === 'string') {
    return obj.replace(
      /\\{\\{(.+?)\\}\\}/g,
      (_, path) => {
        // Simple path resolution - could be enhanced for nested objects
        return context[path.trim()] ?? \`{{\${path}}}\`;
      }
    );
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => resolveVariables(item, context));
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, resolveVariables(v, context)])
    );
  }
  return obj;
}
  export function parseErrors(errorString) {
  if (!errorString.trim()) return [];
  
  // Cải tiến regex để bắt cả trường hợp chữ thường
  const expectedReceivedRegex = /(.*(expected|Expected).*(received|Received).*?(?=(,|$)))/i;
  const matches = errorString.match(expectedReceivedRegex);
  
  if (matches) {
    const fullError = matches[0].trim();
    const remaining = errorString.replace(fullError, '').replace(/^,/, '').trim();
    
    if (remaining) {
      return [fullError, ...parseErrors(remaining)];
    }
    return [fullError];
  }
  
  // Nếu không có pattern đặc biệt thì tách bằng dấu phẩy thông thường
  return errorString.split(',')
    .map(e => e.trim())
    .filter(e => e);
}
export function cleanErrors(errors) {
  return errors.map(error => {
    return error.replace(/^"+|"+$/g, '').replace(/\\\\/g, '');
  });
}


`;


    let setupFilePath
    const configPath = path.resolve(process.cwd(), 'config.yaml');
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configContent) as SetupConfig;
    const context = globalThis.globalContext;
    const dtoName = basename(dtoPath);
    setupFilePath = config.setupRequestFile;
    if (!setupFilePath) {
      const configPath = path.resolve(process.cwd(), 'config.yaml');
      try {
        const configContent = fs.readFileSync(configPath, 'utf8');
        const config = yaml.load(configContent) as SetupConfig;
        setupFilePath = config.setupRequestFile;
      } catch (error) {
        console.warn('No config.yaml found or no setupRequestFile specified, using default path');
      }
    }

    const absolutePath = path.resolve(process.cwd(), setupFilePath);
    if (!absolutePath.startsWith(process.cwd())) {
      throw new Error('Invalid setup file path: Path must be within the project directory');
    }

    const moduleSetup = await import(absolutePath);
    const requestModuleSetup = findRequestFunction(moduleSetup, absolutePath);
    const requestModule = await requestModuleSetup();
    const requestSetup = requestModule.steps?.[0]?.actions?.main || [];
    const resultsSetup = await executeSteps(requestSetup, context);

    resultsSetup.forEach((result) => {
      if (!result.status) {
        console.error(`Error: ${JSON.stringify(result.error, null, 2)}`);
      } else {
        console.log(`Step ${result.stepName} executed successfully`);
        console.log('Global setup completed successfully');
      }
    });

    const foundFolders = getDtoFolderPath(dtoName);
    const pathFile = path.join(foundFolders, `${dtoName}.request.js`);
    const module = await import(pathFile);

    const requestFunction = findRequestFunction(module, '');
    const request = await requestFunction();

    const requestBefore = request.steps?.[0]?.actions?.beforeAll || [];

    const results = await executeSteps(requestBefore, context);

    if (results.length > 0) {
      results.forEach((result) => {
        if (!result.status) {
          console.error(`Error: ${result.error}`);
        } else {
          console.log(`Step ${result.stepName} executed successfully`);
        }
      });
    }

    const setupData = context.clone();
    const utilsPaths = path.join(
      os.homedir(),
      'Documents',
      'k6-studio',
      'Scripts',
      'common',
    );
    const utils = path.join(utilsPaths, `utils.js`);
    fs.mkdirSync(path.dirname(utils), { recursive: true });
    fs.writeFileSync(utils, resolveVar);

    const scriptPath = path.join(
      os.homedir(),
      'Documents',
      'k6-studio',
      'Scripts',
      `${dtoName}`,
      'common',
    );
    const filePath = path.join(scriptPath, `setup-data.k6.json`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(setupData, null, 2));
    console.log('Setup data generated');
  } catch (error) {
    console.error('Error generating setup data:', error.message);
    throw error;
  }
}

