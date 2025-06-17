export class WSBuilder {
  private options: any[] = [];
  private currentOption: any = {};
  private currentSteps: any[] = [];
  private currentStep: any = {};
  private currentEvent: { events: any[] } = { events: [] };
  constructor() {
    this.currentOption = { beforeAll: [], beforeEach: [], resume: [] };
    this.currentStep = { step: [] };
    this.currentEvent = { events: [] };
  }

  // Option methods
  addBeforeAll(
    title: string,
    author: string,
    action: string,
    config: { headers?: any; body?: any },
  ) {
    this.currentOption.beforeAll.push({
      title,
      author,
      action,
      ...config,
    });
    return this;
  }

  addBeforeEach(
    title: string,
    author: string,
    action: string,
    config: { headers?: any; body?: any },
  ) {
    this.currentOption.beforeEach.push({
      title,
      author,
      action,
      ...config,
    });
    return this;
  }

  addResume(
    title: string,
    author: string,
    type: string,
    data: string,
  ) {
    this.currentOption.resume.push({
      title,
      author,
      type,
      data,
    });
    return this;
  }

  // Step methods
  startStep(title: string) {
    if (this.currentStep.step.length > 0) {
      this.currentSteps.push(this.currentStep);
    }
    this.currentStep = { title, step: [] };
    return this;
  }

  addStepAction(
    title: string,
    author: string[],
    action: string,
    config: { headers?: any; body?: any; expect?: any },
  ) {
    this.currentStep.step.push({
      title,
      author,
      action,
      ...config,
    });
    return this;
  }

  addStepEvents(
    title: string,
    author: string[],
    action: string,
    eventList: {
      type: any;
      author:string;
      source: any;
      specversion?: any;
      version?: any;
      data: Object;
    }[],
  ) {
    this.currentEvent.events.push({
      title,
      author,
      action,
      eventList,
    });
    return this;
  }

  execute() {
    if (this.currentStep.step.length > 0) {
      this.currentSteps.push(this.currentStep);
    }

    // Push events to currentOption
    if (this.currentEvent.events.length > 0) {
      this.currentOption.events = this.currentEvent.events;
    }

    // Push current option if it has content
    if (
      this.currentOption.beforeAll.length > 0 ||
      this.currentOption.beforeEach.length > 0 ||
      this.currentOption.resume.length > 0 ||
      this.currentSteps.length > 0 ||
      this.currentOption.events?.length > 0
    ) {
      this.currentOption.steps = this.currentSteps;
      this.options.push(this.currentOption);
    }

    return {
      options: this.options,
    };
  }
}
