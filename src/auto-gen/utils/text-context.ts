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
      this.data[key] = value;
    } else {
      const version = this.versions[key] || 0;
      const versionedKey = version > 0 ? `${key}${version}` : key;
      this.data[versionedKey] = value;
      this.versions[key] = version + 1;
    }
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

export class WSSContext implements IContext {
  public data: Record<string, any> = {
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

export class EventContext {
  private data: Array<{ action: string; events: string[]; stepIndex: number }> =
    [];
  private stepIndex: number = 0; // Biến nội bộ để theo dõi stepIndex

  setValue(action: string, events: string[]): void {
    this.data.push({ action, events, stepIndex: this.stepIndex });
    this.stepIndex++; // Tăng stepIndex sau mỗi lần setValue
  }

  getValue(
    path: string | string[],
  ):
    | Array<{ action: string; events: string[]; stepIndex: number }>
    | undefined {
    if (!path || path === 'all' || (Array.isArray(path) && path.length === 0)) {
      return this.data;
    }
    const action = Array.isArray(path) ? path.join('.') : path;
    return this.data.filter((item) => item.action === action);
  }

  debug(): void {
    console.log('EventContext:', JSON.stringify(this.data, null, 2));
  }
}
