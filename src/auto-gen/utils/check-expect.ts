import { ACTION_CONFIG } from "../enums";
import { getApiFunctions } from "../functions/api-registry";
import { resolveVariables } from "./helper";
import { TestContext } from "./text-context";

export async function handleExpectConfig(responseChecking: any, expectConfig: any, context: TestContext) {
  const results: any = {};
  // 1. Xử lý API  (data)
  if (expectConfig.data) {
    const { path, action, payload, fields = [], expect: expectedValues } = expectConfig.data;
    const pathKey = path.split('.').pop();
    const nestedKey = pathKey === 'users' ? 'user' :
      pathKey === 'messages' ? 'message' :
        pathKey === 'members' ? 'member' : undefined;

    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

    // Gọi API để check
    const apiFunction = getApiFunctions(action, context);
    const response = await apiFunction({
      method: actionInfo.method,
      path: actionInfo.path,
      headers: payload.header,
      body: payload.body
    });

    let data = getValueByPath(responseChecking, path);
    let data1 = getValueByPath(response.data, path);
    if (path === 'data' && Array.isArray(data)) {
      data = data.map(item => item.nestedKey);
    }
    if (path === 'data' && Array.isArray(data1)) {
      data1 = data1.map(item => item.nestedKey);
    }
    if (fields.length > 0) {
      if (Array.isArray(data)) {
        data = data.map(item => pickFields(item, fields));
      } else {
        data = pickFields(data, fields);
      }
      if (Array.isArray(data1)) {
        data1 = data1.map(item => pickFields(item, fields));
      } else {
        data1 = pickFields(data1, fields);
      }
    }

    // Check expect values nếu có
    if (expectedValues) {
      const rs = validateExpectValues(data, expectedValues);
    
    } else {
      const rs = validateExpectValues(data, data1);
    
    }

  }

  if (expectConfig.includes) {
    for (const include of expectConfig.includes) {
      const { path, action, payload, fields, expect } = include;
      const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
      const pathKey = path.split('.').pop();
      const apiFunction = getApiFunctions(action, context);
      const response = await apiFunction({
        method: actionInfo.method,
        path: actionInfo.path,
        headers: payload.header,
        body: payload.body
      });
      let responseData = getValueByPath(response.data, 'data');
      const nestedKey = pathKey === 'users' ? 'user' :
        pathKey === 'messages' ? 'message' :
          pathKey === 'members' ? 'member' : undefined;
      let processedData;
      if (Array.isArray(responseData)) {
        processedData = responseData.map(item => {
          // nếu k defined field = null return all response
          if (!fields || fields.length === 0) {
            return item[nestedKey];
          }
          // nếu có filed sẽ return pick field
          return pickFields(item, fields, nestedKey);
        });
      } else {
        //response != array
        processedData = fields ? pickFields(responseData, fields) : responseData;
      }
      let dataInclude = getValueByPath(responseChecking, path); //response của step saga
      if (fields) {
        if (Array.isArray(dataInclude)) {
          dataInclude = dataInclude.map(item => pickFields(item, fields, null));
        } else {
          dataInclude = pickFields(dataInclude, fields, null);
        }
      }

      const rs = validateExpectValues(dataInclude, processedData)
      console.log(rs)
    }
  } else {
    ///
  }
  return results;
}

function getValueByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

function pickFields(obj: any, fields: string[], nestedKey?: string): any {
  if (!obj || typeof obj !== 'object') return obj;
  if (!fields || fields.length === 0) return obj;

  // Xử lý mảng
  if (Array.isArray(obj)) {
    return obj.map(item => pickFields(item, fields, nestedKey));
  }

  // Xử lý nested object nếu có chỉ định key
  if (nestedKey && obj[nestedKey]) {
    const nestedObj = obj[nestedKey];
    const filteredNested = {};

    for (const field of fields) {
      if (nestedObj[field] !== undefined) {
        filteredNested[field] = nestedObj[field];
      }
    }

    return filteredNested;
  }

  // Xử lý object thông thường (không có nested key)
  const result = {};
  for (const field of fields) {
    if (obj[field] !== undefined) {
      result[field] = obj[field];
    }
    return result;
  }

}
function validateExpectValues(data: any, expectedValues: any) {
  const result: { type: string; message: string; index?: number; key?: string; dataValue?: any; expectedValue?: any }[] = [];
  let allMatch = true;
  if (Array.isArray(data) && Array.isArray(expectedValues)) {

    if (data.length !== expectedValues.length) {
      result.push({
        type: 'array_length_mismatch',
        message: `Array length mismatch: Data has ${data.length} items, Expected has ${expectedValues.length} items`
      });
      allMatch = false;
      return result;
    }


    data.forEach((dataItem, index) => {
      const expectedItem = expectedValues[index];
      if (!expectedItem) {
        result.push({
          type: 'missing_expected_item',
          message: `ExpectedValues[${index}] is undefined or missing`,
          index
        });
        allMatch = false;
        return;
      }

      const dataKeys = Object.keys(dataItem);
      const expectedKeys = Object.keys(expectedItem);

      for (const key of dataKeys) {
        if (!(key in expectedItem)) {
          result.push({
            type: 'missing_key',
            message: `Field '${key}' in data[${index}] is MISSING in expectedValues[${index}]`,
            index,
            key
          });
          allMatch = false;
          continue;
        }

        const dataValue = dataItem[key];
        const expectedValue = expectedItem[key];
        if (!deepEqual(dataValue, expectedValue)) {
          result.push({
            type: 'value_mismatch',
            message: `Field '${key}' in data[${index}] VALUE MISMATCH`,
            index,
            key,
            dataValue,
            expectedValue
          });
          allMatch = false;
        }
      }

      for (const key of expectedKeys) {
        if (!(key in dataItem)) {
          result.push({
            type: 'excess_key',
            message: `Field '${key}' in expectedValues[${index}] is EXCESS (not present in data[${index}])`,
            index,
            key
          });
          allMatch = false;
        }
      }
    });
  }
  else if (!Array.isArray(data) && !Array.isArray(expectedValues) && data && expectedValues) {
    const dataKeys = Object.keys(data);
    const expectedKeys = Object.keys(expectedValues);

    for (const key of dataKeys) {
      if (!(key in expectedValues)) {
        result.push({
          type: 'missing_key',
          message: `Field '${key}' in data is MISSING in expectedValues`,
          key
        });
        allMatch = false;
        continue;
      }

      const dataValue = data[key];
      const expectedValue = expectedValues[key];
      if (!deepEqual(dataValue, expectedValue)) {
        result.push({
          type: 'value_mismatch',
          message: `Field '${key}' VALUE MISMATCH`,
          key,
          dataValue,
          expectedValue
        });
        allMatch = false;
      }
    }

    for (const key of expectedKeys) {
      if (!(key in data)) {
        result.push({
          type: 'excess_key',
          message: `Field '${key}' in expectedValues is EXCESS (not present in data)`,
          key
        });
        allMatch = false;
      }
    }
  }
  else {
    result.push({
      type: 'invalid_format',
      message: 'Invalid data or expectedValues format: both must be arrays or objects'
    });
    allMatch = false;
  }
  return result
}

function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}