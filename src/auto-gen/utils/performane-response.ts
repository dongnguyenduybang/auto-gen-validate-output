import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from '../helps/dto-helper';
import { getAllFiles, getBodyByAction, getStepByAction, groupFilesByName, toCamelCase } from '../helps/utils';
import { generateResponse } from './generate-response';
import { generatePerformance } from './gen-body-performance';

export function genBodyResponse(dtoName) {
    const dtoFolderPath = path.join(__dirname, '../test-responses', dtoName);
    const outputDir = path.join(__dirname, '../expect-json');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const files = getAllFiles(dtoFolderPath);
    const fileMap = groupFilesByName(files);

    files.forEach((filePath) => {
        const fileName = path.basename(filePath, path.extname(filePath));
        if (filePath.endsWith('.response.json')) {
            const className = fileName.replace('.response', '');
            fileMap[className] = fileMap[className] || {};
            fileMap[className].requestPath = filePath;
        }
    });
    Object.entries(fileMap).forEach(([className, { requestPath }]) => {

        try {
            const rawData = fs.readFileSync(requestPath, 'utf-8');
            const requestData = JSON.parse(rawData);

            const genResponse = generateResponse(requestData.headers, requestData.body, requestData.options )

            if(requestData.options.performance){
                const geneResponsePerformance = generatePerformance(className,outputDir, requestData.options.performance, requestData.headers, requestData.body,requestData )
            }
           
        } catch (error) {



        }
    })

}