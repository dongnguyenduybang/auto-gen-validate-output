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

function parseStep(step: string) {
  const stepPattern =
    /(\w+)\(\s*body:\s*({[\s\S]*?})\s*(?:,\s*header:\s*({[\s\S]*?})\s*)?,\s*expect:\s*({[\s\S]*?})\s*\)/;

  const match = step.match(stepPattern);
  if (!match) throw new Error(`Invalid step format: ${step}`);

  return {
    functionName: match[1],
    body: match[2].trim(),
    header: match[3]?.trim(),
    expect: match[4].trim(),
  };
}
async function executeStep(
  functionName: string,
  body: any,
  header: any,
  context: any,
  expectData: any,
): Promise<StepResult> {
  try {
    let apiResult: any;
    switch (functionName) {
      case 'mockUser':
        apiResult = (await mockUser(body)).response;
        break;
      case 'createChannel':
        apiResult = (await createChannel(header, body)).response;
        break;
      case 'getChannel':
        apiResult = (await getChannel(header, body)).response;
        break;
      case 'getListMessage':
        apiResult = (await getListMessages(header, body)).response;
        break;
      default:
        throw new Error(`Unsupported function: ${functionName}`);
    }

    if (!apiResult?.ok) {
      return {
        success: false,
        functionName,
        error: apiResult?.result || 'API request failed',
      };
    }

    const actualData = getActualData(functionName, apiResult, body);
    context.setStepContext(functionName, {
      ...actualData,
      expect: expectData,
    });

    if (Object.keys(expectData).length > 0) {
      validateData(actualData, expectData, context);
    }

    return { success: true, functionName };
  } catch (error) {
    return {
      success: false,
      functionName,
      error: error.message,
    };
  }
}

function getActualData(functionName: string, apiResult: any, body: any) {
  switch (functionName) {
    case 'mockUser':
      return {
        token: apiResult.data[0].token,
        userId: apiResult.data[0].userId,
        username: body.prefix,
      };
    case 'createChannel':
      return {
        isChannelId: apiResult.data.channel.channelId,
        messageId: apiResult.includes.messages[0].messageId,
        isContent: apiResult.includes.messages[0].content,
        role: apiResult.includes.members[0].role,
        isOwner: apiResult.includes.members[0].userId,
      };
    case 'getChannel':
      return {
        countMember: apiResult.includes.members.length,
        countMessage: apiResult.includes.messages.length,
        isContent: apiResult.includes.messages[0].content,
        isLastMessage: apiResult.includes.messages[0].messageId,
        isChannelId: apiResult.data.channel.channelId,
        isOwner: apiResult.data.channel.userId,
      };
    case 'getListMessage':
      return {
        isLastMessage: apiResult.data[0].message.messageId,
        isLastContent: apiResult.data[0].message.content,
        isSender: apiResult.data[0].message.channelId,
      };

    default:
      throw new Error(`Unsupported function: ${functionName}`);
  }
}
export async function executeBeforeAllSteps(
  steps: string[],
  globalContext: any,
) {
  const results: StepResult[] = [];

  for (const step of steps) {
    try {
      const {
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

  const resolveValue = (value: any): any => {
    if (typeof value === 'string') {
      return value.replace(/{{([\w.\[\]\d]+)}}/g, (_, key) => {
        const arrayMatch = key.match(/(\w+)\[(\d+)\]\.(\w+)/);
        if (arrayMatch) {
          const [_, step, index, field] = arrayMatch;
          const users = context.getStepContext(step)?.users;
          return users?.[parseInt(index)]?.[field] || '';
        } else {
          const [step, field] = key.split('.');
          const contextValue = context.getStepContext(step);
          if (contextValue?.users) return contextValue.users[0]?.[field] || '';
          return contextValue?.[field] || '';
        }
      });
    }
    return value;
  };

  for (const [key, expectedValue] of Object.entries(expect)) {
    const resolvedExpected = resolveValue(expectedValue);
    const actualValue = actual[key];
    if (JSON.stringify(actualValue) !== JSON.stringify(resolvedExpected)) {
      errors.push(
        `[${key}] Expected: ${resolvedExpected}, Actual: ${actualValue}`,
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed:\n${errors.join('\n')}`);
  }
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
