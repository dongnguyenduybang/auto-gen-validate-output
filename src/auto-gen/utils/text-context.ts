import { IContext } from './declarations';

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

// export class EventContext {
//   private data: Array<{ action: string; events: string[]; stepIndex: number }> =
//     [];
//   private stepIndex: number = 0; // Biến nội bộ để theo dõi stepIndex

//   setValue(action: string, events: string[]): void {
//     this.data.push({ action, events, stepIndex: this.stepIndex });
//     this.stepIndex++; // Tăng stepIndex sau mỗi lần setValue
//   }

//   getValue(
//     path: string | string[],
//   ):
//     | Array<{ action: string; events: string[]; stepIndex: number }>
//     | undefined {
//     if (!path || path === 'all' || (Array.isArray(path) && path.length === 0)) {
//       return this.data;
//     }
//     const action = Array.isArray(path) ? path.join('.') : path;
//     return this.data.filter((item) => item.action === action);
//   }

//   debug(): void {
//     console.log('EventContext:', JSON.stringify(this.data, null, 2));
//   }
// }

export class EventContext {
  private events: Array<{
    action: string;
    events: any[];
    stepIndex: number;
  }> = [];

  public addEvent(action: string, newEvents: any[], stepIndex: number) {
    // Lọc các sự kiện trùng lặp dựa trên id
    const uniqueNewEvents = newEvents.filter(
      (newEvent) =>
        !this.events
          .filter((e) => e.action === action)
          .flatMap((e) => e.events)
          .some((existingEvent) => existingEvent.id === newEvent.id),
    );

    if (uniqueNewEvents.length === 0) {
      return; // Không có sự kiện mới để thêm
    }

    // Tìm mục hiện có cho action, bỏ qua stepIndex
    const existingEntry = this.events.find((e) => e.action === action);

    if (existingEntry) {
      existingEntry.events.push(...uniqueNewEvents);
      existingEntry.stepIndex = 0; // Luôn sử dụng stepIndex: 0
    } else {
      this.events.push({
        action,
        events: uniqueNewEvents,
        stepIndex: 0, // Ép buộc stepIndex là 0
      });
    }
  }

  public getValue() {
    return this.events;
  }

  public debug() {
    console.log('EventContext:', JSON.stringify(this.events, null, 2));
  }
}

export interface ResumeEvent {
  title: string;
  type: string;
  data: {
    id: string;
    time: string;
  };
}

export interface ResumeEntry {
  action: string;
  resume: ResumeEvent[];
}

export class ResumeContext {
  private entries: ResumeEntry[] = [];

  public addResumeEvents(action: string, events: any[], title: string) {
    const resumeEvents: ResumeEvent[] = events.map((event) => ({
      title: title,
      type: event.type,
      source: event.source,
      data: {
        id: event.id,
        time: event.time,
      },
    }));

    const existingEntry = this.entries.find((entry) => entry.action === action);

    if (existingEntry) {
      const newResumeEvents = resumeEvents.filter(
        (newEvent) =>
          !existingEntry.resume.some(
            (existing) => existing.data.id === newEvent.data.id,
          ),
      );
      existingEntry.resume.push(...newResumeEvents);
    } else {
      this.entries.push({
        action,
        resume: resumeEvents,
      });
    }
  }

  public getEntries(): ResumeEntry[] {
    return this.entries;
  }

  // Lấy resume events cho một action cụ thể
  public getResumeEvents(action: string): ResumeEvent[] {
    const entry = this.entries.find((e) => e.action === action);
    return entry ? entry.resume : [];
  }

  public getEventDataByActionAndTitle(
    action: string,
    title: string,
    data,
    type: string,
  ): { id: string; time: string } | null {
    const entry = this.entries.find((e) => e.action === action);

    if (!entry) {
      return null;
    }
    const event = entry.resume.find(
      (e) => e.title === title && (!type || e.type === type),
    );
    return event ? event.data : null;
  }
  public getEventToken(
    action: string,
    title: string,
    data: string,
    type: string,
  ) {
    const dataEvent = this.getEventDataByActionAndTitle(
      action,
      title,
      data,
      type,
    );
    return dataEvent;
  }

  public findResumePoint(action: string, eventId: string, data: string) {
    const entry = this.entries.find((e) => e.action === action);
    if (!entry) return null;

    const index = entry.resume.findIndex((r) => r.data[data] === eventId);

    if (index === -1) return null;

    return {
      action,
      events: entry.resume.slice(index),
      startIndex: index,
    };
  }

  // Gỡ lỗi
  public debug() {
    console.log('ResumeContext:', JSON.stringify(this.entries, null, 2));
  }
}
