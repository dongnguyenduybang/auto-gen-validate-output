import {
  SuccessResponse,
  FailResponse,
  transformDataResponse,
  successResponse,
  failResponse,
} from '../structures/responses';

export function handleResponse(data: {
  ok: boolean;
  data: any;
  errors?: { [key: string]: any };
}): SuccessResponse | FailResponse {
  if (data.ok === true) {
    const dataResponse = transformDataResponse(data.data);
    return successResponse([dataResponse]);
  } else {
    const errorDetails = Object.values(data.errors || {}).flat();
    return failResponse(1000, 'Invalid argument', errorDetails);
  }
}
