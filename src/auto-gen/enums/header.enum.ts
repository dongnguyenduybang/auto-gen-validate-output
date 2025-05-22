import { HeaderOptions } from "../utils/declarations";

export const HEADER_LIST = {
  create: ({
    token,
    userId,
    ...customHeaders
  }: HeaderOptions) => {
    const headers: Record<string, string> = {
      'x-session-token': token,
      'x-user-id': userId,
      ...customHeaders,
    };
    return headers;
  },
};
