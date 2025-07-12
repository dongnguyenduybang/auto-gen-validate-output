import path, { basename } from 'path';
import fs from 'fs';
import * as os from 'os';
import { setupConfiguration } from './get-config';
import { getDtoFolderPath } from './helper';
import { executeSteps } from './text-execute-test';
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
const resolveVar =
  `export function resolveVariables(obj, context) {
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
`;

    const context = globalThis.globalContext
    const dtoName = basename(dtoPath);

    const foundFolders = getDtoFolderPath(dtoName);
    const pathFile = path.join(foundFolders, `${dtoName}.request.ts`)
    const module = require(pathFile)

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
    )
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

export function findRequestFunction(module, fileName) {

  const fnPattern1 =
    fileName
      .replace('.request.ts', '')
      .split('-')
      .map((s, i) => (i === 0 ? s : s[0].toUpperCase() + s.slice(1)))
      .join('') + 'Request';

  // Pattern 2: Tìm hàm có chứa "Request" trong tên
  const fnPattern2 = Object.keys(module).find(
    (k) => typeof module[k] === 'function' && /Request$/i.test(k),
  );

  return module[fnPattern1] || module[fnPattern2] || module.default;
}
