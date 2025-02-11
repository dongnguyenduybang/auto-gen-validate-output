import { generateErrorCasesWithEnum } from './gens/gen-property';
import * as path from 'path';
import * as fs from 'fs';

const dtoFolderPath = path.join(__dirname, 'dtos');
const outputDir = path.join(__dirname, 'auto_gen_spec');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);
}

fs.readdirSync(dtoFolderPath).forEach((file) => {
    const filePath = path.join(dtoFolderPath, file);
    if (file.endsWith('.dto.ts') || file.endsWith('.dto.js')) {
        try {
            const dtoModule = require(filePath);
            Object.keys(dtoModule).forEach((exportedKey) => {
                const exportedClass = dtoModule[exportedKey];
                if (
                    typeof exportedClass === 'function' &&
                    /^class\s/.test(Function.prototype.toString.call(exportedClass))
                ) {
                    const result = generateErrorCasesWithEnum(exportedClass);
                    const outputFilePath = path.join(outputDir, `${exportedKey}.spec.ts`);
                    let fileContent = `
                        import { ${exportedKey} } from '../dtos/${file.replace('.ts', '')}';
                        import { validateTestCase } from '../helps/dto-helper';
                        import { handleResponse } from '../helps/handles/response';
                        import { validateLogicData } from '../validates/validate-logic';
                        let failedTests = []
                        let passedTests = []
                        async function runTestCase(testCasePayload: any, expectedErrors: string[],indexCase, dtoClass: any) {
                            const result = await validateTestCase(testCasePayload, dtoClass);
                            const response = {
                                ok: result.valid,
                                data: result.valid ? testCasePayload : null,
                                errors: result.valid ? null : result.errors
                            };
                            if (!response.ok) {
                                  failedTests.push({
                                    type: 2,
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
                                    "error": test.errors.length > 0 ? test.errors.map(error => error.replace(/\\"/g, '"')).join(', ') : "No errors"
                                });
                            });
                            
                            failedTests.forEach((test) => {
                                resultsTable.push({
                                    "id case": test.indexCase,
                                    "type": test.type === 1 ? "Validate output" : test.type === 2 ? "Validate logic output" : "Unknown",
                                    "status": "fail",
                                    "error": test.errors.map(error => error.replace(/\\"/g, '"')).join(', ') 
                                });
                            });
                            
                            console.table(resultsTable);
                        });
                        describe('Testcase from ${exportedKey}', () => {
                            `;

                    result.forEach((item, index) => {
                        const testCasePayload = item.testcaseGen;
                        const expectedDetail = item.expectedDetail.length > 0 ? JSON.stringify(item.expectedDetail) :JSON.stringify(["Test case has no expected errors."]);
                        fileContent += `

                            it('should return test case ${index + 1}: ${expectedDetail}', async () => {
                                const testCasePayload = ${JSON.stringify(testCasePayload, null, 4)};
                                await runTestCase(testCasePayload,${expectedDetail}, ${index + 1}, CreateUserDTO);
                            });
                        `;
                    });

                    fileContent += `
                        });
                    `;
                    fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
                }
            });
        } catch (error) {
            console.error(`Error processing file: ${file}`, error);
        }
    }
});