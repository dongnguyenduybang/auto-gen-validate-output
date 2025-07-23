import { getOrThrow, setupConfiguration } from '../utils/get-config';
import { TestContext } from '../utils/text-context';

setupConfiguration();
export default async function setup() {
  try {
    // set urls from file yaml
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    globalThis.globalContext = new TestContext(); // set context
  } catch (error) {
    console.error('Setup failed:', error);
    throw error;
  }
}
