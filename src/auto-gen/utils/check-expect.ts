import { ACTION_CONFIG } from "../enums";
import { getApiFunctions } from "../functions/api-registry";
import { Expect, ExpectResult } from "./declarations";
import { resolveVariables } from "./helper";
import { TestContext } from "./text-context";

export async function handleExpectConfig(responseChecking: unknown, expectConfig: Expect, context: TestContext) {
  const results: ExpectResult[] = [];

  // ok
  if (expectConfig.ok) {
    let resultData: ExpectResult[] = [];
    let data = getValueByPath(responseChecking, 'ok');
    const rs = validateExpectValues(data, expectConfig.ok, `ok`);
    if (rs?.length) resultData.push(...rs);
    if (resultData.length > 0) results.push(...resultData);
  }
  // data
  if (expectConfig.data) {
    let resultData: ExpectResult[] = [];
    let itemData, itemPayload;
    const { path, action, payload, filter, isArrayMapping, headers } = expectConfig.data;
    const pathKey = path.split('.').pop();
    const nestedKey = pathKey === 'users' ? 'user' :
      pathKey === 'messages' ? 'message' :
        pathKey === 'members' ? 'member' : undefined;
    const resolveHeader = resolveVariables(headers, context);
    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

    let data = getValueByPath(responseChecking, path);
    if (isArrayMapping && Array.isArray(payload) && Array.isArray(data)) {

      for (let i = 0; i < payload.length; i++) {
        const itemPayload = payload[i];
        let itemData = data[i];
        if (itemPayload === null) continue;

        if (filter.length > 0) {
          itemData = pickFields(itemData, filter);
          if (!itemData) continue;
        }
      }
    } else {

      const apiFunction = getApiFunctions(action, context);
      const response = await apiFunction({
        method: actionInfo.method,
        path: actionInfo.path,
        headers: resolveHeader,
        body: payload
      });
      if (response.data.error) {
        resultData.push({
          type: 'dto',
          path: `${path}`,
          message: `${response.data.error.details}, Check payload again`
        })
      }

      let responseData = getValueByPath(response.data, path);
      if (filter.length > 0) {
        itemData = pickFields(data, filter); // của data
        itemPayload = pickFields(responseData, filter) // của call api expect
      } else {
        itemData = data;
        itemPayload = responseData;
      }
      const rs = validateExpectValues(itemData, itemPayload, `${path}`);
      if (rs?.length) resultData.push(...rs);
    }
    if (resultData.length > 0) results.push(...resultData);
  }

  // includes
  if (expectConfig.includes) {
    for (const include of expectConfig.includes) {
      const { path, action, payload, filter, isArrayMapping, headers } = include;
      const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
      const pathKey = path.split('.').pop();
      const nestedKey = pathKey === 'users' ? 'user' :
        pathKey === 'messages' ? 'message' :
          pathKey === 'members' ? 'member' : undefined;

      let dataInclude = getValueByPath(responseChecking, path);
      const resolveHeader = resolveVariables(headers, context);

      if (isArrayMapping && Array.isArray(payload) && Array.isArray(dataInclude)) {
        const resultsForInclude: ExpectResult[] = [];
        for (let i = 0; i < payload.length; i++) {
          const itemPayload = payload[i];
          let itemData = dataInclude[i];
          if (itemPayload === null) continue;

          if (filter.length > 0) {
            itemData = pickFields(itemData, filter);
            if (!itemData) continue;
          }

          const apiFunction = getApiFunctions(action, context);
          const response = await apiFunction({
            method: actionInfo.method,
            path: actionInfo.path,
            headers: resolveHeader,
            body: itemPayload
          });

          if (response.data.error) {
            resultsForInclude.push({
              type: 'dto',
              path: `${path}[${i}]`,
              message: `${response.data.error.details}, Check payload again`
            })
          }

          let responseData = getValueByPath(response.data, 'data');

          if (nestedKey) {
            responseData = processNestedKey(responseData, nestedKey);
          }

          if (filter.length > 0) {
            responseData = pickFields(responseData, filter);
          }

          const rs = validateExpectValues(itemData, responseData, `${path}[${i}]`);
          if (rs?.length) resultsForInclude.push(...rs);
        }

        if (resultsForInclude.length > 0) results.push(...resultsForInclude);
        continue;
      }
    }
  }

  return results;
}

// Helper functions
function getValueByPath(obj: Object, path: string): Object {
  if (!path) return obj;
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

function processNestedKey(data: unknown, nestedKey: string): Object {
  if (Array.isArray(data)) {
    return data.map(item => item[nestedKey] || item);
  } else if (data && typeof data === 'object') {
    return data[nestedKey] || data;
  }
  return data;
}


function pickFields(obj: Object, fields: string[]): Object {
  if (!obj || typeof obj !== 'object') return obj;
  if (!fields || fields.length === 0) return obj;

  const result = {};
  for (const field of fields) {
    if (obj[field] !== undefined) {
      result[field] = obj[field];
    }
  }
  return result;
}

function validateExpectValues(data: any, expectedValues: any, path: string) {
  const result: any[] = [];

    // boolean và boolean
  if (typeof data === 'boolean' && typeof expectedValues === 'boolean') {
    if (data !== expectedValues) {
      result.push({
        type: 'value_mismatch',
        path,
        message: `Boolean value mismatch.`,
        actualValue: data,
        expectedValue: expectedValues
      });
    }
    return result;
  }


  // actual là mảng, expected là object. object check trong mảng
  if (Array.isArray(data) && !Array.isArray(expectedValues) && expectedValues && typeof expectedValues === 'object') {
    let foundMatch = false;
    const allErrors: any[] = [];

    // Kiểm tra từng item trong mảng
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const itemErrors = compareAllFields(item, expectedValues, `${path}[${i}]`);

      if (itemErrors.length === 0) {
        foundMatch = true;
        break;
      } else {
        allErrors.push(...itemErrors);
      }
    }

    if (!foundMatch) {
      if (allErrors.length > 0) {
        // Thêm tất cả lỗi chi tiết
        result.push(...allErrors);
      } else {
        // Nếu không có lỗi chi tiết (có thể do type không khớp)
        result.push({
          type: 'object_not_found_in_array',
          path,
          message: `Expected object not found in the array`,
          actualValue: data,
          expectedValue: expectedValues
        });
      }
    }
    return result;
  }

  //  actual là object, expected là mảng. object check trong mảng
  if (!Array.isArray(data) && Array.isArray(expectedValues)) {
    let foundMatch = false;
    const allErrors: any[] = [];

    // Kiểm tra từng item trong mảng expected
    for (let i = 0; i < expectedValues.length; i++) {
      const item = expectedValues[i];
      const itemErrors = compareAllFields(data, item, `${path}[${i}]`);

      if (itemErrors.length === 0) {
        foundMatch = true;
        break;
      } else {
        allErrors.push(...itemErrors);
      }
    }

    if (!foundMatch) {
      if (allErrors.length > 0) {
        result.push(...allErrors);
      } else {
        result.push({
          type: 'data_not_in_expected_array',
          path,
          message: `Data object not found in expected array`,
          actualValue: data,
          expectedValue: expectedValues
        });
      }
    }
    return result;
  }

  //  mảng và mảng, obj và obj
  if (Array.isArray(data) && Array.isArray(expectedValues)) {
    return compareArrays(data, expectedValues, path);
  } else if (!Array.isArray(data) && !Array.isArray(expectedValues)) {
    return compareObjects(data, expectedValues, path);
  }


  result.push({
    type: 'invalid_format',
    message: 'Invalid actual or expected format: both must be arrays or objects',
    path,
    actualValue: data,
    expectedValue: expectedValues
  });
  return result;
}

function compareArrays(data: string[], expectedValues: string[], path: string) {
  const result: unknown[] = [];

  if (data.length !== expectedValues.length) {
    result.push({
      type: 'array_length_mismatch',
      path,
      message: `Array length mismatch: Actual has ${data.length} items, Expected has ${expectedValues.length} items`,
      actualValue: data.length,
      expectedValue: expectedValues.length
    });
    return result;
  }

  data.forEach((dataItem, index) => {
    const expectedItem = expectedValues[index];
    if (!expectedItem) {
      result.push({
        type: 'missing_expected_item',
        path: `${path}[${index}]`,
        message: `Expected[${index}] is undefined or missing`,
        index
      });
      return;
    }

    const itemResult = compareObjects(dataItem, expectedItem, `${path}[${index}]`);
    result.push(...itemResult);
  });

  return result;
}

function compareObjects(data: Object, expectedValues: Object, path: string) {
  const result: unknown[] = [];
  if (!data || !expectedValues) return result;

  const dataKeys = Object.keys(data);
  const expectedKeys = Object.keys(expectedValues);

  for (const key of dataKeys) {
    if (!(key in expectedValues)) {
      result.push({
        type: 'excess_field',
        path: `${path}.${key}`,
        message: `Field '${key}' exists in actual, not exists in expected`,
        key,
        actualValue: data[key]
      });
    }
  }

  for (const key of expectedKeys) {
    if (!(key in data)) {
      result.push({
        type: 'missing_field',
        path: `${path}.${key}`,
        message: `Field '${key}' exists in expected, not exists in actual`,
        key,
        expectedValue: expectedValues[key]
      });
    } else if (!deepEqual(data[key], expectedValues[key])) {
      result.push({
        type: 'value_mismatch',
        path: `${path}.${key}`,
        message: `Field '${key}' value mismatch`,
        key,
        actualValue: data[key],
        expectedValue: expectedValues[key]
      });
    }
  }

  return result;
}

function compareAllFields(actual: unknown, expected: unknown, path: string): unknown[] {
  const result: unknown[] = [];

  if (typeof actual !== 'object' || typeof expected !== 'object' || actual === null || expected === null) {
    if (!deepEqual(actual, expected)) {
      result.push({
        type: 'value_mismatch',
        path,
        message: `Value mismatch`,
        actualValue: actual,
        expectedValue: expected
      });
    }
    return result;
  }

  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  for (const key of actualKeys) {
    if (!(key in expected)) {
      result.push({
        type: 'excess_field',
        path: `${path}.${key}`,
        message: `Field '${key}' exists in actual, not exists expected`,
        key,
        actualValue: actual[key]
      });
    }
  }

  for (const key of expectedKeys) {
    if (!(key in actual)) {
      result.push({
        type: 'missing_field',
        path: `${path}.${key}`,
        message: `Field '${key}' exists in expected but not in actual`,
        key,
        expectedValue: expected[key]
      });
    } else if (!deepEqual(actual[key], expected[key])) {
      if (typeof actual[key] === 'object' && typeof expected[key] === 'object') {

        const nestedResult = compareAllFields(actual[key], expected[key], `${path}.${key}`);
        result.push(...nestedResult);
      } else {
        result.push({
          type: 'value_mismatch',
          path: `${path}.${key}`,
          message: `Field '${key}' value mismatch`,
          key,
          actualValue: actual[key],
          expectedValue: expected[key]
        });
      }
    }
  }

  return result;
}

function deepEqual(obj1: Object, obj2: Object): boolean {
  if (obj1 === obj2) return true;

  if (obj1 == null || obj2 == null) return obj1 === obj2;

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;

  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

// function applyFilter(data: any, filter: any): any {
//   if (!data || typeof data !== 'object') return data;

//   if (Array.isArray(data)) {
//     return data.filter(item => {
//       return Object.entries(filter).every(([key, value]) => {
//         return deepEqual(item[key], value);
//       });
//     });
//   }

//   return Object.entries(filter).every(([key, value]) => {
//     return deepEqual(data[key], value);
//   }) ? data : null;
// }

// function processData(data: any, fields: string[], nestedKey?: string): any {
//   if (Array.isArray(data)) {
//     return data.map(item => {
//       const target = nestedKey ? item[nestedKey] || item : item;
//       return fields.length > 0 ? pickFields(target, fields) : target;
//     });
//   } else if (data && typeof data === 'object') {
//     const target = nestedKey ? data[nestedKey] || data : data;
//     return fields.length > 0 ? pickFields(target, fields) : target;
//   }
//   return data;
// }

// function filterFields(data: any, fields: string[]): any {
//   if (!data) return data;
//   if (Array.isArray(data)) {
//     return data.map(item => pickFields(item, fields));
//   }
//   return pickFields(data, fields);
// }