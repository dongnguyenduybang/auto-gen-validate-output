
import { setupConfiguration, getOrThrow } from './helps/get-config';
setupConfiguration()

export function initializeGlobalVariables() {
  try {
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    globalThis.local = 'http://localhost:3000';
    console.log('global var get successfully.');
  } catch (error) {
    console.error('error get global variables:', error.message);
    throw error;
  }
}