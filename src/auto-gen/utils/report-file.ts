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
  responseValidations?: any[],
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
  type = type || 'request';
  responseValidations = responseValidations || [];

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
        responseValidations,
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
  responseValidations: any[],
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
  failedStep: any[],
) => {
  const requestErrors = failedStep.filter(
    (step) => !step.status && step.type === 'request',
  );
  const responseErrors = failedStep.filter(
    (step) => !step.status && step.type === 'response',
  );
  const logicErrors = failedStep.filter(
    (step) => !step.status && (step.type === 'logic' || step.type === ''),
  );
  return [
    `=== Saga Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Sagas: ${sagaName}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
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
    '',
    '=== Error Details ===',
    '[Request Errors]',
    ...requestErrors.map((error, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Step: ${error.stepName}`,
        `     ├─ Type: ${error.type || 'N/A'}`,
        `     └─ Error: ${typeof error.error === 'string' ? error.error : JSON.stringify(error.error)}`,
      ].join('\n'),
    ),
    '',
    '[Response Errors]',
    ...responseErrors.map((error, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Step: ${error.stepName}`,
        `     ├─ Type: ${error.type || 'N/A'}`,
        `     └─ Error: ${typeof error.error === 'string' ? error.error : JSON.stringify(error.error)}`,
      ].join('\n'),
    ),
    '',
    '[Logic Errors]',
    ...logicErrors.map((error, index) =>
      [
        '',
        ` 🟣 ${index + 1}. Step: ${error.stepName}`,
        `     ├─ Type: ${error.type || 'N/A'}`,
        `     └─ Error: ${typeof error.error === 'string' ? error.error : JSON.stringify(error.error)}`,
      ].join('\n'),
    ),
    '',
    '=== End of Report ===',
  ].join('\n');
};

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