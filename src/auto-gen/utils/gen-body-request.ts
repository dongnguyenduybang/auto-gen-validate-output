import path from "path";
import fs from "fs";
import { GenRequestOptions, RequestHeaders } from "./declarations";
import { findAllFoldersWithDtoAndRequest, getMatchedFilePaths, groupFilesByName } from "./helper";
import { requestGeneratorInterface } from "./swagger-help";
import { generateErrorCases } from "./dto-helper-v2";

export async function genBodyRequests(
  dtoName: string,
  cluster: string,
  options: GenRequestOptions = {},
  headers: RequestHeaders = {}) {
  const baseRequestsPath = path.join(__dirname, '../test-requests');
  const foundFolders = findAllFoldersWithDtoAndRequest(baseRequestsPath, dtoName);

  for (const folder of foundFolders) {
    const outputDir = folder.path;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const file = getMatchedFilePaths(foundFolders);
    const fileMap = groupFilesByName(file);

    for (const [className, { dtoPath }] of Object.entries(fileMap)) {
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

        const [generator] = requestGeneratorInterface;
        const requestData = await generator(className, dtoName, cluster, options, headers);

        const payload = requestData.body;
        const result = await generateErrorCases(dtoClass, payload);
        const testCasePayload = result.map(({ body, expects }) => ({
          body,
          expects,
        }));

        const outputFilePath = path.join(
          outputDir,
          `${className}.payload.json`,
        );
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
}