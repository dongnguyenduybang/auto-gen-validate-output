/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { TestContext } from '../test-execute-step/text-context';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import { plainToClass } from 'class-transformer';
import { SendMessageResponse } from '../response/send-message.response';
import { validateResponses } from '../validates/validate-response';
import { BeforeSendMessage, SendMessageSaga } from '../dtos/send-message.request';
import { executeAllSteps, resolveVariables } from '../test-execute-step/test-executor';
import { handleSendMessageResponse } from '../helps/utils';
let globalContext, headerRequest;
let failedStep = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let nextStep;

beforeAll(async () => {
  globalContext = new TestContext();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const results = await executeAllSteps(BeforeSendMessage.steps, globalContext);
  results.map((step, index) => {
    failedStep.push({
      success: step.success,
      stepName: step.stepName,
      error: step.error
    });
  })

  // if (results.some(step => !step.success)) {
  //   throw new Error(`Setup failed: ${JSON.stringify(results)}`);
  // }
 
  headerRequest = {
    'Content-Type': 'application/json',
    'x-session-token': '{{token}}',
    'x-country-code': 'VN',
  };
});

it('Test case # 43 with expect errors []', async () => {
  const payloadObj: any = {
    workspaceId: '0',
    channelId: '{{channelId}}',
    content: 'test123123',
  };

  const resolvedPayload = resolveVariables(payloadObj, globalContext);
  const resolvedHeader = resolveVariables(headerRequest, globalContext);
  const response = await axios.post(
    `${globalThis.url}/Message/SendMessage`,
    resolvedPayload,
    {
      headers: {
        ...resolvedHeader
      },
    },
  );
  const validatedResponse = plainToClass(SendMessageResponse, response.data);
  const result = validateResponses(validatedResponse, SendMessageResponse);
  if (result.length !== 0) {
    
  } else {
    const response = validatedResponse
    const handleSendMessage = await handleSendMessageResponse(response, globalContext);
    if(handleSendMessage === true){
      nextStep = true;
    }

  };
});
afterAll(async () => {

  if(nextStep === true) {
    const results = await executeAllSteps(SendMessageSaga.steps, globalContext);
    console.log(results)
    results.map((step, index) => {
      failedStep.push({
        success: step.success,
        stepName: step.stepName,
        error: step.error
      });
    })
  }

  const folderPath = path.join(__dirname, '../reports');

  const folderPathLogic = path.join(__dirname, '../reports/send-message');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  if (!fs.existsSync(folderPathLogic)) {
    fs.mkdirSync(folderPathLogic, { recursive: true });
  }
  const resultContent = `
  === Test Report for Logic "send-message" ===
  • Host: ${globalThis.url}
  • Endpoint: /Message/SendMessage
  • Test Steps:
  ${failedStep.map((step, index) => {
    const status = step.success ? '✓ PASSED' : '✗ FAILED';
    let stepInfo = `  ${index + 1}. [${status}] ${step.stepName}`;
    
    if (!step.success && step.error) {
      stepInfo += `\n     Error Details:\n     ${step.error.split('\n').map(line => `     ${line}`).join('\n')}`;
    }
    return stepInfo;
  }).join('\n')}
  
  • Final Result: ${failedStep.some(s => !s.success) ? 'FAILED' : 'PASSED'}
  === End of Report ===
  `;
  const resultFilePath = path.join(folderPath, 'send-message.txt');
  fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
  console.log(`Success: ${resultFilePath}`);

});
