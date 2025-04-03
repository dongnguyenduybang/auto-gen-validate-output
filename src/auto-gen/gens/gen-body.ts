// import * as path from 'path';
// import * as fs from 'fs';
// import { generateErrorCases } from '../helps/dto-helper';
// import { getAllFiles, getBodyByAction, getStepByAction, groupFilesByName, toCamelCase } from '../helps/utils';
// import { Sagas } from './type-saga';

// export function genBodyPayload(dtoName, allStep: any, getStep: any) {
//   const dtoFolderPath = path.join(__dirname, '../dtos', dtoName);
//   const outputDir = path.join(__dirname, '../expect-json');
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }
//   const files = getAllFiles(dtoFolderPath);
//   const fileMap = groupFilesByName(files);

//   // Object.entries(fileMap).forEach(([className, { dtoPath }]) => {
//   //   if (!dtoPath) {
//   //     console.warn(`Missing .dto file for class: ${className}`);
//   //     return;
//   //   }

//   //   try {
//   //     // eslint-disable-next-line @typescript-eslint/no-var-requires
//   //     const dtoModule = require(dtoPath);
//   //     const classNameCapitalized =
//   //       className
//   //         .split('-')
//   //         .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//   //         .join('') + 'DTO';

//   //     const dtoClass = dtoModule[classNameCapitalized];

//   //     if (
//   //       typeof dtoClass !== 'function' ||
//   //       !/^\s*class\s/.test(dtoClass.toString())
//   //     ) {
//   //       console.error(`Invalid DTO class in file: ${dtoPath}`);
//   //       return;
//   //     }
//   //     const getBody = step.body
//   //     console.log('Using payload from Saga:', getBody);
//   //     const result = generateErrorCases(dtoClass, getBody);
//   //     const testCasePayload = result.map(({ testcaseGen, expectedDetail }) => ({
//   //       body: testcaseGen,
//   //       expects: expectedDetail,
//   //     }));

//   //     const outputFilePath = path.join(outputDir, `${className}.payload.json`);
//   //     fs.writeFileSync(
//   //       outputFilePath,
//   //       JSON.stringify(testCasePayload, null, 4),
//   //       'utf-8',
//   //     );
//   //     console.log(`Success: ${outputFilePath}`);
//   //   } catch (error) {
//   //     console.error(`Error processing class: ${className}`, error);
//   //   }
//   // });
// }