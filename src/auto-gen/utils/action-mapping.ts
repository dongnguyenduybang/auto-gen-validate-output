import { getOperationInfo } from './swagger-integration';

// api-mapping.ts
interface ActionMapping {
  action: string;
  operationId: string;
}

export const ActionToOperationMap: Record<string, ActionMapping> = {
  CREATE_CHANNEL: {
    action: 'CREATE_CHANNEL',
    operationId: 'CreateChannel', // Khớp với operationId trong Swagger
  },
  SEND_DM_MESSAGE: {
    action: 'SEND_DM_MESSAGE',
    operationId: 'SendDMMessage',
  },
  // Thêm các action khác
};

export async function getSwaggerOperationForAction(action: string) {
  const mapping = ActionToOperationMap[action];
  if (!mapping) {
    throw new Error(`No mapping found for action: ${action}`);
  }

  const operationInfo = await getOperationInfo(mapping.operationId);
  return {
    ...operationInfo,
    action: mapping.action,
  };
}
