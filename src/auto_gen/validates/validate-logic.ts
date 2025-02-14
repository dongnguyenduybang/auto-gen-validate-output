import { error } from "console";
import { MockUserResponseDTO } from "../dto_response/mock-user-response.dto";

export function testMockUserLogic(mockUserResponse: MockUserResponseDTO, payload: any) {
  let errors = []

  if (!mockUserResponse.username.startsWith(payload.prefix)) {
    errors.push('first character of the username must start with the name of the prefix')
  }

  if (mockUserResponse.securityKey.length !== 64 || mockUserResponse.recoverKey.length !== 64) {
    errors.push('invalid length for securityKey or recoverKey')
  }

  if (mockUserResponse.badge !== payload.badge) {
    errors.push('response badges are different from payloads')
  }

  if (!mockUserResponse.username.includes(mockUserResponse.userId)) {
   errors.push(`username "${mockUserResponse.username}" does not contain userId "${mockUserResponse.userId}"`);
  }

  if (typeof mockUserResponse.token !== "string" || mockUserResponse.token.length === 0) {
    errors.push(`${mockUserResponse.token} must be a string, but got "${mockUserResponse.token}"`);
  }

  if (typeof mockUserResponse.userId !== "string" || mockUserResponse.userId.length === 0) {
    errors.push(`${mockUserResponse.userId} must be a string, but got "${mockUserResponse.userId}"`);
  }

  if (typeof mockUserResponse.securityKey !== "string" || mockUserResponse.securityKey.length === 0) {
    errors.push(`${mockUserResponse.securityKey} must be a string`);
  }

  if (typeof mockUserResponse.recoverKey !== "string" || mockUserResponse.recoverKey.length === 0) {
    errors.push(`${mockUserResponse.recoverKey} must be a string`);
  }

  if (typeof mockUserResponse.badge !== "number") {
    errors.push(`${mockUserResponse.badge} must be a number`);
  }

  if(errors.length === 0 ){
    return {isValid: true, errors: null}
  }else{
    return {isValid: false, errors: errors}
  }
}


