import * as path from 'path';
import * as fs from 'fs';

const payloadFolderGen = path.join(__dirname, 'folder_gen');
const outputDir = path.join(__dirname, 'folder_gen');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const testCasesOutputFile = path.join(outputDir, 'test-cases.generated.spec.ts');
let testCasesContent = '';

fs.readdirSync(payloadFolderGen).forEach((file) => {
    const filePath = path.join(payloadFolderGen, file);
    if (file.endsWith('.payload.ts') || file.endsWith('.payload.js')) {
        try {
            const body = require(filePath);

            if (body && Array.isArray(body.testCasePayloads)) {

                testCasesContent += `
                    import { validateTestCase } from "../helps/dto-helper";
                    import { MockUserDTO } from "../dtos/mock-user.dto";
                    import * as path from 'path';
                    import * as fs from 'fs';
                
                `
                testCasesContent += `
                    let failedTests = []
                    let passedTests = []
                    async function runTestCases(payload: any, expects: string[],indexCase, dtoClass: any) {
                        const result = await validateTestCase(payload, dtoClass);
                        const response = {
                            ok: result.valid,
                            data: result.valid ? payload : null,
                            errors: result.valid ? null : result.errors
                        };
                        if (response.ok === false) {
                            const normalizedErrors = response.errors.map((err: string) => err.replace(/\"/g, ''));
                            expect(normalizedErrors).toEqual(expects)

                        }else{

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

                `

                testCasesContent += `describe('Test cases from ${file}', () => {\n`;

                body.testCasePayloads.forEach((item, index) => {
                    const payload = item.body;
                    const expects = item.expects;


                    testCasesContent += `  it('should validate payload ${expects}', () => {\n`;
                    testCasesContent += `   
                    const payload = ${JSON.stringify(payload)};
                    runTestCases(payload, ['${expects}'], ${index + 1}, MockUserDTO)
                    \n`;
                    testCasesContent += '  });\n';
                });

                testCasesContent += '});\n';

            } else {
                console.error('Invalid or missing testCasePayloads');
            }
        } catch (error) {
            console.error(`Error processing file: ${file}`, error);
        }
    }
});

fs.writeFileSync(testCasesOutputFile, testCasesContent, 'utf-8');

