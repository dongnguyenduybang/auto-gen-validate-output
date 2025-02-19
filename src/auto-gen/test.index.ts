import path from 'path';
import { genBodyPayload } from './gens/gen-body';
import { genTestCaseForDTO } from './gens/gen-testcase';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(' npm run choose <action> <dtoName>');
  process.exit(1);
}

const [action, dtoName] = args;

const validActions = ['body', 'testcase', 'test'];
if (!validActions.includes(action)) {
  console.error(`Invalid action. Valid actions: ${validActions.join(', ')}`);
  process.exit(1);
}

console.log(`Running gen "${action}" for DTO: ${dtoName}`);

switch (action) {
  case 'body':
    handleBody(dtoName);
    break;
  case 'testcase':
    handleTestCase(dtoName);
    break;
  case 'test':
    handleTest(dtoName);
    break;
  default:
    process.exit(1);
}

function handleBody(dtoName) {
  genBodyPayload(dtoName);
}

function handleTestCase(dtoName) {
  genTestCaseForDTO(dtoName);
}

function handleTest(dtoName) {
  console.log(`Running test for DTO "${dtoName}"...`);
  try {
    const { execSync } = require('child_process');
    const jestCommand = `jest  src/auto-gen/folder-gen/test-case/${dtoName}`;
    const result = execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}
