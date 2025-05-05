
import { ACTION, APIPath, HeaderList, METHOD, VAR } from "../../enums";

// types.ts
export interface Step {
    action: string;
    body?: Record<string, any>; 
    headers?: Record<string, any>;
    expect?: any;
  }
  
  
  export interface StepResult {
    type: string | null;
    status: boolean;
    stepName: string;
    error?: string;
    data?: any;
  }

  // test-cases.ts
  export const OwnerCreateChannelSaga = {
    steps: [
      {
        action: ACTION.MOCK_USER,
        body: {
            
            quantity: 2,
            prefix: "TestMockUser",
            badge: 0,
        },
        expect: {}
      },
      {
        action: ACTION.CREATE_CHANNEL,
        headers: HeaderList.Token(),
        expect: {
          
        }
      },
      {
        action: ACTION.UPDATE_CHANNEL_NAME,
        path: APIPath.Channel.UpdateChannelName,
        method: METHOD.PUT,
        body: {
          workspaceId: "0",
          channelId: VAR.channelId,
          name: 'aaaaaaaa'
        },
        headers: HeaderList.Token(),
        expect: {
          
        }
      }
    ]
};