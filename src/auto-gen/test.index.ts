import path from 'path';
import { genBodyPayload } from './gens/gen-body';
import { genTestCaseForDTO } from './gens/gen-testcase';
import { readJsonFile } from './helps/utils';
import { resolveJsonVariables, resolveVariables } from './helps/get-resolve-variables';
import { mockUser } from './functions/mock-user';
import { createChannel } from './functions/create-channel';


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
const requestPath = path.join(__dirname, './dtos', dtoName, `${dtoName}.request.json`);
const requestConfig = readJsonFile(requestPath);

async function handleAction(action: string, dtoName: string, requestConfig: any) {

  try {
    switch (action) {
      case 'gen':
        if (requestConfig.saga && Array.isArray(requestConfig.saga)) {
          //get saga từ request 
          for (const step of requestConfig.saga) {
            //get tên hàm và giá trị bên trong match[1]: tên hàm, match[2]: value
            const match = step.match(/([a-zA-Z]+)\((.*)\)/);
            if (match) {
              const functionName = match[1];
              const payload = match[2].trim();
              //tách chuỗi và gán giá trị global nếu có
              const args = payload
                .split(',')
                .map((arg) => resolveVariables(arg.trim()));

              if (functionName === 'mockUser') {

                const [prefix, quantityStr, badgeStr] = args;
                //chuyển string thành number
                const quantity = parseInt(quantityStr, 10);
                const badge = parseInt(badgeStr, 10);

                await mockUser(prefix, quantity, badge);
              } else if (functionName === 'createChannel') {
                const [name] = args;

                await createChannel(name);
              }
            } else {
              console.log('invalid step of saga')
            }
          }
        }else {
          
          console.log('not saga found in the request config');
        }


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

    await handleAction(action, dtoName, requestConfig);
  } catch (error) {

    console.error('error:', error);
    process.exit(1);
  }
})();