export function mapOption(vus, executor, stages, thresholds, gracefulRampDown) {
    return `export const options = {
                scenarios: {
                  load_test: {
                    executor: ${String(executor)},
                    vus: ${vus},
                    iterations: 1,
                    gracefulRampDown: ${gracefulRampDown}
                  }
                },
                thresholds: ${thresholds ? thresholds : `{
                  'http_req_duration': ['p(95)<500'],
                  'passed_tests': ['count>=1'],
                  'failed_tests': ['count<2']
                }`},
                discardResponseBodies: false
              };
            `;
}