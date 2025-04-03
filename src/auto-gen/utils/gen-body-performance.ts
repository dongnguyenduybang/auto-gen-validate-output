import path from "path";
import fs from 'fs';
export function generatePerformance(className:any,outputDir:any, payloadPerformance: any, headerPerformance: any, bodyPerformance: any, requestData:any) {
    const randomContentLogic = `
    const generateRandomPayload = () => {
      const basePayload = ${JSON.stringify(bodyPerformance, null, 2)};
      return {
        ...basePayload,
        content: \`test\${Math.random().toString(36).substring(2, 15)}\`,
        ref: \`ref_\${Date.now()}\`
      };
    };`;
  
    const specContent = `
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime } from '../../helps/utils';
    import { TestContext } from '../../test-execute-step/text-context';
    import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
    
    describe('Performance Test for ${className}', () => {
      const config = {
        warmupRequests: ${payloadPerformance.warmupRequests},
        testRequests: ${payloadPerformance.testRequests},
        virtualUsers: ${payloadPerformance.virtualUsers},
        requestTimeout: ${payloadPerformance.requestTimeout},
        testTimeout: ${payloadPerformance.testTimeout}
      };
  
      let globalContexts: TestContext[] = [];
      let resolvedHeaders: any[] = [];
      let pathRequest: string;
      ${bodyPerformance ? randomContentLogic : ''}
  
      beforeAll(async () => {
        // Khởi tạo virtual users
        globalContexts = await Promise.all(
          Array(config.virtualUsers).fill(0).map(async () => {
            const ctx = new TestContext();
            await executeAllSteps(${JSON.stringify(requestData.beforeAll)}, ctx);
            return ctx;
          })
        );
  
        // Chuẩn bị headers cho từng user
        resolvedHeaders = globalContexts.map(ctx => 
          resolveVariables(${JSON.stringify(headerPerformance)}, ctx)
        );
        
        pathRequest = ${JSON.stringify(requestData.path)};
      }, config.testTimeout);
  
      const measureRequest = async (userIndex: number) => {
        const ctx = globalContexts[userIndex];
        try {
          const start = Date.now();
          ${bodyPerformance ? 'const payload = generateRandomPayload();' : ''}
          
          const response = await axios.${requestData.method.toLowerCase()}(
            \`\${globalThis.url}\${pathRequest}\`,
            ${bodyPerformance ? 'resolveVariables(payload, ctx)' : 'undefined'},
            {
              headers: { ...resolvedHeaders[userIndex] },
              timeout: config.requestTimeout,
              validateStatus: () => true
            }
          );
          
          return Date.now() - start;
        } catch (error) {
          return Date.now() - start;
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
        const responseTimes: number[] = [];
        const requestsPerUser = Math.ceil(config.testRequests / config.virtualUsers);
        
        await Promise.all(
          Array(config.virtualUsers).fill(0).map(async (_, userIndex) => {
            for (let i = 0; i < requestsPerUser; i++) {
              if (responseTimes.length >= config.testRequests) break;
              const time = await measureRequest(userIndex);
              responseTimes.push(time);
            }
          })
        );
  
        // Generate report
        const report = {
          totalRequests: responseTimes.length,
          averageResponseTime: responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length,
          p95: responseTimes.sort((a, b) => a - b)[Math.floor(responseTimes.length * 0.95)],
          min: Math.min(...responseTimes),
          max: Math.max(...responseTimes)
        };
  
        console.log(\`Performance Report:
          Total Requests: \${report.totalRequests}
          Average Response Time: \${report.averageResponseTime.toFixed(2)}ms
          95th Percentile: \${report.p95.toFixed(2)}ms
          Fastest: \${report.min}ms
          Slowest: \${report.max}ms\`);
  
        // Assertions
        expect(report.averageResponseTime).toBeLessThan(config.requestTimeout);
        expect(report.p95).toBeLessThan(config.requestTimeout * 1.5);
      }, config.testTimeout);
    });`;
  
    const outputPath = path.join(outputDir, `${className}.performance.spec.ts`);
    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`✅ Generated performance test: ${outputPath}`);
  }