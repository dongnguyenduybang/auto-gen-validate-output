import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper-v2';
import {
  findAllFoldersWithDtoAndRequest,
  getMatchedFilePaths,
  groupFilesByName,
} from './helper';

export async function genBodyRequest(dtoName: string) {
  try {
    const baseRequestsPath = path.join(__dirname, '../test-requests');
    const searchPath = path.join(baseRequestsPath, dtoName);

    if (!fs.existsSync(searchPath)) {
      console.error(`❌ Target folder does not exist: ${searchPath}`);
      return;
    }

    const foundFolders = findAllFoldersWithDtoAndRequest(searchPath);

    if (foundFolders.length === 0) {
      console.error(`No folders with .dto.ts and .request.ts found in: ${searchPath}`);
      return;
    }

    let payloadGenerated = false;
    for (const folder of foundFolders) {
      const outputDir = folder.path;

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const file = getMatchedFilePaths([folder]);
      const fileMap = groupFilesByName(file);

      for (const [className, { dtoPath, requestPath }] of Object.entries(fileMap)) {
        if (!dtoPath) {
          console.warn(`Missing .dto file for class: ${className}`);
          continue;
        }

        try {
          // Load DTO class (phần này giữ nguyên)
          delete require.cache[require.resolve(dtoPath)];
          const dtoModule = require(dtoPath);

          const classNameCapitalized = className
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');

          const possibleDtoNames = [
            `${classNameCapitalized}DTO`,
            classNameCapitalized,
            `${classNameCapitalized}RequestDTO`,
            `${classNameCapitalized}Request`
          ];

          let dtoClass;
          for (const name of possibleDtoNames) {
            if (dtoModule[name] && typeof dtoModule[name] === 'function') {
              dtoClass = dtoModule[name];
              break;
            }
          }

          if (!dtoClass) {
            console.error(`Invalid DTO class in file: ${dtoPath}`);
            console.log(`Available exports: ${Object.keys(dtoModule).join(', ')}`);
            continue;
          }

          // Load request module
          const requestModule = await import(requestPath);

          // Flexible request export detection với type checking
          const possibleRequestNames = [
            classNameCapitalized + 'Request',
            classNameCapitalized,
            'default'
          ];

          let requestData;
          for (const name of possibleRequestNames) {
            const candidate = requestModule[name];
            if (candidate && (isDTOBuilderInstance(candidate) || hasOptions(candidate))) {
              requestData = isDTOBuilderInstance(candidate) ? candidate.execute() : candidate;
              break;
            }
          }

          // Type guard functions
          function isDTOBuilderInstance(obj: any): obj is { execute: () => any } {
            return typeof obj?.execute === 'function';
          }

          function hasOptions(obj: any): obj is { options: any[] } {
            return Array.isArray(obj?.options);
          }

          // If still not found, try to find any export with options (với type checking)
          if (!requestData) {
            for (const [key, value] of Object.entries(requestModule)) {
              if (isDTOBuilderInstance(value) || hasOptions(value)) {
                requestData = isDTOBuilderInstance(value) ? value.execute() : value;
                break;
              }
            }
          }

          if (!requestData?.options?.[0]?.steps?.[0]?.step?.[0]?.body) {
            console.warn(`No valid body found in request for class: ${className}`);
            console.log(`Request data structure:`, requestData);
            console.log('Available exports:', Object.keys(requestModule));
            console.log('-----------------------');
            continue;
          }

          // Phần còn lại giữ nguyên
          const payload = requestData.options[0].steps[0].step[0].body;
          const result = await generateErrorCases(dtoClass, payload);
          const testCasePayload = result.map(({ body, expects }) => ({
            body,
            expects,
          }));

          const outputFilePath = path.join(outputDir, `${className}.payload.json`);

          fs.writeFileSync(
            outputFilePath,
            JSON.stringify(testCasePayload, null, 4),
            'utf-8'
          );

          console.log(`✅ Successfully created: ${outputFilePath}`);
          console.log(`File content length: ${testCasePayload.length} cases`);
          console.log('-----------------------');
          payloadGenerated = true;

        } catch (error) {
          console.error(`❌ Error processing class: ${className}`, error);
          if (error instanceof Error) {
            console.error(`Stack trace: ${error.stack}`);
          }
        }
      }
    }

    if (!payloadGenerated) {
      console.warn(`No payload.json was generated for: ${dtoName}`);
    }
  } catch (error) {
    console.error(`❌ Critical error in genBodyRequest:`, error);
    if (error instanceof Error) {
      console.error(`Stack trace: ${error.stack}`);
    }
    throw error;
  }
}