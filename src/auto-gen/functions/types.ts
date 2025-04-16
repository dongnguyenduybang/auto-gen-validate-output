import { TestContext } from "../utils/text-context";

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
    headers: any
    body: any;
  }