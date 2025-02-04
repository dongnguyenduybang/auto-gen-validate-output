import { generateErrorCasesWithEnum } from './gens/gen-property';
import * as path from 'path';
import * as fs from 'fs';
import { CreateUserDTO } from './dtos/create-user.dto';

describe('Start Gen Testcase', () => {
  let payload: any;
  const dtoFolderPath = path.join(__dirname, 'dtos');
  const outputDir = path.join(__dirname, 'auto_gen_spec');
  const defaultDTO = new CreateUserDTO();
  payload = defaultDTO

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

            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir, { recursive: true });
              console.log(`Created directory: ${outputDir}`);
            }

            const outputFilePath = path.join(
              outputDir,
              `${exportedKey}.spec.ts`,
            );

            let fileContent = `
                        import { ${exportedKey} } from '../dtos/${file.replace('.ts', '')}';
                        import { validateTestCase } from '../helps/dto-helper';
                        describe('Testcase from ${exportedKey}', () => {
                            `;

            const inputPayload = payload

            result.forEach((item, index) => {

              const testCasePayload = item.testcaseGen;
              const expectedDetail = item.expectedDetail.length > 0 ? JSON.stringify(item.expectedDetail) : ['Test case has no expected errors.'];

              fileContent += `
                            it('should return test case ${index + 1}: ${expectedDetail}', async () => {

                                const inputPayload = ${JSON.stringify(inputPayload, null, 4)};
                                const testCasePayload = ${JSON.stringify(testCasePayload, null, 4)};
                                let errors = []; 

                                const result = await validateTestCase(inputPayload, testCasePayload, ${exportedKey});

                                if (result.valid) {

                                    console.log('Test case is valid.');
                                } else {

                                    errors.push(...result.errors);
        
                                }

                                if (errors.length > 0) {
                                
                                    console.log('Errors:', errors);
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
        console.error(`Error processing file: ${file}`, error);
      }
    }
  });
});
