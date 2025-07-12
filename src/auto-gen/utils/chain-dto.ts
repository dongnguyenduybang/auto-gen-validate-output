export class DTOBuilder {
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

  // Step methods
  startStep(title: string) {
    if (this.currentStep.step.length > 0) {
      this.currentSteps.push(this.currentStep);
    }
    this.currentStep = { title, step: [] };
    return this;
  }

  addAction(
    title: string,
    author: string,
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

// export class DTOBuilder {
//   private options: any[] = [];
//   private currentOption: any = {};
//   private currentSteps: any[] = [];
//   private currentStep: { title: string; step: any[] } = { title: '', step: [] };
//   private currentEvent: { events: any[] } = { events: [] };

//   constructor() {
//     this.currentOption = { beforeAll: [], beforeEach: [], resume: [] };
//     this.currentStep = { title: '', step: [] };
//     this.currentEvent = { events: [] };
//   }

//   addBeforeAll(
//     title: string,
//     author: string,
//     action: string,
//     config: { headers?: Record<string, any>; body?: any; expect?: any }
//   ) {
//     this.currentOption.beforeAll.push({
//       title,
//       author,
//       action,
//       ...config,
//     });
//     return this;
//   }

//   async addBeforeAllAsync(
//     title: string,
//     author: string,
//     action: string,
//     config: { headers?: Record<string, any>; body?: Promise<any>; expect?: any }
//   ) {
//     const resolvedConfig = { ...config, body: await config.body }; // Resolve Promise
//     this.currentOption.beforeAll.push({
//       title,
//       author,
//       action,
//       ...resolvedConfig,
//     });
//     return this;
//   }

//   addBeforeEach(
//     title: string,
//     author: string,
//     action: string,
//     config: { headers?: Record<string, any>; body?: any; expect?: any }
//   ) {
//     this.currentOption.beforeEach.push({
//       title,
//       author,
//       action,
//       ...config,
//     });
//     return this;
//   }

//   startStep(title: string) {
//     if (this.currentStep.step.length > 0) {
//       this.currentSteps.push(this.currentStep);
//     }
//     this.currentStep = { title, step: [] };
//     return this;
//   }

//   async addAction(
//     title: string,
//     author: string,
//     action: string,
//     config: { headers?: Record<string, any>; body?: Promise<any>; expect?: any }
//   ) {
//     const resolvedConfig = { ...config, body: await config.body }; // Resolve Promise
//     this.currentStep.step.push({
//       title,
//       author,
//       action,
//       ...resolvedConfig,
//     });
//     return this;
//   }

//   async execute() {
//     if (this.currentStep.step.length > 0) {
//       this.currentSteps.push(this.currentStep);
//     }

//     if (this.currentEvent.events.length > 0) {
//       this.currentOption.events = this.currentEvent.events;
//     }

//     if (
//       this.currentOption.beforeAll.length > 0 ||
//       this.currentOption.beforeEach.length > 0 ||
//       this.currentOption.resume.length > 0 ||
//       this.currentSteps.length > 0 ||
//       this.currentOption.events?.length > 0
//     ) {
//       this.currentOption.steps = this.currentSteps;
//       this.options.push(this.currentOption);
//     }

//     return { options: this.options };
//   }
// }
