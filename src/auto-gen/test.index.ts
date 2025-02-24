import { genBodyPayload } from './gens/gen-body';
import { genTestCaseForDTO } from './gens/gen-testcase';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(' npm run choose <action> <dtoName>');
  process.exit(1);
}

const [action, dtoName] = args;

const validActions = ['gen', 'test', 'fake'];
if (!validActions.includes(action)) {
  console.error(`Invalid action. Valid actions: ${validActions.join(', ')}`);
  process.exit(1);
}

console.log(`Running gen "${action}" for DTO: ${dtoName}`);

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
    const jestCommand = `jest  src/auto-gen/test-case/${dtoName}`;
    execSync(jestCommand, { stdio: 'inherit' });
  } catch (error) {
    console.error(`"${dtoName}":`, error.message);
    process.exit(1);
  }
}
// function handleFake(dtoName) {
//   const mockFunctions = {
//     'mock-user': mockUser,
//     'mock-channel': mockChannel,
//   };

//   if (mockFunctions[dtoName]) {
//     return mockFunctions[dtoName]();
//   } else {
//     throw new Error(`No mock function found for dtoName: ${dtoName}`);
//   }
// }

// async function mockUser() {
//   console.log('Current globalThis.url:', globalThis.url); // Debugging

//   const dataMockUser = await getMockUser();
//   console.log(dataMockUser);
// }

// function mockChannel() {}
