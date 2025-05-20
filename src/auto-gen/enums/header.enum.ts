import { HeaderOptions } from '../utils/declarations';

export const HEADER_LIST = {
  create: ({
    token,
    userId,
    deviceId,
    role,
    ...customHeaders
  }: HeaderOptions) => {
    const headers: Record<string, string> = {
      'x-session-token': token,
      'x-user-id': userId,
      ...customHeaders,
    };

    if (deviceId) headers['x-device-id'] = deviceId;
    if (role) headers['x-role'] = role;

    return headers;
  },
};
