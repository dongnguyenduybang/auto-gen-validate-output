import { ACTION_CONFIG } from "../enums";
import { getApiFunctions } from "../functions/api-registry";
import { resolveVariables } from "./helper";
import { TestContext } from "./text-context";

export async function handleExpectConfig(responseChecking: any, expectConfig: any, context: TestContext) {
<<<<<<< HEAD
    const results: any = {};
    // 1. Xử lý API chính (data)
    if (expectConfig.data) {
        const { path = 'data', action, payload, fields = [], expect: expectedValues } = expectConfig.data;
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
             validateExpectValues(data, expectedValues);
        } else {
               validateExpectValues(data, data1);
        }
       
    }

    // 2. Xử lý các API includes
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

          const ex = validateExpectValues(dataInclude, processedData)
        }
    }
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
=======
  const results: any[] = [];
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

    let actual = getValueByPath(responseChecking, path);
    let expected = getValueByPath(response.data, path);
    if (path === 'data' && Array.isArray(actual)) {
      actual = actual.map(item => item.nestedKey);
    }
    if (path === 'data' && Array.isArray(expected)) {
      expected = expected.map(item => item.nestedKey);
    }
    if (fields.length > 0) {
      if (Array.isArray(actual)) {
        actual = actual.map(item => pickFields(item, fields));
      } else {
        actual = pickFields(actual, fields);
      }
      if (Array.isArray(expected)) {
        expected = expected.map(item => pickFields(item, fields));
      } else {
        expected = pickFields(expected, fields);
      }
    }
    console.log(actual, expected)
    // Check expect values nếu có
    const rs = expectedValues
      ? validateExpectValues(actual, expectedValues, path)
      : validateExpectValues(actual, expected, path);

    if (rs?.length) {
      results.push(...rs);
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

      
      const rs = validateExpectValues(dataInclude, processedData, path);
      if (rs?.length) {
        results.push(...rs);
      }
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
function validateExpectValues(data: any, expectedValues: any, path: string) {
  const result: { type: string; message: string; index?: number; path: string; key?: string; actualValue?: any; expectedValue?: any }[] = [];
  let allMatch = true;
  if (Array.isArray(data) && Array.isArray(expectedValues)) {

    if (data.length !== expectedValues.length) {
      result.push({
        type: 'array_length_mismatch',
        path: path,
        message: `Array length mismatch: Actual has ${data.length} items, Expected has ${expectedValues.length} items`
      });
      allMatch = false;
      return result;
>>>>>>> main
    }


    data.forEach((dataItem, index) => {
      const expectedItem = expectedValues[index];
      if (!expectedItem) {
        result.push({
          type: 'missing_expected_item',
<<<<<<< HEAD
          message: `ExpectedValues[${index}] is undefined or missing`,
=======
          path: path,
          message: `Expected[${index}] is undefined or missing`,
>>>>>>> main
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
<<<<<<< HEAD
            type: 'missing_key',
            message: `Field '${key}' in data[${index}] is MISSING in expectedValues[${index}]`,
=======
            type: 'missing_field',
            path: path,
            message: `Field '${key}' in actual[${index}] is MISSING in expected[${index}]`,
>>>>>>> main
            index,
            key
          });
          allMatch = false;
          continue;
        }

<<<<<<< HEAD
        const dataValue = dataItem[key];
        const expectedValue = expectedItem[key];
        if (!deepEqual(dataValue, expectedValue)) {
          result.push({
            type: 'value_mismatch',
            message: `Field '${key}' in data[${index}] VALUE MISMATCH`,
            index,
            key,
            dataValue,
=======
        const actualValue = dataItem[key];
        const expectedValue = expectedItem[key];
        if (!deepEqual(actualValue, expectedValue)) {
          result.push({
            type: 'value_mismatch',
            message: `Field '${key}' in actual[${index}] VALUE MISMATCH`,
            index,
            path,
            key,
            actualValue,
>>>>>>> main
            expectedValue
          });
          allMatch = false;
        }
      }

      for (const key of expectedKeys) {
        if (!(key in dataItem)) {
          result.push({
<<<<<<< HEAD
            type: 'excess_key',
            message: `Field '${key}' in expectedValues[${index}] is EXCESS (not present in data[${index}])`,
            index,
=======
            type: 'excess_field',
            message: `Field '${key}' in expected[${index}] is EXCESS (not present in data[${index}])`,
            index,
            path,
>>>>>>> main
            key
          });
          allMatch = false;
        }
      }
    });
  }
<<<<<<< HEAD
 
=======
>>>>>>> main
  else if (!Array.isArray(data) && !Array.isArray(expectedValues) && data && expectedValues) {
    const dataKeys = Object.keys(data);
    const expectedKeys = Object.keys(expectedValues);

    for (const key of dataKeys) {
      if (!(key in expectedValues)) {
        result.push({
<<<<<<< HEAD
          type: 'missing_key',
          message: `Field '${key}' in data is MISSING in expectedValues`,
=======
          type: 'missing_field',
          message: `Field '${key}' in actual is MISSING in expected`,
          path,
>>>>>>> main
          key
        });
        allMatch = false;
        continue;
      }

<<<<<<< HEAD
      const dataValue = data[key];
      const expectedValue = expectedValues[key];
      if (!deepEqual(dataValue, expectedValue)) {
        result.push({
          type: 'value_mismatch',
          message: `Field '${key}' VALUE MISMATCH`,
          key,
          dataValue,
=======
      const actualValue = data[key];
      const expectedValue = expectedValues[key];
      if (!deepEqual(actualValue, expectedValue)) {
        result.push({
          type: 'value_mismatch',
          message: `Field '${key}' VALUE MISMATCH`,
          path,
          key,
          actualValue,
>>>>>>> main
          expectedValue
        });
        allMatch = false;
      }
    }

    for (const key of expectedKeys) {
      if (!(key in data)) {
        result.push({
          type: 'excess_key',
<<<<<<< HEAD
          message: `Field '${key}' in expectedValues is EXCESS (not present in data)`,
=======
          path,
          message: `Field '${key}' in expected is EXCESS (not present in actual)`,
>>>>>>> main
          key
        });
        allMatch = false;
      }
    }
  }
<<<<<<< HEAD

  else {
    result.push({
      type: 'invalid_format',
      message: 'Invalid data or expectedValues format: both must be arrays or objects'
    });
    allMatch = false;
  }
 return result
=======
  else {
    result.push({
      type: 'invalid_format',
      message: 'Invalid actual or expected format: both must be arrays or objects',
      path
    });
    allMatch = false;
  }
  return result
>>>>>>> main
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