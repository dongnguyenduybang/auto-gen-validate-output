// swagger-integration.ts
import SwaggerParser from '@apidevtools/swagger-parser';
// import { ActionToSwaggerMap } from './api-mapping';
// import path from 'path';
import path from 'path';
import { getSwaggerOperationForAction } from './action-mapping';
interface SwaggerOperationInfo {
  method: string;
  path: string;
  operationId: string;
  requestSchema?: any;
  responseSchema?: any;
}

let swagger: any = null;

export async function getSwagger() {
  if (!swagger) {
    const swaggerPath = path.resolve(
      __dirname,
      '../swagger/commands-chat.swagger.json',
    );
    swagger = await SwaggerParser.dereference(swaggerPath);
  }
  return swagger;
}

export async function buildSwaggerOperationMap() {
  const swagger = await getSwagger();
  const operationMap: Record<string, SwaggerOperationInfo> = {};
  for (const [path, methods] of Object.entries(swagger.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (typeof operation === 'object' && operation.operationId) {
        operationMap[operation.operationId] = {
          method: method.toUpperCase(),
          path,
          operationId: operation.operationId,
          requestSchema:
            operation.requestBody?.content?.['application/json']?.schema,
          responseSchema:
            operation.responses?.['200']?.content?.['application/json']?.schema,
        };
      }
    }
  }

  return operationMap;
}

export async function getOperationInfo(operationId: string) {
  const operationMap = await buildSwaggerOperationMap();
  const operation = operationMap[operationId];

  if (!operation) {
    throw new Error(`Operation ${operationId} not found in Swagger`);
  }

  return operation;
}

export async function buildRequestFromAction(
  action: string,
  variables: any,
  header: any,
) {
  const operation = await getSwaggerOperationForAction(action);

  // Auto-build request body từ schema và variables
  const requestBody: any = {};

  if (operation.requestSchema) {
    Object.keys(operation.requestSchema.properties).forEach((key) => {
      if (variables[key] !== undefined) {
        requestBody[key] = variables[key];
      } else if (operation.requestSchema.required?.includes(key)) {
        console.warn(`Missing required field: ${key}`);
      }
    });
  }

  return {
    body: requestBody,
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    operationInfo: operation, // Thêm thông tin operation nếu cần
  };
}
