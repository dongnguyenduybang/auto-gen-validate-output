
import { CreateUserDTO } from '../dtos/create-user.dto';
import { validateTestCase } from '../helps/dto-helper';
import { handleResponse } from '../helps/handles/response';
import { validateLogicData } from '../validates/validate-logic';
let failedTests = []
let passedTests = []
async function runTestCase(testCasePayload: any, expectedErrors: string[], indexCase, dtoClass: any) {
    const result = await validateTestCase(testCasePayload, dtoClass);
    const response = {
        ok: result.valid,
        data: result.valid ? testCasePayload : null,
        errors: result.valid ? null : result.errors
    };
    if (!response.ok) {
        failedTests.push({
            type: 1,
            indexCase: indexCase,
            testCase: testCasePayload,
            errors: response.errors
        });
        expect(response.ok).toBe(true)
       
        return;
    }
    const resultResponse = handleResponse(response);
    if (resultResponse.ok) {
        const validationResult = validateLogicData(resultResponse.data, CreateUserDTO);
        expect(validationResult.valid).toBe(true);
        expect(validationResult.errors).toHaveLength(0);
        passedTests.push({
            type: 2,
            indexCase: indexCase,
            testCase: testCasePayload,
            errors: validationResult.errors
        });
    }
}
afterAll(() => {

    const resultsTable = [];
    passedTests.forEach((test) => {
        resultsTable.push({
            "id case": test.indexCase,
            "type": test.type === 1 ? "Validate output" : test.type === 2 ? "Validate logic output" : "Unknown",
            "status": "pass",
            "error": test.errors.length > 0 ? test.errors.map(error => error.replace(/\"/g, '"')).join(', ') : "No errors"
        });
    });

    failedTests.forEach((test) => {
        resultsTable.push({
            "id case": test.indexCase,
            "type": test.type === 1 ? "Validate output" : test.type === 2 ? "Validate logic output" : "Unknown",
            "status": "fail",
            "error": test.errors.map(error => error.replace(/\"/g, '"')).join(', ')
        });
    });

    console.table(resultsTable);
});
describe('Testcase from CreateUserDTO', () => {

    it('should return test case 16379: ["tags must be an array","role should not be invalid enum"]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": "random_string",
            "role": "random_string"
        };
        await runTestCase(testCasePayload, ["tags must be an array", "role should not be invalid enum"], 16379, CreateUserDTO);
    });


    it('should return test case 16380: ["tags must be an array"]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": "random_string",
            "role": "user"
        };
        await runTestCase(testCasePayload, ["tags must be an array"], 16380, CreateUserDTO);
    });


    it('should return test case 16381: ["role should not be null"]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": [
                "a",
                "b"
            ],
            "role": null
        };
        await runTestCase(testCasePayload, ["role should not be null"], 16381, CreateUserDTO);
    });


    it('should return test case 16382: ["role should not be empty"]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": [
                "a",
                "b"
            ],
            "role": ""
        };
        await runTestCase(testCasePayload, ["role should not be empty"], 16382, CreateUserDTO);
    });


    it('should return test case 16383: ["role should not be invalid enum"]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": [
                "a",
                "b"
            ],
            "role": "random_string"
        };
        await runTestCase(testCasePayload, ["role should not be invalid enum"], 16383, CreateUserDTO);
    });


    it('should return test case 16384: ["Test case has no expected errors."]', async () => {
        const testCasePayload = {
            "username": "duy",
            "birthday": "2025-02-11T07:43:25.371Z",
            "age": 10,
            "isActive": true,
            "isObject": {
                "key": "value"
            },
            "tags": [
                "a",
                "b"
            ],
            "role": "user"
        };
        await runTestCase(testCasePayload, ["Test case has no expected errors."], 16384, CreateUserDTO);
    });

});
