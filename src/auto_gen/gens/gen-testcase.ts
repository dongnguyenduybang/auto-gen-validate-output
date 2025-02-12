import axios from 'axios';
import { requestAPI } from "../helps/structures/responses";

export async function runTestCases(testcasePayload: any, dtoClass: any) {
  const path = 'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers';
  const headers = {
    'Content-Type': 'application/json',
  };

  for (const testCase of testcasePayload) {
    const { body, expect } = testCase;
    const request = requestAPI('POST', path, body, headers);

    try {
      const response = await axios(request);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
