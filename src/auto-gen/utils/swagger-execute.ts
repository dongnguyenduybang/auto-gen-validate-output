// // test-executor.ts
// import { getApiFunctions } from '../functions/api-registry';
// import { Step, StepResult } from '../test-sagas/create-channel/create-channel.saga';
// import { createApiValidator } from './api-validator';
// import { extractDatas } from './extract-data';
// import { buildRequestFromAction } from './swagger-integration';
// import { formatErrors, resolveExpectConfig, resolveVariables } from './test-executor';
// import { TestContext } from './text-context';
// export async function swaggerAllStep(
//     steps: Step[],
//     context: TestContext,
//   ): Promise<StepResult[]> {
//     const results: StepResult[] = [];
  
//     for (const [index, step] of steps.entries()) {
//       console.log(`[Executing Step ${index + 1}/${steps.length}] ${step.action}`);
      
//       const result = await executeStep(step, context, index);
//       results.push(result);
      
//       // Log chi tiết kết quả
//       console.log(`[Step Result] ${step.action}:`, {
//         status: result.status ? 'PASSED' : 'FAILED',
//         data: result.data,
//         error: result.error
//       });
  
//       if (!result.status) break;
//     }
  
//     context.debug();
//     return results;
//   }

// async function executeStep(
//   step: Step,
//   context: TestContext,
//   stepIndex: number,
// ): Promise<StepResult> {
//   try {
//     const { action, body = {},headers, expect: expectConfig } = step;

//     // 1. Build request từ Swagger
//     const request = await buildRequestFromAction(action, body, headers);
//     console.log(request)
//     // 2. Resolve các biến dynamic (nếu có)
//     const resolvedBody = resolveVariables(request.body, context);
//     const resolvedHeaders = resolveVariables(request.headers, context);

//     // 3. Gọi API
//     const apiFunction = getApiFunctions(action, context);
//     const response = await apiFunction({
//       method: request.operationInfo.method,
//       path: request.operationInfo.path,
//       headers: resolvedHeaders,
//       body: resolvedBody,
//     });

//     // 4. Log response data
//     console.log(`[API Response] ${action}:`, JSON.stringify(response.data, null, 2));

//     if (response.data.ok === false) {
//       return {
//         type: 'request',
//         status: false,
//         stepName: action,
//         error: JSON.stringify(response.data.error?.details || response.data.error),
//         data: response.data // Thêm data vào result để debug
//       };
//     }

//     // 5. Validate và xử lý response
//     const result: StepResult = {
//       type: null,
//       status: true,
//       stepName: action,
//       data: response.data // Luôn trả về data trong result
//     };

//     if (expectConfig) {
//       const validator = createApiValidator(context);
//       const resolvedExpect = resolveExpectConfig(expectConfig, context);
//       const errors = validator.validate(response.data, resolvedExpect);
      
//       if (errors.length > 0) {
//         return {
//           ...result,
//           type: 'logic',
//           status: false,
//           error: formatErrors(errors)
//         };
//       }
//     }

//     // 6. Extract và merge data vào context
//     const extractedData = extractDatas(response.data, action);
//     context.mergeData(extractedData);

//     return result;
//   } catch (error) {
//     return {
//       type: 'exception',
//       status: false,
//       stepName: step.action,
//       error: error instanceof Error ? error.message : 'Unknown error',
//       data: error.response?.data // Thêm response data nếu có lỗi
//     };
//   }
// }