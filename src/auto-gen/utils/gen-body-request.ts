import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper-v2';
import {
  findAllFoldersWithDtoAndRequest,
  getMatchedFilePaths,
  groupFilesByName,
} from './helper';

// Type guard functions
function isDTOBuilderInstance(
  obj: any,
): obj is { execute: () => Promise<any> } {
  return typeof obj?.execute === 'function';
}

function hasOptions(obj: any): obj is { options: any[] } {
  return Array.isArray(obj?.options);
}

function isPromise(obj: any): obj is Promise<any> {
  return obj && typeof obj === 'object' && typeof obj.then === 'function';
}

function isFunction(obj: unknown): obj is (...args: unknown[]) => unknown {
  return typeof obj === 'function';
}

function hasValidSteps(obj: any): obj is { steps: any[] } {
  return obj && obj.steps && Array.isArray(obj.steps);
}

export async function genBodyRequest(dtoName: string) {
  try {
    if (!fs.existsSync(dtoName)) {
      console.error(`❌ Target folder does not exist: ${dtoName}`);
      return;
    }

    const foundFolders = findAllFoldersWithDtoAndRequest(dtoName);

    if (foundFolders.length === 0) {
      console.error(
        `No folders with .dto.ts and .request.ts found in: ${dtoName}`,
      );
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
      for (const [className, { dtoPath, requestPath }] of Object.entries(
        fileMap,
      )) {
        if (!dtoPath) {
          console.warn(`Missing .dto file for class: ${className}`);
          continue;
        }

        try {
          // Load DTO class
          delete require.cache[require.resolve(dtoPath)];
          const dtoModule = await import(dtoPath);

          const classNameCapitalized = className
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');

          const possibleDtoNames = [
            `${classNameCapitalized}DTO`,
            classNameCapitalized,
            `${classNameCapitalized}RequestDTO`,
            `${classNameCapitalized}Request`,
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
            console.log(
              `Available exports: ${Object.keys(dtoModule).join(', ')}`,
            );
            continue;
          }

          // Load request module
          const requestModule = await import(requestPath);

          // Flexible request export detection
          const possibleRequestNames = [
            classNameCapitalized + 'Request',
            classNameCapitalized,
            'default',
          ];

          let requestData: any;
          for (const name of possibleRequestNames) {
            let candidate = requestModule[name];

            // If candidate is a function, execute it
            if (isFunction(candidate)) {
              try {
                candidate = candidate(); // Execute function

                // If result is a Promise, await it
                if (isPromise(candidate)) {
                  candidate = await candidate;
                }
              } catch (error) {
                console.error(`Error executing function ${name}:`, error);
                continue;
              }
            }
            // If candidate is a Promise, resolve it
            else if (isPromise(candidate)) {
              candidate = await candidate;
            }

            // Check if candidate has the expected data structure
            if (hasValidSteps(candidate)) {
              requestData = candidate;
              break;
            }

            // Fallback: check for other patterns
            if (isDTOBuilderInstance(candidate)) {
              requestData = await candidate.execute();
              break;
            } else if (hasOptions(candidate)) {
              requestData = candidate;
              break;
            }
          }

          // Fallback: Try to find any export with execute or options
          if (!requestData) {
            for (const [key, value] of Object.entries(requestModule)) {
              let candidate = value;

              // Execute function if needed
              if (isFunction(candidate)) {
                try {
                  candidate = candidate(); // Execute function

                  // If result is a Promise, await it
                  if (isPromise(candidate)) {
                    candidate = await candidate;
                  }
                } catch (error) {
                  console.error(
                    `Fallback: Error executing function ${key}:`,
                    error,
                  );
                  continue;
                }
              }
              // Resolve Promise if needed
              else if (isPromise(candidate)) {
                candidate = await candidate;
              }

              // Check if candidate has the expected data structure
              if (hasValidSteps(candidate)) {
                requestData = candidate;
                break;
              }

              if (isDTOBuilderInstance(candidate)) {
                requestData = await candidate.execute();

                break;
              } else if (hasOptions(candidate)) {
                requestData = candidate;

                break;
              }
            }
          }

          // Validate requestData structure
          if (!requestData?.steps?.[0]?.actions?.main?.[0]?.config?.body) {
            console.warn(
              `No valid body found in request for class: ${className}`,
            );
            console.log('-----------------------');
            continue;
          }

          // Extract payload from the main action's body
          const payload = requestData.steps[0].actions.main[0].config.body;

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
