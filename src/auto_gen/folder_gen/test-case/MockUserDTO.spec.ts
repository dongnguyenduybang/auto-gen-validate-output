
        import axios from 'axios';
        import { plainToInstance } from 'class-transformer';
        import { MockUserDTOResponse } from '../../dto_response/mock-user-response.dto';
        import { validate } from 'class-validator';
        import { validateLogicData } from '../../validates/validate-logic';
        import { getValidationFromDTOResponse } from '../../helps/ultil';
        import { failResponse } from '../../helps/structures/responses';
      describe('Testcase', () => {
      
        describe('Testcase POST method', () => {
      
          it('Test case #1', async () => {
           const payload =  {}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #2', async () => {
           const payload =  {"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #3', async () => {
           const payload =  {"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #4', async () => {
           const payload =  {"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #5', async () => {
           const payload =  {"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #6', async () => {
           const payload =  {"quantity":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #7', async () => {
           const payload =  {"quantity":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #8', async () => {
           const payload =  {"quantity":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #9', async () => {
           const payload =  {"quantity":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #10', async () => {
           const payload =  {"quantity":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #11', async () => {
           const payload =  {"quantity":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #12', async () => {
           const payload =  {"quantity":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #13', async () => {
           const payload =  {"quantity":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #14', async () => {
           const payload =  {"quantity":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #15', async () => {
           const payload =  {"quantity":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #16', async () => {
           const payload =  {"quantity":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #17', async () => {
           const payload =  {"quantity":"random_string","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #18', async () => {
           const payload =  {"quantity":"random_string","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #19', async () => {
           const payload =  {"quantity":"random_string","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #20', async () => {
           const payload =  {"quantity":"random_string","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":"random_string","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","quantity must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #21', async () => {
           const payload =  {"quantity":1}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #22', async () => {
           const payload =  {"quantity":1,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #23', async () => {
           const payload =  {"quantity":1,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #24', async () => {
           const payload =  {"quantity":1,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #25', async () => {
           const payload =  {"quantity":1,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"quantity":1,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #26', async () => {
           const payload =  {"prefix":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #27', async () => {
           const payload =  {"prefix":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #28', async () => {
           const payload =  {"prefix":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #29', async () => {
           const payload =  {"prefix":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #30', async () => {
           const payload =  {"prefix":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #31', async () => {
           const payload =  {"prefix":null,"quantity":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #32', async () => {
           const payload =  {"prefix":null,"quantity":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #33', async () => {
           const payload =  {"prefix":null,"quantity":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #34', async () => {
           const payload =  {"prefix":null,"quantity":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #35', async () => {
           const payload =  {"prefix":null,"quantity":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #36', async () => {
           const payload =  {"prefix":null,"quantity":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #37', async () => {
           const payload =  {"prefix":null,"quantity":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #38', async () => {
           const payload =  {"prefix":null,"quantity":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #39', async () => {
           const payload =  {"prefix":null,"quantity":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #40', async () => {
           const payload =  {"prefix":null,"quantity":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #41', async () => {
           const payload =  {"prefix":null,"quantity":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #42', async () => {
           const payload =  {"prefix":null,"quantity":"random_string","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #43', async () => {
           const payload =  {"prefix":null,"quantity":"random_string","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #44', async () => {
           const payload =  {"prefix":null,"quantity":"random_string","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #45', async () => {
           const payload =  {"prefix":null,"quantity":"random_string","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":"random_string","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","quantity must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #46', async () => {
           const payload =  {"prefix":null,"quantity":1}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #47', async () => {
           const payload =  {"prefix":null,"quantity":1,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #48', async () => {
           const payload =  {"prefix":null,"quantity":1,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #49', async () => {
           const payload =  {"prefix":null,"quantity":1,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #50', async () => {
           const payload =  {"prefix":null,"quantity":1,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":null,"quantity":1,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #51', async () => {
           const payload =  {"prefix":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #52', async () => {
           const payload =  {"prefix":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #53', async () => {
           const payload =  {"prefix":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #54', async () => {
           const payload =  {"prefix":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #55', async () => {
           const payload =  {"prefix":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #56', async () => {
           const payload =  {"prefix":"","quantity":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #57', async () => {
           const payload =  {"prefix":"","quantity":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #58', async () => {
           const payload =  {"prefix":"","quantity":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #59', async () => {
           const payload =  {"prefix":"","quantity":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #60', async () => {
           const payload =  {"prefix":"","quantity":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #61', async () => {
           const payload =  {"prefix":"","quantity":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #62', async () => {
           const payload =  {"prefix":"","quantity":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #63', async () => {
           const payload =  {"prefix":"","quantity":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #64', async () => {
           const payload =  {"prefix":"","quantity":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #65', async () => {
           const payload =  {"prefix":"","quantity":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #66', async () => {
           const payload =  {"prefix":"","quantity":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #67', async () => {
           const payload =  {"prefix":"","quantity":"random_string","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #68', async () => {
           const payload =  {"prefix":"","quantity":"random_string","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #69', async () => {
           const payload =  {"prefix":"","quantity":"random_string","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #70', async () => {
           const payload =  {"prefix":"","quantity":"random_string","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":"random_string","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","quantity must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #71', async () => {
           const payload =  {"prefix":"","quantity":1}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #72', async () => {
           const payload =  {"prefix":"","quantity":1,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #73', async () => {
           const payload =  {"prefix":"","quantity":1,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #74', async () => {
           const payload =  {"prefix":"","quantity":1,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #75', async () => {
           const payload =  {"prefix":"","quantity":1,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"","quantity":1,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #76', async () => {
           const payload =  {"prefix":123456789}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #77', async () => {
           const payload =  {"prefix":123456789,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #78', async () => {
           const payload =  {"prefix":123456789,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #79', async () => {
           const payload =  {"prefix":123456789,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #80', async () => {
           const payload =  {"prefix":123456789,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #81', async () => {
           const payload =  {"prefix":123456789,"quantity":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #82', async () => {
           const payload =  {"prefix":123456789,"quantity":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #83', async () => {
           const payload =  {"prefix":123456789,"quantity":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #84', async () => {
           const payload =  {"prefix":123456789,"quantity":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #85', async () => {
           const payload =  {"prefix":123456789,"quantity":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #86', async () => {
           const payload =  {"prefix":123456789,"quantity":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #87', async () => {
           const payload =  {"prefix":123456789,"quantity":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #88', async () => {
           const payload =  {"prefix":123456789,"quantity":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #89', async () => {
           const payload =  {"prefix":123456789,"quantity":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #90', async () => {
           const payload =  {"prefix":123456789,"quantity":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #91', async () => {
           const payload =  {"prefix":123456789,"quantity":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #92', async () => {
           const payload =  {"prefix":123456789,"quantity":"random_string","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #93', async () => {
           const payload =  {"prefix":123456789,"quantity":"random_string","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #94', async () => {
           const payload =  {"prefix":123456789,"quantity":"random_string","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #95', async () => {
           const payload =  {"prefix":123456789,"quantity":"random_string","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":"random_string","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","quantity must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #96', async () => {
           const payload =  {"prefix":123456789,"quantity":1}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #97', async () => {
           const payload =  {"prefix":123456789,"quantity":1,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #98', async () => {
           const payload =  {"prefix":123456789,"quantity":1,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #99', async () => {
           const payload =  {"prefix":123456789,"quantity":1,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #100', async () => {
           const payload =  {"prefix":123456789,"quantity":1,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":123456789,"quantity":1,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["prefix must be a string"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #101', async () => {
           const payload =  {"prefix":"duy12345"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be undefined","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #102', async () => {
           const payload =  {"prefix":"duy12345","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be undefined","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #103', async () => {
           const payload =  {"prefix":"duy12345","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be undefined","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #104', async () => {
           const payload =  {"prefix":"duy12345","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be undefined","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #105', async () => {
           const payload =  {"prefix":"duy12345","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #106', async () => {
           const payload =  {"prefix":"duy12345","quantity":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be null","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #107', async () => {
           const payload =  {"prefix":"duy12345","quantity":null,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be null","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #108', async () => {
           const payload =  {"prefix":"duy12345","quantity":null,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be null","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #109', async () => {
           const payload =  {"prefix":"duy12345","quantity":null,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be null","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #110', async () => {
           const payload =  {"prefix":"duy12345","quantity":null,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":null,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #111', async () => {
           const payload =  {"prefix":"duy12345","quantity":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be empty","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #112', async () => {
           const payload =  {"prefix":"duy12345","quantity":"","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be empty","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #113', async () => {
           const payload =  {"prefix":"duy12345","quantity":"","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be empty","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #114', async () => {
           const payload =  {"prefix":"duy12345","quantity":"","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be empty","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #115', async () => {
           const payload =  {"prefix":"duy12345","quantity":"","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #116', async () => {
           const payload =  {"prefix":"duy12345","quantity":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #117', async () => {
           const payload =  {"prefix":"duy12345","quantity":"random_string","badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #118', async () => {
           const payload =  {"prefix":"duy12345","quantity":"random_string","badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity must be a number conforming to the specified constraints","badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #119', async () => {
           const payload =  {"prefix":"duy12345","quantity":"random_string","badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity must be a number conforming to the specified constraints","badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #120', async () => {
           const payload =  {"prefix":"duy12345","quantity":"random_string","badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":"random_string","badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["quantity must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #121', async () => {
           const payload =  {"prefix":"duy12345","quantity":1}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["badge should not be undefined"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #122', async () => {
           const payload =  {"prefix":"duy12345","quantity":1,"badge":null}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":null}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["badge should not be null"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #123', async () => {
           const payload =  {"prefix":"duy12345","quantity":1,"badge":""}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":""}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["badge should not be empty"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #124', async () => {
           const payload =  {"prefix":"duy12345","quantity":1,"badge":"random_string"}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":"random_string"}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = ["badge must be a number conforming to the specified constraints"]
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });

          it('Test case #125', async () => {
           const payload =  {"prefix":"duy12345","quantity":1,"badge":0}
            try {
           
              const response = await axios({
                method: 'post',
                url:'https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers',
                headers: {"Content-Type":"application/json"},
                data: {"prefix":"duy12345","quantity":1,"badge":0}
              });
              const mockUserResponse = plainToInstance(MockUserDTOResponse, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {

                  const mockUserValidationRules = getValidationFromDTOResponse(MockUserDTOResponse);
                  const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload)
                  expect(result.isValid).toBe(true)
              }
            } catch (error) {

              const expectedError = []
              expect(error.response.data).toEqual(failResponse(expectedError))
            }
          });
        });
      });
    