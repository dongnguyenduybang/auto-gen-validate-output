import { TestContext } from '../../utils/text-context';
import { resolveValidIf } from '../../utils/helper';

describe('Unit test for function resolveValidIf', () => {
  let field, obj, payload, context;
  beforeAll(() => {
    field = 'testField';
    context = new TestContext();
    context.setValue('var1', '10');
    obj = { key1: '5', key2: '10' };
    payload = { key3: '15' };
  });

  // test condition2
  describe('test condition2', () => {
    it('should resolve condition2 from response', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '===',
        condition2: 'response.key2',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({
        isValid: false,
        errorMessage: `${field}: key1 must === 10 (actual: 5, expected: 10)`,
      }); // 5 === 10 => false
    });

    it('should resolve condition2 from payload', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '<',
        condition2: 'payload.key3',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({
        isValid: true,
      }); // 5 < 15 => true
    });

    it('should resolve condition2 from context variable', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '<',
        condition2: '{{var1}}',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 < 10 => true
    });

    it('should resolve condition2 as static value', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '===',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 === 5 => true
    });

    it('should handle undefined condition2 from response', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '===',
        condition2: 'response.nonExistent',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({
        isValid: false,
        errorMessage: `${field}: key1 must === NaN (actual: 5, expected: NaN)`,
      }); // value2 is NaN
    });
    // test trim chuỗi
    it('should trim string values before comparison', () => {
      const objWithSpaces = { key1: '  5  ' };
      const validIfMetadata = {
        condition: 'key1',
        operator: '===',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        objWithSpaces,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // '  5  ' trim to '5' === '5' => true
    });
    // test trường hợp condition không tồn tại
    it('should return isValid: false when condition is not found in obj', () => {
      const validIfMetadata = {
        condition: 'nonExistent',
        operator: '===',
        condition2: '10',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({
        isValid: false,
        errorMessage: `${field}: Condition 'nonExistent' not found in response object.`,
      });
    });
  });
  // test các toán tử
  describe('test operators', () => {
    it('should handle > operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '>',
        condition2: '3',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 > 3 => true
    });

    it('should handle < operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '<',
        condition2: '10',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 < 10 => true
    });

    it('should handle === operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '===',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 === 5 => true
    });

    it('should handle !== operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '!==',
        condition2: '10',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 !== 10 => true
    });

    it('should handle >= operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '>=',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 >= 5 => true
    });

    it('should handle <= operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: '<=',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({ isValid: true }); // 5 <= 5 => true
    });

    it('should return error for unsupported operator', () => {
      const validIfMetadata = {
        condition: 'key1',
        operator: 'invalid',
        condition2: '5',
      };
      const result = resolveValidIf(
        field,
        validIfMetadata,
        null,
        obj,
        payload,
        context,
      );
      expect(result).toEqual({
        isValid: false,
        errorMessage: 'invalid: Unsupported operator.',
      });
    });
  });
});
