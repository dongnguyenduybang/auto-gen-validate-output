/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockUser } from './mock-user';
import { createChannel } from './create-channel';
import { StepResult, TestContext } from '../text-context';
import { getChannel } from './get-channel';
import { resolveVariable } from '../helps/get-resolve-variables';
import { deleteMessageForEveryone } from './delete-message-for-everyone';
import { deleteMockChannel } from './delete-mock-channel';
import { deleteMockUser } from './delete-mock-user';
import { count } from 'console';
import { getListMessages } from './list-messages';
import { API_RESULT_MAPPINGS } from '../helps/mapping';
import { sendMessage } from './send-message';
import { acceptInvitation } from './accept-link-invitation';

function parseStep(step: string) {
  const stepPattern =
    /^(\w+?)(_\d+)?\(\s*body:\s*({[\s\S]*?})\s*(?:,\s*header:\s*({[\s\S]*?})\s*)?,\s*expect:\s*({[\s\S]*?})\s*\)$/;
  const match = step.match(stepPattern);
  if (!match) throw new Error(`Invalid step format: ${step}`);

  const functionName = match[1];
  const suffix = match[2] || '';
  const stepName = functionName + suffix;

  return {
    stepName,
    functionName,
    body: match[3].trim(),
    header: match[4]?.trim(),
    expect: match[5].trim(),
  };
}
async function executeStep(
  stepName: string,
  functionName: string,
  body: any,
  header: any,
  context: any,
  expectData: any,
): Promise<StepResult> {
  try {
    console.log(functionName, stepName);
    let apiResult: any;
    switch (functionName) {
      case 'mockUser':
        apiResult = await mockUser(body);
        break;
      case 'createChannel':
        apiResult = await createChannel(header, body);
        break;
      case 'getChannel':
        apiResult = await getChannel(header, body);
        break;
      case 'getListMessage':
        apiResult = await getListMessages(header, body);
        break;
      case 'sendMessage':
        apiResult = await sendMessage(header, body);
        break;
      case 'acceptChannel':
        apiResult = await acceptInvitation(header, body);
        break;
      default:
        throw new Error(`Unsupported function: ${functionName}`);
    }
    if (apiResult.ok === false) {
      return {
        success: false,
        stepName,
        error: apiResult?.response || 'API request failed',
      };
    } else {
      apiResult = apiResult.response;
    }

    const actualData = getMappedData(functionName, apiResult, body);
    context.setStepContext(stepName, { ...actualData, expect: expectData });

    if (Object.keys(expectData).length > 0) {
      validateData(actualData, expectData, context);
    }

    return { success: true, stepName };
  } catch (error) {
    return {
      success: false,
      stepName,
      error: error.message,
    };
  }
}

function getMappedData(functionName: string, apiResult: any, body: any): any {
  const mapping = API_RESULT_MAPPINGS[functionName];
  if (!mapping) throw new Error(`Unsupported function: ${functionName}`);
  return Object.keys(mapping).reduce((acc, key) => {
    const pathOrFn = mapping[key];
    if (typeof pathOrFn === 'function') {
      acc[key] = pathOrFn(apiResult, body);
    } else {
      console.log(pathOrFn);
      acc[key] = pathOrFn.split('.').reduce((obj, pathPart) => {
        const match = pathPart.match(/(\w+)\[(\d+)\]/);
        return match ? obj?.[match[1]]?.[Number(match[2])] : obj?.[pathPart];
      }, apiResult);
    }

    return acc;
  }, {} as any);
}

export async function executeAllSteps(steps: string[], globalContext: any) {
  const results: StepResult[] = [];

  for (const step of steps) {
    try {
      const {
        stepName,
        functionName,
        body: rawBody,
        header: rawHeader,
        expect: rawExpect,
      } = parseStep(step);
      const resolvedBody = JSON.parse(resolveVariable(rawBody, globalContext));
      const resolvedHeader = rawHeader
        ? JSON.parse(resolveVariable(rawHeader, globalContext))
        : {};
      const resolvedExpect = JSON.parse(
        resolveVariable(rawExpect, globalContext),
      );
      const result = await executeStep(
        stepName,
        functionName,
        resolvedBody,
        resolvedHeader,
        globalContext,
        resolvedExpect,
      );
      globalContext.debug();

      if (result.success === false) {
        results.push(result);
        break;
      }

      results.push(result);
    } catch (error) {
      console.log(error);
      results.push({ success: false, error: error.message });
      break;
    }
  }

  return results;
}

export function validateData(
  actual: any,
  expect: any,
  context: TestContext,
): void {
  const errors: string[] = [];

  for (const [key, expectedValue] of Object.entries(expect)) {
    const resolvedExpected =
      typeof expectedValue === 'string'
        ? resolveVariable(expectedValue, context)
        : expectedValue;

    if (JSON.stringify(actual[key]) !== JSON.stringify(resolvedExpected)) {
      errors.push(
        `'${key}' Expected: ${resolvedExpected}, Actual: ${actual[key]}`,
      );
    }
  }

  if (errors.length > 0)
    throw new Error(`Validation failed: ${errors.join('\n')}`);
}

// export async function executeDelete(prefix, headerRequest) {
//   if (Array.isArray(prefix)) {
//     for (const step of prefix) {
//       const match = step.match(/([a-zA-Z]+)\((.*)\)/);

//       if (match) {
//         const functionName = match[1];
//         const payload = match[2].trim();

//         const args = payload
//           .split(',')
//           .map((arg) => resolveVariables(arg.trim()));

//         switch (functionName) {
//           case 'deleteMockUser': {
//             const [prefix] = args;

//             await deleteMockUser(prefix);
//             break;
//           }
//           case 'deleteMessageForEveryone': {
//             const [workspaceId, channelId, messageId] = args;
//             await deleteMessageForEveryone(
//               workspaceId,
//               channelId,
//               messageId,
//               headerRequest,
//             );
//             break;
//           }
//           case 'deleteMockChannel': {
//             const [prefix, workspaceId, typeChannel] = args;
//             if (typeChannel === '0') {
//               await deleteMockChannel(prefix, workspaceId, headerRequest);
//             } else {
//               console.log('type channel must be 1-n');
//             }

//             break;
//           }
//           default:
//             console.log('Invalid step:', step);
//             break;
//         }
//       } else {
//         console.log('Invalid step format:', step);
//       }
//     }
//   }
// }
