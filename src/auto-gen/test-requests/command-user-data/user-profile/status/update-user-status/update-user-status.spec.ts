
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../../utils/helper';
    import { TestResult } from '../../../../../utils/declarations';
    import { executeSteps } from '../../../../../utils/text-execute-test';
    import { TestContext } from '../../../../../utils/text-context';
    import { UpdateUserStatusRequest } from '././update-user-status.request';
    describe('Testcase for update-user-status', () => {
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
          const beforeAllSteps = UpdateUserStatusRequest.options
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
          const beforeEachSteps = UpdateUserStatusRequest.options
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

        
            it('Test case #1 should return errors ["content expected string,received number"] when body {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received number"].sort();

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

            it('Test case #2 should return errors ["content expected string,received number","status expected string,received number"] when body {"content":123,"status":123}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = {"content":123,"status":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":123,"status":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received number","status expected string, received number"].sort();

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

            it('Test case #3 should return errors ["content expected string,received number","status only accepts 1 emoji"] when body {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":123,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received number","status only accepts 1 emoji"].sort();

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

            it('Test case #4 should return errors ["content expected string,received number","status should not be empty","status invalid emoji","status only accepts 1 emoji"] when body {"content":123,"status":""}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = {"content":123,"status":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":123,"status":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received number","status should not be empty","status invalid emoji","status only accepts 1 emoji"].sort();

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

            it('Test case #5 should return errors ["content expected string,received number","status expected string,received null"] when body {"content":123,"status":null}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {"content":123,"status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":123,"status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received number","status expected string, received null"].sort();

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

            it('Test case #6 should return errors [] when body {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿"},
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

            it('Test case #7 should return errors ["status expected string,received number"] when body {"content":"Hi hi","status":123}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = {"content":"Hi hi","status":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"Hi hi","status":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["status expected string, received number"].sort();

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

            it('Test case #8 should return errors ["status only accepts 1 emoji"] when body {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"Hi hi","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["status only accepts 1 emoji"].sort();

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

            it('Test case #9 should return errors ["status should not be empty","status invalid emoji","status only accepts 1 emoji"] when body {"content":"Hi hi","status":""}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = {"content":"Hi hi","status":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"Hi hi","status":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["status should not be empty","status invalid emoji","status only accepts 1 emoji"].sort();

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

            it('Test case #10 should return errors ["status expected string,received null"] when body {"content":"Hi hi","status":null}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = {"content":"Hi hi","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"Hi hi","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["status expected string, received null"].sort();

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

            it('Test case #11 should return errors ["content string must contain at most 50 character(s)"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content string must contain at most 50 character(s)"].sort();

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

            it('Test case #12 should return errors ["content string must contain at most 50 character(s)","status expected string,received number"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":123}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["content string must contain at most 50 character(s)","status expected string, received number"].sort();

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

            it('Test case #13 should return errors ["content string must contain at most 50 character(s)","status only accepts 1 emoji"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content string must contain at most 50 character(s)","status only accepts 1 emoji"].sort();

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

            it('Test case #14 should return errors ["content string must contain at most 50 character(s)","status should not be empty","status invalid emoji","status only accepts 1 emoji"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":""}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["content string must contain at most 50 character(s)","status should not be empty","status invalid emoji","status only accepts 1 emoji"].sort();

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

            it('Test case #15 should return errors ["content string must contain at most 50 character(s)","status expected string,received null"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":null}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["content string must contain at most 50 character(s)","status expected string, received null"].sort();

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

            it('Test case #16 should return errors ["content should not be empty"] when body {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content should not be empty"].sort();

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

            it('Test case #17 should return errors ["content should not be empty","status expected string,received number"] when body {"content":"","status":123}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = {"content":"","status":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"","status":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["content should not be empty","status expected string, received number"].sort();

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

            it('Test case #18 should return errors ["content should not be empty","status only accepts 1 emoji"] when body {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"","status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content should not be empty","status only accepts 1 emoji"].sort();

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

            it('Test case #19 should return errors ["content should not be empty","status should not be empty","status invalid emoji","status only accepts 1 emoji"] when body {"content":"","status":""}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = {"content":"","status":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"","status":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["content should not be empty","status should not be empty","status invalid emoji","status only accepts 1 emoji"].sort();

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

            it('Test case #20 should return errors ["content should not be empty","status expected string,received null"] when body {"content":"","status":null}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = {"content":"","status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":"","status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["content should not be empty","status expected string, received null"].sort();

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

            it('Test case #21 should return errors ["content expected string,received null"] when body {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received null"].sort();

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

            it('Test case #22 should return errors ["content expected string,received null","status expected string,received number"] when body {"content":null,"status":123}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = {"content":null,"status":123};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":null,"status":123},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received null","status expected string, received number"].sort();

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

            it('Test case #23 should return errors ["content expected string,received null","status only accepts 1 emoji"] when body {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":null,"status":"🧑🏼‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏿"},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received null","status only accepts 1 emoji"].sort();

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

            it('Test case #24 should return errors ["content expected string,received null","status should not be empty","status invalid emoji","status only accepts 1 emoji"] when body {"content":null,"status":""}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = {"content":null,"status":""};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":null,"status":""},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received null","status should not be empty","status invalid emoji","status only accepts 1 emoji"].sort();

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

            it('Test case #25 should return errors ["content expected string,received null","status expected string,received null"] when body {"content":null,"status":null}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = {"content":null,"status":null};
    resolvedData = resolveVariables(payloadObj, globalContext);
    
    try {
        const response = await resolveCallAPI(
            "updateUserStatus",
            {"x-session-token":"{{token}}"},
            {"content":null,"status":null},
            contextData
        );
        const data = response.data;
        const expectJson = ["content expected string, received null","status expected string, received null"].sort();

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
          const afterEachSteps = UpdateUserStatusRequest.options
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
          const afterAllSteps = UpdateUserStatusRequest.options
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
            path: '/UserProfile/UpdateUserStatus',
            className: 'update-user-status',
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
  const fileName = 'update-user-status' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for update-user-status chunk single to ${filePath}`);
    });
        })
  