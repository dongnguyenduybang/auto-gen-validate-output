import { AcceptInvitationResponse } from "../response/accept-invitation.response";
import { CreateChannelResponse } from "../response/create-channel.response";
import { GetChannelResponse } from "../response/get-channel.response";
import { MockUserResponse } from "../response/mock-user";
import { SendDmMessageResponse } from "../response/send-dm-message.response";
import { SendMessageResponse } from "../response/send-message.response";
import { UpdateMessageResponse } from "../response/update-message.response";

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
export const responseClassMap = {
  CreateChannelResponse,
  GetChannelResponse,
  AcceptInvitationResponse,
  SendMessageResponse,
  MockUserResponse,
  SendDmMessageResponse,
  UpdateMessageResponse,
};

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

export type ActionHandler = (dtoName: string) => Promise<void> | void;
