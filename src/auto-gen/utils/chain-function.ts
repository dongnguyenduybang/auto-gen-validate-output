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
    exact: <T extends DataContainer & { type: string }>(
      expected: T['data'],
    ): CustomMatcher => {
      const fn = (actual: T, context?: TestContext) => {
        const resolvedExpected = context
          ? resolveVariables(expected, context)
          : expected;

        const isEventTypeMatch = [
          API_EVENT.halome.v3.chat.USER_MESSAGE_REACTION_UPDATED,
          API_EVENT.halome.v3.chat.MESSAGE_REACTION_UPDATED,
        ].includes(actual?.type);

        const expectedCompareNo = resolvedExpected;
        const actualToCompare = actual.hasOwnProperty('data')
          ? actual.data
          : actual;

        const results: BuilderMatcherResult = {
          isEqual: true,
          allDifferences: [],
        };
        const result = deepEqual(
          actualToCompare,
          expectedCompareNo,
          '',
          false,
          false,
        );
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

        let body: any, action: string;

        const result = deepEqual(
          actual.data,
          resolvedExpected.data,
          '',
          false,
          false,
        ); // compare filter  expect
        if (
          result.nonMatchingActual &&
          actual.source !== API_EVENT.halome.cloudevent.system
        ) {
          // !== system
          let dataApiRemove;
          // data non matching compare with data from api step
          const isEventTypeMatch = [
            API_EVENT.halome.v3.chat.OUTGOING_MESSAGE_REQUEST_CREATED,
            API_EVENT.halome.v3.chat.INCOMING_MESSAGE_REQUEST_CREATED,
          ].includes(actual?.type);

          if (isEventTypeMatch) {
            const getLastUserId = actual.data.includes.channelMetadata[0].dmId;
            const resultLastUserId = getLastUserId.split('_')[1];
            body = {
              userId: resultLastUserId,
            };
            action = 'getDmChannel';
            const responseApiSystem = await callAPIForSystem(
              body,
              actual.body.resolveHeader,
              action,
            );

            dataApiRemove = await removeExpectedFields(
              responseApiSystem.data,
              resolvedExpected.data,
            );
          } else {
            const dataApi = actual.apiData;
            // console.log(JSON.stringify(dataApi, null,2))
            dataApiRemove = removeExpectedFields(
              dataApi.data,
              resolvedExpected.data,
            );
          }

          const expectedNonMatch = result.nonMatchingActual;
          console.log(JSON.stringify(dataApiRemove, null, 2));
          console.log(JSON.stringify(expectedNonMatch, null, 2));
          const resultNonMatch = deepEqual(
            dataApiRemove,
            expectedNonMatch,
            '',
            false,
            false,
          );
          if (!resultNonMatch.isEqual && resultNonMatch.differences) {
            results.isEqual = false;
            results.allDifferences.push(...resultNonMatch.differences);
          }
        } else {
          // system
          const getLastMsgId =
            actual.data.includes.channelMetadata[0].lastMessageId;
          const getLastChannelId =
            actual.data.includes.channelMetadata[0].channelId;
          const getLastUserId = actual.data.includes.channelMetadata[0].dmId;

          const isDmAction =
            typeof actual?.action === 'string' && actual.action.includes('Dm');
          const isEventTypeMatch = [
            API_EVENT.halome.v3.chat.OUTGOING_MESSAGE_REQUEST_CREATED,
            API_EVENT.halome.v3.chat.INCOMING_MESSAGE_REQUEST_CREATED,
          ].includes(actual?.type);
          if (isDmAction && isEventTypeMatch) {
            body = {
              userId: getLastUserId,
            };
            action = 'getDmChannel';
          } else if (isDmAction) {
            body = {
              userId: getLastUserId,
              messageId: getLastMsgId,
            };
            action = 'getDmMessage';
          } else {
            body = {
              workspaceId: '0',
              messageId: getLastMsgId,
              channelId: getLastChannelId,
            };
            action = 'getMessage';
          }

          // expected event system
          const responseApiSystem = await callAPIForSystem(
            body,
            actual.body.resolveHeader,
            action,
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

function removeExpectedFields(originalData: any, expectedData: any): any {
  // Xử lý dữ liệu không phải object
  if (typeof originalData !== 'object' || originalData === null) {
    return originalData;
  }

  // Xử lý mảng
  if (Array.isArray(originalData)) {
    // Nếu expected là mảng rỗng → giữ nguyên originalData
    if (!Array.isArray(expectedData) || expectedData.length === 0) {
      return originalData;
    }
    // Dùng phần tử đầu tiên của expected làm template
    const expectedTemplate = expectedData[0];
    return originalData.map((item) =>
      removeExpectedFields(item, expectedTemplate),
    );
  }

  // Xử lý object - CHỈ GIỮ LẠI CÁC FIELD KHÔNG CÓ TRONG CONFIG
  const result: any = {};

  for (const key in originalData) {
    // Nếu field không có trong expectedData hoặc expectedData là undefined
    if (!expectedData || !(key in expectedData)) {
      // Giữ nguyên field này
      result[key] = originalData[key];
    } else if (
      typeof originalData[key] === 'object' &&
      originalData[key] !== null
    ) {
      // Nếu là object thì đệ quy
      result[key] = removeExpectedFields(originalData[key], expectedData[key]);
    }
    // Bỏ qua các field có trong expectedData
  }

  return result;
}
export function deepEqual(
  x: any, // actual (WS data)
  y: any, // expected (config)
  path = '',
  ignoreExtraFields = false,
  ignoreLength = false,
): {
  isEqual: boolean;
  differences?: string[];
  nonMatchingActual?: any;
  path: string;
} {
  if (x === y) return { isEqual: true, path };

  if (x == null || y == null) {
    return {
      isEqual: false,
      differences: [
        `${path} => actual: ${JSON.stringify(x)} !== expected: ${JSON.stringify(y)}`,
      ],
      path,
    };
  }

  if (typeof x !== typeof y) {
    return {
      isEqual: false,
      differences: [
        `${path}: type mismatch (actual: ${typeof x}, expected: ${typeof y})`,
      ],
      path,
    };
  }

  // Kiểm tra mảng - tìm expected value trong actual array
  if (Array.isArray(x) && !Array.isArray(y)) {
    // Expected là single value, actual là array -> tìm expected trong array
    const found = x.some((item) => {
      if (
        typeof y === 'object' &&
        y !== null &&
        typeof item === 'object' &&
        item !== null
      ) {
        // So sánh object trong array
        const result = deepEqual(
          item,
          y,
          path,
          ignoreExtraFields,
          ignoreLength,
        );
        return result.isEqual;
      }
      return item === y;
    });

    if (found) {
      return { isEqual: true, path };
    } else {
      return {
        isEqual: false,
        differences: [
          `${path}: expected value ${JSON.stringify(y)} not found in array`,
        ],
        nonMatchingActual: x,
        path,
      };
    }
  }

  if (Array.isArray(x) && Array.isArray(y)) {
    return compareArraysByContent(x, y, path, ignoreExtraFields, ignoreLength);
  }

  // Kiểm tra đối tượng
  if (typeof x === 'object' && typeof y === 'object') {
    const keysY = Object.keys(y);
    const keysX = Object.keys(x);
    const differences: string[] = [];
    const nonMatchingActual: any = {};

    for (const key of keysY) {
      const currentPath = path ? `${path}.${key}` : key;
      const expectedValue = y[key];

      // Special handling for reaction-related fields
      if (key === 'total' || key === 'isReacted') {
        const handled = handleReactionField(
          x,
          key,
          expectedValue,
          currentPath,
          differences,
        );
        if (handled.found) {
          continue; // Skip normal processing
        }
        // If not found in reactions, fall through to normal processing
      }

      if (!(key in x)) {
        differences.push(
          `${currentPath}: missing in actual (expected has ${JSON.stringify(expectedValue)})`,
        );
        continue;
      }

      const result = deepEqual(
        x[key],
        expectedValue,
        currentPath,
        ignoreExtraFields,
        ignoreLength,
      );
      if (!result.isEqual && result.differences) {
        differences.push(...result.differences);
      }
      if (result.nonMatchingActual !== undefined) {
        nonMatchingActual[key] = result.nonMatchingActual;
      }
    }

    if (!ignoreExtraFields) {
      for (const key of keysX) {
        if (!(key in y)) {
          nonMatchingActual[key] = x[key];
        }
      }
    }

    return {
      isEqual: differences.length === 0,
      differences: differences.length > 0 ? differences : undefined,
      nonMatchingActual:
        Object.keys(nonMatchingActual).length > 0
          ? nonMatchingActual
          : undefined,
      path,
    };
  }

  return {
    isEqual: false,
    differences: [
      `${path} => actual: ${JSON.stringify(x)} !== expected: ${JSON.stringify(y)}`,
    ],
    path,
  };
}

// Helper function to handle reaction-specific fields
function handleReactionField(
  actualData: any,
  fieldName: 'total' | 'isReacted',
  expectedValue: any,
  path: string,
  differences: string[],
): { found: boolean } {
  // Check if we have emoji in the same level to find specific reaction
  const emoji = actualData.emoji;

  if (!emoji) {
    return { found: false };
  }

  // Case 1: reactions is object like {"😁": {total: 1, isReacted: true}}
  if (
    actualData.reactions &&
    typeof actualData.reactions === 'object' &&
    !Array.isArray(actualData.reactions)
  ) {
    const reactionData = actualData.reactions[emoji];
    if (reactionData && reactionData[fieldName] !== undefined) {
      if (reactionData[fieldName] !== expectedValue) {
        differences.push(
          `${path}: expected ${JSON.stringify(expectedValue)} but found ${JSON.stringify(reactionData[fieldName])} in reactions.${emoji}.${fieldName}`,
        );
      }
      return { found: true };
    }
  }

  // Case 2: reactions is array like [{emoji: "😁", total: 1}, ...]
  if (Array.isArray(actualData.reactions)) {
    const reactionItem = actualData.reactions.find(
      (r: any) => r.emoji === emoji,
    );
    if (reactionItem && reactionItem[fieldName] !== undefined) {
      if (reactionItem[fieldName] !== expectedValue) {
        differences.push(
          `${path}: expected ${JSON.stringify(expectedValue)} but found ${JSON.stringify(reactionItem[fieldName])} in reactions array for emoji ${emoji}`,
        );
      }
      return { found: true };
    }
  }

  return { found: false };
}

function compareArraysByContent(
  x: any[], // actual
  y: any[], // expected
  path: string,
  ignoreExtraFields: boolean,
  ignoreLength: boolean,
) {
  const differences: string[] = [];
  const nonMatchingActual: any[] = [];

  if (!x || !y) {
    differences.push(
      `${path}: invalid array (actual: ${JSON.stringify(x)}, expected: ${JSON.stringify(y)})`,
    );
    return {
      isEqual: false,
      differences,
      nonMatchingActual: x,
      path,
    };
  }

  if (x.length !== y.length && !ignoreExtraFields && !ignoreLength) {
    differences.push(
      `${path}: array length mismatch (actual: ${x.length}, expected: ${y.length})`,
    );
    return {
      isEqual: false,
      differences,
      nonMatchingActual: x,
      path,
    };
  }

  const keyField = detectKeyField(x, y);
  if (keyField) {
    const xMap = new Map(x.map((item) => [item[keyField], item]));
    const yIndexMap = new Map(y.map((item, index) => [item[keyField], index]));

    for (const [key, yItem] of y.map((item, index) => [item[keyField], item])) {
      const xItem = xMap.get(key);
      if (!xItem) {
        differences.push(
          `${path}: missing ${keyField} ${key} in actual (expected has ${JSON.stringify(yItem)})`,
        );
        continue;
      }

      const index = yIndexMap.get(key);
      const currentPath = `${path}[${index}]`;
      const result = deepEqual(
        xItem,
        yItem,
        currentPath,
        ignoreExtraFields,
        ignoreLength,
      );
      if (!result.isEqual && result.differences) {
        differences.push(...result.differences);
      }
      if (result.nonMatchingActual !== undefined) {
        nonMatchingActual.push(result.nonMatchingActual);
      }
    }

    if (!ignoreExtraFields) {
      for (const [key] of xMap) {
        if (!yIndexMap.has(key)) {
          nonMatchingActual.push(xMap.get(key));
        }
      }
    }
  } else {
    // For each expected item, try to find it in actual array
    for (let i = 0; i < y.length; i++) {
      const expectedItem = y[i];
      const currentPath = path ? `${path}[${i}]` : `[${i}]`;

      // Try to find expectedItem in actual array
      let found = false;
      for (let j = 0; j < x.length; j++) {
        const actualItem = x[j];
        const result = deepEqual(
          actualItem,
          expectedItem,
          currentPath,
          ignoreExtraFields,
          ignoreLength,
        );
        if (result.isEqual) {
          found = true;
          break;
        }
      }

      if (!found) {
        differences.push(
          `${currentPath}: expected item ${JSON.stringify(expectedItem)} not found in actual array`,
        );
      }
    }

    if (!ignoreExtraFields) {
      // Add items that are in actual but not matched by any expected item
      const matchedIndices = new Set<number>();

      for (let i = 0; i < y.length; i++) {
        const expectedItem = y[i];
        for (let j = 0; j < x.length; j++) {
          if (matchedIndices.has(j)) continue;

          const actualItem = x[j];
          const result = deepEqual(
            actualItem,
            expectedItem,
            '',
            ignoreExtraFields,
            ignoreLength,
          );
          if (result.isEqual) {
            matchedIndices.add(j);
            break;
          }
        }
      }

      for (let i = 0; i < x.length; i++) {
        if (!matchedIndices.has(i)) {
          nonMatchingActual.push(x[i]);
        }
      }
    }
  }

  return {
    isEqual: differences.length === 0,
    differences: differences.length > 0 ? differences : undefined,
    nonMatchingActual:
      nonMatchingActual.length > 0 ? nonMatchingActual : undefined,
    path,
  };
}

function detectKeyField(x: any[], y: any[]): string | null {
  if (x.length === 0 || y.length === 0) return null;

  const potentialKeys = ['userId', 'id', 'channelId', 'messageId', 'emoji'];

  for (const key of potentialKeys) {
    const allHaveKey =
      x.every((item) => item && typeof item === 'object' && key in item) &&
      y.every((item) => item && typeof item === 'object' && key in item);
    if (allHaveKey) {
      const xKeys = new Set(x.map((item) => item[key]));
      const yKeys = new Set(y.map((item) => item[key]));
      if (xKeys.size === x.length && yKeys.size === y.length) {
        return key;
      }
    }
  }

  return null;
}
