
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../utils/helper';
    import { TestResult } from '../../../utils/declarations';
    import { executeSteps } from '../../../utils/text-execute-test';
    import { TestContext } from '../../../utils/text-context';
    import { ListDmChannelRequest } from '././list-dm-channel.request';
    describe('Testcase for list-dm-channel', () => {
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
          const beforeAllSteps = ListDmChannelRequest.options
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
          const beforeEachSteps = ListDmChannelRequest.options
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

        
            it('Test case #1 should return errors ["limit must be a number conforming to the specified constraints"] when body {"limit":"invalid_number"}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = {"limit":"invalid_number"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":"invalid_number"},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit must be a number conforming to the specified constraints"].sort();

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

            it('Test case #2 should return errors ["limit must be at least 1"] when body {"limit":0}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = {"limit":0};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":0},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit must be at least 1"].sort();

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

            it('Test case #3 should return errors ["limit must be at most 500"] when body {"limit":501}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = {"limit":501};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":501},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit must be at most 500"].sort();

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

            it('Test case #4 should return errors ["limit required","limit must be a number conforming to the specified constraints"] when body {}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = {};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit required","limit must be a number conforming to the specified constraints"].sort();

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

            it('Test case #5 should return errors ["limit should not be empty","limit must be a number conforming to the specified constraints"] when body {"limit":""}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {"limit":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit should not be empty","limit must be a number conforming to the specified constraints"].sort();

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

            it('Test case #6 should return errors ["limit must be a number conforming to the specified constraints"] when body {"limit":null}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = {"limit":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["limit must be a number conforming to the specified constraints"].sort();

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

            it('Test case #7 should return errors [] when body {"limit":10}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = {"limit":10};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "listDmChannel",
            {"x-session-token":"{{token}}"},
            {"limit":10},
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
      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = ListDmChannelRequest.options
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
          const afterAllSteps = ListDmChannelRequest.options
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
            path: '/ChannelView/ListDMChannels',
            className: 'list-dm-channel',
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
  const fileName = 'list-dm-channel' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for list-dm-channel chunk single to ${filePath}`);
    });
        })
  