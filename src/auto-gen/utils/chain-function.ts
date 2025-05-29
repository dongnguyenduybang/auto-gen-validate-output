// // Cross-step validation - verify changes by calling another API

import { CustomMatcher, MatcherResult } from './declarations';
import { callAPIForSystem, resolveVariables } from './helper';
import { TestContext } from './text-context';
import { API_EVENT, SYSTEM_MESSAGE } from './ws-config';

// import { ACTION, VAR } from "../enums";
// import { getApiFunctions } from "../functions/api-registry";
// import { ExpectResult } from "./declarations";
// import { TestContext } from "./text-context";
interface BuilderMatcherResult {
  isEqual: boolean;
  allDifferences: string[]; // Gom tất cả differences vào đây
}

export const chain = {
  expect: {
    [API_EVENT.halome.cloudevent.system]: createMatcher(
      (actual: any) => actual === API_EVENT.halome.cloudevent.system,
      { type: 'systemEvent' },
    ),

    exact: <T>(expected: T): CustomMatcher => {
      const fn = (actual: T, context?: TestContext) => {
        const resolvedExpected = context
          ? resolveVariables(expected, context)
          : expected;

        const results: BuilderMatcherResult = {
          isEqual: true,
          allDifferences: []
        };
        const result = deepEqual(actual, resolvedExpected);
        if (!result.isEqual && result.differences) {

          results.isEqual = false;
          results.allDifferences.push(...result.differences)
        }
        return results;
      };
      return createMatcher(fn, { type: 'exact', expected });
    },
    builder: <T extends { build(): any }>(builder: T): CustomMatcher => {
      const expected = builder.build();
      const fn = async (actual: ReturnType<T['build']>, context: TestContext): Promise<MatcherResult> => {
        const resolvedExpected = context ? resolveVariables(expected, context) : expected;

        const results: BuilderMatcherResult = {
          isEqual: true,
          allDifferences: []
        };
        const result = deepEqual(actual.data, resolvedExpected.data, '', true);// compare filter  expect 
        if (!result.isEqual && result.differences) {
          results.isEqual = false;
          results.allDifferences.push(...result.differences);
        } // expected config

        // expected các field còn lại 
        if (result.nonMatchingActual && actual.source !== API_EVENT.halome.cloudevent.system) { // data non matching compare with data from api step
          const dataApi = actual.apiData // data from api step
          const dataApiRemove = removeExpectedFields(dataApi.data, resolvedExpected.data)
          const expectedNonMatch = result.nonMatchingActual
          const resultNonMatch = deepEqual(dataApiRemove, expectedNonMatch, '')
          if (!resultNonMatch.isEqual && resultNonMatch.differences) {
            results.isEqual = false;
            results.allDifferences.push(...resultNonMatch.differences);
          }
        } else {
          // expected event system
          const getLastMsgId = actual.data.includes.channelMetadata[0].lastMessageId;
          const getLastChannelId = actual.data.includes.channelMetadata[0].channelId;
          const body = {
            msgId: getLastMsgId,
            channelId: getLastChannelId
          };
          const responseApiSystem = await callAPIForSystem(body, actual.body.resolveHeader, 'getMessage');
          const dataApiSystem = await removeExpectedFields(responseApiSystem.data, resolvedExpected.data);

          const resultApiSystem = deepEqual(dataApiSystem, result.nonMatchingActual)

          if (!resultApiSystem.isEqual && resultApiSystem.differences) {
            results.isEqual = false;
            results.allDifferences.push(...resultApiSystem.differences)

          }

        }
        return results;
      }
      return createMatcher(fn, { type: 'builder', builder, expected });
    },
  },
};

function createMatcher(
  fn: (actual: any, context?: TestContext) => boolean | Promise<boolean> | MatcherResult | Promise<MatcherResult>,
  meta: any,
): CustomMatcher {
  // Create the base async function
  const matcher = async (actual: any, context?: TestContext): Promise<MatcherResult> => {
    try {
      const result = await fn(actual, context);
      if (typeof result === 'boolean') {
        return {
          isEqual: result,
          allDifferences: result ? undefined : ['Comparison failed']
        };
      }
      return result;
    } catch (error) {
      console.error('Matcher error:', error);
      return {
        isEqual: false,
        allDifferences: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  };

  const customMatcher: CustomMatcher = Object.assign(matcher, {
    matcherType: meta.type,
    expectedValue: meta.expected || meta.props || meta.builder,
    toString: () => `[Matcher ${meta.type}]`
  });

  return customMatcher;
}

function deepEqual(
  x: any, //actual
  y: any, //expected
  path = '',
  ignoreExtraFields = false,
): { isEqual: boolean; differences?: string[]; nonMatchingActual?: any; path: string } {
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
      differences: [`${path} => actual: ${JSON.stringify(x)} !== expected: ${JSON.stringify(y)}`],
      nonMatchingActual: x,
      path: path// Lưu toàn bộ actual nếu không khớp
    };
  }

  const keysX = Object.keys(x); // Keys của actual
  const keysY = Object.keys(y); // Keys của expected
  const allKeys = ignoreExtraFields ? new Set(keysY) : new Set([...keysX, ...keysY]);
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
    // Lưu nonMatchingActual từ kết quả đệ quy (chỉ các field không có trong expected)
    if (result.nonMatchingActual) {
      nonMatchingActual[key] = result.nonMatchingActual;
    }

  }

  // Kiểm tra các field chỉ có trong expected (nếu không ignoreExtraFields)
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
    nonMatchingActual: Object.keys(nonMatchingActual).length > 0 ? nonMatchingActual : undefined,
    path: path
  };
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
    const expectedTemplate = Array.isArray(expectedData) ? expectedData[0] : expectedData;
    return originalData.map(item => removeExpectedFields(item, expectedTemplate));
  }

  // Xử lý object
  const result = {};
  for (const key in originalData) {
    // Giữ lại field nếu nó không có trong expectedData
    if (!expectedData || !(key in expectedData)) {
      result[key] = originalData[key];
    }
    // Nếu field là object → đệ quy
    else if (typeof originalData[key] === 'object' && originalData[key] !== null) {
      result[key] = removeExpectedFields(originalData[key], expectedData[key]);
    }
  }
  return result;
}


