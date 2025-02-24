import { setupConfiguration, getOrThrow } from './src/auto-gen/helps/get-config';
setupConfiguration();

try {

  globalThis.url = getOrThrow<string>('host');
  globalThis.local = 'http://localhost:3000'
} catch (error) {
  console.error('Error:', error.message);
}