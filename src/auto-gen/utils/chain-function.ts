import {
  BuilderMatcherResult,
  CustomMatcher,
  DataContainer,
  MatcherResult,
} from './declarations';
import { callAPIForSystem, resolveVariables } from './helper';
import { TestContext } from './text-context';
import { API_EVENT } from './ws-config';

export const chain = {
  expect: {
    exact: <T extends DataContainer>(expected: T['data']): CustomMatcher => {
      const fn = (actual: T, context?: TestContext) => {
        const resolvedExpected = context
          ? resolveVariables(expected, context)
          : expected;

        const actualToCompare = actual.hasOwnProperty('data')
          ? actual.data
          : actual;
        const results: BuilderMatcherResult = {
          isEqual: true,
          allDifferences: [],
        };
        const result = deepEqual(actualToCompare, resolvedExpected);
        if (!result.isEqual && result.differences) {
          results.isEqual = false;
          results.allDifferences.push(...result.differences);
        }
        return results;
      };
      return createMatcher(fn, { type: 'exact', expected });
    },
    builder: <T extends { build(): any }>(builder: T): CustomMatcher => {
      const expected = builder.build();
      const fn = async (
        actual: ReturnType<T['build']>,
        context: TestContext,
      ): Promise<MatcherResult> => {
        const resolvedExpected = context
          ? resolveVariables(expected, context)
          : expected;
        const results: BuilderMatcherResult = {
          isEqual: true,
          allDifferences: [],
        };
        const result = deepEqual(actual.data, resolvedExpected.data, '', true); // compare filter  expect
        if (!result.isEqual && result.differences) {
          results.isEqual = false;
          results.allDifferences.push(...result.differences);
        } // expected config

        // expected các field còn lại
        if (
          result.nonMatchingActual &&
          actual.source !== API_EVENT.halome.cloudevent.system
        ) {
          // data non matching compare with data from api step
          const dataApi = actual.apiData; // data from api step
          const dataApiRemove = removeExpectedFields(
            dataApi.data,
            resolvedExpected.data,
          );
          const expectedNonMatch = result.nonMatchingActual;
          const resultNonMatch = deepEqual(dataApiRemove, expectedNonMatch, '');
          if (!resultNonMatch.isEqual && resultNonMatch.differences) {
            results.isEqual = false;
            results.allDifferences.push(...resultNonMatch.differences);
          }
        } else {
          // expected event system
          const getLastMsgId =
            actual.data.includes.channelMetadata[0].lastMessageId;
          const getLastChannelId =
            actual.data.includes.channelMetadata[0].channelId;
          const body = {
            msgId: getLastMsgId,
            channelId: getLastChannelId,
          };
          // if(actual.action === '')

          const responseApiSystem = await callAPIForSystem(
            body,
            actual.body.resolveHeader,
            'getMessage',
          );

          const dataApiSystem = await removeExpectedFields(
            responseApiSystem.data,
            resolvedExpected.data,
          );
          const resultApiSystem = deepEqual(
            result.nonMatchingActual,
            dataApiSystem,
          );

          if (!resultApiSystem.isEqual && resultApiSystem.differences) {
            results.isEqual = false;
            results.allDifferences.push(...resultApiSystem.differences);
          }
        }
        return results;
      };
      return createMatcher(fn, { type: 'builder', builder, expected });
    },
  },
};

function createMatcher(
  fn: (
    actual: any,
    context?: TestContext,
  ) => boolean | Promise<boolean> | MatcherResult | Promise<MatcherResult>,
  meta: any,
): CustomMatcher {
  // Create the base async function
  const matcher = async (
    actual: any,
    context?: TestContext,
  ): Promise<MatcherResult> => {
    try {
      const result = await fn(actual, context);
      if (typeof result === 'boolean') {
        return {
          isEqual: result,
          allDifferences: result ? undefined : ['Comparison failed'],
        };
      }
      return result;
    } catch (error) {
      console.error('Matcher error:', error);
      return {
        isEqual: false,
        allDifferences: [
          error instanceof Error ? error.message : 'Unknown error',
        ],
      };
    }
  };

  const customMatcher: CustomMatcher = Object.assign(matcher, {
    matcherType: meta.type,
    expectedValue: meta.expected || meta.props || meta.builder,
    toString: () => `[Matcher ${meta.type}]`,
  });

  return customMatcher;
}

function removeExpectedFields(originalData, expectedData) {
  // Xử lý dữ liệu không phải object
  if (typeof originalData !== 'object' || originalData === null) {
    return originalData;
  }

  // Xử lý mảng
  if (Array.isArray(originalData)) {
    // Nếu expected là mảng rỗng → giữ nguyên originalData
    if (Array.isArray(expectedData) && expectedData.length === 0) {
      return originalData;
    }
    // Nếu expected có phần tử → dùng phần tử đầu tiên làm template
    const expectedTemplate = Array.isArray(expectedData)
      ? expectedData[0]
      : expectedData;
    return originalData.map((item) =>
      removeExpectedFields(item, expectedTemplate),
    );
  }

  // Xử lý object
  const result = {};
  for (const key in originalData) {
    // Giữ lại field nếu nó không có trong expectedData
    if (!expectedData || !(key in expectedData)) {
      result[key] = originalData[key];
    }
    // Nếu field là object → đệ quy
    else if (
      typeof originalData[key] === 'object' &&
      originalData[key] !== null
    ) {
      result[key] = removeExpectedFields(originalData[key], expectedData[key]);
    }
  }
  return result;
}

function deepEqual(
  x: any, // actual
  y: any, // expected
  path = '',
  ignoreExtraFields = false,
): {
  isEqual: boolean;
  differences?: string[];
  nonMatchingActual?: any;
  path: string;
} {
  // Trường hợp cùng reference hoặc primitive values bằng nhau
  if (x === y) return { isEqual: true, path: path };

  // Kiểm tra null/undefined và type
  if (
    x == null ||
    y == null ||
    typeof x !== 'object' ||
    typeof y !== 'object'
  ) {
    return {
      isEqual: false,
      differences: [
        `${path} => actual: ${JSON.stringify(x)} !== expected: ${JSON.stringify(y)}`,
      ],
      nonMatchingActual: x,
      path: path,
    };
  }

  // Xử lý đặc biệt cho mảng - so sánh theo nội dung thay vì theo index
  if (Array.isArray(x) && Array.isArray(y)) {
    return compareArraysByContent(x, y, path, ignoreExtraFields);
  }

  const keysX = Object.keys(x); // Keys của actual
  const keysY = Object.keys(y); // Keys của expected
  const differences: string[] = [];
  const nonMatchingActual: any = Array.isArray(x) ? [] : {};

  // Duyệt keysX để kiểm tra tất cả field trong actual
  for (const key of keysX) {
    const currentPath = path ? `${path}.${key}` : key;

    if (!(key in y)) {
      // Field chỉ có trong actual, lưu toàn bộ cụm
      nonMatchingActual[key] = x[key];
      if (!ignoreExtraFields) {
        differences.push(
          `${currentPath}: missing in expected (actual has ${JSON.stringify(x[key])})`,
        );
      }
      continue;
    }

    // Field có trong cả actual và expected, so sánh đệ quy
    const result = deepEqual(x[key], y[key], currentPath, ignoreExtraFields);
    if (!result.isEqual && result.differences) {
      differences.push(...result.differences);
    }
    // Lưu nonMatchingActual từ kết quả đệ quy
    if (ignoreExtraFields) {
      for (const key of keysX) {
        if (!(key in y)) {
          nonMatchingActual[key] = x[key];
        } else {
          // Kiểm tra nếu có object con không được expect đầy đủ
          const childResult = deepEqual(x[key], y[key], '', true);
          if (childResult.nonMatchingActual !== undefined) {
            nonMatchingActual[key] = childResult.nonMatchingActual;
          }
        }
      }
    }
  }

  // Kiểm tra các field chỉ có trong expected
  for (const key of keysY) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in x)) {
      differences.push(
        `${currentPath}: missing in actual (expected has ${JSON.stringify(y[key])})`,
      );
    }
  }

  return {
    isEqual: differences.length === 0,
    differences: differences.length > 0 ? differences : undefined,
    nonMatchingActual:
      Object.keys(nonMatchingActual).length > 0 ? nonMatchingActual : undefined,
    path: path,
  };
}

function compareArraysByContent(
  actualArray: any[],
  expectedArray: any[],
  path: string,
  ignoreExtraFields: boolean,
): {
  isEqual: boolean;
  differences?: string[];
  nonMatchingActual?: any;
  path: string;
} {
  const differences: string[] = [];
  const nonMatchingActual: any[] = [];

  // Nếu độ dài khác nhau và không ignore extra fields
  if (actualArray.length !== expectedArray.length && !ignoreExtraFields) {
    differences.push(
      `${path}.length => actual: ${actualArray.length} !== expected: ${expectedArray.length}`,
    );
  }

  // Kiểm tra xem mảng có chứa object với unique key không (như userId)
  const hasUniqueKey =
    actualArray.length > 0 &&
    expectedArray.length > 0 &&
    typeof actualArray[0] === 'object' &&
    actualArray[0] !== null &&
    ('userId' in actualArray[0] || 'id' in actualArray[0]);

  if (hasUniqueKey) {
    // Sử dụng unique key để so sánh
    const uniqueKey = 'userId' in actualArray[0] ? 'userId' : 'id';
    return compareArraysByUniqueKey(
      actualArray,
      expectedArray,
      path,
      uniqueKey,
      ignoreExtraFields,
    );
  }

  // Fallback: so sánh theo nội dung tổng quát
  const remainingExpected = [...expectedArray];
  const unmatchedActual: any[] = [];

  for (let i = 0; i < actualArray.length; i++) {
    const actualItem = actualArray[i];
    let foundMatch = false;

    for (let j = 0; j < remainingExpected.length; j++) {
      const expectedItem = remainingExpected[j];

      const compareResult = deepEqual(
        actualItem,
        expectedItem,
        `${path}[${i}]`,
        ignoreExtraFields,
      );

      if (compareResult.isEqual) {
        remainingExpected.splice(j, 1);
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      unmatchedActual.push(actualItem);
      if (!ignoreExtraFields) {
        differences.push(
          `${path}[${i}]: no matching item found in expected array`,
        );
      }
    }
  }

  // Kiểm tra items còn lại trong expected
  if (!ignoreExtraFields) {
    for (let i = 0; i < remainingExpected.length; i++) {
      differences.push(
        `${path}: missing item in actual array (expected has ${JSON.stringify(remainingExpected[i])})`,
      );
    }
  }

  return {
    isEqual: differences.length === 0,
    differences: differences.length > 0 ? differences : undefined,
    nonMatchingActual: unmatchedActual.length > 0 ? unmatchedActual : undefined,
    path: path,
  };
}

function compareArraysByUniqueKey(
  actualArray: any[],
  expectedArray: any[],
  path: string,
  uniqueKey: string, // ví dụ: 'userId', 'id'
  ignoreExtraFields: boolean,
): {
  isEqual: boolean;
  differences?: string[];
  nonMatchingActual?: any;
  path: string;
} {
  const differences: string[] = [];
  const nonMatchingActual: any[] = [];

  if (actualArray.length !== expectedArray.length) {
    differences.push(
      `${path}.length => actual: ${actualArray.length} !== expected: ${expectedArray.length}`,
    );
  }

  // Tạo map từ expected array theo unique key
  const expectedMap = new Map();
  expectedArray.forEach((item, index) => {
    if (item && typeof item === 'object' && uniqueKey in item) {
      expectedMap.set(item[uniqueKey], { item, originalIndex: index });
    }
  });

  // So sánh từng item trong actual với expected
  for (let i = 0; i < actualArray.length; i++) {
    const actualItem = actualArray[i];

    if (
      !actualItem ||
      typeof actualItem !== 'object' ||
      !(uniqueKey in actualItem)
    ) {
      differences.push(`${path}[${i}]: missing ${uniqueKey} field`);
      nonMatchingActual.push(actualItem);
      continue;
    }

    const keyValue = actualItem[uniqueKey];
    const expectedData = expectedMap.get(keyValue);

    if (!expectedData) {
      // Không tìm thấy item với key tương ứng
      if (!ignoreExtraFields) {
        differences.push(
          `${path}[${i}]: no item with ${uniqueKey}="${keyValue}" found in expected array`,
        );
      }
      nonMatchingActual.push(actualItem);
    } else {
      // Tìm thấy item, so sánh deep
      const compareResult = deepEqual(
        actualItem,
        expectedData.item,
        `${path}[${i}]`,
        ignoreExtraFields,
      );

      if (!compareResult.isEqual && compareResult.differences) {
        differences.push(...compareResult.differences);
      }

      if (compareResult.nonMatchingActual) {
        nonMatchingActual.push(compareResult.nonMatchingActual);
      }

      // Remove từ map để track missing items
      expectedMap.delete(keyValue);
    }
  }

  // Kiểm tra items còn lại trong expected mà không có trong actual
  expectedMap.forEach((expectedData, keyValue) => {
    differences.push(
      `${path}: missing item with ${uniqueKey}="${keyValue}" in actual array`,
    );
  });

  return {
    isEqual: differences.length === 0,
    differences: differences.length > 0 ? differences : undefined,
    nonMatchingActual:
      nonMatchingActual.length > 0 ? nonMatchingActual : undefined,
    path: path,
  };
}
