import { Entry, ErrorItem } from './declarations';

// Template cho type 'request'
export const combinedReportTemplate = (
  className?: string,
  url?: string,
  pathRequest?: string,
  failedStep?: any[],
  passedTests?: number,
  failedTests?: any[],
  totalTests?: number,
  summary?: any,
  type?: string,
) => {
  className = className || 'Unknown Class';
  url = url || 'N/A';
  pathRequest = pathRequest || 'N/A';
  failedStep = failedStep || [];
  passedTests = passedTests || 0;
  failedTests = failedTests || [];
  totalTests = totalTests || 0;
  summary = summary || { statusCodes: {} };
  type = type;

  switch (type) {
    case 'request':
      return requestReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        passedTests,
        failedTests,
        totalTests,
        summary,
      );

    case 'response':
      return responseReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        passedTests,
        failedTests,
        totalTests,
      );

    case 'saga':
      return sagaReportTemplate(className, url, pathRequest, failedStep);

    default:
    // return requestReportTemplate(
    //   className,
    //   url,
    //   pathRequest,
    //   failedStep,
    //   failedTests,
    //   summary
    // );
  }
};

const requestReportTemplate = (
  className,
  url,
  pathRequest,
  failedStep,
  passedTests,
  failedTests,
  totalTests,
  summary,
) => {
  const uniqueErrors = new Map();
  if (failedTests) {
    failedTests.forEach((failCase) => {
      // if (failCase.missing && Array.isArray(failCase.missing)) {
      //   failCase.missing.forEach((error) => {
      //     uniqueErrors.set(
      //       error,
      //       (uniqueErrors.get(error) || 0) + 1,
      //     );
      //   });
      // }

      if (failCase.extra && Array.isArray(failCase.extra)) {
        failCase.extra.forEach((error) => {
          uniqueErrors.set(error, (uniqueErrors.get(error) || 0) + 1);
        });
      }
    });
  }
  return [
    `=== Request Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      const errorDetails = step.error
        ? `\n     └─ ${step.error.split('\n').join('\n       ')}`
        : '';
      return `  ${index + 1}. [${step.status ? '✅ PASSED' : '❌ FAILED'}] ${step.stepName}${errorDetails}`;
    }),
    '',
    '=== Test Summary ===',
    `✅ Passed: ${passedTests}`,
    `❌ Failed: ${failedTests.length}`,
    `📊 Total: ${totalTests}`,
    '',
    '=== System Metrics ===',
    '▧ Status Code Distribution:',
    ` 🟢 200: ${summary.statusCodes[200] || 0}`,
    ` 🟢 201: ${summary.statusCodes[201] || 0}`,
    ` 🟠 400: ${summary.statusCodes[400] || 0}`,
    ` 🟠 403: ${summary.statusCodes[403] || 0}`,
    ` 🟠 404: ${summary.statusCodes[404] || 0}`,
    ` 🔴 500: ${summary.statusCodes[500] || 0}`,
    '',
    '=== Unique Errors ===',
    ...Array.from(uniqueErrors.entries()).map(
      ([error, count], index) =>
        ` 🟣 ${index + 1}. ${error} (Occurred: ${count} time${count > 1 ? 's' : ''})`,
    ),
    '',
    '[DTO Validation Issues]',
    ...failedTests.map((test, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Case #${test.testcase}`,
        `     ├─ Status: ${test.code || 'N/A'}`,
        `     ├─ Body: ${JSON.stringify(test.body) || 'None'}`,
        `     ├─ Actual: ${test.missing?.join(', ') || 'None'}`,
        `     ├─ Expected: ${test.extra?.join(', ') || 'None'}`,
        `     └─ Details: ${test.errorDetails || 'No details'}`,
      ].join('\n'),
    ),
    '',
    '=== End of Report ===',
  ].join('\n');
};

// Template cho type 'response'
const responseReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  failedStep: any[],
  passedTests: number,
  failedTests: any[],
  totalTests: number,
) => {
  return [
    `=== Response Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      const errorDetails = step.error
        ? `\n     └─ ${step.error.split('\n').join('\n       ')}`
        : '';
      return `  ${index + 1}. [${step.status ? '✅ PASSED' : '❌ FAILED'}] ${step.stepName}${errorDetails}`;
    }),
    '',
    '=== Test Summary ===',
    `✅ Passed: ${passedTests}`,
    `❌ Failed: ${failedTests.length}`,
    `📊 Total: ${totalTests}`,
    '',
    '=== Error Details ===',
    ...failedTests.map((test) =>
      [
        '',
        `🟣 Case #${test.testcase}`,
        `   ├─ Error: ${test.error || 'No details'}`,
        ...(test.expected
          ? [
            `   ├─ Expected: ${JSON.stringify(test.expected, null, 2).split('\n').join('\n      ')}`,
          ]
          : []),
        ...(test.actual
          ? [
            `   └─ Actual: ${JSON.stringify(test.actual, null, 2).split('\n').join('\n      ')}`,
          ]
          : []),
      ].join('\n'),
    ),
    '',
    '=== End of Report ===',
  ].join('\n');
};

const sagaReportTemplate = (
  className: string,
  url: string,
  sagaName: string,
  failedSteps: any[],
) => {
  const beforeAllFailures = failedSteps.filter((s) => s.phase === 'beforeAll');
  const testCaseFailures = failedSteps.filter((s) => s.phase === 'test');
  const afterAllFailures = failedSteps.filter((s) => s.phase === 'afterAll');
  const beforeEachFailures = failedSteps.filter(
    (s) => s.phase === 'beforeEach',
  );
  const afterEachFailures = failedSteps.filter((s) => s.phase === 'afterEach');

  // group beforeEach
  const beforeEachGroups = beforeEachFailures.reduce((groups, failure) => {
    const caseTitle = failure.caseTitle || 'Unknown Case';
    if (!groups[caseTitle]) {
      groups[caseTitle] = [];
    }
    groups[caseTitle].push(failure);
    return groups;
  }, {});

  // group test case
  const testCaseGroups = testCaseFailures.reduce((groups, failure) => {
    const caseTitle = failure.caseTitle || 'Unknown Case';
    if (!groups[caseTitle]) {
      groups[caseTitle] = [];
    }
    groups[caseTitle].push(failure);
    return groups;
  }, {});

  // group afterEach
  const afterEachGroups = afterEachFailures.reduce((groups, failure) => {
    const caseTitle = failure.caseTitle || 'Unknown Case';
    if (!groups[caseTitle]) {
      groups[caseTitle] = [];
    }
    groups[caseTitle].push(failure);
    return groups;
  }, {});

  return [
    `=== Saga Test Report For ${className} ===`,
    `• URL: ${url}`,
    `• Saga: ${sagaName}`,
    `• Date: ${new Date().toISOString()}`,
    '',
    ...(beforeAllFailures.length > 0
      ? [
        '=== BeforeAll Failures ===',
        ...beforeAllFailures.map((step, i) => formatStep(step, i)),
      ]
      : []),
    '',
    ...(Object.keys(beforeEachGroups).length > 0
      ? [
        '=== BeforeEach Failures ===',
        ...Object.entries(beforeEachGroups).flatMap(
          ([caseTitle, failures]) => [
            `📄 Case: ${caseTitle}`,
            ...(failures as any[]).map((step, i) => formatStep(step, i)),
            '',
          ],
        ),
      ]
      : []),
    '',
    '=== Test Case ===',
    ...(Object.keys(testCaseGroups).length > 0
      ? Object.entries(testCaseGroups).flatMap(([caseTitle, failures]) => [
        `📄 Case: ${caseTitle}`,
        ...(failures as any[]).map((step, i) => formatStep(step, i)),
        '',
      ])
      : ['✅ All test cases passed']),
    '',
    ...(Object.keys(afterEachGroups).length > 0
      ? [
        '=== AfterEach Failures ===',
        ...Object.entries(afterEachGroups).flatMap(
          ([caseTitle, failures]) => [
            `📄 Case: ${caseTitle}`,
            ...(failures as any[]).map((step, i) => formatStep(step, i)),
            '',
          ],
        ),
      ]
      : []),
    '',
    ...(afterAllFailures.length > 0
      ? [
        '=== AfterAll Failures ===',
        ...afterAllFailures.map((step, i) => formatStep(step, i)),
      ]
      : []),
    '',
    '=== End of Report ===',
  ].join('\n');
};

// format từng step
const formatStep = (step: any, index: number) => {
  const stepInfo = [
    `📝 ${index + 1}. ${step.stepName}`,
    `   • Type: ${step.type}`,
  ];
  if (step.status) {
    stepInfo.push(`   • Status: ✅ passed`);
  } else {
    stepInfo.push(`   • Error:\n${formatErrorDetails(step.error)}`);
  }
  return stepInfo.join('\n');
};

function groupEntriesByPath(entries: Entry[]): Record<string, ErrorItem[]> {
  return entries.reduce((acc: object, curr: Entry) => {
    const path = curr.path ?? 'unknown.path';
    if (!acc[path]) acc[path] = [];
    acc[path].push(curr);
    return acc;
  }, {});
}

function formatGroupedPath(
  path: string,
  items: ErrorItem[],
  errorType: string,
): string {
  const lines = [`         └─ Path: ${path}`];

  for (const item of items) {
    lines.push(`            └─ ${item.message}`);
    if (
      errorType === 'value_mismatch' &&
      item.actualValue !== undefined &&
      item.expectedValue !== undefined
    ) {
      lines.push(
        `                  - ActualValue: ${JSON.stringify(item.actualValue)}`,
        `                  - ExpectedValue: ${JSON.stringify(item.expectedValue)}`,
      );
    }
  }

  return lines.join('\n');
}
function formatErrorDetails(error: Record<string, Entry[]>): string {
  return Object.entries(error)
    .map(([errorType, entries]) => {
      if (!Array.isArray(entries)) return '';

      const groupedByPath = groupEntriesByPath(entries);

      const formattedGroups = Object.entries(groupedByPath).map(
        ([path, items]) => formatGroupedPath(path, items, errorType),
      );

      return `      └─ ${errorType}:\n${formattedGroups.join('\n')}`;
    })
    .join('\n');
}

// const formatError = (error: any) => {
//   const formatSingleError = (err: any) => {
//     const path = err.path || 'unknown path';
//     let expected = err.expected || 'No expected value';
//     let actual = err.actual || 'No actual value';
//     const message = err.message || 'Validation failed';

//     // Xử lý định dạng đặc biệt cho các dòng Index[]
//     const formatIndexLines = (text: string) => {
//       if (typeof text === 'string' && text.includes('Index[')) {
//         return text.split('\n')
//           .map(line => `         ${line}`)
//           .join('\n');
//       }
//       return text;
//     };

//     expected = formatIndexLines(expected);
//     actual = formatIndexLines(actual);

//     // Thêm dòng trống sau Expected: và Actual: nếu có nhiều dòng
//     const expectedLines = expected.includes('\n')
//       ? `\n${expected}`
//       : ` ${expected}`;
//     const actualLines = actual.includes('\n')
//       ? `\n${actual}`
//       : ` ${actual}`;

//     return [
//       `    ├─ Path: ${path}`,
//       `    ├─ Expected:${expectedLines}`,
//       `    ├─ Actual:${actualLines}`,
//       `    └─ Message: ${message}`,
//     ].join('\n');
//   };

//   if (Array.isArray(error)) {
//     return error.map(formatSingleError).join('\n');
//   }

//   if (typeof error === 'object' && error !== null) {
//     return formatSingleError(error);
//   }

//   return `    └─ Message: ${String(error)}`;
// };
