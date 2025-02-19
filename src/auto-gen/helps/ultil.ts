import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';

import { getMetadataStorage } from 'class-validator';
import { ValidationRule } from './structures/responses';

function getFileNameWithoutExtension(filePath: string): string {
  const fileName = path.basename(filePath);
  return fileName.split('.')[0];
}

export function pairFiles(
  requestsDir: string,
  payloadsDir: string,
): { requestConfig: string; payload: string; name: string }[] {
  const requestFiles = fs.readdirSync(requestsDir);
  const payloadFiles = fs.readdirSync(payloadsDir);

  const pairedFiles: {
    requestConfig: string;
    payload: string;
    name: string;
  }[] = [];

  for (const requestFile of requestFiles) {
    const requestFileName = getFileNameWithoutExtension(requestFile);

    for (const payloadFile of payloadFiles) {
      const payloadFileName = getFileNameWithoutExtension(payloadFile);

      if (requestFileName === payloadFileName) {
        pairedFiles.push({
          name: requestFileName,
          requestConfig: path.join(requestsDir, requestFile),
          payload: path.join(payloadsDir, payloadFile),
        });
      }
    }
  }

  return pairedFiles;
}

export function getValidationFromDTOResponse(dtoClass: any): ValidationRule[] {
  const rulesPush: Record<string, Partial<ValidationRule>> = {};
  const metadataStorage = getMetadataStorage();
  const validationMetadatas = metadataStorage.getTargetValidationMetadatas(
    dtoClass,
    '',
    false,
    false,
  );

  for (const metadata of validationMetadatas) {
    const field = metadata.propertyName;

    if (!rulesPush[field]) {
      rulesPush[field] = { field };
    }

    const rule = rulesPush[field];

    if (metadata.name === 'isString') {
      rule.type = 'string';
    } else if (metadata.name === 'isNumber') {
      rule.type = 'number';
    } else if (metadata.name === 'isBoolean') {
      rule.type = 'boolean';
    } else if (metadata.name === 'isArray') {
      rule.type = 'array';
    } else if (metadata.name === 'isObject') {
      rule.type = 'object';
    }

    if (metadata.type === 'isDefined' || metadata.type === 'isNotEmpty') {
      rule.required = true;
    }

    if (metadata.constraints && metadata.constraints.length > 0) {
      metadata.constraints.forEach((constraint: any) => {
        if (typeof constraint === 'number') {
          if (metadata.name === 'min') {
            rule.min = constraint;
          } else if (metadata.name === 'max') {
            rule.max = constraint;
          }
        } else if (typeof constraint === 'string') {
        }
      });
    }

    if (metadata.type === 'customValidation') {
      if (metadata.name === 'minLength') {
        rule.minLength = metadata.constraints[0];
      } else if (metadata.name === 'maxLength') {
        rule.maxLength = metadata.constraints[0];
      } else if (metadata.name === 'arrayMinSize') {
        rule.minArray = metadata.constraints[0];
      } else if (metadata.name === 'arrayMaxSize') {
        rule.maxArray = metadata.constraints[0];
      } else if (metadata.name === 'minDate') {
        rule.minDate =
          typeof metadata.constraints[0] === 'function'
            ? metadata.constraints[0]()
            : metadata.constraints[0];
      } else if (metadata.name === 'maxDate') {
        rule.maxDate =
          typeof metadata.constraints[0] === 'function'
            ? metadata.constraints[0]()
            : metadata.constraints[0];
      }
    }
  }
  Object.keys(rulesPush).forEach((field) => {
    const rule = rulesPush[field];
    if (rule.required === undefined) {
      rule.optional = true;
    }
  });

  return Object.values(rulesPush) as ValidationRule[];
}

export function getLength(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  return value.length;
}

export function replaceClassName(input: string): any {
  const cleanedInput = input.replace(/DTO$/, '');

  const cleanedClassname = cleanedInput
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return { text: cleanedInput, text2: cleanedClassname };
}
