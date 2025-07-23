import { IContext } from '../types/test-suites.types';

export class TestContext implements IContext {
  private data: Record<string, any> = {};
  private versions: Record<string, number> = {};

  setValue(key: string, value: any): void {
    const version = this.versions[key] || 0;
    const versionedKey = version > 0 ? `${key}${version}` : key;
    this.data[versionedKey] = value;
    this.versions[key] = version + 1;
  }

  clone(): TestContext {
    const newContext = new TestContext();
    newContext.data = { ...this.data };
    return newContext;
  }

  getValue(path: string | string[]): any {
    const keys = Array.isArray(path) ? path : path.split('.');

    if (keys.length === 1) {
      const directKey = keys[0];
      if (this.data[directKey] !== undefined) {
        return this.data[directKey];
      }
    }

    return keys.reduce((acc, key) => {
      if (acc === undefined || acc === null) return undefined;
      return acc[key];
    }, this.data);
  }
  mergeData(newData: Record<string, any>): void {
    Object.entries(newData).forEach(([key, value]) => {
      this.setValue(key, value);
    });
  }

  debug(): void {
    console.log('Current Context:', JSON.stringify(this.data, null, 2));
  }
}
