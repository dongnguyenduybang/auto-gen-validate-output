import * as fs from 'fs';
import * as path from 'path';
import { pairFiles } from '../helps/ultil';


function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

function readPayloadFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return eval(fileContent);
}

function genTestCase(requestConfigPath: string, payloadPath: string, name: string) {

  const requestConfig = readJsonFile(requestConfigPath);
  const testCasePayloads = readPayloadFile(payloadPath);
  const methods = requestConfig.method.split('|');

  const specContent = `
        import axios from 'axios';
        import { plainToInstance } from 'class-transformer';
        import { MockUserDTOResponse } from '../../dto_response/mock-user-response.dto';
        import { validate } from 'class-validator';
        import { validateLogicData } from '../../validates/validate-logic';
        import { getValidationFromDTOResponse } from '../../helps/ultil';
        import { failResponse } from '../../helps/structures/responses';
      describe('Testcase', () => {
      ${methods.map(method => `
        describe('Testcase ${method.trim()} method', () => {
      ${testCasePayloads.map((testCase: any, index: number) => `
          it('Test case #${index + 1}', async () => {
           const payload =  ${JSON.stringify(testCase.body)}
            try {
           
              const response = await axios({
                method: '${method.trim().toLowerCase()}',
                url:'${requestConfig.path}',
                headers: ${JSON.stringify(requestConfig.headers)},
                data: ${JSON.stringify(testCase.body)}
              });
              const mockUserResponse = plainToInstance(${name}Response, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(${name}Response);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ${JSON.stringify(testCase.expects)}
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });`).join('\n')}
        });`).join('\n')}
      });
    `;

  const outputDir = path.join(__dirname, '../folder_gen/test-case');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `${name}.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');

  console.log(`Success: ${outputPath}`);
}

const requestsDir = path.join(__dirname, '../folder_gen/requests');
const payloadsDir = path.join(__dirname, '../folder_gen/payloads');

const pairedFiles = pairFiles(requestsDir, payloadsDir);

pairedFiles.forEach(({ requestConfig, payload, name }) => {
  genTestCase(requestConfig, payload, name);
});