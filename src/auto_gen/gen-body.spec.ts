import { generateErrorCasesWithEnum } from './gens/gen-property';
import * as path from 'path';
import * as fs from 'fs';

const dtoFolderPath = path.join(__dirname, 'dtos');
const outputDir = path.join(__dirname, 'folder_gen');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
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
                    const outputFilePath = path.join(outputDir, `body${exportedKey}.payload.ts`);

                    let testCasePayload = []; 
                    result.forEach((item) => {
                        const testCase = item.testcaseGen;
                        if (testCase && typeof testCase === 'object') {
                            const testCasePush = {
                                body: testCase,
                                expects: item.expectedDetail
                            }
                            testCasePayload.push(testCasePush)
                        } else {
                            console.error("invalid testCase is not an object", testCase);
                        }
                    });
                    
                    let fileContent = `export const testCasePayloads = ${JSON.stringify(testCasePayload, null, 4)};`;
                    fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
                }
            });
        } catch (error) {
            console.error(`Error processing file: ${file}`, error);
        }
    }
});
