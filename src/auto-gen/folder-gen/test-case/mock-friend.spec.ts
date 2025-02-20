
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockFriendDTOResponse } from '../../dto-response/mock-friend.response.dto';
    import { validate } from 'class-validator';
    import { validationRulesMockFriend } from '../../validates/mock-friend/validate-mock-friend';
    import { validateLogicData } from '../../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';

  function analyzeErrors(expected: string[], actual: string[]) {
    const missing = expected.filter((error) => !actual.includes(error)); 
    const extra = actual.filter((error) => !expected.includes(error));
    return { missing, extra };
  }

    describe('Testcase for mock-friend', () => {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = [];

        
          it('Test case #1 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #1',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #1',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #2 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #2',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #2',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #3 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #3',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #3',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #4 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #4',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #4',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #5 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payload = {"type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #5',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #5',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #6 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #6',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #6',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #7 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #7',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #7',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #8 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #8',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #8',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #9 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #9',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #9',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #10 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":null,"type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #10',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #10',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #11 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #11',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #11',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #12 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"","type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #12',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #12',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #13 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"","type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #13',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #13',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #14 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"","type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #14',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #14',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #15 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"","type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #15',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 200"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #15',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #16 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #16',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #16',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #17 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"random_string","type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #17',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #17',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #18 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"random_string","type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #18',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #18',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #19 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"random_string","type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #19',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #19',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #20 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":"random_string","type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #20',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 200"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #20',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #21 with expect errors ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":1}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #21',
                  expected: ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #21',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #22 with expect errors ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":1,"type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #22',
                  expected: ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #22',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #23 with expect errors ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":1,"type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #23',
                  expected: ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #23',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #24 with expect errors ["type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":1,"type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #24',
                  expected: ["type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #24',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #25 with expect errors [] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":1,"type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #25',
                  expected: [],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = [];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #25',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #26 with expect errors ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":0}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #26',
                  expected: ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #26',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #27 with expect errors ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":0,"type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #27',
                  expected: ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #27',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #28 with expect errors ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":0,"type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #28',
                  expected: ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #28',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #29 with expect errors ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":0,"type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #29',
                  expected: ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #29',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #30 with expect errors ["quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":0,"type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #30',
                  expected: ["quantity must not be less than 1"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #30',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #31 with expect errors ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":201};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":201}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #31',
                  expected: ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #31',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #32 with expect errors ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":201,"type":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":201,"type":null}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #32',
                  expected: ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #32',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #33 with expect errors ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":201,"type":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":201,"type":""}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #33',
                  expected: ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type should not be empty","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #33',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #34 with expect errors ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"] ', async () => {
            totalTests++;
            const payload = {"quantity":201,"type":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":201,"type":"random_string"}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #34',
                  expected: ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 200","type must be a number conforming to the specified constraints","type must be one of the following values: 0, 1, 2"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #34',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #35 with expect errors ["quantity must not be greater than 200"] ', async () => {
            totalTests++;
            const payload = {"quantity":201,"type":2};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockFriends`, 
                headers: {"Content-Type":"application/json","x-user-id":"01JMC3WY1G8F14F6MCQPCTDP6M","x-session-token":"XFoUbsDWFmvByAcieya6wYuzHQX4UzXGc-NPuiRhS6rGoF3fM7jHTMmJzir3zsaJJ0pR5TKBTXECQ4UMRBsJqA","x-country-code":"VN"},
                data: {"quantity":201,"type":2}
              });
              const dataResponse = plainToInstance(MockFriendDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #35',
                  expected: ["quantity must not be greater than 200"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockFriend, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 200"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #35',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

        afterAll(() => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          const resultContent = `
              === Test Reports for DTO "mock-friend" ===
              Host: ${globalThis.url}              Endpoint: /InternalFaker/MockFriends
              Total Tests: ${totalTests}
              Passed Tests: ${passedTests}
              Failed Tests: ${failedTests.length}

              Failed Test Details:
              ${failedTests
                .map(
                  (failCase) => `
              - ${failCase.name}
                Expected: ${JSON.stringify(failCase.expected)}
                Actual:   ${JSON.stringify(failCase.actual)}
                Missing Errors: ${JSON.stringify(failCase.missing)}
                Extra Errors: ${JSON.stringify(failCase.extra)}
              `
                )
                .join('')}
              `;

               const resultFilePath = path.join(folderPath, 'mock-friend.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                      });
                    });
                