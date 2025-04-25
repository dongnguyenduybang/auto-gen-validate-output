import path from 'path';
import fs from 'fs';
import { SendMessageSagaWS } from '../../test-ws/send-message/send-message.ws';
import { getTime } from '../../utils/helper';
import { executeAllSteps } from '../../utils/test-executor';
import { TestContext, WSSContext, EventContext } from '../../utils/text-context';
import { executeWSSCheck } from '../../utils/ws-execute-check';
import { executeWSSteps } from '../../utils/ws-execute-ws-step';
import { executeOpenWS } from '../../utils/ws-open';


// Định nghĩa kiểu dữ liệu
interface ValidationError {
  path: string;
  expected: string;
  actual?: string;
  message: string;
}

interface WSEvent {
  id: string;
  time: string;
  type: string;
  source: string;
  specversion: string;
  data: any;
  excludeuserids: string[];
  version: string;
}

interface WSError {
  eventIndex: number;
  event: WSEvent;
  errors: ValidationError[];
}

interface WSResult {
  wsActor: {
    success: boolean;
    matched: number;
    total: number;
    errors: WSError[];
  };
  wsRecipient: {
    success: boolean;
    matched: number;
    total: number;
    errors: WSError[];
  };
  success: boolean;
}


describe('Kiểm tra sagas cho send-message', () => {
  let pathRequest: string;
  let testType: string;
  let globalContext: TestContext;
  let globalWSSContext: WSSContext;
  let eventContext: EventContext;
  let testNumber = 0;
  let failedStep = [];
  let passedTests = 0;
  let failedTests: any[] = [];
  let totalTests = 0;

  beforeAll(async () => {
    pathRequest = 'SendMessageWS';
    testType = 'ws';
    globalContext = new TestContext();
    globalWSSContext = new WSSContext();
    eventContext = new EventContext();

    const resultBeforeAll = await executeAllSteps(SendMessageSagaWS.beforeAll, globalContext, globalWSSContext, eventContext);
    // resultBeforeAll.forEach((step, index) => {
    //   failedStep.push({
    //     type: step.type || 'logic',
    //     status: step.status,
    //     stepName: step.stepName,
    //     result: step.error, // Lưu error từ beforeAll (nếu có)
    //   });
    // });

    const resultOpenWS = await executeOpenWS(SendMessageSagaWS.wsOpen, globalContext, globalWSSContext);
    // failedStep.push({
    //   type: 'ws',
    //   status: resultOpenWS.status ?? true, // Giả định thành công nếu không có status
    //   stepName: 'wsOpen',
    //   result: resultOpenWS.error, // Lưu error từ wsOpen (nếu có)
    // });
  }, 10000);

  it('phải xác thực cấu trúc phản hồi', async () => {
    testNumber++;
    totalTests++;

    try {
      const resultSteps = await executeWSSteps(SendMessageSagaWS.steps, globalContext, globalWSSContext, eventContext);
      // resultSteps.forEach((step, index) => {
      //   failedStep.push({
      //     type: step.type || 'ws',
      //     status: step.status ?? true, // Giả định thành công nếu không có status
      //     stepName: step.stepName || `Bước ${index + 1}`,
      //     result: step.error, // Lưu error từ steps (nếu có)
      //   });
      // });

      const resultCheck = await executeWSSCheck(SendMessageSagaWS.wssCheck, globalContext, globalWSSContext, eventContext);
      const checkStatus = resultCheck.success; // Sử dụng success thay vì status
      failedStep.push({
        type: 'ws',
        status: checkStatus,
        stepName: 'wssCheck',
        result: resultCheck, // Lưu toàn bộ WSResult
      });

      const allStepsPassed = resultSteps.every(step => step.status ?? true) && checkStatus;
      if (allStepsPassed) {
        passedTests++;
      } else {
        failedTests.push({
          testcase: testNumber,
          result: resultCheck, // Lưu WSResult để báo cáo chi tiết
        });
      }

      expect(allStepsPassed).toBe(true);
    } catch (error) {
      failedTests.push({
        testcase: testNumber,
        result: error instanceof Error ? error.message : JSON.stringify(error),
      });
      expect(error).toBeNull();
    }
  }, 15000);

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports/send-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `send-message-ws`;
    const reportFileName = `send-message-ws-sagas-${getTime()}.report.txt`;
    const { combinedReportTemplate } = await import('../../utils/report-file');
    const reportContent = combinedReportTemplate(
      classNames,
      globalThis.url || 'N/A',
      pathRequest,
      failedStep,
      passedTests,
      failedTests,
      totalTests,
      null,
      null,
      testType,
    );

    const reportPath = path.join(folderPath, reportFileName);
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Báo cáo kiểm tra WebSocket đã được tạo: ${reportPath}`);
  });
});