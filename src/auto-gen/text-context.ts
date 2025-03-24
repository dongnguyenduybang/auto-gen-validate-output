/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
export class TestContext {
  private stepData: Record<string, Record<string, any>> = {};

  setStepContext(stepName: string, data: Record<string, any>) {
    this.stepData[stepName] = { ...(this.stepData[stepName] || {}), ...data };
  }

  getStepContext(stepName: string): Record<string, any> {
    return this.stepData[stepName] || {};
  }
  debug() {
    console.log("Context:", JSON.stringify(this.stepData, null, 2));
  }
}

export interface StepResult {
  success: boolean;
  stepName?: string;
  error?: any;
  context?: Record<string, any>;
}
