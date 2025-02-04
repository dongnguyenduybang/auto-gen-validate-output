import {
  getDecorators,
  generateErrorVariantsForField,
  combineFields,
  generateCombinations,
  mapErrorToEnum,
} from '../helps/dto-helper';

export function generateErrorCasesWithEnum(dtoClass: any): any[] {
  const instance = new dtoClass();
  const keys = Object.keys(instance);
  const errorCasesByField: Record<string, any[]> = {};

  keys.forEach((field) => {
    const decorators = getDecorators(instance, field);
    errorCasesByField[field] = generateErrorVariantsForField(
      instance[field],
      decorators,
    );
  });

  const fields = Object.keys(errorCasesByField);
  const allErrorCombinations = generateCombinations(fields, errorCasesByField);

  return allErrorCombinations.map((combination) => {
    if (typeof combination === 'object' && combination !== null) {
      const testcaseGen = { ...combination };

      const expectedDetail = fields
        .map((field) => {
          const value = testcaseGen[field];
          const decorators = getDecorators(instance, field);
          return mapErrorToEnum(field, value, decorators);
        })
        .filter((error) => error !== null);

      return { testcaseGen, expectedDetail };
    } else {
      console.error(combination);
    }
  });
}
