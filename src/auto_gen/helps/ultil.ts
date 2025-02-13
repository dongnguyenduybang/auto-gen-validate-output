import * as path from 'path';
import * as fs from 'fs';



function getFileNameWithoutExtension(filePath: string): string {
    const fileName = path.basename(filePath); 
    return fileName.split('.')[0]; 
  }
  
export function pairFiles(
    requestsDir: string,
    payloadsDir: string
  ): { apiConfig: string; payload: string; name: string}[] {
    const requestFiles = fs.readdirSync(requestsDir);
    const payloadFiles = fs.readdirSync(payloadsDir);
  
    const pairedFiles: { apiConfig: string; payload: string; name: string }[] = [];
  
    for (const requestFile of requestFiles) {
      const apiFileName = getFileNameWithoutExtension(requestFile);
  
      for (const payloadFile of payloadFiles) {
        const payloadFileName = getFileNameWithoutExtension(payloadFile);
  
        if (apiFileName === payloadFileName) {
          pairedFiles.push({
            name: apiFileName,
            apiConfig: path.join(requestsDir, requestFile),
            payload: path.join(payloadsDir, payloadFile),
          });
        }
      }
    }
  
    return pairedFiles;
  }