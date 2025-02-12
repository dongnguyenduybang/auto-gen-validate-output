
import * as path from 'path';
import * as fs from 'fs';


const dtoFolderPath = path.join(__dirname, 'folder_gen/results');
const outputDir = path.join(__dirname, 'folder_gen/results');
fs.readdirSync(dtoFolderPath).forEach(async (file) => {
    const filePath = path.join(dtoFolderPath, file);
    if (file.endsWith('.json')) {

        const baseUrl = 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers'
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const body = JSON.parse(fileContent);
        const headers = {};

        if (body && Array.isArray(body)) {
            let testCasesContent = '';
            testCasesContent += `import axios from 'axios';`
            testCasesContent += `describe('Test cases from ${file}', () => {\n`;


            for (let index = 0; index < body.length; index++) {
                const item = body[index];
                const payload = item;    
  
                testCasesContent += `  it('should test payload: ${JSON.stringify(payload)}', async () => {\n`;
                testCasesContent += `   
                    const payload = ${JSON.stringify(payload)};

                    const mockAPI = await axios.post('${baseUrl}', payload,{})

                    \n`;
                testCasesContent += '  });\n';
            }

            testCasesContent += '});\n';


            const outputFilePath = path.join(outputDir, `${path.basename(file, '.json')}.test.ts`);

            fs.writeFileSync(outputFilePath, testCasesContent, 'utf-8');
            console.log(`Test cases have been written to: ${outputFilePath}`);
        } else {
            console.error('Invalid or empty payload in JSON');
        }
    }
});
