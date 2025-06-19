import { IContext, ResumeEntry, ResumeEvent, Step } from './declarations';

export class TestContext implements IContext {
  private data: Record<string, any> = {};
  private versions: Record<string, number> = {};
  private steps: Step[];
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

export class EventContext {
  public events: Array<{
    author: string;
    events: any[];
  }> = [];

  public addEvent(author: string, newEvents: any[], stepIndex: number) {
    // const uniqueNewEvents = newEvents.filter(
    //   (newEvent) =>
    //     !this.events
    //       .filter((e) => e.action === action)
    //       .flatMap((e) => e.events)
    //       .some((existingEvent) => existingEvent.id === newEvent.id),
    // );

    // if (uniqueNewEvents.length === 0) {
    //   return;
    // }

    const existingEntry = this.events.find((e) => e.author === author);

    if (existingEntry) {
      existingEntry.events.push(...newEvents);
    } else {
      this.events.push({
        author,
        events: newEvents,
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

export class ResumeContext {
  private entries: ResumeEntry[] = [];

  public addResumeEvents(author: string, events: any[], title: string) {
    const resumeEvents: ResumeEvent[] = events.map((event) => ({
      title: title,
      type: event.type,
      source: event.source,
      data: {
        id: event.id,
        time: event.time,
      },
    }));

    const existingEntry = this.entries.find((entry) => entry.author === author);

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
        author,
        resume: resumeEvents,
      });
    }
  }

  public getEntries(): ResumeEntry[] {
    return this.entries;
  }

  // Lấy resume events cho một action cụ thể
  public getResumeEvents(author: string): ResumeEvent[] {
    const entry = this.entries.find((e) => e.author === author);
    return entry ? entry.resume : [];
  }

  public getEventDataByActionAndTitle(
    author: string,
    title: string,
    data,
    type: string,
  ): { id: string; time: string } | null {
    const entry = this.entries.find((e) => e.author === author);

    if (!entry) {
      return null;
    }
    const event = entry.resume.find((e) => e.type === type);
    return event ? event.data : null;
  }
  public getEventToken(
    author: string,
    title: string,
    data: string,
    type: string,
  ) {
    console.log('Inside getEventToken', { author, title, data, type });
    const dataEvent = this.getEventDataByActionAndTitle(
      author,
      title,
      data,
      type,
    );
    console.log('dataEvent:', dataEvent);
    return dataEvent;
  }

  public findResumePoint(
    author: string,
    eventId: string,
    data: string,
    type?: string,
  ) {
    // Find the entry matching the author
    const entry = this.entries.find((e) => e.author === author);
    if (!entry) {
      console.warn(`No entry found for author: ${author}`);
      return null;
    }

    // Find all matching resume points (could be multiple if same eventId appears in different contexts)
    const matchingResumes = entry.resume
      .map((r, index) => ({ ...r, originalIndex: index }))
      .filter((r) => {
        // Basic match on data field
        const dataMatch = r.data[data] === eventId;

        // Optional type matching if provided
        const typeMatch = type ? r.type === type : true;

        return dataMatch && typeMatch;
      });

    if (matchingResumes.length === 0) {
      console.warn(
        `No resume point found for author ${author} with ${data}=${eventId}` +
          (type ? ` and type=${type}` : ''),
      );
      return null;
    }

    // If multiple matches, we could add logic to select the most relevant one
    // For now, we'll take the first match (you might want to add prioritization logic)
    const selectedResume = matchingResumes[0];

    return {
      author,
      events: entry.resume.slice(selectedResume.originalIndex),
      startIndex: selectedResume.originalIndex,
      matchedResume: selectedResume, // Include the actual matched resume point
      totalMatches: matchingResumes.length, // Useful for debugging
    };
  }

  // Gỡ lỗi
  public debug() {
    console.log('ResumeContext:', JSON.stringify(this.entries, null, 2));
  }
}
