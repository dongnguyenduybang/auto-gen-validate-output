
import { validateTestCase } from "../helps/dto-helper";
import { MockUserDTO } from "../dtos/mock-user.dto";
import * as path from 'path';
import * as fs from 'fs';


let failedTests = []
let passedTests = []
async function runTestCases(payload: any, expects: string[], indexCase, dtoClass: any) {
    const result = await validateTestCase(payload, dtoClass);
    const response = {
        ok: result.valid,
        data: result.valid ? payload : null,
        errors: result.valid ? null : result.errors
    };
    if (response.ok === false) {
        const normalizedErrors = response.errors.map((err: string) => err.replace(/"/g, ''));
        expect(normalizedErrors).toEqual(expects)

    } else {

        expect(response.ok).toBe(true)
        passedTests.push(response.data)

    }
}

afterAll(() => {

    const outputDir = path.join(__dirname, 'results');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFilePath = path.join(outputDir, 'passed-test-cases.json');
    fs.writeFileSync(outputFilePath, JSON.stringify(passedTests, null, 4), 'utf-8');

});

describe('Test cases from bodyMockUserDTO.payload.ts', () => {
    it('should validate payload prefix should not be null,quantity should not be null,badge should not be null', () => {

        const payload = { "prefix": null, "quantity": null, "badge": null };
        runTestCases(payload, ['prefix should not be null,quantity should not be null,badge should not be null'], 1, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be null,badge should not be empty', () => {

        const payload = { "prefix": null, "quantity": null, "badge": "" };
        runTestCases(payload, ['prefix should not be null,quantity should not be null,badge should not be empty'], 2, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be null,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": null, "quantity": null, "badge": "random_string" };
        runTestCases(payload, ['prefix should not be null,quantity should not be null,badge must be a number conforming to the specified constraints '], 3, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be null', () => {

        const payload = { "prefix": null, "quantity": null, "badge": 0 };
        runTestCases(payload, ['prefix should not be null,quantity should not be null'], 4, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be empty,badge should not be null', () => {

        const payload = { "prefix": null, "quantity": "", "badge": null };
        runTestCases(payload, ['prefix should not be null,quantity should not be empty,badge should not be null'], 5, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be empty,badge should not be empty', () => {

        const payload = { "prefix": null, "quantity": "", "badge": "" };
        runTestCases(payload, ['prefix should not be null,quantity should not be empty,badge should not be empty'], 6, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be empty,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": null, "quantity": "", "badge": "random_string" };
        runTestCases(payload, ['prefix should not be null,quantity should not be empty,badge must be a number conforming to the specified constraints '], 7, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity should not be empty', () => {

        const payload = { "prefix": null, "quantity": "", "badge": 0 };
        runTestCases(payload, ['prefix should not be null,quantity should not be empty'], 8, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity must be a number conforming to the specified constraints ,badge should not be null', () => {

        const payload = { "prefix": null, "quantity": "random_string", "badge": null };
        runTestCases(payload, ['prefix should not be null,quantity must be a number conforming to the specified constraints ,badge should not be null'], 9, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity must be a number conforming to the specified constraints ,badge should not be empty', () => {

        const payload = { "prefix": null, "quantity": "random_string", "badge": "" };
        runTestCases(payload, ['prefix should not be null,quantity must be a number conforming to the specified constraints ,badge should not be empty'], 10, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": null, "quantity": "random_string", "badge": "random_string" };
        runTestCases(payload, ['prefix should not be null,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints '], 11, MockUserDTO)

    });
    it('should validate payload prefix should not be null,quantity must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": null, "quantity": "random_string", "badge": 0 };
        runTestCases(payload, ['prefix should not be null,quantity must be a number conforming to the specified constraints '], 12, MockUserDTO)

    });
    it('should validate payload prefix should not be null,badge should not be null', () => {

        const payload = { "prefix": null, "quantity": 1, "badge": null };
        runTestCases(payload, ['prefix should not be null,badge should not be null'], 13, MockUserDTO)

    });
    it('should validate payload prefix should not be null,badge should not be empty', () => {

        const payload = { "prefix": null, "quantity": 1, "badge": "" };
        runTestCases(payload, ['prefix should not be null,badge should not be empty'], 14, MockUserDTO)

    });
    it('should validate payload prefix should not be null,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": null, "quantity": 1, "badge": "random_string" };
        runTestCases(payload, ['prefix should not be null,badge must be a number conforming to the specified constraints '], 15, MockUserDTO)

    });
    it('should validate payload prefix should not be null', () => {

        const payload = { "prefix": null, "quantity": 1, "badge": 0 };
        runTestCases(payload, ['prefix should not be null'], 16, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be null,badge should not be null', () => {

        const payload = { "prefix": "", "quantity": null, "badge": null };
        runTestCases(payload, ['prefix should not be empty,quantity should not be null,badge should not be null'], 17, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be null,badge should not be empty', () => {

        const payload = { "prefix": "", "quantity": null, "badge": "" };
        runTestCases(payload, ['prefix should not be empty,quantity should not be null,badge should not be empty'], 18, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be null,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "", "quantity": null, "badge": "random_string" };
        runTestCases(payload, ['prefix should not be empty,quantity should not be null,badge must be a number conforming to the specified constraints '], 19, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be null', () => {

        const payload = { "prefix": "", "quantity": null, "badge": 0 };
        runTestCases(payload, ['prefix should not be empty,quantity should not be null'], 20, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be empty,badge should not be null', () => {

        const payload = { "prefix": "", "quantity": "", "badge": null };
        runTestCases(payload, ['prefix should not be empty,quantity should not be empty,badge should not be null'], 21, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be empty,badge should not be empty', () => {

        const payload = { "prefix": "", "quantity": "", "badge": "" };
        runTestCases(payload, ['prefix should not be empty,quantity should not be empty,badge should not be empty'], 22, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be empty,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "", "quantity": "", "badge": "random_string" };
        runTestCases(payload, ['prefix should not be empty,quantity should not be empty,badge must be a number conforming to the specified constraints '], 23, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity should not be empty', () => {

        const payload = { "prefix": "", "quantity": "", "badge": 0 };
        runTestCases(payload, ['prefix should not be empty,quantity should not be empty'], 24, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge should not be null', () => {

        const payload = { "prefix": "", "quantity": "random_string", "badge": null };
        runTestCases(payload, ['prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge should not be null'], 25, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge should not be empty', () => {

        const payload = { "prefix": "", "quantity": "random_string", "badge": "" };
        runTestCases(payload, ['prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge should not be empty'], 26, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "", "quantity": "random_string", "badge": "random_string" };
        runTestCases(payload, ['prefix should not be empty,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints '], 27, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,quantity must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "", "quantity": "random_string", "badge": 0 };
        runTestCases(payload, ['prefix should not be empty,quantity must be a number conforming to the specified constraints '], 28, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,badge should not be null', () => {

        const payload = { "prefix": "", "quantity": 1, "badge": null };
        runTestCases(payload, ['prefix should not be empty,badge should not be null'], 29, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,badge should not be empty', () => {

        const payload = { "prefix": "", "quantity": 1, "badge": "" };
        runTestCases(payload, ['prefix should not be empty,badge should not be empty'], 30, MockUserDTO)

    });
    it('should validate payload prefix should not be empty,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "", "quantity": 1, "badge": "random_string" };
        runTestCases(payload, ['prefix should not be empty,badge must be a number conforming to the specified constraints '], 31, MockUserDTO)

    });
    it('should validate payload prefix should not be empty', () => {

        const payload = { "prefix": "", "quantity": 1, "badge": 0 };
        runTestCases(payload, ['prefix should not be empty'], 32, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be null,badge should not be null', () => {

        const payload = { "prefix": 123456789, "quantity": null, "badge": null };
        runTestCases(payload, ['prefix must be a string,quantity should not be null,badge should not be null'], 33, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be null,badge should not be empty', () => {

        const payload = { "prefix": 123456789, "quantity": null, "badge": "" };
        runTestCases(payload, ['prefix must be a string,quantity should not be null,badge should not be empty'], 34, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be null,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": 123456789, "quantity": null, "badge": "random_string" };
        runTestCases(payload, ['prefix must be a string,quantity should not be null,badge must be a number conforming to the specified constraints '], 35, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be null', () => {

        const payload = { "prefix": 123456789, "quantity": null, "badge": 0 };
        runTestCases(payload, ['prefix must be a string,quantity should not be null'], 36, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be empty,badge should not be null', () => {

        const payload = { "prefix": 123456789, "quantity": "", "badge": null };
        runTestCases(payload, ['prefix must be a string,quantity should not be empty,badge should not be null'], 37, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be empty,badge should not be empty', () => {

        const payload = { "prefix": 123456789, "quantity": "", "badge": "" };
        runTestCases(payload, ['prefix must be a string,quantity should not be empty,badge should not be empty'], 38, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be empty,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": 123456789, "quantity": "", "badge": "random_string" };
        runTestCases(payload, ['prefix must be a string,quantity should not be empty,badge must be a number conforming to the specified constraints '], 39, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity should not be empty', () => {

        const payload = { "prefix": 123456789, "quantity": "", "badge": 0 };
        runTestCases(payload, ['prefix must be a string,quantity should not be empty'], 40, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity must be a number conforming to the specified constraints ,badge should not be null', () => {

        const payload = { "prefix": 123456789, "quantity": "random_string", "badge": null };
        runTestCases(payload, ['prefix must be a string,quantity must be a number conforming to the specified constraints ,badge should not be null'], 41, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity must be a number conforming to the specified constraints ,badge should not be empty', () => {

        const payload = { "prefix": 123456789, "quantity": "random_string", "badge": "" };
        runTestCases(payload, ['prefix must be a string,quantity must be a number conforming to the specified constraints ,badge should not be empty'], 42, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": 123456789, "quantity": "random_string", "badge": "random_string" };
        runTestCases(payload, ['prefix must be a string,quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints '], 43, MockUserDTO)

    });
    it('should validate payload prefix must be a string,quantity must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": 123456789, "quantity": "random_string", "badge": 0 };
        runTestCases(payload, ['prefix must be a string,quantity must be a number conforming to the specified constraints '], 44, MockUserDTO)

    });
    it('should validate payload prefix must be a string,badge should not be null', () => {

        const payload = { "prefix": 123456789, "quantity": 1, "badge": null };
        runTestCases(payload, ['prefix must be a string,badge should not be null'], 45, MockUserDTO)

    });
    it('should validate payload prefix must be a string,badge should not be empty', () => {

        const payload = { "prefix": 123456789, "quantity": 1, "badge": "" };
        runTestCases(payload, ['prefix must be a string,badge should not be empty'], 46, MockUserDTO)

    });
    it('should validate payload prefix must be a string,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": 123456789, "quantity": 1, "badge": "random_string" };
        runTestCases(payload, ['prefix must be a string,badge must be a number conforming to the specified constraints '], 47, MockUserDTO)

    });
    it('should validate payload prefix must be a string', () => {

        const payload = { "prefix": 123456789, "quantity": 1, "badge": 0 };
        runTestCases(payload, ['prefix must be a string'], 48, MockUserDTO)

    });
    it('should validate payload quantity should not be null,badge should not be null', () => {

        const payload = { "prefix": "duy12345", "quantity": null, "badge": null };
        runTestCases(payload, ['quantity should not be null,badge should not be null'], 49, MockUserDTO)

    });
    it('should validate payload quantity should not be null,badge should not be empty', () => {

        const payload = { "prefix": "duy12345", "quantity": null, "badge": "" };
        runTestCases(payload, ['quantity should not be null,badge should not be empty'], 50, MockUserDTO)

    });
    it('should validate payload quantity should not be null,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "duy12345", "quantity": null, "badge": "random_string" };
        runTestCases(payload, ['quantity should not be null,badge must be a number conforming to the specified constraints '], 51, MockUserDTO)

    });
    it('should validate payload quantity should not be null', () => {

        const payload = { "prefix": "duy12345", "quantity": null, "badge": 0 };
        runTestCases(payload, ['quantity should not be null'], 52, MockUserDTO)

    });
    it('should validate payload quantity should not be empty,badge should not be null', () => {

        const payload = { "prefix": "duy12345", "quantity": "", "badge": null };
        runTestCases(payload, ['quantity should not be empty,badge should not be null'], 53, MockUserDTO)

    });
    it('should validate payload quantity should not be empty,badge should not be empty', () => {

        const payload = { "prefix": "duy12345", "quantity": "", "badge": "" };
        runTestCases(payload, ['quantity should not be empty,badge should not be empty'], 54, MockUserDTO)

    });
    it('should validate payload quantity should not be empty,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "duy12345", "quantity": "", "badge": "random_string" };
        runTestCases(payload, ['quantity should not be empty,badge must be a number conforming to the specified constraints '], 55, MockUserDTO)

    });
    it('should validate payload quantity should not be empty', () => {

        const payload = { "prefix": "duy12345", "quantity": "", "badge": 0 };
        runTestCases(payload, ['quantity should not be empty'], 56, MockUserDTO)

    });
    it('should validate payload quantity must be a number conforming to the specified constraints ,badge should not be null', () => {

        const payload = { "prefix": "duy12345", "quantity": "random_string", "badge": null };
        runTestCases(payload, ['quantity must be a number conforming to the specified constraints ,badge should not be null'], 57, MockUserDTO)

    });
    it('should validate payload quantity must be a number conforming to the specified constraints ,badge should not be empty', () => {

        const payload = { "prefix": "duy12345", "quantity": "random_string", "badge": "" };
        runTestCases(payload, ['quantity must be a number conforming to the specified constraints ,badge should not be empty'], 58, MockUserDTO)

    });
    it('should validate payload quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "duy12345", "quantity": "random_string", "badge": "random_string" };
        runTestCases(payload, ['quantity must be a number conforming to the specified constraints ,badge must be a number conforming to the specified constraints '], 59, MockUserDTO)

    });
    it('should validate payload quantity must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "duy12345", "quantity": "random_string", "badge": 0 };
        runTestCases(payload, ['quantity must be a number conforming to the specified constraints '], 60, MockUserDTO)

    });
    it('should validate payload badge should not be null', () => {

        const payload = { "prefix": "duy12345", "quantity": 1, "badge": null };
        runTestCases(payload, ['badge should not be null'], 61, MockUserDTO)

    });
    it('should validate payload badge should not be empty', () => {

        const payload = { "prefix": "duy12345", "quantity": 1, "badge": "" };
        runTestCases(payload, ['badge should not be empty'], 62, MockUserDTO)

    });
    it('should validate payload badge must be a number conforming to the specified constraints ', () => {

        const payload = { "prefix": "duy12345", "quantity": 1, "badge": "random_string" };
        runTestCases(payload, ['badge must be a number conforming to the specified constraints '], 63, MockUserDTO)

    });
    it('should validate payload ', () => {

        const payload = { "prefix": "duy12345", "quantity": 1, "badge": 0 };
        runTestCases(payload, [''], 64, MockUserDTO)

    });
});
