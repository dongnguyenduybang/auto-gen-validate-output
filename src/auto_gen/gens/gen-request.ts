import * as path from 'path';
import * as fs from 'fs';
import { extractDTO } from '../helps/dto-helper';
import dotenv from 'dotenv';
dotenv.config();

const dtoFolderPath = path.join(__dirname, '../dtos');
const outputDir = path.join(__dirname, '../folder_gen/requests');

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
          const { optionals, payload } = extractDTO(exportedClass);
        
          const requestStructure = {
            method: 'POST',
            path:  process.env.API_BASE_URL + 'InternalFaker/MockUsers',
            headers: {
              'Content-Type': 'application/json',
            },
            optionals,
            payload,
          };

          const outputPath = path.join(outputDir, `${exportedKey}.request.json`);
          fs.writeFileSync(outputPath, JSON.stringify(requestStructure, null, 2), 'utf-8');
          console.log('Success:', outputPath )
        }
      });
    } catch (error) {
      console.error(`Error processing file: ${file}`, error);
    }
  }
});