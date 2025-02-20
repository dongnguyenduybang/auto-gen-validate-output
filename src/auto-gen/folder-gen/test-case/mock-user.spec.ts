
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockUserDTOResponse } from '../../dto-response/mock-user.response.dto';
    import { validate } from 'class-validator';
    import { validationRulesMockUser } from '../../validates/mock-user/validate-mock-user';
    import { validateLogicData } from '../../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';

  function analyzeErrors(expected: string[], actual: string[]) {
    const missing = expected.filter((error) => !actual.includes(error)); 
    const extra = actual.filter((error) => !expected.includes(error));
    return { missing, extra };
  }

    describe('Testcase for mock-user', () => {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = [];

        
          it('Test case #1 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #1',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #2 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #2',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #3 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #3',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #4 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #4',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #5 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #5',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
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

          it('Test case #6 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #6',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #7 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #7',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #8 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #8',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #9 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #9',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #10 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #10',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
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

          it('Test case #11 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #11',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #12 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #12',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #13 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #13',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #14 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #14',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #15 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #15',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
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

          it('Test case #16 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #16',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #17 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #17',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #18 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #18',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #19 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #19',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #20 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #20',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
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

          it('Test case #21 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #21',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #22 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #22',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #23 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #23',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #24 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #24',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #25 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"] ', async () => {
            totalTests++;
            const payload = {"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #25',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"];
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

          it('Test case #26 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #26',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #27 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #27',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #28 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #28',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #29 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #29',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #30 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #30',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"];
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

          it('Test case #31 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #31',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #32 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #32',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #33 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #33',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #34 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #34',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
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

          it('Test case #35 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #35',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"];
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

          it('Test case #36 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #36',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #36',
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

          it('Test case #37 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #37',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #37',
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

          it('Test case #38 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #38',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #38',
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

          it('Test case #39 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #39',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #39',
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

          it('Test case #40 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #40',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #40',
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

          it('Test case #41 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #41',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #41',
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

          it('Test case #42 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #42',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #42',
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

          it('Test case #43 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #43',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #43',
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

          it('Test case #44 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #44',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #44',
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

          it('Test case #45 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #45',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #45',
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

          it('Test case #46 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #46',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #46',
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

          it('Test case #47 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #47',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #47',
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

          it('Test case #48 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #48',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #48',
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

          it('Test case #49 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #49',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #49',
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

          it('Test case #50 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #50',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #50',
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

          it('Test case #51 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #51',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #51',
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

          it('Test case #52 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #52',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #52',
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

          it('Test case #53 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #53',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #53',
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

          it('Test case #54 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #54',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #54',
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

          it('Test case #55 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #55',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #55',
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

          it('Test case #56 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #56',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #56',
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

          it('Test case #57 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #57',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #57',
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

          it('Test case #58 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #58',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #58',
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

          it('Test case #59 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #59',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #59',
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

          it('Test case #60 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #60',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #60',
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

          it('Test case #61 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #61',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #61',
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

          it('Test case #62 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #62',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #62',
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

          it('Test case #63 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #63',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #63',
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

          it('Test case #64 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #64',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #64',
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

          it('Test case #65 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #65',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be less than 1"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #65',
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

          it('Test case #66 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #66',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #66',
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

          it('Test case #67 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #67',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #67',
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

          it('Test case #68 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #68',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #68',
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

          it('Test case #69 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #69',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #69',
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

          it('Test case #70 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":null,"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #70',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","prefix should not be null or undefined","prefix should not be empty","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #70',
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

          it('Test case #71 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #71',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #71',
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

          it('Test case #72 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #72',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #72',
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

          it('Test case #73 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #73',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #73',
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

          it('Test case #74 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #74',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #74',
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

          it('Test case #75 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #75',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #75',
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

          it('Test case #76 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #76',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #76',
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

          it('Test case #77 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #77',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #77',
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

          it('Test case #78 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #78',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #78',
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

          it('Test case #79 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #79',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #79',
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

          it('Test case #80 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #80',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #80',
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

          it('Test case #81 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #81',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #81',
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

          it('Test case #82 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #82',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #82',
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

          it('Test case #83 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #83',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #83',
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

          it('Test case #84 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #84',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #84',
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

          it('Test case #85 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #85',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #85',
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

          it('Test case #86 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #86',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #86',
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

          it('Test case #87 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #87',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #87',
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

          it('Test case #88 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #88',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #88',
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

          it('Test case #89 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #89',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #89',
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

          it('Test case #90 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #90',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #90',
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

          it('Test case #91 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #91',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #91',
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

          it('Test case #92 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #92',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #92',
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

          it('Test case #93 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #93',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #93',
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

          it('Test case #94 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #94',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #94',
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

          it('Test case #95 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #95',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #95',
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

          it('Test case #96 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #96',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #96',
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

          it('Test case #97 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #97',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #97',
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

          it('Test case #98 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #98',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #98',
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

          it('Test case #99 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #99',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #99',
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

          it('Test case #100 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #100',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be less than 1"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #100',
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

          it('Test case #101 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #101',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #101',
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

          it('Test case #102 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #102',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #102',
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

          it('Test case #103 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #103',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #103',
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

          it('Test case #104 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #104',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #104',
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

          it('Test case #105 with expect errors ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #105',
                  expected: ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","prefix should not be empty","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #105',
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

          it('Test case #106 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #106',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #106',
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

          it('Test case #107 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #107',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #107',
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

          it('Test case #108 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #108',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #108',
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

          it('Test case #109 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #109',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #109',
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

          it('Test case #110 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #110',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #110',
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

          it('Test case #111 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #111',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #111',
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

          it('Test case #112 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #112',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #112',
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

          it('Test case #113 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #113',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #113',
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

          it('Test case #114 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #114',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #114',
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

          it('Test case #115 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #115',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #115',
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

          it('Test case #116 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #116',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #116',
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

          it('Test case #117 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #117',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #117',
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

          it('Test case #118 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #118',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #118',
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

          it('Test case #119 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #119',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #119',
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

          it('Test case #120 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #120',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #120',
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

          it('Test case #121 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #121',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #121',
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

          it('Test case #122 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #122',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #122',
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

          it('Test case #123 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #123',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #123',
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

          it('Test case #124 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #124',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #124',
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

          it('Test case #125 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #125',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #125',
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

          it('Test case #126 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #126',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #126',
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

          it('Test case #127 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #127',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #127',
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

          it('Test case #128 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #128',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #128',
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

          it('Test case #129 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #129',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #129',
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

          it('Test case #130 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #130',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #130',
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

          it('Test case #131 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #131',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #131',
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

          it('Test case #132 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #132',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #132',
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

          it('Test case #133 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #133',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #133',
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

          it('Test case #134 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #134',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #134',
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

          it('Test case #135 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #135',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #135',
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

          it('Test case #136 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #136',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #136',
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

          it('Test case #137 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #137',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #137',
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

          it('Test case #138 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #138',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #138',
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

          it('Test case #139 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #139',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #139',
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

          it('Test case #140 with expect errors ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":12345,"quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":12345,"quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #140',
                  expected: ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be a string","prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #140',
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

          it('Test case #141 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #141',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #141',
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

          it('Test case #142 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #142',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #142',
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

          it('Test case #143 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #143',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #143',
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

          it('Test case #144 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #144',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #144',
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

          it('Test case #145 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #145',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #145',
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

          it('Test case #146 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #146',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #146',
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

          it('Test case #147 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #147',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #147',
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

          it('Test case #148 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #148',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #148',
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

          it('Test case #149 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #149',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #149',
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

          it('Test case #150 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #150',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #150',
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

          it('Test case #151 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #151',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #151',
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

          it('Test case #152 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #152',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #152',
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

          it('Test case #153 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #153',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #153',
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

          it('Test case #154 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #154',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #154',
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

          it('Test case #155 with expect errors ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #155',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #155',
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

          it('Test case #156 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #156',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #156',
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

          it('Test case #157 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #157',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #157',
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

          it('Test case #158 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #158',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #158',
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

          it('Test case #159 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #159',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #159',
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

          it('Test case #160 with expect errors ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #160',
                  expected: ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #160',
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

          it('Test case #161 with expect errors ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #161',
                  expected: ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #161',
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

          it('Test case #162 with expect errors ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #162',
                  expected: ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #162',
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

          it('Test case #163 with expect errors ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #163',
                  expected: ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #163',
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

          it('Test case #164 with expect errors ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #164',
                  expected: ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #164',
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

          it('Test case #165 with expect errors [] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #165',
                  expected: [],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
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
                  name: 'Test case #165',
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

          it('Test case #166 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #166',
                  expected: ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #166',
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

          it('Test case #167 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #167',
                  expected: ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #167',
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

          it('Test case #168 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #168',
                  expected: ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #168',
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

          it('Test case #169 with expect errors ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #169',
                  expected: ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #169',
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

          it('Test case #170 with expect errors ["quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #170',
                  expected: ["quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
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
                  name: 'Test case #170',
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

          it('Test case #171 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #171',
                  expected: ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #171',
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

          it('Test case #172 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #172',
                  expected: ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #172',
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

          it('Test case #173 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #173',
                  expected: ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #173',
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

          it('Test case #174 with expect errors ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #174',
                  expected: ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #174',
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

          it('Test case #175 with expect errors ["quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"duy12345","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #175',
                  expected: ["quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #175',
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

          it('Test case #176 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #176',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #176',
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

          it('Test case #177 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #177',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #177',
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

          it('Test case #178 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #178',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #178',
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

          it('Test case #179 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #179',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #179',
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

          it('Test case #180 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #180',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #180',
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

          it('Test case #181 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #181',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #181',
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

          it('Test case #182 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":null,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #182',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #182',
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

          it('Test case #183 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":null,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #183',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #183',
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

          it('Test case #184 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":null,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #184',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #184',
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

          it('Test case #185 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":null,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":null,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #185',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #185',
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

          it('Test case #186 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #186',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #186',
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

          it('Test case #187 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #187',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #187',
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

          it('Test case #188 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #188',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #188',
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

          it('Test case #189 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #189',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #189',
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

          it('Test case #190 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #190',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity should not be empty","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #190',
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

          it('Test case #191 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #191',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #191',
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

          it('Test case #192 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #192',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #192',
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

          it('Test case #193 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #193',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #193',
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

          it('Test case #194 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #194',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #194',
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

          it('Test case #195 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":"random_string","badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":"random_string","badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #195',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must be a number conforming to the specified constraints","quantity must not be less than 1","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #195',
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

          it('Test case #196 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #196',
                  expected: ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #196',
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

          it('Test case #197 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #197',
                  expected: ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #197',
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

          it('Test case #198 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #198',
                  expected: ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #198',
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

          it('Test case #199 with expect errors ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #199',
                  expected: ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #199',
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

          it('Test case #200 with expect errors ["prefix must be longer than or equal to 5 characters"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":1,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":1,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #200',
                  expected: ["prefix must be longer than or equal to 5 characters"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #200',
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

          it('Test case #201 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #201',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #201',
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

          it('Test case #202 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #202',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #202',
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

          it('Test case #203 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #203',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #203',
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

          it('Test case #204 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #204',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #204',
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

          it('Test case #205 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":0,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":0,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #205',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be less than 1"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #205',
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

          it('Test case #206 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #206',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #206',
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

          it('Test case #207 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":null};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":null}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #207',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #207',
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

          it('Test case #208 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":""};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":""}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #208',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge should not be empty","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #208',
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

          it('Test case #209 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":"random_string"};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":"random_string"}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #209',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100","badge must be a number conforming to the specified constraints","badge must be one of the following values: 0, 1, 2, 3"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #209',
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

          it('Test case #210 with expect errors ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"prefix":"aaaa","quantity":101,"badge":0};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockUsers`, 
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"aaaa","quantity":101,"badge":0}
              });
              const dataResponse = plainToInstance(MockUserDTOResponse , response.data);
              const validationErrors = await validate(dataResponse);
              if (validationErrors.length > 0) {
                console.error("validation failed:", validationErrors);
                failedTests.push({
                  name: 'Test case #210',
                  expected: ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"],
                  actual: validationErrors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockUser, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["prefix must be longer than or equal to 5 characters","quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #210',
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
              === Test Reports for DTO "mock-user" ===
              Host: ${globalThis.url}              Endpoint: /InternalFaker/MockUsers
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

               const resultFilePath = path.join(folderPath, 'mock-user.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                      });
                    });
                