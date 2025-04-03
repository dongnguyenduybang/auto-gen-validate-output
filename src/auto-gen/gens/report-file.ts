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
  responseValidations?: any[]
) => {
  // Set default values
  className = className || 'Unknown Class';
  url = url || 'N/A';
  pathRequest = pathRequest || 'N/A';
  failedStep = failedStep || [];
  passedTests = passedTests || 0;
  failedTests = failedTests || [];
  totalTests = totalTests || 0;
  logicTests = logicTests || [];
  summary = summary || { statusCodes: {} };
  type = type
  responseValidations = responseValidations || [];

  switch (type) {
    case 'request':
      return requestReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        summary
      );
    
      case 'response':
        return responseReportTemplate(
          className,
          url,
          pathRequest,
          passedTests,
          failedTests,
          totalTests,
          summary,
          responseValidations
        );
    
    case 'saga':
      return sagaReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        passedTests,
        failedTests,
        totalTests,
        logicTests,
        summary
      );
    
    default:
      return requestReportTemplate(
        className,
        url,
        pathRequest,
        failedStep,
        summary
      );
  }
};
const requestReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  failedStep: any[],
  summary: any
) => {
  return [
    `=== Request Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      const errorDetails = step.error ? 
        `\n     └─ ${step.error.split('\n').join('\n       ')}` : '';
      return `  ${index + 1}. [${step.success ? '✓ PASSED' : '✗ FAILED'}] ${step.stepName}${errorDetails}`;
    }),
    '',
    '=== System Metrics ===',
    '▧ Status Code Distribution:',
    `  200: ${summary.statusCodes[200] || 0}`,
    `  201: ${summary.statusCodes[201] || 0}`,
    `  400: ${summary.statusCodes[400] || 0}`,
    `  403: ${summary.statusCodes[403] || 0}`,
    `  404: ${summary.statusCodes[404] || 0}`,
    `  500: ${summary.statusCodes[500] || 0}`,
    '',
    '=== End of Report ==='
  ].join('\n');
};

// Template cho type 'response'
const responseReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  passedTests: number,
  failedTests: any[],
  totalTests: number,
  summary: any,
  responseValidations: any[]
) => {
  const successfulTests = responseValidations.filter(r => !r.error);
  
  return [
    `=== Response Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Test Summary ===',
    `✅ Passed: ${passedTests}`,
    `❌ Failed: ${failedTests.length}`,
    `📊 Total: ${totalTests}`,
    '',
    '=== Performance Metrics ===',
    `⏱ Average Response Time: ${summary.performance?.averageResponseTime?.toFixed(2) || 'N/A'}ms`,
    `⚡ Fastest: ${summary.performance?.minResponseTime?.toFixed(2) || 'N/A'}ms`,
    `🐢 Slowest: ${summary.performance?.maxResponseTime?.toFixed(2) || 'N/A'}ms`,
    `🚀 Throughput: ${summary.performance?.throughput?.toFixed(2) || 'N/A'} req/sec`,
    '',
    '=== Status Code Distribution ===',
    `🟢 200: ${summary.statusCodes[200] || 0}`,
    `🔵 201: ${summary.statusCodes[201] || 0}`,
    `🟠 400: ${summary.statusCodes[400] || 0}`,
    `🔴 500: ${summary.statusCodes[500] || 0}`,
    '',
    '=== Error Details ===',
    ...failedTests.map((test, index) => [
      '',
      `🔴 Case #${test.testcase}`,
      `   ├─ Status: ${test.performance?.statusCode || 'N/A'}`,
      `   ├─ Response Time: ${test.performance?.responseTime?.toFixed(2) || 'N/A'}ms`,
      `   ├─ Error: ${test.error || 'No details'}`,
      ...(test.expected ? [`   ├─ Expected: ${JSON.stringify(test.expected, null, 2).split('\n').join('\n      ')}`] : []),
      ...(test.actual ? [`   └─ Actual: ${JSON.stringify(test.actual, null, 2).split('\n').join('\n      ')}`] : [])
    ].join('\n')),
    '',
    '=== Performance Samples ===',
    `Sample response times (ms):`,
    `  ${successfulTests.slice(0, 10).map(t => t.performance?.responseTime?.toFixed(2)).join(', ')}${successfulTests.length > 10 ? '...' : ''}`,
    '',
    '=== End of Report ==='
  ].join('\n');
};

// Template cho type 'saga'
const sagaReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  failedStep: any[],
  passedTests: number,
  failedTests: any[],
  totalTests: number,
  logicTests: any[],
  summary: any
) => {
  return [
    `=== Saga Test Report for ${className} ===`,
    `• Host: ${url}`,
    `• Endpoint: ${pathRequest}`,
    `• Date: ${new Date().toLocaleString()}`,
    '',
    '=== Execution Steps ===',
    ...failedStep.map((step, index) => {
      const errorDetails = step.error ? 
        `\n     └─ ${step.error.split('\n').join('\n       ')}` : '';
      return `  ${index + 1}. [${step.success ? '✓ PASSED' : '✗ FAILED'}] ${step.stepName}${errorDetails}`;
    }),
    '',
    '=== Validation Metrics ===',
    '■ DTO Validation:',
    `  ✔ Passed: ${passedTests}`,
    `  ✖ Failed: ${failedTests.length}`,
    `  ◼ Total: ${totalTests}`,
    '',
    '■ Logic:',
    `  ✔ Passed: ${logicTests.filter(t => !t.errorLogic).length}`,
    `  ✖ Failed: ${logicTests.filter(t => t.errorLogic).length}`,
    `  ◼ Total: ${logicTests.length}`,
    '',
    '=== Error Details ===',
    '[DTO Validation Issues]',
    ...failedTests.map((test, index) => [
      '',
      `  ${index + 1}. Case #${test.testcase}`,
      `     ├─ Status: ${test.code || 'N/A'}`,
      `     ├─ Missing: ${test.missing?.join(', ') || 'None'}`,
      `     ├─ Extra: ${test.extra?.join(', ') || 'None'}`,
      `     └─ Details: ${test.errorDetails || 'No details'}`
    ].join('\n')),
    '',
    '[Logic Validation Issues]',
    ...logicTests.filter(t => t.errorLogic).map((test, index) => [
      '',
      `  ${index + 1}. Case #${test.testcase}`,
      `     └─ Message: ${test.errorLogic}`
    ].join('\n')),
    '',
    '=== System Metrics ===',
    '▧ Status Code Distribution:',
    `  200: ${summary.statusCodes[200] || 0}`,
    `  201: ${summary.statusCodes[201] || 0}`,
    `  400: ${summary.statusCodes[400] || 0}`,
    `  403: ${summary.statusCodes[403] || 0}`,
    `  404: ${summary.statusCodes[404] || 0}`,
    `  500: ${summary.statusCodes[500] || 0}`,
    '',
    '=== End of Report ==='
  ].join('\n');
};