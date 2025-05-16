<<<<<<< HEAD
=======
import { Entry, ErrorItem } from "./declarations";

// Template cho type 'request'
>>>>>>> main
export const combinedReportTemplate = (
  className?: string,
  url?: string,
  pathRequest?: string,
  failedStep?: any[],
  passedTests?: number,
  failedTests?: any[],
  totalTests?: number,
  logicTests?: any[],
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
  logicTests = logicTests || [];
  summary = summary || { statusCodes: {} };
<<<<<<< HEAD
  type = type || 'request';
  responseValidations = responseValidations || [];
=======
  type = type;
>>>>>>> main

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
        logicTests,
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

    case 'ws':
      return wsReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        passedTests,
        failedTests,
        totalTests,
      );

    default:
      // return requestReportTemplate(
      //   className,
      //   url,
      //   pathRequest,
      //   failedStep,
      //   passedTests,
      //   failedTests,
      //   totalTests,
      //   logicTests,
      //   summary,
      // );
  }
};

const requestReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  failedStep: any[],
  passedTests: number,
  failedTests: any[],
  totalTests: number,
  logicTests: any[],
  summary: any,
) => {
  console.log(summary);
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
    '[DTO Validation Issues]',
    ...failedTests.map((test, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Case #${test.testcase}`,
        `     ├─ Status: ${test.code || 'N/A'}`,
        `     ├─ Body: ${JSON.stringify(test.body) || 'None'}`,
        `     ├─ Missing: ${test.missing?.join(', ') || 'None'}`,
        `     ├─ Extra: ${test.extra?.join(', ') || 'None'}`,
        `     └─ Details: ${test.errorDetails || 'No details'}`,
      ].join('\n'),
    ),
    '',
    '=== End of Report ===',
  ].join('\n');
};

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
  const beforeEachFailures = failedSteps.filter((s) => s.phase === 'beforeEach');
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
    console.log(JSON.stringify(groups, null, 2))
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
<<<<<<< HEAD
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      let errorMessage = '';

      if (step.error) {
        if (Array.isArray(step.error)) {
          errorMessage = step.error
            .map((err) => {
              const path = err.path || 'unknown path';
              return `Path: ${path}`;
            })
            .join('\n     └─ ');
        } else if (typeof step.error === 'object' && step.error !== null) {
          errorMessage = step.error.message || 'No error message available';
        } else if (typeof step.error === 'string') {
          try {
            const errorObj = JSON.parse(step.error);
            errorMessage = errorObj.message || step.error;
          } catch {
            errorMessage = step.error;
          }
        }
      }

      return `  ${index + 1}. [${step.status ? '✅ PASSED' : '❌ FAILED'}] ${step.stepName}${errorMessage ? `\n     └─ ${errorMessage}` : ''}`;
    }),
=======
    ...(beforeAllFailures.length > 0
      ? [
        '=== BeforeAll Failures ===',
        ...beforeAllFailures.map((step, i) => formatStep(step, i)),
      ]
      : []),
>>>>>>> main
    '',
    ...(Object.keys(beforeEachGroups).length > 0
      ? [
        '=== BeforeEach Failures ===',
        ...Object.entries(beforeEachGroups).flatMap(([caseTitle, failures]) => [
          `📄 Case: ${caseTitle}`,
          ...(failures as any[]).map((step, i) => formatStep(step, i)),
          '',
        ]),
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
        ...Object.entries(afterEachGroups).flatMap(([caseTitle, failures]) => [
          `📄 Case: ${caseTitle}`,
          ...(failures as any[]).map((step, i) => formatStep(step, i)),
          '',
        ]),
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

<<<<<<< HEAD
const wsReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  failedStep: any[],
  passedTests: number,
  failedTests: any[],
  totalTests: number,
) => {
  const wsErrors = failedStep.filter(
    (step) => !step.status && step.type === 'ws',
  );
  const logicErrors = failedStep.filter(
    (step) => !step.status && (step.type === 'logic' || step.type === ''),
  );

  return [
    `=== WebSocket Test Report For ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      let resultMessage = '';

      if (step.result) {
        if (typeof step.result === 'object' && step.result !== null && ('wsActor' in step.result || 'wsRecipient' in step.result)) {
          const wsResult = step.result;
          const actorErrors = wsResult.wsActor?.errors || [];
          const recipientErrors = wsResult.wsRecipient?.errors || [];
          resultMessage = [
            actorErrors.length > 0
              ? `wsActor: ${wsResult.wsActor.success ? 'Passed' : 'Failed'}, Fit: ${wsResult.wsActor.matched}/${wsResult.wsActor.total}`
              : '',
            recipientErrors.length > 0
              ? `wsRecipient: ${wsResult.wsRecipient.success ? 'Passed' : 'Failed'}, Fit: ${wsResult.wsRecipient.matched}/${wsResult.wsRecipient.total}`
              : '',
          ]
            .filter(Boolean)
            .join('\n     ├─ ');
        } else if (typeof step.result === 'string') {
          try {
            const resultObj = JSON.parse(step.result);
            resultMessage = resultObj.message || step.result;
          } catch {
            resultMessage = step.result;
          }
        } else {
          resultMessage = JSON.stringify(step.result);
        }
      }

      return `  ${index + 1}. [${step.status ? '✅ Passed' : '❌ Failed'}] ${step.stepName}${resultMessage ? `\n     └─ ${resultMessage}` : ''}`;
    }),
    '',
    '=== Test Summary ===',
    `✅ Passed: ${passedTests}`,
    `❌ Failed: ${failedTests.length}`,
    `📊 Total: ${totalTests}`,
    '',
    '=== Error Details ===',
    '[WebSocket Errors]',
    ...wsErrors.flatMap((error, index) => {
      const wsResult = error.result;
      const actorErrors = wsResult?.wsActor?.errors || [];
      const recipientErrors = wsResult?.wsRecipient?.errors || [];
      const allErrors = [...actorErrors, ...recipientErrors];

      return allErrors.length > 0
        ? allErrors.map((err, errIndex) => [
            '',
            ` 🟣 ${index + 1}.${errIndex + 1}. Step: ${error.stepName}`,
            `     ├─ Type: ws`,
            `     ├─ Event Index: ${err.eventIndex}`,
            `     ├─ Event Type: ${err.event?.type || 'N/A'}`,
            `     ├─ Errors:`,
            ...err.errors.map((validationError, vIndex) => 
              `     │  ${vIndex + 1}. Path: ${validationError.path || 'N/A'}, Expected: ${validationError.expected || 'N/A'}, Actual: ${validationError.actual || 'N/A'}, Message: ${validationError.message || 'N/A'}`
            ),
            `     └─ Source: ${err.event?.source || 'N/A'}`,
          ].join('\n'))
        : [
            '',
            ` 🟣 ${index + 1}. Step: ${error.stepName}`,
            `     ├─ Type: ws`,
            `     └─ Result: ${typeof error.result === 'string' ? error.result : JSON.stringify(error.result)}`,
          ];
    }),
    '',
    '[Logic Errors]',
    ...logicErrors.map((error, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Step: ${error.stepName}`,
        `     ├─ Type: ${error.type || 'N/A'}`,
        `     └─ Result: ${typeof error.result === 'string' ? error.result : JSON.stringify(error.result)}`,
      ].join('\n'),
    ),
    '',
    '=== End Report ===',
  ].join('\n');
};
=======
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

function formatGroupedPath(path: string, items: ErrorItem[], errorType: string): string {
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
        `                  - ExpectedValue: ${JSON.stringify(item.expectedValue)}`
      );
    }
  }

  return lines.join('\n');
}
function formatErrorDetails(error: Record<string, Entry[]>): string {
  return Object.entries(error).map(([errorType, entries]) => {
      if (!Array.isArray(entries)) return '';

      const groupedByPath = groupEntriesByPath(entries);

      const formattedGroups = Object.entries(groupedByPath)
        .map(([path, items]) => formatGroupedPath(path, items, errorType));

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
>>>>>>> main
