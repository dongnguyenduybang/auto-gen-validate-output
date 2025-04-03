
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { TestContext } from '../../test-execute-step/text-context';
import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
import { Mutex } from 'async-mutex';

describe('Performance Test for send-message', () => {
  const config = {
    warmupRequests: 0,
    testRequests: 20,
    virtualUsers: 5,
    requestTimeout: 1000,
    testTimeout: 10000
  };
  const joinMutex = new Mutex();
  let globalContexts: TestContext[] = [];
  let resolvedHeaders: any[] = [];
  let pathRequest: string;
  let ctx
  let headerRequest;

  const generateRandomPayload = () => {
    const basePayload = {
      "workspaceId": "0",
      "channelId": "{{channelId}}",
      "content": "test123123",
      "ref": "ref"
    };
    return {
      ...basePayload,
      content: `test${Math.random().toString(36).substring(2, 15)}`,
      ref: `ref_${Date.now()}`
    };
  };

  beforeAll(async () => {
     ctx = new TestContext();
     headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}


    await executeAllSteps([
        { "action": "mockUser", "body": {"quantity": config.virtualUsers} }, 
        { "action": "createChannel" }
    ], ctx);
  
    const invitationLink = ctx.getValue("invitationLink");
    await Promise.all(
      Array(config.virtualUsers).fill(0).map(async (_, index) => {
        const release = await joinMutex.acquire();
        const suffix = index === 0 ? '' : index;
        try {
          await executeAllSteps([
            {
              "action": "acceptInvitation",
              "body": {
                "linkInvitation": invitationLink
              },
              "header": {
                "token": `{{token${suffix}}}`
              }  
            }
          ], ctx);
        }finally{
          release()
        }
      })
    );

    resolvedHeaders = Array(config.virtualUsers).fill(0).map((_, index) => {
      const suffix = index === 0 ? '' : index;
      const token =  `token${suffix}`
      return {
        "Content-Type": "application/json",
        "x-session-token": `{{${token}}}`,
        "x-country-code": "VN"
      };
    });

}, config.testTimeout);
  const measureRequest = async (userIndex: number) => {
    const startTime = process.hrtime();
    try {
      const payload = generateRandomPayload();
      const response = await axios.post(
        `${globalThis.url}/Message/SendMessage`,
        resolveVariables(payload, ctx),
        {
          headers: resolveVariables(resolvedHeaders[userIndex], ctx),
          timeout: config.requestTimeout,
          validateStatus: () => true
        }
      );

      const [seconds, nanoseconds] = process.hrtime(startTime);
      const responseTime = seconds * 1000 + nanoseconds / 1e6;
      
      return {
        success: true,
        responseTime,
        statusCode: response.status
      };
    } catch (error) {
      const [seconds, nanoseconds] = process.hrtime(startTime);
      return {
        success: false,
        responseTime: seconds * 1000 + nanoseconds / 1e6,
        error: error.message
      };
    }
  };
  it('should meet performance requirements', async () => {
    // Warmup phase
    console.log('Starting warmup...');
    await Promise.all(
      Array(config.warmupRequests).fill(0).map(() =>
        measureRequest(Math.floor(Math.random() * config.virtualUsers))
      )
    );
  
    // Main test phase
    console.log('Starting main test...');
    const results = [];
    const requestsPerUser = Math.ceil(config.testRequests / config.virtualUsers);
    console.log(requestsPerUser)
    await Promise.all(
      Array(config.virtualUsers).fill(0).map(async (_, userIndex) => {
        for (let i = 0; i < requestsPerUser; i++) {
          if (results.length >= config.testRequests) break;
          const result = await measureRequest(userIndex);
          results.push(result);
        }
      })
    );
  
    // Lọc và tính toán metrics
    const successResults = results.filter(r => r.success);
    const responseTimes = results.map(r => r.responseTime);
    const sortedTimes = [...responseTimes].sort((a, b) => a - b);
    
    const report = {
      totalRequests: results.length,
      successRate: (successResults.length / results.length * 100).toFixed(2) + '%',
      averageResponseTime: sortedTimes.reduce((a, b) => a + b, 0) / sortedTimes.length,
      p90: sortedTimes[Math.floor(sortedTimes.length * 0.90)],
      p95: sortedTimes[Math.floor(sortedTimes.length * 0.95)],
      min: sortedTimes[0],
      max: sortedTimes[sortedTimes.length - 1],
      errorCount: results.length - successResults.length
    };
  
    console.log(`Performance Report:
      Total Requests: ${report.totalRequests}
      Success Rate: ${report.successRate}
      Average Response Time: ${report.averageResponseTime.toFixed(2)}ms
      90th Percentile: ${report.p90.toFixed(2)}ms
      95th Percentile: ${report.p95.toFixed(2)}ms
      Fastest: ${report.min.toFixed(2)}ms
      Slowest: ${report.max.toFixed(2)}ms
      Errors: ${report.errorCount}`);
  
    // Assertions
    expect(report.averageResponseTime).toBeLessThan(config.requestTimeout);
    expect(report.p95).toBeLessThan(config.requestTimeout * 1.5);
  }, config.testTimeout);
});
