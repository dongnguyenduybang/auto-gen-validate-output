import { getOrThrow, setupConfiguration } from './utils/get-config';

setupConfiguration();

export function initializeGlobalVariables() {
  try {
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    console.log('global var get successfully.');
  } catch (error) {
    console.error('error get global variables:', error.message);
    throw error;
  }
}
