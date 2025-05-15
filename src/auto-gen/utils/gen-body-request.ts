import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper';
import { getAllFiles, groupFilesByName } from './helper';

export async function genBodyRequest(dtoName) {
  const dtoFolderPath = path.join(__dirname, '../test-requests', dtoName);
  const outputDir = path.join(__dirname, '../test-requests', dtoName);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const files = getAllFiles(dtoFolderPath);
  const fileMap = groupFilesByName(files);

  for (const [className, { dtoPath, requestPath }] of Object.entries(fileMap)) {
    if (!dtoPath) {
      console.warn(`Missing .dto file for class: ${className}`);
      continue;
    }

    try {
      const dtoModule = require(dtoPath);
      const classNameCapitalized =
        className
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('') + 'DTO';

      const dtoClass = dtoModule[classNameCapitalized];

      if (
        typeof dtoClass !== 'function' ||
        !/^\s*class\s/.test(dtoClass.toString())
      ) {
        console.error(`Invalid DTO class in file: ${dtoPath}`);
        continue;
      }

      const requestModule = await import(requestPath);
      const requestData =
        requestModule.default || Object.values(requestModule)[0];
      const payload = requestData.body;
      const result = await generateErrorCases(dtoClass, payload);

      const testCasePayload = result.map(({ testcaseGen, expectedDetail }) => ({
        body: testcaseGen,
        expects: expectedDetail,
      }));

      const outputFilePath = path.join(outputDir, `${className}.payload.json`);
      fs.writeFileSync(
        outputFilePath,
        JSON.stringify(testCasePayload, null, 4),
        'utf-8',
      );
      console.log(`✅ Success: ${outputFilePath}`);
    } catch (error) {
      console.error(`❌ Error processing class: ${className}`, error);
    }
  }
}
