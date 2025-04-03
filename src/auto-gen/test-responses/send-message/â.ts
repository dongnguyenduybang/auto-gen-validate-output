import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { getTime } from '../../helps/utils';
import { TestContext } from '../../test-execute-step/text-context';
import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
import { SendMessageResponse } from '../../response/send-message.response';
import { plainToClass } from 'class-transformer';
import { validateResponses } from '../../validates/validate-response';

interface PerformanceMetrics {
  responseTime: number;
  statusCode: number;
  responseSize: number;
}

interface TestCaseResult {
  testcase: number;
  error?: string;
  expected?: any;
  actual?: any;
  performance?: PerformanceMetrics;
}

describe('Test response for send-message', () => {
  const config = {
    warmupRequests: 5,    // Reduced warmup for faster testing
    testRequests: 100,      // Reduced number of test requests
    requestTimeout: 10000, // Timeout per request (10s)
    testTimeout: 30000    // Overall test timeout (30s)
  };

  let testResults: TestCaseResult[] = [];
  let passedTests = 0;
  let testNumber = 0;
  let totalTests = 0;
  let pathRequest: string;
  let payloadResponse: any;
  let globalContext: TestContext;
  let resolvedHeader: any;

  beforeAll(async () => {
    globalContext = new TestContext();
    await executeAllSteps([
      {"action": "mockUser"},
      {"action": "createChannel"}
    ], globalContext);

    const headerRequest = {
      "Content-Type": "application/json",
      "x-session-token": "{{token}}",
      "x-country-code": "VN"
    };
    resolvedHeader = resolveVariables(headerRequest, globalContext);
    pathRequest = "/Message/SendMessage";
    payloadResponse = resolveVariables({
      "workspaceId": "0",
      "channelId": "{{channelId}}",
      "content": "test123123",
      "ref": "ref"
    }, globalContext);
  }, config.testTimeout);

  const measureRequest = async (payload: any) => {
    const startTime = process.hrtime();
    try {
      const response = await axios.post(
        `${globalThis.url}${pathRequest}`,
        payload,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true,
          timeout: config.requestTimeout
        }
      );
      
      const [seconds, nanoseconds] = process.hrtime(startTime);
      const responseTime = seconds * 1000 + nanoseconds / 1e6;
      
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
        responseTime,
        responseSize: JSON.stringify(response.data).length
      };
    } catch (error) {
      const [seconds, nanoseconds] = process.hrtime(startTime);
      return {
        success: false,
        error: error.message,
        responseTime: seconds * 1000 + nanoseconds / 1e6
      };
    }
  };

  it('should validate response structure and performance', async () => {
    // Parallel warmup requests
    const warmupPromises = Array(config.warmupRequests).fill(0).map(() => 
      measureRequest(payloadResponse)
    );
    await Promise.all(warmupPromises);

    // Execute test requests
    const testPromises = Array(config.testRequests).fill(0).map(async (_, i) => {
      testNumber++;
      totalTests++;
      
      const result = await measureRequest(payloadResponse);
      const testResult: TestCaseResult = {
        testcase: testNumber,
        performance: {
          responseTime: result.responseTime,
          statusCode: result.statusCode || 0,
          responseSize: result.responseSize || 0
        }
      };

      if (result.success) {
        const instance = plainToClass(SendMessageResponse, result.data);
        const validationErrors = validateResponses(payloadResponse, instance);
        
        if (validationErrors.length > 0) {
          testResult.error = validationErrors.join(', ');
          testResult.expected = payloadResponse;
          testResult.actual = result.data;
        } else {
          passedTests++;
        }
      } else {
        testResult.error = result.error;
      }

      testResults.push(testResult);
    });

    await Promise.all(testPromises);
  }, config.testTimeout);

// First, update your test file to prepare all data for the report
afterAll(async () => {
  const folderPath = path.join(__dirname, '../reports/send-message');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Calculate performance metrics
  const successfulTests = testResults.filter(r => !r.error);
  const failedTests = testResults.filter(r => r.error);
  
  const responseTimes = successfulTests.map(t => t.performance?.responseTime || 0);
  const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length || 0;
  const minResponseTime = Math.min(...responseTimes);
  const maxResponseTime = Math.max(...responseTimes);

  // Prepare summary data
  const summary = {
    statusCodes: {
      200: successfulTests.filter(t => t.performance?.statusCode === 200).length,
      // Add other status codes as needed
    },
    performance: {
      averageResponseTime: avgResponseTime,
      minResponseTime,
      maxResponseTime,
      throughput: (config.testRequests / (avgResponseTime * config.testRequests / 1000)),
      totalRequests: totalTests
    }
  };

  const classNames = `send-message`;
  const reportFileName = `send-message-response-${getTime()}.report.txt`;
  
  // Generate report content using combinedReportTemplate
  const reportContent = combinedReportTemplate(
    classNames,
    globalThis.url,
    pathRequest,
    null,             // failedStep (not used for response tests)
    passedTests,      // passedTests
    failedTests,      // failedTests
    totalTests,       // totalTests
    null,             // logicTests (not used for response tests)
    summary,          // summary with performance data
    'response',       // test type
    testResults       // responseValidations (all test results)
  );

  const reportPath = path.join(folderPath, reportFileName);
  fs.writeFileSync(reportPath, reportContent, 'utf-8');
  console.log(`📄 Comprehensive test report generated: ${reportPath}`);
}, config.testTimeout);
});