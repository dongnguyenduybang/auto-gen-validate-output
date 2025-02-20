import { setupConfiguration, getOrThrow } from './src/auto-gen/helps/get-config';
setupConfiguration();

try {

  globalThis.url = getOrThrow<string>('host');
} catch (error) {
  console.error('Error:', error.message);
}