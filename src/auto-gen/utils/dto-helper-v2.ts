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

  // Duyệt qua từng field làm "root"
  keys.forEach((rootField) => {
    const errorVariants = errorCasesByField[rootField];

    // Với mỗi error variant của root field
    errorVariants.forEach((errorValue) => {
      // Tạo base case với tất cả các field khác có giá trị đúng
      const baseCase = { ...validValues };
      
      // Thay thế giá trị của root field bằng error value
      baseCase[rootField] = errorValue;
      
      // Tạo test case cho trường hợp này
      const testCase = { ...baseCase };
      const errors = softErrorFromMap(testCase, dtoClass);
      allTestCases.push({
        body: testCase,
        expects: errors.length > 0 ? errors : []
      });
      
      // Tạo thêm các case kết hợp với từng field khác bị lỗi
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

  // Thêm case tất cả đều đúng
  const allValidCase = { ...validValues };
  const validErrors = softErrorFromMap(allValidCase, dtoClass);
  allTestCases.push({
    body: allValidCase,
    expects: validErrors.length > 0 ? validErrors : []
  });

  // Loại bỏ các test case trùng lặp
  return removeDuplicateTestCases(allTestCases);
}

// Hàm loại bỏ test cases trùng lặp
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

// Hàm thay thế cho generateErrorCases gốc
export function generateErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
) {
  return generateStructuredErrorCases(dtoClass, payload);
}
