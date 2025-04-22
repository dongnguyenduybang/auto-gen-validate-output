import WebSocket from 'ws';

export interface IContext {
  getValue(path: string | string[]): any;
  setValue(key: string, value: any): void;
  mergeData(newData: Record<string, any>): void;
  debug(): void;
}

export class TestContext implements IContext {
  private data: Record<string, any> = {
    wsActor: [],
    wsRecipient: [],
  };
  private versions: Record<string, number> = {};

  setValue(key: string, value: any): void {
    if (key === 'wsActor' || key === 'wsRecipient') {
      this.data[key] = value; // Lưu mảng trực tiếp
    } else {
      const version = this.versions[key] || 0;
      const versionedKey = version > 0 ? `${key}${version}` : key;
      this.data[versionedKey] = value;
      this.versions[key] = version + 1;
    }
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

export class WSSContext implements IContext {
  private data: Record<string, any> = {
    wsActor: [],
    wsRecipient: [],
  };
  private versions: Record<string, number> = {};

  setValue(key: string, value: any): void {
    if (key === 'wsActor' || key === 'wsRecipient') {
      this.data[key] = value; // Lưu mảng trực tiếp
    } else {
      const version = this.versions[key] || 0;
      const versionedKey = version > 0 ? `${key}${version}` : key;
      this.data[versionedKey] = value;
      this.versions[key] = version + 1;
    }
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
    console.log('WSS Context:', JSON.stringify(this.data, null, 2));
  }
}