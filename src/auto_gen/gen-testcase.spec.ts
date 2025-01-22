import { logPropertyConstraints } from './gens/gen-property';
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';

describe('Start Gen Testcase', () => {

    const dtoFolderPath = path.join(__dirname, 'dtos');
    const outputDir = path.join(__dirname, 'auto_gen_spec');

    fs.readdirSync(dtoFolderPath).forEach((file) => {
        const filePath = path.join(dtoFolderPath, file);

        if (file.endsWith('.dto.ts') || file.endsWith('.dto.js')) {
            try {

                const dtoModule = require(filePath);

                Object.keys(dtoModule).forEach((exportedKey) => {
                    const exportedClass = dtoModule[exportedKey];

                    if (typeof exportedClass === 'function' && /^class\s/.test(Function.prototype.toString.call(exportedClass))) {

                        const result = logPropertyConstraints(exportedClass);

                        if (!fs.existsSync(outputDir)) {
                            fs.mkdirSync(outputDir, { recursive: true });
                            console.log(`Created directory: ${outputDir}`);
                        }

                        const outputFilePath = path.join(outputDir, `${exportedKey}.spec.ts`);

                        let fileContent = `

                        describe('Testcase from ${exportedKey}', () => {
                            `;

                        const inputPayload = {
                            username: null,
                            address: null,
                            typeAny: null,
                            birthday: null,
                            isActive: true,
                            tags: null,
                            age: null


                        };

                        result.forEach((item, index) => {
                            const testCasePayload = item.testCase;

                            fileContent += `
                            it('should return test case ${index + 1}: ${JSON.stringify(item.expectedDetail)}', () => {
                                const inputPayload = ${JSON.stringify(inputPayload, null, 4)};
                                const testCasePayload = ${JSON.stringify(testCasePayload, null, 4)};
                                
                                let errors = []; 
                                let matchingKeysCount = 0; 
                        
                                Object.keys(inputPayload).forEach((key) => {
                                    if (testCasePayload.hasOwnProperty(key)) {
                                        if (testCasePayload[key] === inputPayload[key]) {
                                            matchingKeysCount++;
                                        }
                                    }
                                });
                        
                               
                                if (matchingKeysCount > 1) {
                                    errors.push(\`\${matchingKeysCount} matching keys between inputPayload and testCasePayload\`);
                                }
                        
                                expect(errors.length).toBe(0);
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
                console.error(`Error loading file: ${file} `, error);
            }
        }
    })
});


