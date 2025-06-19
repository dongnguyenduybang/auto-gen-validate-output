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

    case 'ws':
      return wsReportTemplate(className, url, pathRequest, failedStep);

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
    console.log(JSON.stringify(groups, null, 2));
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

export const wsReportTemplate = (
  className: string,
  url: string,
  pathRequest: string,
  steps: any[],
) => {
  // ASCII Art Decorations
  const borderTop = (text: string) => {
    const line = '═'.repeat(text.length + 4);
    return `╔${line}╗\n║  ${text}  ║\n╚${line}╝\n`;
  };

  const sectionHeader = (text: string) => {
    const line = '─'.repeat(text.length + 4);
    return `\n┌${line}┐\n│  ${text}  │\n└${line}┘\n`;
  };

  const subsectionHeader = (text: string) => {
    return `\n▶ ${text}\n${'─'.repeat(text.length + 2)}\n`;
  };

  const divider = () => {
    return `\n${'▬'.repeat(60)}\n`;
  };

  const roundHeader = (round: number) => {
    return `\n🔁 RESUME ROUND ${round}\n${'~'.repeat(15)}\n`;
  };

  let report = borderTop('📊 WS TEST REPORT');
  report += `• Class    : ${className}\n`;
  report += `• URL      : ${url}\n`;
  report += `• Path     : ${pathRequest}\n`;
  report += `• Generated: ${new Date().toISOString()}\n`;

  // Process event steps
  const eventSteps = steps.filter((step) => step.phase === 'events');

  if (eventSteps.length > 0) {
    report += sectionHeader('EVENT TEST RESULTS');

    eventSteps.forEach((step, stepIndex) => {
      report += subsectionHeader(`STEP ${stepIndex + 1}: ${step.caseTitle}`);

      step.result.forEach((actionResult: any) => {
        report += `\n⚡ Action : ${actionResult.stepAction}\n`;
        report += `👥 Authors: ${actionResult.author.join(', ')}\n`;

        // Actor Results
        report += `\nACTOR RESULTS:\n`;
        report += `  ✔ Total Events: ${actionResult.actorResults.totalEvents}\n`;
        report += `  ✔ Passed     : ${actionResult.actorResults.passedEvents}\n`;
        report += `  ✖ Failed     : ${actionResult.actorResults.failedEvents}\n`;

        if (actionResult.actorResults.failedEvents > 0) {
          report += `\n  ❗ FAILED ACTOR EVENTS:\n`;
          actionResult.actorResults.events.forEach((event: any) => {
            if (!event.isPassed) {
              report += `\n  ▸ Event ${event.eventIndex + 1}: ${event.eventType}\n`;
              report += `    Author: ${event.eventAuthor}\n`;

              if (event.specversionResult && !event.specversionResult.isEqual) {
                report += `    [!] Specversion Differences:\n`;
                event.specversionResult.allDifferences.forEach(
                  (diff: string) => {
                    report += `      ‣ ${diff}\n`;
                  },
                );
              }

              if (event.versionResult && !event.versionResult.isEqual) {
                report += `    [!] Version Differences:\n`;
                event.versionResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.typeResult && !event.typeResult.isEqual) {
                report += `    [!] Type Differences:\n`;
                event.typeResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.sourceResult && !event.sourceResult.isEqual) {
                report += `    [!] Source Differences:\n`;
                event.sourceResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.dataResult && !event.dataResult.isEqual) {
                report += `    [!] Data Differences:\n`;
                event.dataResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }
            }
          });
        }

        // Recipient Results
        report += `\nRECIPIENT RESULTS:\n`;
        report += `  ✔ Total Events: ${actionResult.recipientResults.totalEvents}\n`;
        report += `  ✔ Passed     : ${actionResult.recipientResults.passedEvents}\n`;
        report += `  ✖ Failed     : ${actionResult.recipientResults.failedEvents}\n`;

        if (actionResult.recipientResults.failedEvents > 0) {
          report += `\n  ❗ FAILED RECIPIENT EVENTS:\n`;
          actionResult.recipientResults.events.forEach((event: any) => {
            if (!event.isPassed) {
              report += `\n  ▸ Event ${event.eventIndex + 1}: ${event.eventType}\n`;
              report += `    Author: ${event.eventAuthor}\n`;

              if (event.specversionResult && !event.specversionResult.isEqual) {
                report += `    [!] Specversion Differences:\n`;
                event.specversionResult.allDifferences.forEach(
                  (diff: string) => {
                    report += `      ‣ ${diff}\n`;
                  },
                );
              }

              if (event.versionResult && !event.versionResult.isEqual) {
                report += `    [!] Version Differences:\n`;
                event.versionResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.typeResult && !event.typeResult.isEqual) {
                report += `    [!] Type Differences:\n`;
                event.typeResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.sourceResult && !event.sourceResult.isEqual) {
                report += `    [!] Source Differences:\n`;
                event.sourceResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.dataResult && !event.dataResult.isEqual) {
                report += `    [!] Data Differences:\n`;
                event.dataResult.allDifferences.forEach((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }
            }
          });
        }

        report += divider();
      });
    });
  }

  const resumeSteps = steps.filter((step) => step.phase === 'resume');
  if (resumeSteps.length > 0) {
    report += sectionHeader('RESUME TEST RESULTS');

    resumeSteps.forEach((resumeStep, stepIndex) => {
      const caseTitle = resumeStep.caseTitle || `Resume Step ${stepIndex + 1}`;
      report += subsectionHeader(`STEP ${stepIndex + 1}: ${caseTitle}`);

      if (!resumeStep.result) {
        report += 'No resume results found\n';
        report += divider();
        return;
      }

      // Xử lý từng phần actorResults và recipientResults riêng biệt
      if (resumeStep.result.actorResults) {
        const actorResume = resumeStep.result.actorResults;
        report += `\nACTOR RESUME RESULTS:\n`;
        report += `  ✔ Total Events  : ${actorResume.totalEventsResume || 0}\n`;
        report += `  ✔ Passed        : ${actorResume.passedEventsResume || 0}\n`;
        report += `  ✖ Failed        : ${actorResume.failedEventsResume || 0}\n`;
        report += `  ✔ Order Valid   : ${actorResume.orderEventsResume ? 'Yes' : 'No'}\n`;
        report += `  ❗Missing Events: ${actorResume.missingEventsResume?.join(', ') || 'None'}\n`;
        report += `  ❗Extra Events  : ${actorResume.extraEventsResume?.join(', ') || 'None'}\n`;
        report += `  ❗Duplicates    : ${actorResume.duplicateEventsResume?.join(', ') || 'None'}\n`;
        // Xử lý events theo round
        const actorRounds: Record<number, any[]> = {};
        if (actorResume.events && Array.isArray(actorResume.events)) {
          actorResume.events.forEach((event: any) => {
            if (!event) return;
            const round = event.resumeRound || 0;
            if (!actorRounds[round]) actorRounds[round] = [];
            actorRounds[round].push(event);
          });
        }

        // Hiển thị events theo round
        Object.entries(actorRounds).forEach(([roundNum, events]) => {
          report += roundHeader(Number(roundNum));
          events.forEach((event) => {
            const status = event.isPassed ? '✔' : '✖';
            report += `\n  ${status} Event ${event.eventIndex}: ${event.eventType}\n`;
            report += `    Author: ${event.eventAuthor || 'Actor'}\n`;

            if (!event.isPassed) {
              if (event.sourceResult && !event.sourceResult.isEqual) {
                report += `    [!] Source Differences:\n`;
                event.sourceResult.allDifferences?.forEach?.((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.dataResult && !event.dataResult.isEqual) {
                report += `    [!] Data Differences:\n`;
                event.dataResult.allDifferences?.forEach?.((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }
            }
          });
        });
      }

      if (resumeStep.result.recipientResults) {
        const recipientResume = resumeStep.result.recipientResults;
        report += `\nRECIPIENT RESUME RESULTS:\n`;
        report += `  ✔ Total Events  : ${recipientResume.totalEventsResume || 0}\n`;
        report += `  ✔ Passed        : ${recipientResume.passedEventsResume || 0}\n`;
        report += `  ✖ Failed        : ${recipientResume.failedEventsResume || 0}\n`;
        report += `  ✔ Order Valid   : ${recipientResume.orderEventsResume ? 'Yes' : 'No'}\n`;
        report += `  ❗Missing Events: ${recipientResume.missingEventsResume?.join(', ') || 'None'}\n`;
        report += `  ❗Extra Events  : ${recipientResume.extraEventsResume?.join(', ') || 'None'}\n`;
        report += `  ❗Duplicates    : ${recipientResume.duplicateEventsResume?.join(', ') || 'None'}\n`;
        // Xử lý events theo round
        const recipientRounds: Record<number, any[]> = {};
        if (recipientResume.events && Array.isArray(recipientResume.events)) {
          recipientResume.events.forEach((event: any) => {
            if (!event) return;
            const round = event.resumeRound || 0;
            if (!recipientRounds[round]) recipientRounds[round] = [];
            recipientRounds[round].push(event);
          });
        }

        // Hiển thị events theo round
        Object.entries(recipientRounds).forEach(([roundNum, events]) => {
          report += roundHeader(Number(roundNum));
          events.forEach((event) => {
            const status = event.isPassed ? '✔' : '✖';
            report += `\n  ${status} Event ${event.eventIndex}: ${event.eventType}\n`;
            report += `    Author: ${event.eventAuthor || 'Recipient'}\n`;

            if (!event.isPassed) {
              if (event.sourceResult && !event.sourceResult.isEqual) {
                report += `    [!] Source Differences:\n`;
                event.sourceResult.allDifferences?.forEach?.((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }

              if (event.dataResult && !event.dataResult.isEqual) {
                report += `    [!] Data Differences:\n`;
                event.dataResult.allDifferences?.forEach?.((diff: string) => {
                  report += `      ‣ ${diff}\n`;
                });
              }
            }
          });
        });
      }

      report += divider();
    });
  }

  // Add summary at the end

  report += borderTop('END OF REPORT');

  return report;
};

function formatStepReport(
  step: any,
  stepNumber: number,
  prefix: string,
): string {
  let stepReport = `\n[${prefix} ${stepNumber}] ${step.caseTitle || 'Unknown'}\n`;

  // Step basic info
  if (step.stepIndex !== undefined) {
    stepReport += `Step Index: ${step.stepIndex}\n`;
  }

  // Status
  const status = step.hasError ? 'FAILED' : 'PASSED';
  stepReport += `Status: ${status}\n`;

  // Result details
  if (step.result) {
    // Action/Title
    if (step.result.title || step.result.action) {
      stepReport += `Action: ${step.result.title || step.result.action}\n`;
    }

    // Request/Response info
    if (step.result.request) {
      stepReport += `Request: ${JSON.stringify(step.result.request, null, 2)}\n`;
    }

    if (step.result.response) {
      stepReport += `Response: ${JSON.stringify(step.result.response, null, 2)}\n`;
    }

    // WebSocket specific info
    if (step.result.wsMessage) {
      stepReport += `WS Message: ${JSON.stringify(step.result.wsMessage, null, 2)}\n`;
    }

    if (step.result.wsEvents) {
      stepReport += `WS Events: ${JSON.stringify(step.result.wsEvents, null, 2)}\n`;
    }

    // Validation info
    if (step.result.validation) {
      stepReport += `Validation: ${step.result.validation.isValid ? 'PASSED' : 'FAILED'}\n`;

      if (!step.result.validation.isValid && step.result.validation.errors) {
        stepReport += `Validation Errors:\n`;
        step.result.validation.errors.forEach((error: any, i: number) => {
          stepReport += `  ${i + 1}. ${error.message}\n`;
          if (error.expected) {
            stepReport += `     - Expected: ${Array.isArray(error.expected) ? error.expected.join(', ') : error.expected}\n`;
          }
          if (error.received) {
            stepReport += `     - Received: ${Array.isArray(error.received) ? error.received.join(', ') : error.received}\n`;
          }
          if (error.path) {
            stepReport += `     - Path: ${error.path}\n`;
          }
        });
      }
    }

    // Timing info
    if (step.result.duration) {
      stepReport += `Duration: ${step.result.duration}ms\n`;
    }

    if (step.result.timestamp) {
      stepReport += `Timestamp: ${step.result.timestamp}\n`;
    }

    // Error info
    if (step.result.error) {
      stepReport += `Error: ${step.result.error}\n`;
    }

    // Success info
    if (step.result.success !== undefined) {
      stepReport += `Success: ${step.result.success}\n`;
    }
  }

  stepReport += `${'-'.repeat(40)}\n`;
  return stepReport;
}

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
