/* eslint-disable prettier/prettier */
import { initializeGlobalVariables } from './src/auto-gen/global-var';
import {
  setupConfiguration,
  getOrThrow,
} from './src/auto-gen/helps/get-config';
setupConfiguration();

initializeGlobalVariables();

try {
  globalThis.url = getOrThrow<string>('host');
  globalThis.globalVariables = new Map<string, any>();
  globalThis.local = 'http://localhost:3000';
} catch (error) {
  console.error('Error:', error.message);
}
