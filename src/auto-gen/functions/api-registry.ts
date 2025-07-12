import { ApiRegistry } from '../utils/declarations';
import { TestContext } from '../utils/text-context';
import { createApiFunction } from './api-factory';

const API_REGISTRY: ApiRegistry = {
};

export function getApiFunctions(action: string, context: TestContext) {
  const config = API_REGISTRY[action];

  return createApiFunction(config, context);
}
