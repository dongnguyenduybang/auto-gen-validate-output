
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';
    import { UnpinDmMessageRequest } from '././unpin-dm-message.request';
    describe('Testcase for unpin-dm-message', () => {
        let totalTests = 0;
        let allSteps = [];
        let failedTests: any[] = [];
        let codedTest: any[] = [];
        let logicTests: any[] = [];
        let passedTests = 0;
        let testNumber: number;
        let failedStep: any[] = [];
        let testType: string;
        let resolvedData: any;
        let globalContext: any;
        let testCaseNumber = 0;
        let currentTestCaseTitle = ''
        let context, contextData;
        let warnings: any[] = []
        
        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
          context = new TestContext();
          const beforeAllSteps = UnpinDmMessageRequest.options
            ?.find((option) => option.beforeAll)
            ?.beforeAll || [];

          if (beforeAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'beforeAll',
              });
            });
          }else {
            contextData = globalContext
          }
        });
        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = UnpinDmMessageRequest.options
            ?.find((option) => option.beforeEach)
            ?.beforeEach || [];

          if (beforeEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'beforeEach',
              });
            });
          }else {
            contextData = globalContext
          }
        });

        
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":123,"status":false}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"userId":123,"status":false}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = {"userId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"","status":false}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":null,"status":false}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"{{messageId}}"}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = {"userId":123,"messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":123,"messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #10 should return errors [] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = [].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #11 should return errors ["messageId expected string,received number"] when body {"userId":"{{userId1}}","messageId":123,"status":false}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received number"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #12 should return errors ["messageId required"] when body {"userId":"{{userId1}}","status":false}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId required"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #13 should return errors ["messageId should not be empty","messageId invalid ulid"] when body {"userId":"{{userId1}}","messageId":"","status":false}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId should not be empty","messageId invalid ulid"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #14 should return errors ["messageId expected string,received null"] when body {"userId":"{{userId1}}","messageId":null,"status":false}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #15 should return errors ["messageId invalid ulid"] when body {"userId":"{{userId1}}","messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId invalid ulid"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #16 should return errors ["status expected boolean,received string"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #17 should return errors ["status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}"}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #18 should return errors ["status expected boolean,received null"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #19 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = {"messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #20 should return errors ["Could not resolve permission type"] when body {"messageId":123,"status":false}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = {"messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #21 should return errors ["Could not resolve permission type"] when body {"status":false}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = {"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #22 should return errors ["Could not resolve permission type"] when body {"messageId":"","status":false}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = {"messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #23 should return errors ["Could not resolve permission type"] when body {"messageId":null,"status":false}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = {"messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #24 should return errors ["Could not resolve permission type"] when body {"messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = {"messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #25 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = {"messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #26 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}"}', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = {"messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #27 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = {"messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #28 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #29 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":123,"status":false}', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = {"userId":"","messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #30 should return errors ["Could not resolve permission type"] when body {"userId":"","status":false}', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = {"userId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #31 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"","status":false}', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #32 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":null,"status":false}', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = {"userId":"","messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #33 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #34 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #35 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"{{messageId}}"}', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #36 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = {"userId":"","messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"","messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #37 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #38 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":123,"status":false}', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #39 should return errors ["Could not resolve permission type"] when body {"userId":null,"status":false}', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = {"userId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #40 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"","status":false}', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #41 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":null,"status":false}', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #42 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #43 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #44 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"{{messageId}}"}', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #45 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = {"userId":null,"messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":null,"messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["Could not resolve permission type"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #46 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"{{messageId}}","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"{{messageId}}","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #47 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":123,"status":false}', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":123,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":123,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #48 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","status":false}', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #49 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"","status":false}', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #50 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":null,"status":false}', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":null,"status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":null,"status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #51 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"invalid_ULID","status":false}', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"invalid_ULID","status":false};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"invalid_ULID","status":false},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #52 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #53 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"{{messageId}}"}', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"{{messageId}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"{{messageId}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #54 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"{{messageId}}","status":null}', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = {"userId":"invalid_value","messageId":"{{messageId}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"invalid_value","messageId":"{{messageId}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["Unauthorized request"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #55 should return errors ["messageId expected string,received number","status expected boolean,received string"] when body {"userId":"{{userId1}}","messageId":123,"status":"invalid_boolean"}', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":123,"status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":123,"status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received number","status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #56 should return errors ["messageId expected string,received number","status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}","messageId":123}', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received number","status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #57 should return errors ["messageId expected string,received number","status expected boolean,received null"] when body {"userId":"{{userId1}}","messageId":123,"status":null}', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":123,"status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":123,"status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received number","status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #58 should return errors ["messageId required","status expected boolean,received string"] when body {"userId":"{{userId1}}","status":"invalid_boolean"}', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId required","status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #59 should return errors ["messageId required","status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}"}', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId required","status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #60 should return errors ["messageId required","status expected boolean,received null"] when body {"userId":"{{userId1}}","status":null}', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId required","status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #61 should return errors ["messageId should not be empty","messageId invalid ulid","status expected boolean,received string"] when body {"userId":"{{userId1}}","messageId":"","status":"invalid_boolean"}', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId should not be empty","messageId invalid ulid","status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #62 should return errors ["messageId should not be empty","messageId invalid ulid","status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}","messageId":""}', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId should not be empty","messageId invalid ulid","status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #63 should return errors ["messageId should not be empty","messageId invalid ulid","status expected boolean,received null"] when body {"userId":"{{userId1}}","messageId":"","status":null}', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId should not be empty","messageId invalid ulid","status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #64 should return errors ["messageId expected string,received null","status expected boolean,received string"] when body {"userId":"{{userId1}}","messageId":null,"status":"invalid_boolean"}', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":null,"status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":null,"status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received null","status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #65 should return errors ["messageId expected string,received null","status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}","messageId":null}', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received null","status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #66 should return errors ["messageId expected string,received null","status expected boolean,received null"] when body {"userId":"{{userId1}}","messageId":null,"status":null}', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":null,"status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":null,"status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId expected string, received null","status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #67 should return errors ["messageId invalid ulid","status expected boolean,received string"] when body {"userId":"{{userId1}}","messageId":"invalid_ULID","status":"invalid_boolean"}', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"invalid_ULID","status":"invalid_boolean"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"invalid_ULID","status":"invalid_boolean"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId invalid ulid","status expected boolean, received string"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #68 should return errors ["messageId invalid ulid","status required","status expected boolean,received undefined"] when body {"userId":"{{userId1}}","messageId":"invalid_ULID"}', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"invalid_ULID"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"invalid_ULID"},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId invalid ulid","status required","status expected boolean, received undefined"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});

            it('Test case #69 should return errors ["messageId invalid ulid","status expected boolean,received null"] when body {"userId":"{{userId1}}","messageId":"invalid_ULID","status":null}', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = {"userId":"{{userId1}}","messageId":"invalid_ULID","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "pinUnpinDmMessage",
            {"x-session-token":"{{token}}"},
            {"userId":"{{userId1}}","messageId":"invalid_ULID","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["messageId invalid ulid","status expected boolean, received null"].sort();

        let expectDetails;
        let softExpectDetails;
        switch (response.status) {
            case 200:
            case 201:
            case 400:
            case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : data?.error?.details
                            ? [data.error.details]
                            : (data?.ok === true) // check có data (status 201)
                                ? []
                                : data !== undefined && data !== null
                                    ? [data]
                                    : [];
                softExpectDetails = [...expectDetails].sort();
                
                // Kiểm tra nếu tất cả actual errors đều có trong expected errors
                const allErrorsMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                
                // Kiểm tra nếu tất cả expected errors đều có trong actual errors
                const exactMatch = allErrorsMatched && 
                                 softExpectDetails.length === expectJson.length;
                
                if (exactMatch) {
                    // Trường hợp khớp hoàn toàn
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (allErrorsMatched) {
                    // Trường hợp actual errors là tập con của expected errors
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                    });
                    // passedTests++; // Vẫn tính là pass nhưng có warning
                } else {
                    // Trường hợp có lỗi không khớp
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
                    });
                }
                break;
            case 500:
                failedTests.push({
                    testcase: testNumber,
                    code: 500,
                    errorDetails: expectJson,
                });
                break;
            default:
                expectDetails = Array.isArray(data?.error?.details)
                    ? data.error.details
                    : [];
                softExpectDetails = [...expectDetails].sort();
                // Áp dụng logic tương tự cho các status code khác
                const defaultAllMatched = softExpectDetails.every(actualError => 
                    expectJson.includes(actualError)
                );
                const defaultExactMatch = defaultAllMatched && 
                                        softExpectDetails.length === expectJson.length;
                
                if (defaultExactMatch) {
                    passedTests++;
                    codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                    });
                } else if (defaultAllMatched) {
                    warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                    });
                    passedTests++;
                } else {
                    failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                    });
                }
        }
    } catch (error) {
        console.error('Error in test case #' + testNumber, error);
        failedTests.push({
            testcase: testNumber,
            error: error.message
        });
    }
});
      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = UnpinDmMessageRequest.options
            ?.find((option) => option.afterEach)
            ?.afterEach || [];

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'afterEach',
              });
            });
          }else {
            contextData = globalContext
          }
        });

         afterAll(async () => {
          const afterAllSteps = UnpinDmMessageRequest.options
            ?.find((option) => option.afterAll)
            ?.afterAll || [];

          if (afterAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'afterAll',
              });
            });
          }else {
            contextData = globalContext
          }
          
          // Lưu kết quả vào biến toàn cục
          const testResult: TestResult = {
            path: '/Message/PinUnpinDMMessage',
            className: 'unpin-dm-message',
            allSteps: allSteps,
            chunkNumber: undefined,
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            warnings: [...warnings],
            passedTests: passedTests,
            totalTests: totalTests,
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../../../tmp-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  const chunkNumber = undefined
  const fileName = 'unpin-dm-message' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for unpin-dm-message chunk single to ${filePath}`);
    });
        })
  