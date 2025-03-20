/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockUser } from './mock-user';
import { createChannel } from './create-channel';
import { StepResult, TestContext } from '../text-context';
import { getChannel } from './get-channel';
import { validateExpectations } from '../helps/utils';
export function resolveVariable(
  template: string,
  context: TestContext,
): string {
  const resolved = template.replace(/{{([\w.]+)}}/g, (_, key) => {
    const [step, field] = key.split('.');
    return context.getStepContext(step)?.[field] || '';
  });

  try {
    return JSON.stringify(JSON.parse(resolved), null, 2);
  } catch {
    return resolved
      .replace(/'/g, '"')
      .replace(/(\w+)(?=\s*:)/g, '"$1"')
      .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
  }
}
function parseStep(step: string) {
  const stepPattern =
    /(\w+)\(\s*body:\s*({(?:[^{}]*|{[^{}]*}|'[^']*'|"[^"]*"|`[^`]*`)*})\s*(?:,\s*header:\s*({(?:[^{}]*|{[^{}]*}|'[^']*'|"[^"]*"|`[^`]*`)*}))?\s*,\s*expect:\s*({(?:[^{}]*|{[^{}]*}|'[^']*'|"[^"]*"|`[^`]*`)*})\s*\)/;

  const match = step.match(stepPattern);
  if (!match) throw new Error(`Invalid step format: ${step}`);

  return {
    functionName: match[1],
    body: match[2].trim(),
    header: match[3]?.trim(),
    expect: match[4]?.trim(),
  };
}

async function executeStep(
  functionName: string,
  body: any,
  header: any,
  context: TestContext,
  expectData: any,
): Promise<StepResult> {
  try {
    let response;
    switch (functionName) {
      case 'mockUser': {
        response = await mockUser(body);
        const result = response.response;
        if (result.ok === true) {
          context.setStepContext('mockUser', {
            token: result.data[0].token,
            userId: result.data[0].userId,
            username: body.prefix,
          });
        }
        break;
      }

      case 'createChannel': {
        response = await createChannel(header, body);
        const result = response.response;
        if (result.ok === true) {
          context.setStepContext('createChannel', {
            channelId: result.data.channel.channelId,
            messageId: result.includes.messages[0].messageId,
            contentChannel: result.includes.messages[0].content,
          });
        }
        break;
      }

      case 'getChannel': {
        response = await getChannel(header, body);
        const result = response.result;
        if (result.ok === true) {
          context.setStepContext('getChannel', {
            channel: result.data.channel,
            channelMetadata: result.data.channelMetadata,
            includes: result.includes,
            expect: expectData,
          });

          const validationErrors = validateExpectations(expectData, context);

          if (validationErrors.length > 0) {
            return {
              success: false,
              functionName,
              error: validationErrors.join(''),
            };
          }
        }
        break;
      }
      default:
        throw new Error(`Unknown function: ${functionName}`);
    }
    return { success: true, functionName };
  } catch (error) {
    return { success: false, functionName, error: error.message };
  }
}

export async function executeBeforeAllSteps(steps: string[]) {
  const results: StepResult[] = [];
  const globalContext = new TestContext();

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

      if (!result.success) {
        results.push(result);
        break;
      }

      results.push(result);
    } catch (error) {
      results.push({ success: false, error: error.message });
      break;
    }
  }

  return results;
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
