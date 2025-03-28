// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { mockUser } from './mock-user';
// import { createChannel } from './create-channel';
// import { Step, StepResult, TestContext } from '../test_1/text-context';
// import { getChannel } from './get-channel';
// import { resolveObject, resolveVariable } from '../helps/get-resolve-variables';
// import { deleteMessageForEveryone } from './delete-message-for-everyone';
// import { deleteMockChannel } from './delete-mock-channel';
// import { deleteMockUser } from './delete-mock-user';
// import { getListMessages } from './list-messages';
// import { sendMessage } from './send-message';
// import { acceptInvitation } from './accept-link-invitation';
// import { API_RESULT_MAPPINGS } from '../helps/mapping';

// // function parseStep(step: string, context: TestContext) {
// //   const stepPattern =
// //     /^(\w+?)(_\d+)?\(\s*(?:body:\s*({[\s\S]*?})\s*)?(?:\s*,\s*header:\s*({[\s\S]*?})\s*)?(?:\s*,\s*expect:\s*({[\s\S]*?})\s*)?\)$/;

// //   const match = step.match(stepPattern);
// //   if (!match) throw new Error(`Invalid step format: ${step}`);

// //   const processPart = (part: string | undefined): string => {
// //     if (!part?.trim()) return '{}';

// //     // Xử lý các trường hợp đặc biệt trước khi parse
// //     const processed = part
// //       .trim()
// //       .replace(/"__equal__/g, 'equal(')
// //       .replace(/"$/g, ')');

// //     try {
// //       return JSON.parse(processed);
// //     } catch {
// //       try {
// //         // Thử fix JSON tự động
// //         return JSON.parse(
// //           processed
// //             .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
// //             .replace(/(:\s*)([^"\s{]+)(\s*[,}])/g, '$1"$2"$3'),
// //         );
// //       } catch (e) {
// //         console.error(`Failed to parse: ${processed}`);
// //         throw new Error(`Invalid JSON format: ${e.message}`);
// //       }
// //     }
// //   };

// //   return {
// //     stepName: match[1] + (match[2] || ''),
// //     functionName: match[1],
// //     body: processPart(match[3]),
// //     header: processPart(match[4]),
// //     expect: processPart(match[5]),
// //   };
// // }

// async function executeStep(
//   stepName: string,
//   functionName: string,
//   body: any,
//   header: any,
//   context: TestContext,
//   expectData: any,
// ): Promise<StepResult> {
//   try {
//     if (!(context instanceof TestContext)) {
//       throw new Error('Invalid test context provided');
//     }
//     let apiResult: any;
//     switch (functionName) {
//       case 'mockUser':
//         apiResult = await mockUser();
//         break;
//       case 'createChannel':
//         apiResult = await createChannel();
//         break;
//       case 'getChannel':
//         apiResult = await getChannel(header, body);
//         break;
//       case 'getListMessage':
//         apiResult = await getListMessages(header, body);
//         break;
//       case 'sendMessage':
//         apiResult = await sendMessage(header, body);
//         break;
//       case 'acceptInvitation':
//         apiResult = await acceptInvitation(header, body);
//         break;
//       default:
//         throw new Error(`Unsupported function: ${functionName}`);
//     }

//     if (apiResult?.ok === false) {
//       return {
//         success: false,
//         stepName,
//         error: apiResult?.response || 'API request failed',
//       };
//     }

//     const responseData = apiResult?.response || apiResult;
//     console.log(responseData);
//     const actualData = getMappedData(
//       functionName,
//       responseData,
//       body,
//       expectData,
//     );

//     context.mergeData(flattenObject(actualData));

//     if (expectData && Object.keys(expectData).length > 0) {
//       validateData(actualData, expectData, context);
//     }

//     return { success: true, stepName };
//   } catch (error) {
//     return {
//       success: false,
//       stepName,
//       error: error instanceof Error ? error.message : 'Unknown error',
//     };
//   }
// }

// function generateMappingFromExpect(expectData: any): any {
//   const mapping: any = {};

//   const traverse = (obj: any, responsePath: string[] = []) => {
//     for (const key in obj) {
//       const value = obj[key];
//       const currentResponsePath = [...responsePath, key];

//       if (typeof value === 'object' && value !== null) {
//         if (Array.isArray(value)) {
//           // Handle array mapping
//           mapping[key] = value.map((item, index) => {
//             const arrayMapping: any = {};
//             traverse(item, [...currentResponsePath, `[${index}]`]);
//             return arrayMapping;
//           });
//         } else {
//           // Recursive traversal for nested objects
//           mapping[key] = {};
//           traverse(value, currentResponsePath);
//         }
//       } else if (typeof value === 'string' && value.startsWith('equal(')) {
//         // Direct mapping for equal comparisons
//         mapping[key] = currentResponsePath.join('.');
//       }
//     }
//   };

//   traverse(expectData);
//   return mapping;
// }

// function setNestedValue(obj: any, path: string[], value: any) {
//   let current = obj;
//   for (let i = 0; i < path.length - 1; i++) {
//     const key = path[i];

//     // Xử lý array index (ví dụ: "users[0]")
//     const arrayMatch = key.match(/(\w+)\[(\d+)\]/);
//     if (arrayMatch) {
//       const arrayKey = arrayMatch[1];
//       const arrayIndex = parseInt(arrayMatch[2]);

//       if (!current[arrayKey]) {
//         current[arrayKey] = [];
//       }
//       if (!current[arrayKey][arrayIndex]) {
//         current[arrayKey][arrayIndex] = {};
//       }
//       current = current[arrayKey][arrayIndex];
//     } else {
//       if (!current[key]) {
//         current[key] = {};
//       }
//       current = current[key];
//     }
//   }

//   const lastKey = path[path.length - 1];
//   current[lastKey] = value;
// }
// function flattenObject(
//   obj: Record<string, any>,
//   prefix = '',
// ): Record<string, any> {
//   return Object.entries(obj).reduce(
//     (acc, [key, value]) => {
//       const prefixedKey = prefix ? `${prefix}.${key}` : key;
//       if (typeof value === 'object' && value !== null) {
//         Object.assign(acc, flattenObject(value, prefixedKey));
//       } else {
//         acc[prefixedKey] = value;
//       }
//       return acc;
//     },
//     {} as Record<string, any>,
//   );
// }
// function getMappedData(
//   functionName: string,
//   apiResult: any,
//   body: any,
//   expectData?: any,
// ): any {
//   const mapping =
//     API_RESULT_MAPPINGS[functionName] ||
//     (expectData ? generateMappingFromExpect(expectData) : {});

//   return mapDataUsingMapping(apiResult, mapping, body);
// }

// function mapDataUsingMapping(apiResult: any, mapping: any, body: any): any {
//   const result: any = {};

//   const extractValue = (source: any, path: string) => {
//     return path
//       .split('.')
//       .reduce(
//         (obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined),
//         source,
//       );
//   };

//   const traverse = (mappingObj: any, targetObj: any = {}) => {
//     for (const key in mappingObj) {
//       const value = mappingObj[key];

//       if (typeof value === 'object' && value !== null) {
//         if (Array.isArray(value)) {
//           targetObj[key] = value.map((item) => {
//             const arrayItem: any = {};
//             traverse(item, arrayItem);
//             return arrayItem;
//           });
//         } else {
//           targetObj[key] = {};
//           traverse(value, targetObj[key]);
//         }
//       } else {
//         // Direct value extraction from API result
//         targetObj[key] = extractValue(apiResult, value);
//       }
//     }

//     return targetObj;
//   };

//   return traverse(mapping, result);
// }

// function getValueFromPath(obj: any, path: string, body: any): any {
//   // Xử lý path có dạng "includes.messages[0].content"
//   const parts = path.split(/[\.\[\]]+/).filter(Boolean);

//   return parts.reduce((current, part) => {
//     if (current === undefined) return undefined;
//     return current[part];
//   }, obj);
// }

// export async function executeAllSteps(
//   steps: Step[],
//   globalContext: TestContext,
// ): Promise<StepResult[]> {
//   const results: StepResult[] = [];

//   for (const [index, step] of steps.entries()) {
//     try {
//       // Validate step structure
//       if (!step || typeof step !== 'object' || !step.action) {
//         throw new Error(`Invalid step structure at index ${index}`);
//       }

//       const { action, body, header, expect } = step;
//       // Resolve variables
//       const resolvedBody = resolveObject(body, globalContext);
//       const resolvedHeader = resolveObject(header, globalContext);
//       const resolvedExpect = resolveObject(expect, globalContext);
//       const result = await executeStep(
//         action,
//         action,
//         resolvedBody,
//         resolvedHeader,
//         globalContext,
//         resolvedExpect,
//       );
//       globalContext.debug();
//       if (!result.success) {
//         results.push(result);
//         break;
//       }

//       results.push(result);
//     } catch (error) {
//       results.push({
//         success: false,
//         stepName: step?.action || `step_${index}`,
//         error: error instanceof Error ? error.message : 'Unknown error',
//       });
//       break;
//     }
//   }

//   return results;
// }
// export function validateData(
//   actual: any,
//   expect: any,
//   context: TestContext,
// ): void {
//   const errors: string[] = [];

//   const compareValues = (expected: any, actual: any): boolean => {
//     // Handle equal() comparisons
//     if (expected?.__type === 'equal') {
//       const expectedValue = resolveObject(expected.value, context);
//       console.log(expectedValue);
//       return JSON.stringify(actual) === JSON.stringify(expectedValue);
//     }

//     // Standard deep comparison
//     return JSON.stringify(actual) === JSON.stringify(expected);
//   };

//   const validateRecursive = (expected: any, actual: any, path: string = '') => {
//     // Handle null/undefined checks
//     if (expected === null || expected === undefined) {
//       return actual === expected;
//     }

//     // Array validation
//     if (Array.isArray(expected)) {
//       if (!Array.isArray(actual) || actual.length < expected.length) {
//         errors.push(`Array mismatch at ${path}`);
//         return false;
//       }

//       return expected.every((item, index) =>
//         validateRecursive(item, actual[index], `${path}[${index}]`),
//       );
//     }
//     console.log(expected);

//     // Object validation
//     if (typeof expected === 'object') {
//       return Object.entries(expected).every(([key, value]) => {
//         const newPath = path ? `${path}.${key}` : key;
//         if (actual === undefined || actual[key] === undefined) {
//           errors.push(`Missing property: ${newPath}`);
//           return false;
//         }

//         return validateRecursive(value, actual[key], newPath);
//       });
//     }

//     // Direct value comparison
//     if (!compareValues(expected, actual)) {
//       errors.push(
//         `Mismatch at ${path}: Expected ${JSON.stringify(expected)}, Actual ${JSON.stringify(actual)}`,
//       );
//       return false;
//     }

//     return true;
//   };

//   validateRecursive(expect, actual);

//   if (errors.length > 0) {
//     throw new Error(`Validation failed:\n${errors.join('\n')}`);
//   }
// }
