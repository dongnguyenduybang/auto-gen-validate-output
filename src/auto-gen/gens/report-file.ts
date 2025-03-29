// report-template.ts
export const combinedReportTemplate = (
    className: string,
    url: string,
    pathRequest: string,
    failedStep: any[],
    passedTests: number,
    failedTests: any[],
    totalTests: number,
    logicTests: any[],
    summary: any
  ) => `
  === Test Report for ${className} ===
  • Host: ${url}
  • Endpoint: ${pathRequest}
  • Date: ${new Date().toLocaleString()}
  
  === Execution Steps ===
  ${failedStep.map((step, index) => {
    const errorDetails = step.error ? 
    `\n     └─ ${step.error.split('\n').join('\n       ')}` : '';
    return `  ${index + 1}. [${step.success ? '✓ PASSED' : '✗ FAILED'}] ${step.stepName}${errorDetails}`;
  }).join('\n')}
  
  === Validation Metrics ===
  ■ DTO Validation:
    ✔ Passed: ${passedTests}
    ✖ Failed: ${failedTests.length}
    ◼ Total: ${totalTests}
  
  ■ Logic:
    ✔ Passed: ${logicTests.filter(t => !t.errorLogic).length}
    ✖ Failed: ${logicTests.filter(t => t.errorLogic).length}
    ◼ Total: ${logicTests.length}
  
  === Error Details ===
  [DTO Validation Issues]
  ${failedTests.map((test, index) => `
    ${index + 1}. Case #${test.testcase}
       ├─ Status: ${test.code || 'N/A'}
       ├─ Missing: ${test.missing?.join(', ') || 'None'}
       ├─ Extra: ${test.extra?.join(', ') || 'None'}
       └─ Details: ${test.errorDetails || 'No details'}`).join('\n')}
  
  [Logic Validation Issues]
  ${logicTests.map((test, index) => `
    ${index + 1}. Case #${test.testcase}
       └─ Message: ${test.errorLogic || ''}`).join('\n')}
  
  === System Metrics ===
  ▧ Status Code Distribution:
    200: ${summary.statusCodes[200] || 0}
    201: ${summary.statusCodes[201] || 0}
    400: ${summary.statusCodes[400] || 0}
    403: ${summary.statusCodes[403] || 0}
    404: ${summary.statusCodes[404] || 0}
    500: ${summary.statusCodes[500] || 0}
  
  ▧ Unique Error Patterns:
  
  === End of Report ===
  `;