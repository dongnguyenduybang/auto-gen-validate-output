import * as fs from 'fs';
import * as path from 'path';
import { pairFiles } from '../helps/ultil';

function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

function readPayloadFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const payload = fileContent.replace(/export\s+const\s+testCasePayloads\s*=\s*/, '');
  return eval(payload);
}

function genTestCase(apiConfigPath: string, payloadPath: string, name: string) {

  const apiConfig = readJsonFile(apiConfigPath);
  const testCasePayloads = readPayloadFile(payloadPath);
  const methods = apiConfig.method.split('|');

  const specContent = `
      import axios from 'axios';
      describe('Testcase', () => {
      ${methods.map(method => `
        describe('Testcase ${method.trim()} method', () => {
      ${testCasePayloads.map((testCase: any, index: number) => `
          it('Test case #${index + 1}', async () => {
            try {
              const response = await axios({
                method: '${method.trim().toLowerCase()}',
                url:'${apiConfig.path}',
                headers: ${JSON.stringify(apiConfig.headers)},
                data: ${JSON.stringify(testCase.body)}
              });

              console.log(response.data)
            } catch (error) {
             const expectedError = ${JSON.stringify(testCase.expects)}
              console.log(error)
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

pairedFiles.forEach(({ apiConfig, payload, name }) => {
  genTestCase(apiConfig, payload, name);
});