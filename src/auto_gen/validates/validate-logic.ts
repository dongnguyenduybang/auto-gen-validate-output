import { ValidationResult, ValidationRule } from "../helps/structures/responses";

export function validateLogicData(data: any, rules: ValidationRule[], payload?: any): ValidationResult {
  const errors: string[] = [];

  for (const rule of rules) {
    const value = data[rule.field];

    if (rule.optional && (value === undefined || value === null || value === "")) {
      continue;
    }

    if (rule.required && (value === undefined || value === null || value === "")) {
      errors.push(`Field "${rule.field}" is required`);
      continue;
    }

    if (rule.type && typeof value !== rule.type) {
      errors.push(`Field "${rule.field}" must be of type "${rule.type}", but got "${typeof value}"`);
      continue;
    }

    if (rule.type === "string" && rule.minLength && value.length < rule.minLength) {
      errors.push(`Field "${rule.field}" must have a minimum length of ${rule.minLength}`);
    }

    if (rule.type === "string" && rule.maxLength && value.length > rule.maxLength) {
      errors.push(`Field "${rule.field}" must have a maximum length of ${rule.maxLength}`);
    }

    if (rule.type === "array") {
      if (rule.minArray && value.length < rule.minArray) {
        errors.push(`Field "${rule.field}" must have at least ${rule.minArray} items`);
      }
      if (rule.maxArray && value.length > rule.maxArray) {
        errors.push(`Field "${rule.field}" must have at most ${rule.maxArray} items`);
      }
    }

    if (rule.type === "date") {
      if (rule.minDate && value < rule.minDate) {
        errors.push(`Field "${rule.field}" must be on or after ${rule.minDate.toISOString()}`);
      }
      if (rule.maxDate && value > rule.maxDate) {
        errors.push(`Field "${rule.field}" must be on or before ${rule.maxDate.toISOString()}`);
      }
    }

    if (rule.type === "string" && rule.startsWith && !value.startsWith(rule.startsWith)) {
      errors.push(`Field "${rule.field}" must start with "${rule.startsWith}"`);
    }

    

  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}