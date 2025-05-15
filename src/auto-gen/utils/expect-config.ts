import { HEADER_LIST, VAR } from "../enums";
import { ExpectData } from "./declarations";

export const executeFunction = (
  path: string,
  action: string,
  requestConfig: {
    body: any;
    header?: any;
  },
  fields?: string[],
  expect?: any[]
): ExpectData => ({
  path,
  action,
  payload: {
    body: requestConfig.body,
    header: requestConfig.header || HEADER_LIST.create({ token: VAR.token })
  },
  ...(fields && { fields }),
  ...(expect && { expect })
});