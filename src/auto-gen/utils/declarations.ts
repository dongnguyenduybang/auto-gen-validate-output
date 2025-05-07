import { AcceptInvitationResponse } from "../response/accept-invitation.response";
import { CreateChannelResponse } from "../response/create-channel.response";
import { GetChannelResponse } from "../response/get-channel.response";
import { MockUserResponse } from "../response/mock-user";
import { SendDmMessageResponse } from "../response/send-dm-message.response";
import { SendMessageResponse } from "../response/send-message.response";
import { UpdateMessageResponse } from "../response/update-message.response";
import { TestContext } from "./text-context";

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}
export interface Step {
  action: string;
  method?: string;
  path?: string;
  body?: any;
  headers?: any;
  expect?: any;
}

export interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: string;
}

export interface IContext {
  getValue(path: string | string[]): any;
  setValue(key: string, value: any): void;
  mergeData(newData: Record<string, any>): void;
  debug(): void;
}

export type ExtractConfig = {
  [key: string]: {
    path: string[];
    fields: string[];
  };
};

export interface ApiStep {
  action: string;
  method?: string;
  path?: string;
  body?: any;
  header?: any;
  expect?: any;
}

export interface ApiConfig {
  defaultPath: string;
  defaultMethod?: string;
  requiredHeaders?: {
    [headerName: string]: {
      source: string;
      errorMessage: string;
    };
  };
  payloadMapper?: (body: any) => any;
  context?: TestContext;
}

export interface ApiResponse {
  ok: boolean;
  data?: any;
  error?: any;
}

export interface ApiFunctionParams {
  method?: string;
  path?: string;
  headers: any;
  body: any;
}


export type ActionHandler = (dtoName: string) => Promise<void> | void;
export type ApiRegistry = Record<string, ApiConfig>;