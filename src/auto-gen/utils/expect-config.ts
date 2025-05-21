import { HEADER_LIST, VAR } from "../enums";
export function executeFunction(
  path: string, 
  action: string, 
  payload: unknown[] | unknown,
  filter: string[] = [], 

) {
  return {
    path,
    action,
    payload,
    filter,
    isArrayMapping: Array.isArray(payload),
    headers: HEADER_LIST.create({token: VAR.token})
  };
}