import { HEADER_LIST, VAR } from "../enums";
import { ExpectData } from "./declarations";
<<<<<<< HEAD

=======
>>>>>>> main
export const executeFunction = (
  path: string,
  action: string,
  requestConfig: {
<<<<<<< HEAD
    body: any;
    header?: any;
  },
  fields?: string[],
  expect?: any[]
=======
    body: object;
    header?: string[];
  },
  fields?: string[],
  expect?: string[]
>>>>>>> main
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