import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import { genBodyRequest } from './utils/gen-body-request';
import { genBodyResponse } from './utils/performane-response';
import { genTestRequest } from './utils/gen-test-request';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
// import { genTestCaseForDTO } from './gens/gen-testcase';

const args = process.argv.slice(2); // Thay đổi từ slice(3) thành slice(2)
if (args.length < 2) {
  console.error('Usage: npm run <action> <type> <dtoName>');
  console.error('Example: npm run gen request UserDTO');
  process.exit(1);
}
const [action, type, dtoName] = args;
const validTypes = ['request', 'response', 'saga'];
if (!validTypes.includes(type)) {
  console.error(`Invalid type. Valid types: ${validTypes.join(', ')}`);
  process.exit(1);
}

console.log(`Generating "${type}" for DTO: ${dtoName}`);
async function handleAction(type: string, dtoName: string) {
  try {
    switch (action) {
      case 'gen':
        switch (type) {
          case 'request':
            handleBody(dtoName);
            handleTestCase(dtoName);
            break;
          case 'response':
            handleBodyResponse(dtoName);
            handleGenTestResponse(dtoName);
            break;
          case 'saga':
            handleGenTestSaga(dtoName);
          default:
            process.exit(1);
        }
        break;
      case 'test':
        switch (type) {
          case 'request':
            handleTest(dtoName)
            break;
          case 'response':
            handleTestResponse(dtoName)
            break;
          case 'saga':
            handleTestSaga(dtoName)
          default:
            process.exit(1);

        }
        break;
      case 'clear':
        switch (type) {
          case 'request':
            handleClearRequest(dtoName)
            break;
          case 'response':
            handleClearResponse(dtoName)
            break;
          case 'saga':
            handleClearSaga(dtoName)
          default:
            process.exit(1);

        }
    }

  } catch (error) {
    console.error('error in handleAction:', error);
    process.exit(1);
  }
}

function handleBody(dtoName: string) {
  try {
    genBodyRequest(dtoName);
    console.log(`gen body for Request: ${dtoName}`);
  } catch (error) {
    console.error('error in handleBody:', error);
    process.exit(1);
  }
}

function handleBodyResponse(dtoName: string) {
  try {
    genBodyResponse(dtoName);
    console.log(`gen body for Request: ${dtoName}`);
  } catch (error) {
    console.error('error in handleBody:', error);
    process.exit(1);
  }
}


function handleTestCase(dtoName: string) {
  try {
    genTestRequest(dtoName);
    console.log(`gen test case for Request: ${dtoName}`);
  } catch (error) {
    console.error('error in handleTestCase:', error);
    process.exit(1);
  }
}
function handleGenTestResponse(dtoName: string) {
  try {
    genTestResponse(dtoName);
    console.log(`gen test case for Request: ${dtoName}`);
  } catch (error) {
    console.error('error in handleTestCase:', error);
    process.exit(1);
  }
}
function handleTest(dtoName: string) {
  console.log(`Running test for DTO "${dtoName}"...`);
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { execSync } = require('child_process');
    const jestCommand = `jest src/auto-gen/test-requests/${dtoName}`;
    execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}
function handleGenTestSaga(dtoName: string) {
  try {
    genTestSaga(dtoName)
    console.log(`gen test case for Request: ${dtoName}`);
  } catch (error) {
    console.error('error in handleTestCase:', error);
    process.exit(1);
  }
}
function handleTestResponse(dtoName: string) {
  console.log(`Running test for Response "${dtoName}"...`);
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { execSync } = require('child_process');
    const jestCommand = `jest src/auto-gen/test-responses/${dtoName}`;
    execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}

function handleTestSaga(dtoName: string) {
  console.log(`Running test for Saga "${dtoName}"...`);
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { execSync } = require('child_process');
    const jestCommand = `jest src/auto-gen/test-sagas/${dtoName}`;
    execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}

// Xử lý clear request
function handleClearRequest(dtoName) {
  const sagaDir = path.join(__dirname, 'test-requests', dtoName);

  if (!fs.existsSync(sagaDir)) {
    console.error(`Requests directory not found: ${sagaDir}`);
    process.exit(1);
  }

  deleteSpecFiles(sagaDir);
}

// Xử lý clear response
function handleClearResponse(dtoName) {
  const sagaDir = path.join(__dirname, 'test-responses', dtoName);

  if (!fs.existsSync(sagaDir)) {
    console.error(`Responses directory not found: ${sagaDir}`);
    process.exit(1);
  }

  deleteSpecFiles(sagaDir);
}

// Xử lý clear saga
function handleClearSaga(dtoName) {
  const sagaDir = path.join(__dirname, 'test-sagas', dtoName);

  if (!fs.existsSync(sagaDir)) {
    console.error(`Sagas directory not found: ${sagaDir}`);
    process.exit(1);
  }

  deleteSpecFiles(sagaDir);
}

function deleteSpecFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    if (file.endsWith('.spec.ts')) {
      const filePath = path.join(dirPath, file);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  });
}
(async () => {
  try {
    await handleAction(type, dtoName);
  } catch (error) {
    console.error('error:', error);
    process.exit(1);
  }
})();
