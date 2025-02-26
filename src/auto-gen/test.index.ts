import { genBodyPayload } from './gens/gen-body';
import { genTestCaseForDTO } from './gens/gen-testcase';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: npm run choose <action> <dtoName>');
  process.exit(1);
}

const [action, dtoName] = args;
const validActions = ['gen', 'test', 'fake'];

if (!validActions.includes(action)) {
  console.error(`Invalid action. Valid actions: ${validActions.join(', ')}`);
  process.exit(1);
}

console.log(`Running "${action}" for DTO: ${dtoName}`);
async function handleAction(action: string, dtoName: string) {
  try {
    switch (action) {
      case 'gen':
        handleBody(dtoName);
        handleTestCase(dtoName);
        break;

      case 'test':
        handleTest(dtoName);
        break;

      default:
        process.exit(1);
    }
  } catch (error) {
    console.error('error in handleAction:', error);
    process.exit(1);
  }
}

function handleBody(dtoName: string) {
  try {
    genBodyPayload(dtoName);
    console.log(`gen body for DTO: ${dtoName}`);
  } catch (error) {
    console.error('error in handleBody:', error);
    process.exit(1);
  }
}

function handleTestCase(dtoName: string) {
  try {
    genTestCaseForDTO(dtoName);
    console.log(`gen test case for DTO: ${dtoName}`);
  } catch (error) {
    console.error('error in handleTestCase:', error);
    process.exit(1);
  }
}

function handleTest(dtoName: string) {
  console.log(`Running test for DTO "${dtoName}"...`);
  try {
    const { execSync } = require('child_process');
    const jestCommand = `jest src/auto-gen/test-case/${dtoName}`;
    execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}

(async () => {
  try {
    await handleAction(action, dtoName);
  } catch (error) {
    console.error('error:', error);
    process.exit(1);
  }
})();
