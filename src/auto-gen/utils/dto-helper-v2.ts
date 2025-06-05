import { generateErrorVariantsForField, getDecorators, softErrorFromMap } from "./dto-helper";

export function generateStructuredErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
) {
  const instance = new dtoClass();
  const keys = Object.keys(instance);
  
  if (keys.length === 0) {
    console.warn(`No found keys in DTO class: ${dtoClass.name}`);
    return [];
  }

  const validValues: Record<string, any> = {};
  const errorCasesByField: Record<string, any[]> = {};
  
  keys.forEach((field) => {
    const decorators = getDecorators(instance, field);
    const fieldValue = payload[field] !== undefined ? payload[field] : instance[field];
    
    validValues[field] = fieldValue;

    const variants = generateErrorVariantsForField(fieldValue, decorators, dtoClass, field);
    errorCasesByField[field] = Array.isArray(variants) ? variants : [];
  });

  const allTestCases = [];

  keys.forEach((rootField) => {
    const errorVariants = errorCasesByField[rootField];
    errorVariants.forEach((errorValue) => {

      const baseCase = { ...validValues };
      
      baseCase[rootField] = errorValue;
      
      const testCase = { ...baseCase };
      const errors = softErrorFromMap(testCase, dtoClass);
      allTestCases.push({
        body: testCase,
        expects: errors.length > 0 ? errors : []
      });
      
      keys.forEach((otherField) => {
        if (otherField !== rootField) {
          const otherErrorVariants = errorCasesByField[otherField];
          
          otherErrorVariants.forEach((otherErrorValue) => {
            const combinedCase = { ...baseCase };
            combinedCase[otherField] = otherErrorValue;
            
            const combinedErrors = softErrorFromMap(combinedCase, dtoClass);
            
            allTestCases.push({
              body: combinedCase,
              expects: combinedErrors.length > 0 ? combinedErrors : []
            });
          });
        }
      });
    });
  });

  const allValidCase = { ...validValues };
  const validErrors = softErrorFromMap(allValidCase, dtoClass);
  allTestCases.push({
    body: allValidCase,
    expects: validErrors.length > 0 ? validErrors : []
  });

  return removeDuplicateTestCases(allTestCases);
}

function removeDuplicateTestCases(testCases) {
  const seen = new Set<string>();
  const uniqueTestCases = [];

  testCases.forEach((testCase) => {
    const bodyString = JSON.stringify(testCase.body, Object.keys(testCase.body).sort());
    
    if (!seen.has(bodyString)) {
      seen.add(bodyString);
      uniqueTestCases.push(testCase);
    }
  });

  return uniqueTestCases;
}

export function generateErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
) {
  return generateStructuredErrorCases(dtoClass, payload);
}
