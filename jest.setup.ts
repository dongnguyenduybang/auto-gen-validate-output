import { initializeGlobalVariables } from './src/auto-gen/global-var';
import {
  getOrThrow,
  setupConfiguration,
} from './src/auto-gen/utils/get-config';

setupConfiguration();

initializeGlobalVariables();

try {
  globalThis.url = getOrThrow<string>('host');
  globalThis.globalVariables = new Map<string, any>();
  globalThis.local = 'http://localhost:3000';
} catch (error) {
  console.error('Error:', error.message);
}
