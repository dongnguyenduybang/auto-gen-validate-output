// Template cho type 'request'
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
  logicTests,
  summary,
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

// Template cho type 'saga'
// const sagaReportTemplate = (
//   className: string,
//   url: string,
//   sagaName: string,
//   failedStep: any[],
// ) => {
//   const requestErrors = failedStep.filter(
//     (step) => !step.status && step.type === 'request',
//   );
//   const responseErrors = failedStep.filter(
//     (step) => !step.status && step.type === 'response',
//   );
//   const logicErrors = failedStep.filter(
//     (step) => !step.status && (step.type === 'saga' || step.type === ''),
//   );
//   return [
//     `=== Saga Test Report for ${className} ===`,
//     `• Host: ${url}`,
//     `• Sagas: ${sagaName}`,
//     `• Date: ${new Date().toLocaleString()}`,
//     '',
//     '=== Execution Steps ===',
//     ...failedStep.map((step, index) => {
//       let errorMessage = '';

//       if (step.error) {
//         // Kiểm tra nếu step.error là một mảng
//         if (Array.isArray(step.error)) {
//           // Duyệt qua từng lỗi và tạo chuỗi thông báo lỗi
//           errorMessage = step.error
//             .map((err) => {
//               const path = err.path || 'unknown path';
//               return `Path: ${path}`;
//             })
//             .join('\n     └─ '); // Kết hợp các lỗi bằng dấu xuống dòng và ký tự "└─"
//         }
//         // Trường hợp step.error là một đối tượng đơn lẻ
//         else if (typeof step.error === 'object' && step.error !== null) {
//           errorMessage = step.error.message || 'No error message available';
//         }
//         // Trường hợp step.error là một chuỗi
//         else if (typeof step.error === 'string') {
//           try {
//             const errorObj = JSON.parse(step.error);
//             errorMessage = errorObj.message || step.error;
//           } catch {
//             errorMessage = step.error;
//           }
//         }
//       }

//       return `  ${index + 1}. [${step.status ? '✅ PASSED' : '❌ FAILED'}] ${step.stepName}${errorMessage ? `\n     └─ ${errorMessage}` : ''}`;
//     }),
//     '',
//     '=== Error Details ===',
//     '[Request Errors]',
//     ...requestErrors.map((error, index) =>
//       [
//         '',
//         ` 🟣 ${index + 1}. Step: ${error.stepName}`,
//         `     ├─ Type: ${error.type || 'N/A'}`,
//         `     └─ Error: ${typeof error.error === 'string' ? error.error : JSON.stringify(error.error)}`,
//       ].join('\n'),
//     ),
//     '',
//     '[Response Errors]',
//     ...responseErrors.map((error, index) =>
//       [
//         '',
//         ` 🟣 ${index + 1}. Step: ${error.stepName}`,
//         `     ├─ Type: ${error.type || 'N/A'}`,
//         `     └─ Error: ${typeof error.error === 'string' ? error.error : JSON.stringify(error.error)}`,
//       ].join('\n'),
//     ),
//     '',
//     '[Logic Errors]',
//     ...logicErrors.map((error, index) => [
//       '',
//       ` 🟣 ${index + 1}. Step: ${error.stepName}`,
//       `    ├─ Type: ${error.type || 'N/A'}`,
//       `    └─ Error:`,
//       formatError(error.error)
//     ].join('\n')),
//     '',
//     '=== End of Report ===',
//   ].join('\n');
// };

const sagaReportTemplate = (
  className: string,
  url: string,
  sagaName: string,
  failedSteps: any[],
) => {
  //sort phase
  const beforeAllFailures = failedSteps.filter((s) => s.phase === 'beforeAll');
  const testCaseFailures = failedSteps.filter((s) => s.phase === 'testCase');
  const afterAllFailures = failedSteps.filter((s) => s.phase === 'afterAll');

  //group test case by caseTitle
  const testCaseGroups = testCaseFailures.reduce((groups, failure) => {
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
    '=== BeforeAll Failures ===',
    ...(beforeAllFailures.length > 0
      ? beforeAllFailures.map((step, i) => formatStep(step, i))
      : ['✅ All beforeAll steps passed']),
    '',
    '=== Test Case ===',
    ...(Object.keys(testCaseGroups).length > 0
      ? Object.entries(testCaseGroups).flatMap(([caseTitle, failures]) => [
          `Test Case: ${caseTitle}`,
          ...(failures as any[]).map((step, i) => formatStep(step, i)),
          '',
        ])
      : ['✅ All test cases passed']),
    '',
    '=== AfterAll Failures ===',
    ...(afterAllFailures.length > 0
      ? afterAllFailures.map((step, i) => formatStep(step, i))
      : ['✅ All afterAll steps passed']),
    '',
    '=== End of Report ===',
  ].join('\n');
};

// format từng step
const formatStep = (step: any, index: number) => {
  const stepInfo = [
    `${index + 1}. ${step.stepName}`,
    `   • Type: ${step.type || 'saga'}`,
  ];
  if (step.status) {
    stepInfo.push(`   • Status: passed`);
  } else {
    stepInfo.push(`   • Error: ${formatError(step.error)}`);
  }
  return stepInfo.join('\n');
};
const formatError = (error: any) => {
  if (Array.isArray(error)) {
    return error
      .map((err) => {
        const path = err.path || 'unknown path';
        const expected = err.expected || 'No expected value';
        const actual = err.actual || 'No actual value';
        const message = err.message || 'Validation failed';

        return [
          `    ├─ Path: ${path}`,
          `    ├─ Expected: ${expected}`,
          `    ├─ Actual: ${actual}`,
          `    └─ Message: ${message}`,
        ].join('\n');
      })
      .join('\n');
  }

  if (typeof error === 'object' && error !== null) {
    return JSON.stringify(error, null, 2)
      .split('\n')
      .map((line, i) => (i === 0 ? line : `    ${line}`))
      .join('\n');
  }

  return error;
};
